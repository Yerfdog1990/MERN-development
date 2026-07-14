/**
 * Nodemailer Middleware Demo - Email Sending via SMTP
 * 
 * Nodemailer sends emails using SMTP (Simple Mail Transfer Protocol).
 * It's great for learning and small apps. For production at scale, consider AWS SES.
 * 
 * IMPORTANT: Never use your real Gmail password!
 * Generate a Google App Password instead:
 * 1. Gmail → Manage your Google Account → Security
 * 2. Search "App passwords" → verify your identity
 * 3. Generate a 16-character app password
 * 
 * Install: npm install nodemailer
 */

import express from "express";
import nodemailer from "nodemailer";

const app = express();
app.use(express.json());

// ============================================
// STEP 1: Create a Transporter
// The transporter is like a "delivery guy" that sends emails
// ============================================

// Option 1: Gmail (easiest for development)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com", // Your Gmail address
    pass: "gfbp bpvl mawn izly", // Google App Password (NOT your real password!)
  },
});

// Option 2: Other email providers (Outlook, Yahoo, etc.)
/*
const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com", // Outlook SMTP server
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "youraddress@outlook.com",
    pass: "your-app-password",
  },
});
*/

// Option 3: Custom SMTP server (e.g., your company's email server)
/*
const transporter = nodemailer.createTransport({
  host: "smtp.yourcompany.com",
  port: 465,
  secure: true,
  auth: {
    user: "noreply@yourcompany.com",
    pass: "your-password",
  },
});
*/

// Option 4: Testing with Ethereal Email (fake SMTP for testing)
// No real credentials needed - emails are captured in Ethereal dashboard
/*
nodemailer.createTestAccount().then((testAccount) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
});
*/

// ============================================
// STEP 2: Define Mail Options
// What to send and to whom
// ============================================

const mailOptions = {
  from: "your-email@gmail.com", // Sender address
  to: "recepient-email@gmail.com", // Recipient address (can be comma-separated for multiple)
  subject: "Welcome onboard!", // Subject line
  text: "Hello Yerfdog", // Plain text body
  // html: "<h1>Hello Aryan</h1><p>Welcome to our platform!</p>", // HTML body (optional)
};

// ============================================
// STEP 3: Send the Email
// ============================================

// Route to send a simple text email
app.post("/send-email", async (req, res) => {
  try {
    const info = await transporter.sendMail(mailOptions);
    
    console.log("Mail sent successfully!");
    console.log("Message ID:", info.messageId);
    console.log("Response:", info.response);
    
    res.json({
      message: "Email sent successfully",
      messageId: info.messageId,
      response: info.response,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ 
      error: "Failed to send email",
      details: error.message 
    });
  }
});

// Route to send dynamic email (from request body)
app.post("/send-dynamic-email", async (req, res) => {
  const { to, subject, text, html } = req.body;
  
  const dynamicMailOptions = {
    from: "your-email@gmail.com",
    to: to || "recepient-email@gmail.com",
    subject: subject || "No subject",
    text: text || "No text content",
    html: html || undefined,
  };
  
  try {
    const info = await transporter.sendMail(dynamicMailOptions);
    res.json({
      message: "Dynamic email sent successfully",
      messageId: info.messageId,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to send HTML email with attachments
app.post("/send-rich-email", async (req, res) => {
  const richMailOptions = {
    from: "your-email@gmail.com",
    to: "recepient-email@gmail.com",
    subject: "Rich Email with Attachments",
    html: `
      <h1>Welcome!</h1>
      <p>This is a <strong>rich HTML email</strong>.</p>
      <p>It supports:</p>
      <ul>
        <li>Bold text</li>
        <li><em>Italic text</em></li>
        <li>Links: <a href="https://example.com">Click here</a></li>
        <li>Images: <img src="https://via.placeholder.com/150" alt="Placeholder"></li>
      </ul>
    `,
    // attachments: [
    //   {
    //     filename: "document.pdf",
    //     path: "/path/to/document.pdf",
    //   },
    //   {
    //     filename: "image.png",
    //     path: "/path/to/image.png",
    //   },
    // ],
  };
  
  try {
    const info = await transporter.sendMail(richMailOptions);
    res.json({
      message: "Rich email sent successfully",
      messageId: info.messageId,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to verify transporter configuration
app.get("/verify-transporter", async (req, res) => {
  try {
    await transporter.verify();
    res.json({ message: "Transporter is ready to send emails" });
  } catch (error) {
    res.status(500).json({ 
      error: "Transporter verification failed",
      details: error.message 
    });
  }
});

const PORT = 3004;
app.listen(PORT, () => {
  console.log(`Nodemailer demo server running on http://localhost:${PORT}`);
  console.log("\n⚠️  IMPORTANT SETUP REQUIRED:");
  console.log("1. Replace 'youraddress@gmail.com' with your actual Gmail");
  console.log("2. Generate a Google App Password (NOT your real password)");
  console.log("3. Replace the pass field with your 16-char app password");
  console.log("\nAvailable endpoints:");
  console.log("- POST /send-email - Send simple text email");
  console.log("- POST /send-dynamic-email - Send email with custom content");
  console.log("- POST /send-rich-email - Send HTML email with attachments");
  console.log("- GET /verify-transporter - Verify email configuration");
});
