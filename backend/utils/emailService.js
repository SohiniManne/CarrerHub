const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,        // e.g., smtp.gmail.com
  port: process.env.EMAIL_PORT || 587,
  secure: false,                       // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Send an email
 * @param {string} to 
 * @param {string} subject 
 * @param {string} text 
 */
const sendEmail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: `"Internship Tracker" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
    });
    console.log(`Email sent to ${to}`);
  } catch (err) {
    console.error('Error sending email:', err.message);
  }
};

module.exports = sendEmail;
