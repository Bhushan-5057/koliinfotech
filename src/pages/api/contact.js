import { sendContactEmails } from "@/lib/mail/mailer";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,})+$/;
const PHONE_REGEX = /^[0-9]{10}$/;
const NAME_REGEX = /^[a-zA-Z\s]{2,80}$/;

/** Simple in-memory rate limit (per IP) — resets on server restart. */
const rateLimitMap = new Map();
const RATE_WINDOW_MS = 60 * 1000;
const RATE_MAX = 5;

function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length) {
    return forwarded.split(",")[0].trim();
  }
  return req.socket?.remoteAddress || "unknown";
}

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip) || { count: 0, start: now };
  if (now - entry.start > RATE_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, start: now });
    return false;
  }
  entry.count += 1;
  rateLimitMap.set(ip, entry);
  return entry.count > RATE_MAX;
}

function validatePayload(body) {
  const errors = {};
  const fullName = String(body?.fullName || "").trim();
  const email = String(body?.email || "").trim().toLowerCase();
  const phone = String(body?.phone || "").replace(/\D/g, "");
  const description = String(body?.description || "").trim();
  const service = String(body?.service || "").trim();
  const honeypot = String(
    body?.companyUrl || body?.website || body?.botcheck || ""
  ).trim();

  if (honeypot) {
    return { honeypot: true };
  }

  if (!fullName) errors.fullName = "Full name is required.";
  else if (!NAME_REGEX.test(fullName))
    errors.fullName = "Name can only contain letters and spaces.";

  if (!email) errors.email = "Email is required.";
  else if (!EMAIL_REGEX.test(email)) errors.email = "Enter a valid email address.";

  if (!phone) errors.phone = "Phone number is required.";
  else if (!PHONE_REGEX.test(phone))
    errors.phone = "Phone number must be exactly 10 digits.";

  if (!description) errors.description = "Message cannot be empty.";
  else if (description.length < 10)
    errors.description = "Please provide a bit more detail (at least 10 characters).";
  else if (description.length > 5000)
    errors.description = "Message is too long (max 5000 characters).";

  if (Object.keys(errors).length) {
    return { errors };
  }

  return {
    data: {
      fullName,
      email,
      phone,
      description,
      service: service || "",
    },
  };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return res.status(429).json({
      success: false,
      message: "Too many requests. Please wait a minute and try again.",
    });
  }

  const validation = validatePayload(req.body || {});

  // Honeypot triggered — pretend success to bots
  if (validation.honeypot) {
    return res.status(200).json({ success: true, message: "Message sent successfully." });
  }

  if (validation.errors) {
    return res.status(400).json({
      success: false,
      message: "Please fix the highlighted fields.",
      errors: validation.errors,
    });
  }

  try {
    const result = await sendContactEmails(validation.data);
    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
      ...(process.env.NODE_ENV !== "production"
        ? {
            debug: {
              adminMessageId: result.adminMessageId,
              thankYouMessageId: result.thankYouMessageId,
            },
          }
        : {}),
    });
  } catch (err) {
    console.error("[api/contact] Mail send failed:", {
      message: err?.message || String(err),
      code: err?.code,
      command: err?.command,
      response: err?.response,
      responseCode: err?.responseCode,
    });
    return res.status(500).json({
      success: false,
      message:
        "Unable to send your message right now. Please try again or email info@koliinfotech.com",
    });
  }
}
