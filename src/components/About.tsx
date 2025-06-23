
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 neon-text">
            About Me
          </h2>
          <div className="cyber-card p-8 md:p-12 rounded-xl">
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
              Hi, I'm{" "}
              <span className="text-cyan-400 font-semibold">Ravikumar</span> — a Front-End Developer who finds purpose in crafting smooth, visually compelling, and interactive web experiences.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
              My journey started with curiosity about how websites work, and today, I use modern tools like{" "}
              <span className="text-purple-400 font-semibold">React and Next.js</span> to bring ideas to life on the web.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
              As a graduate in{" "}
              <span className="text-pink-400 font-semibold">IT from Sri Shakthi Institute of Engineering and Technology</span>, I've built a solid foundation in tech and design.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              I'm driven by{" "}
              <span className="text-cyan-400 font-semibold">creativity</span>,{" "}
              <span className="text-purple-400 font-semibold">collaboration</span>, and a love for{" "}
              <span className="text-pink-400 font-semibold">continuous learning</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
