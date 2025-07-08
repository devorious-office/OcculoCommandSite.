'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Installation", href: "#installation" },
  { name: "Docs", href: "#documentation" },
  { name: "FAQ", href: "#faq" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black via-gray-900 to-black/80 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-3">
        <a href="/" className="font-extrabold text-2xl text-cyan-400 tracking-tight drop-shadow">OcculoCommand</a>
        <ul className="hidden md:flex gap-8 items-center font-semibold text-white text-base">
          {navLinks.map(link => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-cyan-400 transition">{link.name}</a>
            </li>
          ))}
        </ul>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          <span className="block w-6 h-0.5 bg-cyan-400 mb-1 transition-all" />
          <span className="block w-6 h-0.5 bg-cyan-400 mb-1 transition-all" />
          <span className="block w-6 h-0.5 bg-cyan-400 transition-all" />
        </button>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden flex flex-col gap-6 bg-gradient-to-b from-black via-gray-900 to-black/95 px-8 py-6 text-white font-semibold text-lg shadow-2xl"
          >
            {navLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-2 px-2 rounded hover:bg-cyan-400/10 transition"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
