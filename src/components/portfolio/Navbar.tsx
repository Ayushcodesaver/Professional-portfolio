import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all ${scrolled ? "" : ""}`}>
        <div className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass-strong shadow-card" : "bg-transparent"
        }`}>
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 rounded-lg bg-gradient-neon shadow-glow-primary flex items-center justify-center">
              <span className="text-sm font-bold font-display text-primary-foreground">A</span>
            </div>
            <span className="font-display font-semibold tracking-tight text-foreground hidden sm:block">
              Aayush<span className="text-primary">.</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/40"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/aayush-sharma-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium bg-gradient-neon text-primary-foreground shadow-glow-primary hover:shadow-glow-secondary transition-all hover:scale-105"
          >
            Resume
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-full glass border-border"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 glass-strong rounded-2xl p-4"
            >
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      onClick={() => setOpen(false)}
                      href={l.href}
                      className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/40"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
