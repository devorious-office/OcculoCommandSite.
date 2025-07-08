import { motion } from "framer-motion";

const impacts = [
  "Enhances digital accessibility for individuals with physical disabilities or motor impairments",
  "Reduces dependency on physical devices for navigation",
  "Enables hands-free interaction in sterile, hazardous, or multitasking environments",
  "Promotes inclusive technology in education, healthcare, and public workspaces",
  "Supports remote and offline computing with local speech and vision processing",
  "Contributes to the evolution of natural user interfaces",
  "Facilitates research in Human-Computer Interaction (HCI) and assistive AI",
  "Boosts efficiency and hygiene in professional sectors",
  "Foundation for gaze-controlled smart homes or IoT environments",
  "Fosters innovation in accessibility-first design thinking"
];

export default function ImpactSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-cyan-400 mb-10 text-center drop-shadow"
      >
        Future Impact of OcculoCommand
      </motion.h2>
      <ul className="max-w-2xl mx-auto space-y-4 text-white/90 text-lg">
        {impacts.map((item, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.08, duration: 0.5 }}
            className="flex items-start"
          >
            <span className="inline-block w-3 h-3 mt-2 mr-3 rounded-full bg-cyan-400 shadow-cyan-400/50 shadow-lg"></span>
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
