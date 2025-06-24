import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const skills = "React | Next.js | JavaScript | CSS | UI/UX | 3D Design";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < skills.length) {
        setTypedText(skills.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 rounded-full opacity-30"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 border border-purple-400 rounded-lg opacity-30"
          animate={{
            rotate: -360
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-20 blur-xl"
          animate={{
            y: [-20, 20, -20]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        {/* Profile Picture */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 p-1 glow-effect">
              <img
                src="/images/profile-pic.png"
                alt="Ravikumar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* Floating rings around profile */}
            <motion.div
              className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 border-2 border-cyan-400 rounded-full opacity-30"
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute inset-0 w-36 h-36 md:w-44 md:h-44 -top-2 -left-2 border border-purple-400 rounded-full opacity-20"
              animate={{
                rotate: -360
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 50
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1,
            delay: 0.3
          }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 neon-text">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text font-bold text-slate-50 text-left">
              Ravikumar
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-300 mb-8">
            Frontend Developer & UI/UX Designer
          </h2>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 1.3,
            duration: 1
          }}
          className="mb-12"
        >
          <div className="text-xl md:text-2xl text-cyan-400 font-mono min-h-[2rem]">
            {typedText}
            <span className="animate-pulse">|</span>
          </div>
        </motion.div>

        <motion.button
          initial={{
            opacity: 0,
            scale: 0.8
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            delay: 2.3,
            duration: 0.5
          }}
          whileHover={{
            scale: 1.05
          }}
          whileTap={{
            scale: 0.95
          }}
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({
              behavior: "smooth"
            })
          }
          className="cyber-button px-8 py-4 text-xl font-semibold rounded-lg glow-effect"
        >
          View Portfolio
        </motion.button>

        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 3.3,
            duration: 1
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-cyan-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};
