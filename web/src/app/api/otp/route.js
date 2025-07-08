import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { dbConnect } from '@/lib/mongoose';
import EmailOTP from '@/models/EmailOTP';

export async function POST(req) {
  const { email, otp } = await req.json();
  await dbConnect();

  // Remove any previous OTPs for this email
  await EmailOTP.deleteMany({ email });

  // Save new OTP
  await EmailOTP.create({
    email,
    otp,
    expiresAt: new Date(Date.now() + 10 * 60 * 1000), // 10 min expiry
    verified: false
  });

  // Themed HTML email
  const html = `
    <div style="background:linear-gradient(90deg,#0f2027,#2c5364,#232526);padding:2rem;border-radius:1.5rem;color:#fff;font-family:'Inter',sans-serif;text-align:center;">
      <h1 style="font-size:2rem;font-weight:800;letter-spacing:1px;background:linear-gradient(90deg,#43cea2,#185a9d);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">
        Your OcculoCommand OTP
      </h1>
      <p style="margin:2rem 0;font-size:1.2rem;">Use the code below to verify your email:</p>
      <div style="font-size:2.5rem;font-weight:bold;letter-spacing:0.3em;background:#232526;padding:1rem 2rem;border-radius:1rem;display:inline-block;color:#43cea2;">
        ${otp}
      </div>
      <p style="margin-top:2rem;color:#ccc;">This code is valid for 10 minutes.<br>Need help? Just reply to this email.</p>
      <hr style="margin:2rem 0;border:none;border-top:1px solid #185a9d;">
      <div style="font-size:1rem;color:#8ecae6;">OcculoCommand — Empowering Hands-Free Computing</div>
    </div>
  `;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"OcculoCommand" <${process.env.MAIL_USER}>`,
    to: email,
    subject: 'Your OcculoCommand OTP',
    html,
  });

  return NextResponse.json({ success: true });
}
