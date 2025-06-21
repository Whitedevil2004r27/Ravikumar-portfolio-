
import { motion } from "framer-motion";

const skills = [
  { name: "React.js", level: 95, color: "from-blue-400 to-blue-600" },
  { name: "Next.js", level: 90, color: "from-gray-400 to-gray-600" },
  { name: "JavaScript", level: 92, color: "from-yellow-400 to-yellow-600" },
  { name: "TypeScript", level: 85, color: "from-blue-500 to-blue-700" },
  { name: "CSS/Tailwind", level: 94, color: "from-cyan-400 to-cyan-600" },
  { name: "UI/UX Design", level: 88, color: "from-purple-400 to-purple-600" },
  { name: "Three.js", level: 80, color: "from-green-400 to-green-600" },
  { name: "Figma", level: 87, color: "from-pink-400 to-pink-600" }
];

export const Skills = () => {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Mastering the tools and technologies that shape the future of web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cyber-card p-6 rounded-xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-cyan-400">
                  {skill.name}
                </h3>
                <span className="text-lg font-bold text-purple-400">
                  {skill.level}%
                </span>
              </div>
              
              <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="cyber-button px-8 py-4 text-lg font-semibold rounded-lg glow-effect">
            Download Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
};
