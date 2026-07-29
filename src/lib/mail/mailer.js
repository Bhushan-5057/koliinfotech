import nodemailer from "nodemailer";
import { buildAdminEmailHtml, buildThankYouEmailHtml } from "./templates";

function getMailConfig() {
  const host = String(process.env.CONTACT_EMAIL_HOST || "").trim();
  const port = Number(String(process.env.CONTACT_EMAIL_PORT || "587").trim());
  const user = String(process.env.CONTACT_EMAIL_USER || "").trim();
  // Strip accidental wrapping quotes from .env values
  const pass = String(process.env.CONTACT_EMAIL_PASSWORD || "")
    .trim()
    .replace(/^['"]|['"]$/g, "");
  // Owner inbox (primary). Falls back to the authenticated mailbox.
  const to =
    String(process.env.CONTACT_EMAIL_TO || "").trim() || user;
  const cc = String(process.env.CONTACT_EMAIL_CC || "").trim();
  const tlsServername =
    String(process.env.CONTACT_EMAIL_TLS_SERVERNAME || "").trim() || undefined;

  if (!host || !user || !pass) {
    const missing = [
      !host && "CONTACT_EMAIL_HOST",
      !user && "CONTACT_EMAIL_USER",
      !pass && "CONTACT_EMAIL_PASSWORD",
    ].filter(Boolean);
    throw new Error(`Missing mail configuration: ${missing.join(", ")}`);
  }

  return { host, port, user, pass, to, cc, tlsServername };
}

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  const { host, port, user, pass, tlsServername } = getMailConfig();

  transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    requireTLS: port === 587,
    tls: {
      // Shared hosts often present a cert for the cluster hostname (e.g. web-hosting.com)
      rejectUnauthorized: false,
      ...(tlsServername ? { servername: tlsServername } : {}),
    },
    connectionTimeout: 20000,
    greetingTimeout: 20000,
    socketTimeout: 30000,
  });

  return transporter;
}

function buildTemplateVars({ fullName, email, phone, description, service }) {
  return {
    yourNameData: fullName,
    ContactEmail: email,
    phoneData: phone,
    descriptionData: service
      ? `Service interest: ${service}\n\n${description}`
      : description,
    currentYear: String(new Date().getFullYear()),
  };
}

/**
 * Send admin notification + thank-you email for a contact form submission.
 * Sends sequentially so a thank-you failure is visible and actionable.
 */
export async function sendContactEmails({
  fullName,
  email,
  phone,
  description,
  service,
}) {
  const { user, to, cc } = getMailConfig();
  const mailer = getTransporter();
  const templateVars = buildTemplateVars({
    fullName,
    email,
    phone,
    description,
    service,
  });

  const adminHtml = buildAdminEmailHtml(templateVars);
  const thankYouHtml = buildThankYouEmailHtml(templateVars);

  // 1) Notify owner inbox (e.g. ajay@) + optional CC (e.g. contact@)
  const adminInfo = await mailer.sendMail({
    from: `"KOLI Infotech Website" <${user}>`,
    to,
    ...(cc ? { cc } : {}),
    replyTo: email,
    subject: `New inquiry from ${fullName} — KOLI Infotech`,
    html: adminHtml,
    text: `New inquiry from ${fullName}\nEmail: ${email}\nPhone: ${phone}\n\n${templateVars.descriptionData}`,
    headers: {
      "X-KOLI-Mail-Type": "contact-admin",
    },
  });

  // 2) Thank-you to the visitor (From = authenticated webmail: contact@)
  const thankYouInfo = await mailer.sendMail({
    from: `"KOLI Infotech" <${user}>`,
    to: email,
    replyTo: user,
    subject: "Thank You for Contacting Us | KOLI Infotech",
    html: thankYouHtml,
    text: `Dear ${fullName},\n\nThank you for reaching out through our website. Your message has been successfully received and our team is currently reviewing your request.\n\nBest regards,\nKOLI Infotech Team\n${user}`,
    headers: {
      "X-KOLI-Mail-Type": "contact-thankyou",
    },
  });

  console.info("[mailer] contact emails accepted", {
    adminTo: to,
    adminCc: cc || null,
    adminMessageId: adminInfo.messageId,
    adminAccepted: adminInfo.accepted,
    adminRejected: adminInfo.rejected,
    thankYouMessageId: thankYouInfo.messageId,
    thankYouAccepted: thankYouInfo.accepted,
    thankYouRejected: thankYouInfo.rejected,
    thankYouTo: email,
    thankYouFrom: user,
  });

  if (
    Array.isArray(thankYouInfo.rejected) &&
    thankYouInfo.rejected.length > 0
  ) {
    throw new Error(
      `Thank-you email was rejected by SMTP for: ${thankYouInfo.rejected.join(", ")}`
    );
  }

  return {
    success: true,
    adminMessageId: adminInfo.messageId || null,
    thankYouMessageId: thankYouInfo.messageId || null,
  };
}

export async function verifyMailTransport() {
  const mailer = getTransporter();
  await mailer.verify();
  return true;
}
