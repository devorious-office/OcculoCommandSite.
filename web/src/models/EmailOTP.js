import mongoose from 'mongoose';

const EmailOTPSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  otp: { type: String, required: true },
  expiresAt: { type: Date, required: true },
  verified: { type: Boolean, default: false }
});

export default mongoose.models.EmailOTP || mongoose.model('EmailOTP', EmailOTPSchema);
