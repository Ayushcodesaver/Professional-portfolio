import { motion } from "framer-motion";
import { Award, Trophy, Zap, Rocket } from "lucide-react";

const items = [
  {
    icon: Trophy,
    title: "Geekathon — KR Mangalam University",
    description: "Worked on modular UI and backend sprint collaboration during the hackathon.",
    accent: "from-primary to-primary-glow",
  },
  {
    icon: Rocket,
    title: "IIIT Delhi E-Summit Hackathon",
    description: "Contributed to real-time debugging and feature deployment during team sprint.",
    accent: "from-secondary to-secondary-glow",
  },
  {
    icon: Award,
    title: "Postman API Student Expert",
    description: "Certified in API Fundamentals by Postman (2025).",
    accent: "from-primary-glow to-secondary",
  },
  {
    icon: Zap,
    title: "Backend Performance Win",
    description: "Improved backend API response time by 15–20% across freelance projects.",
    accent: "from-secondary-glow to-primary",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono text-primary mb-4">
            <Trophy className="h-3 w-3" /> Achievements
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight">
            Wins along <span className="text-neon">the way</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${item.accent} rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500`} />
              <div className="relative glass-strong rounded-2xl p-6 h-full hover:-translate-y-2 transition-transform duration-500">
                <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.accent} p-[1px] mb-4 shadow-elegant`}>
                  <div className="h-full w-full rounded-xl bg-card flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-foreground" />
                  </div>
                </div>
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
