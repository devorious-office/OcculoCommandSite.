'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ConnectSupportForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '', otp: '' });
  const [otpSent, setOtpSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verifyingOtp, setVerifyingOtp] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [showVerified, setShowVerified] = useState(false);

  // Send OTP
  const sendOtp = async () => {
    if (!form.email) {
      alert('Please enter your email first to verify.');
      return;
    }
    setSendingOtp(true);
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    try {
      const res = await fetch('/api/otp', {
        method: 'POST',
        body: JSON.stringify({ email: form.email, otp }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (res.ok) {
        setOtpSent(true);
      } else {
        alert('Failed to send OTP. Please try again.');
      }
    } catch {
      alert('Error sending OTP. Please try again.');
    } finally {
      setSendingOtp(false);
    }
  };

  // Verify OTP only (does NOT submit form)
  const verifyOtp = async e => {
    e.preventDefault();
    setVerifyingOtp(true);
    try {
      const res = await fetch('/api/otp/verify', {
        method: 'POST',
        body: JSON.stringify({ email: form.email, otp: form.otp }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (res.ok) {
        setEmailVerified(true);
        setShowVerified(true);
        setTimeout(() => setShowVerified(false), 1500);
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to verify OTP. Please check your OTP and try again.');
      }
    } catch {
      alert('Error verifying OTP. Please try again.');
    } finally {
      setVerifyingOtp(false);
    }
  };

  // Submit the full form (after email is verified)
  const handleSubmit = async e => {
    e.preventDefault();
    if (!emailVerified) {
      alert('Please verify your email first.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({ ...form }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (res.ok) setSuccess(true);
      else alert('Failed to submit form. Please try again.');
    } catch {
      alert('Error submitting form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 drop-shadow mb-4">
          Connect, Feedback & Support
        </h2>
        <p className="text-lg text-white/80 mb-2">
          Have a question, suggestion, or need help? <br />
          Reach out—our team is here for you. Your feedback powers OcculoCommand’s evolution!
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          <span className="inline-flex items-center px-3 py-1 bg-cyan-400/20 text-cyan-200 rounded-full text-xs font-semibold">Contact</span>
          <span className="inline-flex items-center px-3 py-1 bg-pink-400/20 text-pink-200 rounded-full text-xs font-semibold">Feedback</span>
          <span className="inline-flex items-center px-3 py-1 bg-indigo-400/20 text-indigo-200 rounded-full text-xs font-semibold">Support</span>
        </div>
      </motion.div>
      <div>
        {success ? (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-green-400 font-bold text-xl"
          >
            🎉 Thank you for connecting with us! We’ll get back to you soon.
          </motion.p>
        ) : (
          <motion.form
            onSubmit={emailVerified ? handleSubmit : verifyOtp}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg mx-auto flex flex-col gap-5 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-cyan-400/20 p-8 relative"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="p-3 rounded-lg border border-cyan-400/40 bg-black/60 text-white placeholder:text-white/50 focus:ring-2 focus:ring-cyan-400 outline-none"
              disabled={loading || verifyingOtp || emailVerified}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="p-3 rounded-lg border border-cyan-400/40 bg-black/60 text-white placeholder:text-white/50 focus:ring-2 focus:ring-cyan-400 outline-none"
              disabled={otpSent || emailVerified || loading || verifyingOtp}
            />
            <small className="text-xs text-gray-400 mt-1 mb-3">
              We ask for OTP verification to protect against fake identities and automated attacks (e.g., bots, spam, or impersonation).
            </small>
            {!emailVerified && (
              <>
                {!otpSent && (
                  <button
                    type="button"
                    onClick={sendOtp}
                    disabled={sendingOtp}
                    className={`bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 rounded-lg transition shadow-lg flex justify-center items-center gap-2 ${sendingOtp ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {sendingOtp && (
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                      </svg>
                    )}
                    {sendingOtp ? 'Sending OTP...' : 'Verify Email'}
                  </button>
                )}
{otpSent && (
  <>
    <input
      type="text"
      placeholder="Enter OTP (Check your email)"
      required
      value={form.otp}
      onChange={e => setForm({ ...form, otp: e.target.value })}
      className="p-3 rounded-lg border border-cyan-400/40 bg-black/60 text-white placeholder:text-white/50 focus:ring-2 focus:ring-cyan-400 outline-none"
      disabled={verifyingOtp}
    />
    <small className="text-xs text-gray-400 mt-1 mb-3">
      Please enter the OTP sent to your email to verify your identity.
    </small>
    <button
      type="submit"
      disabled={verifyingOtp}
      className={`bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 rounded-lg transition shadow-lg flex justify-center items-center gap-2 ${verifyingOtp ? 'opacity-70 cursor-not-allowed' : ''}`}
    >
      {verifyingOtp && (
        <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
      )}
      {verifyingOtp ? 'Verifying...' : 'Verify OTP'}
    </button>

    {/* Resend OTP Button */}
    <button
      type="button"
      onClick={() => {
        setOtpSent(false);
        setForm(prev => ({ ...prev, otp: '' }));
      }}
      className="text-sm mt-3 underline text-cyan-400 hover:text-cyan-300 transition"
    >
      Resend OTP / Edit Email
    </button>
  </>
)}

              </>
            )}
            {emailVerified && (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-cyan-500/30 rounded-lg text-cyan-200 font-semibold text-center"
                >
                  ✅ Email verified successfully!
                </motion.div>
                <textarea
                  placeholder="How can we help? Share your thoughts, feedback, or issue…"
                  required
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="p-3 rounded-lg border border-cyan-400/40 bg-black/60 text-white placeholder:text-white/50 focus:ring-2 focus:ring-cyan-400 outline-none min-h-[120px]"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className={`bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 rounded-lg transition shadow-lg flex justify-center items-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {loading && (
                    <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                  )}
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
                <p className="text-xs text-gray-400 text-center mt-2">
                  We reply within 24 hours. Your privacy is always respected.
                </p>
              </>
            )}
          </motion.form>
        )}
      </div>
      {/* Modal for email verified */}
      {showVerified && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
        >
          <div className="bg-gradient-to-br from-cyan-900 via-black to-cyan-400 p-8 rounded-2xl shadow-2xl text-center">
            <div className="text-3xl mb-2 text-cyan-200">✅</div>
            <div className="text-lg text-white font-semibold mb-1">Email verified!</div>
            <div className="text-sm text-cyan-100">Your email has been verified. You can now send your message.</div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
