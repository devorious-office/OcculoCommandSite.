import { motion } from 'framer-motion';

export default function DownloadSection() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-indigo-900 via-gray-900 to-black overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Try It Out?</h2>
        <p className="text-lg text-gray-300 mb-8">
          Install OcculoCommand today and unlock a more inclusive way to use technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="/downloads/occulocommand-setup.exe" className="px-10 py-4 rounded-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold shadow-lg transition">
            Download for Windows
          </a>
          <a href="#documentation" className="px-10 py-4 rounded-full border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black font-bold transition">
            Documentation
          </a>
        </div>
      </motion.div>
      {/* Animated background accent */}
      <motion.div
        className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6] }}
        transition={{ repeat: Infinity, duration: 8, repeatType: 'mirror' }}
      />
    </section>
  );
}
