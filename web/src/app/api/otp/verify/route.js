import { dbConnect } from "@/lib/mongoose";
import EmailOTP from "@/models/EmailOTP";

export async function POST(req) {
  await dbConnect();
  const { email, otp } = await req.json();
  if (!email || !otp) return Response.json({ error: "Email and OTP required" }, { status: 400 });

  const record = await EmailOTP.findOne({ email });
  if (!record) return Response.json({ error: "No OTP found for this email" }, { status: 400 });
  if (record.verified) return Response.json({ error: "Already verified" }, { status: 400 });
  if (record.otp !== otp) return Response.json({ error: "Invalid OTP" }, { status: 400 });
  if (record.expiresAt < new Date()) return Response.json({ error: "OTP expired" }, { status: 400 });

  record.verified = true;
  await record.save();

  return Response.json({ success: true });
}
