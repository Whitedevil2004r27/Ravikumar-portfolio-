
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="min-h-screen flex items-center py-20 px-6">
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
              I'm a passionate frontend developer from{" "}
              <span className="text-cyan-400 font-semibold">Ulundurpet</span> with a{" "}
              <span className="text-purple-400 font-semibold">B.Tech in IT</span> from Sri Shakthi Institute of Engineering and Technology.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
              I craft immersive user experiences using modern tools like{" "}
              <span className="text-pink-400 font-semibold">React.js, Next.js, and Figma</span>. 
              I love building clean, interactive interfaces that blend usability with creativity.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              My passion lies in creating{" "}
              <span className="text-cyan-400 font-semibold">visually stunning</span> and{" "}
              <span className="text-purple-400 font-semibold">functionally robust</span> web experiences 
              that push the boundaries of what's possible on the web.
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
              <div className="w-64 h-64 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-6xl font-bold text-white shadow-lg">
                RK
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
