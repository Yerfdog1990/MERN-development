const nodemailer = require("nodemailer");
const config = require("../config");
const logger = require("../utils/logger");

let transporterPromise = null;

/**
 * Lazily create the transporter:
 * - production (or any env with SMTP_HOST set): real SMTP from env vars
 * - development without SMTP config: Ethereal fake SMTP — emails are
 *   captured, never delivered, and a preview URL is logged instead.
 */
function getTransporter() {
    if (transporterPromise) return transporterPromise;

    if (config.email.host) {
        transporterPromise = Promise.resolve(
            nodemailer.createTransport({
                host: config.email.host,
                port: config.email.port,
                secure: config.email.port === 465,
                auth: { user: config.email.user, pass: config.email.pass },
            })
        );
    } else {
        transporterPromise = nodemailer.createTestAccount().then((account) =>
            nodemailer.createTransport({
                host: "smtp.ethereal.email",
                port: 587,
                auth: { user: account.user, pass: account.pass },
            })
        );
    }
    return transporterPromise;
}

async function sendEmail({ to, subject, html, text }) {
    const transporter = await getTransporter();
    const info = await transporter.sendMail({
        from: config.email.from,
        to,
        subject,
        html,
        text,
    });

    logger.info("Email sent", { to, subject, messageId: info.messageId });
    if (!config.email.host) {
        logger.info("Ethereal preview URL", { url: nodemailer.getTestMessageUrl(info) });
    }
    return info;
}

function bookingConfirmationHTML({ booking, tour }) {
    return `
    <div style="max-width:600px;margin:0 auto;font-family:Arial,sans-serif">
      <div style="background:#1d4ed8;color:#fff;padding:20px;text-align:center">
        <h1 style="margin:0">Booking Confirmed!</h1>
      </div>
      <div style="padding:20px">
        <p>Hi ${booking.customerName},</p>
        <p>Your booking for <strong>${tour.name}</strong> is confirmed.</p>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:6px 0;color:#666">Destination</td><td>${tour.destination}</td></tr>
          <tr><td style="padding:6px 0;color:#666">Departure</td><td>${booking.startDate}</td></tr>
          <tr><td style="padding:6px 0;color:#666">Duration</td><td>${tour.durationDays} days</td></tr>
          <tr><td style="padding:6px 0;color:#666">Travellers</td><td>${booking.participants}</td></tr>
          <tr><td style="padding:6px 0;color:#666">Total</td><td><strong>${booking.totalPrice} ${booking.currency}</strong></td></tr>
          <tr><td style="padding:6px 0;color:#666">Booking ref</td><td>${booking.id}</td></tr>
        </table>
        <p>We look forward to travelling with you!</p>
      </div>
      <div style="color:#666;font-size:12px;padding:20px;text-align:center">
        <p>If you didn't make this booking, please contact us.</p>
      </div>
    </div>`;
}

/**
 * Fail-soft: a booking must never fail because SMTP is down.
 * Call without await — errors are logged, not thrown.
 */
function sendBookingConfirmation({ booking, tour }) {
    sendEmail({
        to: booking.customerEmail,
        subject: `Booking confirmed: ${tour.name} — ${booking.startDate}`,
        text: `Hi ${booking.customerName}, your booking for ${tour.name} (${booking.startDate}, ${booking.participants} traveller(s), ${booking.totalPrice} ${booking.currency}) is confirmed. Ref: ${booking.id}`,
        html: bookingConfirmationHTML({ booking, tour }),
    }).catch((err) => {
        logger.warn("Booking confirmation email failed (booking still created)", {
            bookingId: booking.id,
            error: err.message,
        });
    });
}

module.exports = { sendEmail, sendBookingConfirmation };
