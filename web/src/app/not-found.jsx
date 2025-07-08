// app/not-found.jsx
'use client'; // Required for Framer Motion animations

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-black px-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-9xl font-extrabold text-cyan-400 drop-shadow-lg"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-2xl md:text-3xl text-white/90 mb-8 text-center max-w-xl"
      >
        Oops! The page you are looking for does not exist.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link
          href="/"
          className="px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold shadow-lg transition"
        >
          Go Back Home
        </Link>
      </motion.div>
    </section>
    <Footer />
    </>
  );
}