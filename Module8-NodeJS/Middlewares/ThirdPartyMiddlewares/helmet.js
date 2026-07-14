/**
 * Helmet Middleware Demo
 * 
 * Helmet secures HTTP headers by setting various security-related HTTP headers.
 * It provides protection against XSS, clickjacking, content sniffing, and other attacks.
 * 
 * Install: npm install helmet
 */

import express from "express";
import helmet from "helmet";

const app = express();
app.use(express.json());

// Option 1: Use Helmet with default settings (recommended for most apps)
// This enables all 7 security policies with sensible defaults
app.use(helmet());

// Option 2: Configure individual policies with a custom object
// Uncomment below to use custom configuration instead of defaults
/*
app.use(helmet({
  // Content Security Policy - controls what resources can be loaded
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"], // Only allow resources from same origin
      scriptSrc: ["'self'", "https://trusted.cdn.com"], // Allow scripts from trusted CDN
      styleSrc: ["'self'", "'unsafe-inline'"], // Allow inline styles
    },
  },
  // Cross-Origin Resource Policy - restricts cross-origin resource sharing
  crossOriginResourcePolicy: { policy: "same-origin" },
  // Cross-Origin Opener Policy - controls cross-origin window/tab interactions
  crossOriginOpenerPolicy: { policy: "same-origin" },
  // Cross-Origin Embedder Policy - controls how documents can be embedded
  crossOriginEmbedderPolicy: { policy: "requireCORP" },
  // Referrer Policy - controls how much referrer info is sent
  referrerPolicy: { policy: "strict-origin-when-cross-origin" },
  // X-Content-Type-Options - prevents MIME type sniffing
  xContentTypeOptions: true,
  // X-Download-Options - prevents execution of downloaded files in IE
  xDownloadOptions: true,
  // X-Frame-Options - prevents clickjacking by blocking iframe embedding
  xFrameOptions: { action: "deny" },
  // X-XSS-Protection - enables browser's XSS filter (legacy, mostly superseded by CSP)
  xXssProtection: true,
  // Disable specific policies if needed
  hsts: false, // Example: disable HTTP Strict Transport Security
}));
*/

// Sample route to test the middleware
app.get("/", (req, res) => {
  res.json({
    message: "Helmet is protecting your headers!",
    info: "Check the response headers in browser DevTools to see security headers",
  });
});

app.get("/api/data", (req, res) => {
  res.json({ data: "Secure data endpoint" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Helmet demo server running on http://localhost:${PORT}`);
  console.log("Security headers are now active on all responses");
});
