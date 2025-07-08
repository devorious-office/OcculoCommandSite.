import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "Is my data stored anywhere?",
    a: "No. OcculoCommand runs locally and stores nothing online."
  },
  // Add more FAQs
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-4 rounded-xl bg-gray-800 hover:bg-cyan-900 transition text-white font-semibold flex justify-between items-center"
              >
                <span>{faq.q}</span>
                <span className="ml-4">{open === i ? "−" : "+"}</span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden px-6 py-2 text-cyan-300 bg-gray-900/80 rounded-b-xl"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
