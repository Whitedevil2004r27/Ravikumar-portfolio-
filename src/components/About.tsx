
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 neon-text">
            About Me
          </h2>
          <div className="cyber-card p-8 rounded-xl">
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
              Hi, I'm Ravikumar — a{" "}
              <span className="text-cyan-400 font-semibold">Front-End Developer</span> who finds purpose in crafting smooth, visually compelling, and interactive web experiences.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
              My journey started with curiosity about how websites work, and today, I use modern tools like{" "}
              <span className="text-pink-400 font-semibold">React and Next.js</span> to bring ideas to life on the web.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
              As a graduate in{" "}
              <span className="text-purple-400 font-semibold">IT from Sri Shakthi Institute of Engineering and Technology</span>, I've built a solid foundation in tech and design.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              I'm driven by{" "}
              <span className="text-cyan-400 font-semibold">creativity, collaboration, and a love for continuous learning</span>.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border-2 border-gradient-to-r from-pink-500 to-cyan-500 opacity-30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 rounded-full border border-purple-500 opacity-20"
            />
            <div className="relative w-80 h-80 bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 rounded-full flex items-center justify-center cyber-card float-animation">
              <div className="w-64 h-64 rounded-full overflow-hidden flex items-center justify-center shadow-lg border-4 border-transparent bg-gradient-to-r from-cyan-400 to-purple-600 p-1">
                <img 
                  src="/images/profile-pic.png" 
                  alt="Ravikumar" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
