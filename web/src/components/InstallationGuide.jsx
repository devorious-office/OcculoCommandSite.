import { motion } from "framer-motion";

export default function InstallationGuide() {
  return (
    <section id="installation" className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-pink-400 mb-10 text-center drop-shadow"
      >
        Installation
      </motion.h2>
      <ol className="max-w-2xl mx-auto space-y-6 text-white/90 text-lg list-decimal pl-8">
        <li>
          Download <a href="https://github.com/Harsahibjit-Singh/OcculoCommandSite/releases/download/v1.0.0/OcculoCommand-Setup.exe" target="_blank" rel="noopener noreferrer" className="font-bold text-cyan-400">occulocommand-setup.exe</a> from the official site.
        </li>
        <li>
          Double-click the installer to begin.
        </li>
        <li>
          The installer will guide you through:
          <ul className="list-disc pl-8 mt-2 text-white/70 text-base">
            <li>Accepting the license agreement</li>
            <li>Choosing the installation path</li>
            <li>Reviewing important points before installation</li>
            <li>Completing installation and launching OcculoCommand</li>
          </ul>
        </li>
        <li>
          Launch OcculoCommand from the Start Menu or system tray.
        </li>
      </ol>
    </section>
  );
}
