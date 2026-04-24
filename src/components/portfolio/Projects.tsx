import { motion } from "framer-motion";
import { ArrowUpRight, Boxes, BookOpen, ShieldCheck } from "lucide-react";

const projects = [
  {
    title: "PlatePal",
    tagline: "Full-Stack B2B Food Delivery Platform",
    description:
      "B2B platform connecting corporate users with home-based tiffin vendors. Supports secure payments, real-time delivery tracking, and vendor analytics dashboards.",
    tech: ["Python", "JavaScript", "SQL", "Power BI"],
    icon: Boxes,
    accent: "from-primary to-primary-glow",
    year: "2024",
  },
  {
    title: "Self-Hosted Manga Reader",
    tagline: "Personal Library Platform",
    description:
      "Manga reading platform with chapter navigation, user library and CBZ archive support. Includes session-based login authentication and a clean reading UI.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js"],
    icon: BookOpen,
    accent: "from-secondary to-secondary-glow",
    year: "2024",
  },
  {
    title: "MediVault",
    tagline: "Blockchain-Based Medical Record System",
    description:
      "Secure healthcare record management system applying blockchain concepts for data privacy and access control. Designed structured data flow for efficient record handling.",
    tech: ["Blockchain (Concept)", "Data Management", "SQL"],
    icon: ShieldCheck,
    accent: "from-primary-glow to-secondary",
    year: "2025",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono text-primary mb-4">
              <Boxes className="h-3 w-3" /> Selected Work
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight">
              Projects that <span className="text-neon">push limits</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A glimpse into the products I've architected — from B2B platforms to blockchain-based systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative perspective-1000"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${p.accent} rounded-3xl blur-xl opacity-20 group-hover:opacity-50 transition duration-700`} />
              <div className="relative glass-strong rounded-3xl p-8 h-full overflow-hidden transition-transform duration-500 group-hover:-translate-y-2">
                <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
                <div className={`absolute -top-20 -right-20 h-60 w-60 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl`} />

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${p.accent} p-[1px] shadow-elegant`}>
                      <div className="h-full w-full rounded-2xl bg-card flex items-center justify-center">
                        <p.icon className="h-6 w-6 text-foreground" />
                      </div>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">{p.year}</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm font-mono text-primary mt-1">{p.tagline}</p>
                  <p className="text-muted-foreground mt-4 leading-relaxed text-sm">{p.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-[11px] font-mono bg-muted/60 border border-border text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    View Case Study
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
