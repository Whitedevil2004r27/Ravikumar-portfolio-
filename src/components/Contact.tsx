
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
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
            Let's Connect
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
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-lg text-white">ravikumar@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="text-lg text-white">+91 12345 67890</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-lg text-white">Ulundurpet, Tamil Nadu</p>
                  </div>
                </div>
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
