import { motion } from 'framer-motion';

export default function ComingSoonSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-pink-400 mb-10 text-center drop-shadow"
      >
        Coming Soon
      </motion.h2>

      <ul className="max-w-xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-pink-400/20 p-8 text-white/90 list-disc  space-y-3">
        <li>MacOS, Linux support</li>
        <li>Web version</li>
        <li>Custom command training</li>
        <li>User interface enhancements</li>
      </ul>
    </section>
  );
}
