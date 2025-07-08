import { motion } from 'framer-motion';

const tips = [
  "Cursor not moving? Recalibrate using tray menu.",
  "Voice commands not working? Check mic permissions.",
  "Eye tracking inaccurate? Ensure proper lighting and camera angle."
];

export default function TroubleshootingSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-pink-400 mb-10 text-center drop-shadow"
      >
        Troubleshooting
      </motion.h2>
      <ul className="max-w-2xl mx-auto space-y-6 text-white/90 text-lg">
        {tips.map((tip, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="flex items-start"
          >
            <span className="inline-block w-3 h-3 mt-2 mr-3 rounded-full bg-pink-400 shadow-pink-400/50 shadow-lg"></span>
            <span>{tip}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
