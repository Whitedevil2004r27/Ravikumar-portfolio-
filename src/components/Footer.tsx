
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ravikumar@example.com", label: "Email" }
  ];

  return (
    <footer className="py-12 px-6 border-t border-purple-500/20">
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
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
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
            <p className="text-lg mb-2">
              © 2024 Ravikumar. All rights reserved.
            </p>
            <p className="flex items-center justify-center gap-2 text-sm">
              Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> and lots of caffeine
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
