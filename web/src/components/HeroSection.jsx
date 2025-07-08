import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';

const textParts = [
  "Control your PC with your ",
  "eyes\u00A0and\u00A0voice",
  "."
];

export default function HeroSection3() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({ opacity: 1, x: 0, transition: { delay: i * 0.1 } }));
  }, [controls]);

  const totalChars = textParts.join('').length;

  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 relative overflow-hidden">
      {/* Darkened background logo */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-1/2 left-1/2 w-full max-w-2xl h-full max-h-2xl bg-[url('/logo.png')] bg-center bg-no-repeat bg-contain transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
      </div>
      
      <div className="max-w-4xl text-center relative z-10">
        {/* Main logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 relative">
            <Image 
              src="/logo.png" 
              alt="App Logo"
              layout="fill"
              objectFit="contain"
              className="filter drop-shadow-lg"
              priority
            />
          </div>
        </motion.div>

        <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          {textParts[0].split("").map((char, i) => (
            <motion.span
              key={`part1-${i}`}
              custom={i}
              initial={{ opacity: 0, x: -10 }}
              animate={controls}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            {textParts[1].split("").map((char, i) => (
              <motion.span
                key={`part2-${i}`}
                custom={i + textParts[0].length}
                initial={{ opacity: 0, x: -10 }}
                animate={controls}
                className="inline-block"
              >
                {char === "\u00A0" ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
          
          {textParts[2].split("").map((char, i) => (
            <motion.span
              key={`part3-${i}`}
              custom={i + textParts[0].length + textParts[1].length}
              initial={{ opacity: 0, x: -10 }}
              animate={controls}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}

          <motion.span
            className="inline-block border-r-2 border-white animate-pulse ml-1 h-12 align-middle"
            aria-hidden="true"
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: totalChars * 0.1 + 0.5 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Experience hands-free computing like never before. <br className="md:hidden" />
          Revolutionary accessibility at your fingertips.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: totalChars * 0.1 + 1 }}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
        >
          <a 
            href="/downloads/occulocommand-setup.exe" 
            className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Download Now
          </a>
          <a 
            href="#features" 
            className="px-8 py-4 rounded-full border-2 border-indigo-600 text-indigo-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore Features
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-0"></div>
    </section>
  );
}