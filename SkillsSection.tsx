import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Java", "JavaScript", "Python"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "React", "Node.js"],
  },
  {
    title: "Mobile",
    skills: ["Flutter"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Tools & Concepts",
    skills: ["Git", "OOP", "REST APIs"],
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Teamwork", "Communication"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-2">My Skills</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
            Technologies & Tools
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors"
            >
              <h3 className="font-heading font-semibold text-sm text-primary mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded-full bg-secondary text-secondary-foreground font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
