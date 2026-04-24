import { motion } from "framer-motion";
import { Orbit } from "lucide-react";
import { Suspense, lazy } from "react";

const SkillsScene = lazy(() => import("@/components/three/SkillsScene"));

const categories = [
  {
    title: "Languages",
    items: ["Python", "C++", "Java", "JavaScript"],
  },
  {
    title: "Web & Backend",
    items: ["HTML", "CSS", "Node.js", "REST API", "Authentication", "JSON"],
  },
  {
    title: "Database",
    items: ["SQL", "MySQL"],
  },
  {
    title: "Tools & Concepts",
    items: ["Git", "Power BI", "MS Excel", "MS Word", "OOP", "SDLC", "Debugging", "Data Structures"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono text-primary mb-4">
            <Orbit className="h-3 w-3" /> Skills Universe
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight">
            A galaxy of <span className="text-neon">tools</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="relative h-[480px] sm:h-[560px] rounded-3xl glass overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
            <Suspense fallback={null}>
              <SkillsScene />
            </Suspense>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {categories.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-strong rounded-2xl p-6 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="text-xs font-mono uppercase tracking-wider text-primary">{c.title}</div>
                <ul className="mt-4 space-y-1.5">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
