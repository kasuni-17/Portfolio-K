import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "Food Ordering App",
    description:
      "A responsive food ordering web application with authentication, cart management, and order tracking features. Currently in active development.",
    tags: ["React", "Node.js", "MongoDB"],
    status: "In Development",
  },
  {
    title: "Event Management System",
    description:
      "A comprehensive platform for creating, managing, and tracking events with user registration and scheduling features.",
    tags: ["Java", "MySQL", "JSP"],
    status: "Completed",
  },
  {
    title: "Vehicle Parking System",
    description:
      "Parking allocation and review system built with OOP principles. Handles slot booking, availability tracking, and user reviews.",
    tags: ["Java", "JSP", "Servlets"],
    status: "Completed",
  },
  {
    title: "Employee Management System",
    description:
      "A system for managing employee records including salary calculations, performance tracking, and bonus management.",
    tags: ["Java", "MySQL", "OOP"],
    status: "Completed",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-2">My Work</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between mb-3">
                <Code2 className="text-primary" size={24} />
                {project.status === "In Development" && (
                  <span className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {project.status}
                  </span>
                )}
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-secondary text-muted-foreground"
                  >
                    {tag}
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

export default ProjectsSection;
