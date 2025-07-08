import { motion } from 'framer-motion';

const features = [
  {
    icon: "👁️",
    title: "Eye-Controlled Cursor",
    desc: "Move your mouse by looking — intuitive, touch-free.",
    color: "from-indigo-500 to-cyan-400"
  },
  {
    icon: "🎙️",
    title: "Voice Commands",
    desc: "Say 'Cursor on/off' to toggle control instantly.",
    color: "from-pink-500 to-purple-500"
  },
  {
    icon: "🧠",
    title: "Built for Accessibility",
    desc: "Designed for everyone, especially those with special needs.",
    color: "from-green-400 to-lime-400"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
        >
          Why OcculoCommand?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className={`p-8 rounded-3xl shadow-2xl bg-gradient-to-br ${f.color} relative overflow-hidden`}
            >
              <div className="text-5xl mb-4 drop-shadow">{f.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-white/90">{f.desc}</p>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
