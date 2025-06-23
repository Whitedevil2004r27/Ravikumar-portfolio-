
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/Whitedevil2004r27", 
      label: "GitHub",
      color: "hover:text-gray-300" 
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/ravi-kumar-j-b29467276", 
      label: "LinkedIn",
      color: "hover:text-blue-400" 
    },
    { 
      icon: Mail, 
      href: "mailto:ravikumarofficial227@gmail.com", 
      label: "Email",
      color: "hover:text-cyan-400" 
    }
  ];

  return (
    <footer className="footer-icons py-12 px-6 border-t border-purple-500/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2 }}
                className={`text-gray-400 text-2xl transition-all duration-300 ${link.color} transform hover:scale-110`}
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-400"
          >
            <p className="text-lg">
              © 2024 Ravikumar. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
