import { motion } from 'framer-motion';
import TypingHeading from '../components/TypingAnimation/TypingHeading';
import ParticleCursorEffect from '../components/HeroPageCursorEffect/ParticleCursorEffect';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center"
    >
      <ParticleCursorEffect />

      <div className="relative flex flex-col items-start gap-8 pl-12 z-10 w-2/3">
        <TypingHeading />

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-7xl font-bold text-white" // Ensure the text stands out with white color
        >
          Hello, I'm <span className="text-cyan-400">Suraj Kedar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="mt-4 text-xl text-white"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit debitis possimus repudiandae est obcaecati soluta aliquid dignissimos.
        </motion.p>

        <button className="bg-pink-600 hover:bg-pink-700  px-8 py-2 text-white text-xl font-semibold">
          Download CV
        </button>
      </div>
    </section>
  );
};

export default Hero;
