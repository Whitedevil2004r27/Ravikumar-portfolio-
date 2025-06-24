
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "ravikumarofficial227@gmail.com",
      href: "mailto:ravikumarofficial227@gmail.com",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 94889 44410",
      href: "tel:+919488944410",
      color: "from-cyan-600 to-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Whitedevil2004r27",
      href: "https://github.com/Whitedevil2004r27",
      color: "from-gray-600 to-gray-800"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "ravi-kumar-j-b29467276",
      href: "https://www.linkedin.com/in/ravi-kumar-j-b29467276",
      color: "from-blue-600 to-indigo-600"
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's create something amazing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="cyber-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-8 text-cyan-400">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactLinks.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className={`p-3 bg-gradient-to-r ${contact.color} rounded-lg group-hover:shadow-lg group-hover:shadow-current/20 transition-all duration-300`}>
                      <contact.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{contact.label}</p>
                      <p className="text-lg text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {contact.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="cyber-card p-8 rounded-xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full cyber-button py-4 text-lg font-semibold rounded-lg glow-effect"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
