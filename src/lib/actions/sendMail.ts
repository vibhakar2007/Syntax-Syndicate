"use server";
import nodemailer from "nodemailer";

const sendMail = async ({
  subject,
  html,
  to,
}: {
  subject: string;
  html: string;
  to?: string;
}) => {
  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_MAIL ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS
  ) {
    console.error("SMTP credentials are not set in environment variables.");
    return false;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: to || process.env.SMTP_MAIL,
    subject,
    html,
  };

  const mail = await transporter.sendMail(mailOptions);
  return !!mail;
};

export default sendMail;
