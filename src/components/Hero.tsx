"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-32 pt-28 md:pb-40 md:pt-36">
      {/* ─── Background Glow Orbs ─── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Primary teal orb — top right */}
        <div
          className="animate-float-slow absolute -top-32 right-[10%] h-[500px] w-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(75, 146, 160, 0.6) 0%, rgba(75, 146, 160, 0) 70%)",
          }}
        />
        {/* Secondary orb — bottom left */}
        <div
          className="animate-float absolute -bottom-20 left-[5%] h-[400px] w-[400px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(55, 110, 136, 0.6) 0%, rgba(55, 110, 136, 0) 70%)",
          }}
        />
        {/* Subtle accent orb — center */}
        <div
          className="animate-pulse-glow absolute top-1/3 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(98, 180, 183, 0.15) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* ─── Content ─── */}
      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="text-center">
          {/* Announcement Pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent-light" />
            <span className="text-sm font-medium text-fg-secondary">
              Now with AI-powered contract clauses
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="block">The Contract Platform</span>
            <span className="text-gradient-hero mt-2 block">
              Built for Wholesalers
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-[560px] text-base leading-relaxed text-fg-secondary sm:text-lg md:mt-8"
          >
            Create professional contracts in minutes with AI-powered clauses,
            state-specific templates, and seamless e-signatures.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-10"
          >
            <a
              href="https://app.reisign.com/signup"
              className="glow-button inline-flex items-center gap-2.5 rounded-xl px-8 py-3.5 text-base font-semibold text-white"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#how-it-works"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.03] px-8 py-3.5 text-base font-medium text-fg-secondary transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.05] hover:text-fg"
            >
              See How It Works
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-8 text-sm text-fg-muted"
          >
            Free to start &middot; No credit card required &middot; All 50 states
          </motion.p>
        </div>

        {/* ─── Animated Contract Visual ─── */}
        <HeroVisual />
      </div>

      {/* ─── Bottom Fade ─── */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(to top, var(--color-bg) 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
