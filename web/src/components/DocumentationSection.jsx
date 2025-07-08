import { motion } from 'framer-motion';

export default function DocumentationSection() {
  return (
    <section id="documentation" className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-pink-400 mb-10 text-center drop-shadow"
      >
        Getting Started
      </motion.h2>
      <ul className="max-w-xl mx-auto mb-8 space-y-4">
        <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-white/90 text-lg">
            Supported OS: <strong>Windows 10/11</strong>
             {/* or <strong>Linux (Ubuntu 22+)</strong> */}
            </span>
        </li>
        <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-white/90 text-lg">
            Microphone <strong>required</strong>
            </span>
        </li>
        <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-white/90 text-lg">
            Eye-tracking hardware (optional: <strong>Tobii Eye Tracker</strong> or webcam-based detection)
            </span>
        </li>
        </ul>

      <h3 className="text-2xl font-semibold text-cyan-400 mb-4 text-center">Using OcculoCommand</h3>
      <div className="overflow-x-auto">
        <table className="min-w-[320px] max-w-xl mx-auto border border-cyan-400/30 rounded-lg overflow-hidden bg-white/10 backdrop-blur-xl text-white">
          <thead>
            <tr>
              <th className="bg-cyan-400/20 text-cyan-200 py-2 px-4">Command</th>
              <th className="bg-cyan-400/20 text-cyan-200 py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-cyan-400/20 py-2 px-4">Cursor on</td>
              <td className="border border-cyan-400/20 py-2 px-4">Activates eye-tracked cursor movement</td>
            </tr>
            <tr>
              <td className="border border-cyan-400/20 py-2 px-4">Cursor off</td>
              <td className="border border-cyan-400/20 py-2 px-4">Pauses cursor control</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
