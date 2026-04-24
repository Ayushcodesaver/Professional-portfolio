import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Mail, Send, Sparkles } from "lucide-react";
import { toast } from "sonner";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/Ayushcodesaver" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/aayush-sharma-1a2806325/" },
  { icon: Mail, label: "Email", href: "mailto:ayushsharma80104@gmail.com" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    toast.success("Message sent — I'll get back to you soon ✨");
    setForm({ name: "", email: "", message: "" });
    setLoading(false);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono text-primary mb-4">
            <Sparkles className="h-3 w-3" /> Get In Touch
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight">
            Let's build <span className="text-neon">something</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Got a project, opportunity, or just want to chat tech? Drop a line.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-neon rounded-3xl blur-2xl opacity-20" />
          <div className="relative glass-strong rounded-3xl p-8 sm:p-10 overflow-hidden">
            <div className="absolute -top-32 -right-32 h-80 w-80 bg-gradient-radial pointer-events-none" />

            <form onSubmit={onSubmit} className="relative grid sm:grid-cols-2 gap-5">
              <div className="sm:col-span-1">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full bg-muted/40 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full bg-muted/40 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
                  placeholder="jane@company.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full bg-muted/40 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition resize-none"
                  placeholder="Tell me about your idea..."
                />
              </div>
              <div className="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="h-11 w-11 rounded-full glass border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:scale-110 transition-all duration-300"
                    >
                      <s.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-neon text-primary-foreground font-medium shadow-glow-primary hover:shadow-glow-secondary transition-all hover:scale-105 disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      <footer className="mt-24 border-t border-border pt-8 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <div>© {new Date().getFullYear()} Aayush Sharma — Crafted with care.</div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            All systems operational
          </div>
        </div>
      </footer>
    </section>
  );
}
