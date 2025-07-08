import { motion } from 'framer-motion';

const team = [
  {
    name: "Harsahibjit Singh",
    role: "Co-Founder, Developer",
    img: "/team/harsahibjit.jpg",
    github: "https://github.com/Harsahibjit-Singh",
    linkedin: "https://www.linkedin.com/in/harsahibjit-singh"
  },
  {
    name: "Likhil N Maiya",
    role: "Co-Founder, Developer",
    img: "/team/likhil.png",
    github: "https://github.com/lickhill",
    linkedin: "https://linkedin.com/in/likhilnmaiya"
  }
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Meet the Creators</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-xl p-8 flex flex-col items-center"
            >
              <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full object-cover border-4 border-cyan-500 mb-4 shadow-lg" />
              <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
              <p className="text-cyan-400 mb-2">{member.role}</p>
              <div className="flex gap-4">
                <a href={member.github} target="_blank" rel="noopener" className="text-white hover:text-cyan-400 text-xl">GitHub</a>
                <a href={member.linkedin} target="_blank" rel="noopener" className="text-white hover:text-cyan-400 text-xl">LinkedIn</a>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-gray-400 italic">
          Made by Harsahibjit Singh and Likhil N Maiya as second-year students at Chandigarh University, May 2025.
        </p>
      </div>
    </section>
  );
}
