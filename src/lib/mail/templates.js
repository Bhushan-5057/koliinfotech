/**
 * HTML email templates for contact form.
 * Placeholders: ${yourNameData}, ${ContactEmail}, ${phoneData}, ${descriptionData}, ${currentYear}
 */

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function applyTemplate(html, vars) {
  return html
    .replace(/\$\{yourNameData\}/g, escapeHtml(vars.yourNameData))
    .replace(/\$\{ContactEmail\}/g, escapeHtml(vars.ContactEmail))
    .replace(/\$\{phoneData\}/g, escapeHtml(vars.phoneData))
    .replace(/\$\{descriptionData\}/g, escapeHtml(vars.descriptionData).replace(/\n/g, "<br/>"))
    .replace(/\$\{currentYear\}/g, escapeHtml(vars.currentYear));
}

const USER_THANKYOU_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!--[if mso]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
<title>KOLI Infotech</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
body{margin:0;padding:0;background:#f4f7fb;font-family:'Inter',Arial,sans-serif;}
/* Hide Outlook / Outlook.com image download overlay */
#MessageViewBody img + div,
#MessageViewBody div > img + div,
.ExternalClass img + div,
img + div,
div > img + div{display:none !important;max-height:0 !important;height:0 !important;width:0 !important;overflow:hidden !important;visibility:hidden !important;opacity:0 !important;font-size:0 !important;line-height:0 !important;}
.container{max-width:620px;margin:auto;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.06);}
.header{padding:35px 20px;text-align:center;border-bottom:1px solid #f0f0f0;}
.logo{width:210px;max-width:100%;height:auto;display:block;margin:0 auto;border:0;outline:none;text-decoration:none;}
.hero{padding:30px 40px 10px;text-align:center;}
.hero h1{font-size:24px;color:#1f2937;margin-bottom:10px;}
.hero p{font-size:14px;color:#6b7280;}
.content{padding:10px 40px 35px;font-size:15px;line-height:1.7;color:#374151;}
.content p{margin-bottom:14px;}
.highlight{color:#0F4C81;font-weight:600;}
.support{margin-top:20px;font-size:14px;color:#6b7280;}
.support a{color:#0F4C81;text-decoration:none;font-weight:500;}
.divider{height:1px;background:#e5e7eb;margin:30px 40px;}
.footer{text-align:center;padding:25px 20px 35px;}
.follow{font-size:15px;font-weight:600;color:#111827;margin-bottom:15px;}
.social-icons a{text-decoration:none !important;border:none !important;outline:none !important;}
.social-icons img{width:28px;height:28px;margin:0 8px;border:0;outline:none;display:inline-block;}
.copyright{margin-top:18px;font-size:12px;color:#6b7280;}
@media(max-width:600px){
.container{border-radius:0;}
.hero{padding:25px 20px 10px;}
.content{padding:10px 20px 25px;}
.divider{margin:25px 20px;}
}
</style>
</head>
<body>
<div class="container">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
<tr>
<td align="center" class="header" style="padding:35px 20px;border-bottom:1px solid #f0f0f0;">
<img class="logo" src="https://res.cloudinary.com/dmpknadzu/image/upload/e_trim,f_png,w_420/v1773646164/koli-infotechpng_powy2t.png" alt="KOLI Infotech" width="210" height="82" border="0" style="display:block;margin:0 auto;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;width:210px;height:82px;">
</td>
</tr>
</table>

<div class="hero">
<h1>Thank You for Contacting Us</h1>
<p>We appreciate your interest in KOLI Infotech.</p>
</div>

<div class="content">
<p>Dear <span class="highlight">\${yourNameData}</span>,</p>
<p>Thank you for reaching out through our website. Your message has been successfully received and our team is currently reviewing your request.</p>
<p>We aim to respond as soon as possible and provide the support or information you need.</p>
<p>If you have additional questions, feel free to reply to this email anytime.</p>
<p>Best regards,<br><strong>KOLI Infotech Team</strong></p>
<div class="support">
Need help? Contact us at
<a href="mailto:info@koliinfotech.com">info@koliinfotech.com</a>
</div>
</div>

<div class="divider"></div>

<div class="footer">
<div class="follow">Follow Us</div>
<div class="social-icons">
<a href="https://www.facebook.com/koli.infotech" target="_blank" rel="noopener noreferrer">
<img src="https://res.cloudinary.com/dmpknadzu/image/upload/f_png,w_56/v1773122664/facebook_goq3pa" alt="Facebook" width="28" height="28" style="display:inline-block;border:0;outline:none;">
</a>
<a href="https://twitter.com/Koli_Infotech" target="_blank" rel="noopener noreferrer">
<img src="https://res.cloudinary.com/dmpknadzu/image/upload/f_png,w_56/v1773650814/X_logo_dgghoj" alt="X" width="28" height="28" style="display:inline-block;border:0;outline:none;">
</a>
<a href="https://in.linkedin.com/company/koli-infotech-pvt-ltd" target="_blank" rel="noopener noreferrer">
<img src="https://res.cloudinary.com/dmpknadzu/image/upload/f_png,w_56/v1773122665/linkedin_vqadvj" alt="LinkedIn" width="28" height="28" style="display:inline-block;border:0;outline:none;">
</a>
<a href="https://www.instagram.com/koli_infotech/" target="_blank" rel="noopener noreferrer">
<img src="https://res.cloudinary.com/dmpknadzu/image/upload/f_png,w_56/v1773122665/instagram_gmczco" alt="Instagram" width="28" height="28" style="display:inline-block;border:0;outline:none;">
</a>
</div>
<div class="copyright">&copy; \${currentYear} KOLI Infotech Pvt. Ltd. All Rights Reserved</div>
</div>

</div>
</body>
</html>`;

const ADMIN_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!--[if mso]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
<title>New Contact Form Submission</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
body{margin:0;padding:0;background:#f4f7fb;font-family:'Inter',Arial,sans-serif;}
/* Hide Outlook / Outlook.com image download overlay */
#MessageViewBody img + div,
#MessageViewBody div > img + div,
.ExternalClass img + div,
img + div,
div > img + div{display:none !important;max-height:0 !important;height:0 !important;width:0 !important;overflow:hidden !important;visibility:hidden !important;opacity:0 !important;font-size:0 !important;line-height:0 !important;}
.container{max-width:620px;margin:auto;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.06);}
.header{padding:35px 20px;text-align:center;border-bottom:1px solid #f0f0f0;}
.logo{width:210px;max-width:100%;height:auto;display:block;margin:0 auto;border:0;outline:none;text-decoration:none;}
.hero{padding:30px 40px 10px;text-align:center;}
.hero h1{font-size:24px;color:#1f2937;margin-bottom:10px;}
.hero p{font-size:14px;color:#6b7280;}
.details{padding:20px 40px 35px;}
.detail-item{margin-bottom:18px;}
.label{font-size:13px;color:#6b7280;margin-bottom:4px;}
.value{font-size:15px;color:#111827;font-weight:500;}
.divider{height:1px;background:#e5e7eb;margin:30px 40px;}
.footer{text-align:center;padding:25px 20px 35px;}
.follow{font-size:15px;font-weight:600;color:#111827;margin-bottom:15px;}
.social-icons a{text-decoration:none !important;border:none !important;outline:none !important;}
.social-icons img{width:28px;height:28px;margin:0 8px;border:0;outline:none;display:inline-block;}
.copyright{margin-top:18px;font-size:12px;color:#6b7280;}
@media(max-width:600px){
.container{border-radius:0;}
.hero,.details{padding-left:20px;padding-right:20px;}
.divider{margin:25px 20px;}
}
</style>
</head>
<body>
<div class="container">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
<tr>
<td align="center" class="header" style="padding:35px 20px;border-bottom:1px solid #f0f0f0;">
<img class="logo" src="https://res.cloudinary.com/dmpknadzu/image/upload/e_trim,f_png,w_420/v1773646164/koli-infotechpng_powy2t.png" alt="KOLI Infotech" width="210" height="82" border="0" style="display:block;margin:0 auto;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;width:210px;height:82px;">
</td>
</tr>
</table>

<div class="hero">
<h1>New Contact Form Submission</h1>
<p>A user submitted the contact form on your website.</p>
</div>

<div class="details">
<div class="detail-item">
<div class="label">Name</div>
<div class="value">\${yourNameData}</div>
</div>
<div class="detail-item">
<div class="label">Email</div>
<div class="value">\${ContactEmail}</div>
</div>
<div class="detail-item">
<div class="label">Mobile Number</div>
<div class="value">\${phoneData}</div>
</div>
<div class="detail-item">
<div class="label">Message</div>
<div class="value">\${descriptionData}</div>
</div>
</div>

<div class="divider"></div>

<div class="footer">
<div class="follow">Follow Us</div>
<div class="social-icons">
<a href="https://www.facebook.com/koli.infotech" target="_blank" rel="noopener noreferrer">
<img src="https://res.cloudinary.com/dmpknadzu/image/upload/f_png,w_56/v1773122664/facebook_goq3pa" alt="Facebook" width="28" height="28" style="display:inline-block;border:0;outline:none;">
</a>
<a href="https://twitter.com/Koli_Infotech" target="_blank" rel="noopener noreferrer">
<img src="https://res.cloudinary.com/dmpknadzu/image/upload/f_png,w_56/v1773650814/X_logo_dgghoj" alt="X" width="28" height="28" style="display:inline-block;border:0;outline:none;">
</a>
<a href="https://in.linkedin.com/company/koli-infotech-pvt-ltd" target="_blank" rel="noopener noreferrer">
<img src="https://res.cloudinary.com/dmpknadzu/image/upload/f_png,w_56/v1773122665/linkedin_vqadvj" alt="LinkedIn" width="28" height="28" style="display:inline-block;border:0;outline:none;">
</a>
<a href="https://www.instagram.com/koli_infotech/" target="_blank" rel="noopener noreferrer">
<img src="https://res.cloudinary.com/dmpknadzu/image/upload/f_png,w_56/v1773122665/instagram_gmczco" alt="Instagram" width="28" height="28" style="display:inline-block;border:0;outline:none;">
</a>
</div>
<div class="copyright">&copy; \${currentYear} KOLI Infotech Pvt. Ltd. All Rights Reserved</div>
</div>

</div>
</body>
</html>`;

export function buildAdminEmailHtml(vars) {
  return applyTemplate(ADMIN_EMAIL_TEMPLATE, vars);
}

export function buildThankYouEmailHtml(vars) {
  return applyTemplate(USER_THANKYOU_TEMPLATE, vars);
}
