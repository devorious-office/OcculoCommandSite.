export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-black via-gray-900 to-black text-gray-200 py-8 text-center">
      <p className="text-sm tracking-wide">
        © {new Date().getFullYear()} <span className="font-semibold text-cyan-400">OcculoCommand</span>. All rights reserved.
      </p>
    </footer>
  );
}
