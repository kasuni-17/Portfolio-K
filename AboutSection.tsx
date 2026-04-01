import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-2">About Me</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground leading-relaxed"
          >
            I'm a motivated Information Technology undergraduate at SLIIT with a strong foundation in Java, web development, and software engineering principles. I'm passionate about developing real-world applications and continuously learning new technologies. Currently seeking an internship opportunity to apply my technical skills and contribute to innovative projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
              <GraduationCap className="text-primary mt-0.5 shrink-0" size={20} />
              <div>
                <p className="font-heading font-semibold text-sm">BSc (Hons) in IT – SLIIT</p>
                <p className="text-muted-foreground text-xs">2024 – Present</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
              <GraduationCap className="text-primary mt-0.5 shrink-0" size={20} />
              <div>
                <p className="font-heading font-semibold text-sm">G.C.E A/L – Ananda Balika Vidyalaya, Colombo 10</p>
                <p className="text-muted-foreground text-xs">Technology Stream – Bio System Technology (2020 – 2023)</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
              <Award className="text-primary mt-0.5 shrink-0" size={20} />
              <div>
                <p className="font-heading font-semibold text-sm">English & IT Dual Diploma – ICBT</p>
                <p className="text-muted-foreground text-xs">2023</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
              <MapPin className="text-primary mt-0.5 shrink-0" size={20} />
              <div>
                <p className="font-heading font-semibold text-sm">Based in Sri Lanka</p>
                <p className="text-muted-foreground text-xs">Open to remote opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
