import { motion } from "framer-motion";
import { Code2, GraduationCap, Sparkles, Award } from "lucide-react";
import portrait from "@/assets/aayush-3d.png";

const stats = [
  { label: "Years Coding", value: "2+" },
  { label: "Projects Built", value: "6+" },
  { label: "Technologies", value: "15+" },
  { label: "Hackathons", value: "2+" },
];

const certificates = [
  "API Fundamentals Student Expert — Postman (2025)",
  "Data Analysis with Python — IBM Cognitive Class (2024)",
  "C++ Programming Course — GeeksforGeeks (2024)",
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono text-primary mb-4">
            <Sparkles className="h-3 w-3" /> About Me
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight">
            The mind behind <span className="text-neon">the code</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Profile card with 3D portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-neon rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
            <div className="relative glass-strong rounded-3xl p-8 h-full overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-radial pointer-events-none" />
              <div className="relative">
                <div className="relative h-72 w-full rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-primary/20 to-secondary/20 border border-border">
                  <img
                    src={portrait}
                    alt="Aayush Sharma 3D portrait"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
                <h3 className="font-display text-2xl font-semibold">Aayush Sharma</h3>
                <p className="text-sm text-primary font-mono mt-1">Software Developer · AIML Student</p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  AIML student & freelance software developer focused on backend APIs, full-stack web platforms,
                  and intelligent tools. Comfortable shipping end-to-end — from SQL pipelines to neon-lit interfaces.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {stats.map((s) => (
                    <div key={s.label} className="rounded-xl bg-muted/40 border border-border p-3">
                      <div className="font-display text-2xl font-bold text-neon">{s.value}</div>
                      <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="lg:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="glass-strong rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                  <Code2 className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold">Summary</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I design and build modern web applications, REST APIs, and AI-powered tools. My focus is on
                premium UX, performance, and writing clean, maintainable code — bridging backend systems
                with delightful interfaces. Hobbies: traveling, music, e-sports, coding.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass-strong rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-secondary/10 border border-secondary/30 flex items-center justify-center text-secondary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-medium">B.Tech — Artificial Intelligence & Machine Learning</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Coursework in Deep Learning, Data Structures, OOP, SDLC, and Systems.
                    </div>
                  </div>
                  <span className="text-xs font-mono text-primary whitespace-nowrap">Ongoing</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="glass-strong rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold">Certificates</h3>
              </div>
              <ul className="space-y-2">
                {certificates.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
