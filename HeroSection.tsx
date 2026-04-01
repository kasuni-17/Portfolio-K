import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Hello, I'm
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4">
            Kasuni{" "}
            <span className="text-gradient">Lakshika</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-8">
            Information Technology Undergraduate at SLIIT — passionate about building real-world applications with modern technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center justify-center gap-5 mb-12"
        >
          <a
            href="https://linkedin.com/in/kasuni-lakshika"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-all text-muted-foreground"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:kasuniattygala@gmail.com"
            className="p-3 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-all text-muted-foreground"
          >
            <Mail size={20} />
          </a>
          <a
            href="#"
            className="p-3 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-all text-muted-foreground"
          >
            <Github size={20} />
          </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors animate-bounce"
        >
          <ArrowDown size={16} />
          Scroll Down
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
