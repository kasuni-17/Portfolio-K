import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-card/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-2">Get In Touch</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
            Connect With Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 space-y-6"
          >
            <p className="text-muted-foreground text-sm leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="space-y-4">
              <a href="mailto:kasuniattygala@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={18} className="text-primary" />
                kasuniattygala@gmail.com
              </a>
              <a href="tel:+94753966006" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone size={18} className="text-primary" />
                075-3966006
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={18} className="text-primary" />
                Sri Lanka
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              maxLength={1000}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Send Message
              <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
