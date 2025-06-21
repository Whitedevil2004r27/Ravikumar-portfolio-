
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Fest Book",
    description: "A comprehensive festival management platform with booking capabilities, event scheduling, and user management.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=300&fit=crop",
    github: "#",
    live: "#"
  },
  {
    title: "Book Cart",
    description: "An e-commerce platform for books with advanced search, filtering, and cart management features.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop",
    github: "#",
    live: "#"
  },
  {
    title: "3D Portfolio",
    description: "An immersive 3D portfolio website showcasing modern web development techniques and interactive design.",
    tech: ["React", "Three.js", "Framer Motion", "WebGL"],
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&h=300&fit=crop",
    github: "#",
    live: "#"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Exploring the intersection of design and technology through innovative web experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="cyber-card rounded-xl overflow-hidden card-3d group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="p-2 bg-black/50 rounded-full hover:bg-purple-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.live}
                    className="p-2 bg-black/50 rounded-full hover:bg-cyan-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-cyan-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
