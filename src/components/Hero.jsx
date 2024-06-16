import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import profilePic from "../assets/hero-img.png";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center sm:ml-32  lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-6xl items-center font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Rohit Raj
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            {/* <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Coder..
            </motion.span> */}
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-l mt-1 tracking-tight text-transparent"
            >
              Eat, Sleep, Code...Repeat
            </motion.span>
            <motion.div
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="mt-8 flex items-center justify-center"
            >
              <a href="/resume.pdf" download="resume.pdf">
                <button className="w-40 h-12 bg-gradient-to-r from-pink-500 via-slate-700 to-purple-700 text-white text-2xl font-semibold rounded-lg">
                  Resume
                </button>
              </a>
            </motion.div>
            {/* <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p> */}
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Rohit Raj"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
