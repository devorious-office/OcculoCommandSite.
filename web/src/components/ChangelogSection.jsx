import { motion } from 'framer-motion';

export default function ChangelogSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-cyan-400 mb-10 text-center drop-shadow"
      >
        Changelog
      </motion.h2>
      <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-cyan-400/20 p-8">
        <ul className="text-white/90 space-y-4">
          <li>
            <span className="font-bold text-cyan-400">v1.0.0</span>
            <ul className="ml-6 list-disc text-white/80">
              <li>Initial release</li>
              <li>Eye control enabled</li>
              <li>Voice commands: Cursor on/off, shutdown</li>
              <li>Tray icon with control options</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
