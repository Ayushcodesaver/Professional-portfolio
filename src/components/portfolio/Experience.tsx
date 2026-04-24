import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const timeline = [
  {
    period: "01/2024 — Present",
    title: "Software Developer",
    org: "Freelance / Project Based · Remote",
    description:
      "Built backend REST APIs, SQL queries, and authentication systems for PlatePal and Manga Reader using Python, Node.js and SQL. Improved API response time 15–20% and automated vendor reporting via SQL + Power BI, cutting manual work by 30%.",
    tags: ["REST API", "Python", "Node.js", "SQL", "Git", "Agile"],
  },
  {
    period: "Ongoing",
    title: "AIML Student",
    org: "B.Tech Program",
    description:
      "Studying Artificial Intelligence & Machine Learning. Hands-on with data structures, OOP, SDLC, and applied ML projects.",
    tags: ["AI/ML", "Data Structures", "OOP"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono text-primary mb-4">
            <Briefcase className="h-3 w-3" /> Journey
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight">
            Experience <span className="text-neon">timeline</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="grid md:grid-cols-2 gap-6 md:gap-4">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative group"
              >
                <div className="hidden md:flex absolute top-9 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative h-6 w-6 rounded-full bg-gradient-neon shadow-glow-primary flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-background" />
                  </div>
                </div>

                <div className="md:mt-20 glass-strong rounded-2xl p-6 h-full hover:border-primary/50 transition-all duration-500 hover:-translate-y-1">
                  <div className="text-xs font-mono text-primary uppercase tracking-wider">
                    {item.period}
                  </div>
                  <h3 className="font-display text-xl font-semibold mt-2">{item.title}</h3>
                  <div className="text-sm text-muted-foreground mt-1">{item.org}</div>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-primary/10 text-primary border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
