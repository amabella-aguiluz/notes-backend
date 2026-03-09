import nodemailer from "nodemailer";
import env from "../config/env";


// create transporter using your SMTP settings
export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, // e.g., smtp.gmail.com for Gmail
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});


export const sendEmail = async(mailOptions: {
    from: string,
    to: string,
    subject: string,
    html: string,
}) => {
    const info = await transporter.sendMail(mailOptions);
    return info.response;
}

const frontend = process.env.FRONTEND_URL_DEV;

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetUrl = `${frontend}/reset-password?token=${token}`;
  return await sendEmail({
    from: `"MyApp" <no-reply@myapp.com>`,
    to: email,
    subject: "Reset your password",
    html: `
      <p>Click the link below to reset your password:</p>
      <a href="${resetUrl}">${resetUrl}</a>
      <p>This link expires in 15 minutes.</p>
    `,
  });
};