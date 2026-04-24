import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Suspense, lazy } from "react";
import {
  SiReact, SiJavascript, SiTypescript, SiPython,
  SiNodedotjs, SiTailwindcss, SiDocker, SiGit,
  SiPostgresql, SiTensorflow,
} from "react-icons/si";

const HeroScene = lazy(() => import("@/components/three/HeroScene"));

/* Floating skill icon positions (right side, on a subtle grid) */
const skillIcons = [
  { Icon: SiReact, top: "18%", left: "62%", delay: 0.2, color: "text-cyan-300" },
  { Icon: SiJavascript, top: "10%", left: "78%", delay: 0.35, color: "text-yellow-300" },
  { Icon: SiTypescript, top: "44%", left: "70%", delay: 0.5, color: "text-blue-400" },
  { Icon: SiPython, top: "30%", left: "85%", delay: 0.6, color: "text-amber-300" },
  { Icon: SiNodedotjs, top: "60%", left: "82%", delay: 0.7, color: "text-green-400" },
  { Icon: SiTailwindcss, top: "70%", left: "65%", delay: 0.8, color: "text-sky-300" },
  { Icon: SiDocker, top: "55%", left: "92%", delay: 0.9, color: "text-blue-300" },
  { Icon: SiGit, top: "82%", left: "78%", delay: 1.0, color: "text-orange-400" },
  { Icon: SiPostgresql, top: "25%", left: "58%", delay: 1.1, color: "text-indigo-300" },
  { Icon: SiTensorflow, top: "78%", left: "92%", delay: 1.2, color: "text-orange-300" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* 3D black hole background */}
      <div className="absolute inset-0">
        <Suspense fallback={<div className="w-full h-full bg-background" />}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Subtle grid overlay (right side emphasis) */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

      {/* Floating skill icons (desktop only) */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        {skillIcons.map(({ Icon, top, left, delay, color }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 1 + delay, ease: [0.22, 1, 0.36, 1] }}
            className="absolute"
            style={{ top, left }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
              className="h-14 w-14 rounded-2xl glass-strong border-border flex items-center justify-center shadow-card"
            >
              <Icon className={`h-7 w-7 ${color}`} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full glass-strong text-xs font-mono text-foreground mb-6"
        >
          <Sparkles className="h-3 w-3 text-secondary" />
          Software Developer Portfolio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] max-w-3xl"
        >
          Building <span className="text-neon">intelligent</span>
          <br />
          digital experiences.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm sm:text-base font-mono text-muted-foreground"
        >
          <span className="text-foreground">Aayush Sharma</span>
          <span className="text-secondary">/</span>
          <span>Software Developer</span>
          <span className="text-secondary">/</span>
          <span>Web Developer</span>
          <span className="text-secondary">/</span>
          <span>AIML Student</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-6 max-w-xl text-base text-muted-foreground leading-relaxed"
        >
          I'm a Full Stack Software Engineer & AIML student crafting cinematic web experiences,
          B2B platforms, and intelligent AI tools. Check out my projects and skills.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-neon text-primary-foreground font-medium shadow-glow-primary hover:shadow-glow-secondary transition-all duration-500 hover:scale-105"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="/aayush-sharma-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass-strong text-foreground font-medium hover:border-primary/50 transition-all duration-500"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-secondary to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
