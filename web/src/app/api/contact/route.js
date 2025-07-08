import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { dbConnect } from '@/lib/mongoose';
import Contact from '@/models/contact';
import EmailOTP from '@/models/EmailOTP';

export async function POST(req) {
  const { name, email, message, otp } = await req.json();
  await dbConnect();

  // Find OTP record
  const otpRecord = await EmailOTP.findOne({ email });
  if (
    !otpRecord ||
    otpRecord.otp !== otp ||
    otpRecord.expiresAt < new Date()
  ) {
    return NextResponse.json({ success: false, error: "Invalid or expired OTP." }, { status: 400 });
  }

  // Mark OTP as used
  await EmailOTP.deleteOne({ email });

  // Store contact/support/feedback message
  await Contact.create({ name, email, message });

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  // Admin notification email
  const adminHtml = `
    <div style="background:linear-gradient(90deg,#0f2027,#2c5364,#232526);padding:2rem;border-radius:1.5rem;color:#fff;font-family:'Inter',sans-serif;">
      <h1 style="font-size:1.7rem;font-weight:800;background:linear-gradient(90deg,#43cea2,#185a9d);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">
        New OcculoCommand Form Submission
      </h1>
      <p style="margin:1.5rem 0;font-size:1.1rem;"><b>Name:</b> ${name}<br><b>Email:</b> ${email}</p>
      <div style="background:#232526;padding:1.2rem 1.5rem;border-radius:1rem;color:#43cea2;font-size:1.1rem;">
        ${message}
      </div>
      <hr style="margin:2rem 0;border:none;border-top:1px solid #185a9d;">
      <div style="font-size:1rem;color:#8ecae6;">OcculoCommand — Unified Contact/Feedback/Support</div>
    </div>
  `;

  // User confirmation email
  const userHtml = `
    <div style="background:linear-gradient(90deg,#0f2027,#2c5364,#232526);padding:2rem;border-radius:1.5rem;color:#fff;font-family:'Inter',sans-serif;text-align:center;">
      <h1 style="font-size:2rem;font-weight:800;background:linear-gradient(90deg,#43cea2,#185a9d);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">
        Thank You for Reaching Out!
      </h1>
      <p style="margin:1.5rem 0;font-size:1.1rem;">
        Hi <b>${name}</b>,<br>
        We’ve received your message and our team will get back to you within 24 hours.<br>
        <span style="color:#43cea2;">Your feedback helps us build a better OcculoCommand for everyone.</span>
      </p>
      <div style="background:#232526;padding:1.2rem 1.5rem;border-radius:1rem;color:#43cea2;font-size:1.1rem;margin-bottom:1rem;">
        <b>Your message:</b><br>${message}
      </div>
      <hr style="margin:2rem 0;border:none;border-top:1px solid #185a9d;">
      <div style="font-size:1rem;color:#8ecae6;">OcculoCommand — Empowering Hands-Free Computing</div>
    </div>
  `;

  // Send admin notification
  await transporter.sendMail({
    from: `"OcculoCommand" <${process.env.MAIL_USER}>`,
    to: 'harsahibjit@gmail.com, likhil@gmail.com',
    subject: 'New OcculoCommand Form Submission',
    html: adminHtml,
  });

  // Send confirmation to user
  await transporter.sendMail({
    from: `"OcculoCommand" <${process.env.MAIL_USER}>`,
    to: email,
    subject: 'We’ve received your message — OcculoCommand',
    html: userHtml,
  });

  return NextResponse.json({ success: true });
}
