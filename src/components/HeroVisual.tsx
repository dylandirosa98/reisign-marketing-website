"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import {
  FileText,
  Sparkles,
  CheckCircle2,
  Send,
  Eye,
  MapPin,
  PenTool,
} from "lucide-react";

/* ─── Typing animation hook ─── */
function useTypewriter(text: string, delay: number, speed = 40) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed + Math.random() * 30);

    return () => clearTimeout(timeout);
  }, [displayed, started, text, speed]);

  return displayed;
}

/* ─── Signature SVG path ─── */
function AnimatedSignature({ delay }: { delay: number }) {
  return (
    <motion.svg
      viewBox="0 0 200 60"
      className="h-10 w-32"
      initial="hidden"
      animate="visible"
    >
      <motion.path
        d="M10 45 C 20 10, 30 10, 40 35 S 55 55, 65 30 S 80 5, 90 25 S 100 45, 110 30 C 115 22, 120 20, 130 28 S 145 40, 155 25 S 165 15, 175 22 L 185 28"
        fill="none"
        stroke="url(#signatureGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: {
                duration: 1.8,
                delay,
                ease: [0.16, 1, 0.3, 1],
              },
              opacity: { duration: 0.2, delay },
            },
          },
        }}
      />
      <defs>
        <linearGradient id="signatureGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4B92A0" />
          <stop offset="100%" stopColor="#62B4B7" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

/* ─── Status badge with animated transitions ─── */
function AnimatedStatus() {
  const [statusIndex, setStatusIndex] = useState(0);
  const statuses = [
    { label: "Draft", icon: FileText, color: "text-fg-muted", bg: "bg-white/[0.06]" },
    { label: "Sent", icon: Send, color: "text-accent", bg: "bg-accent/10" },
    { label: "Viewed", icon: Eye, color: "text-accent-light", bg: "bg-accent-light/10" },
    { label: "Completed", icon: CheckCircle2, color: "text-success", bg: "bg-success/10" },
  ];

  useEffect(() => {
    if (statusIndex >= statuses.length - 1) return;
    const timeout = setTimeout(
      () => setStatusIndex((i) => i + 1),
      statusIndex === 0 ? 1800 : 1000
    );
    return () => clearTimeout(timeout);
  }, [statusIndex, statuses.length]);

  const current = statuses[statusIndex];
  const Icon = current.icon;

  return (
    <motion.div
      key={current.label}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`inline-flex items-center gap-1.5 rounded-full ${current.bg} px-3 py-1`}
    >
      <Icon className={`h-3 w-3 ${current.color}`} />
      <span className={`text-xs font-semibold ${current.color}`}>{current.label}</span>
    </motion.div>
  );
}

/* ─── Main Hero Visual ─── */
export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 30, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax transforms for floating elements
  const card1X = useTransform(smoothX, [-300, 300], [8, -8]);
  const card1Y = useTransform(smoothY, [-300, 300], [6, -6]);
  const card2X = useTransform(smoothX, [-300, 300], [-10, 10]);
  const card2Y = useTransform(smoothY, [-300, 300], [-8, 8]);
  const card3X = useTransform(smoothX, [-300, 300], [5, -5]);
  const card3Y = useTransform(smoothY, [-300, 300], [-4, 4]);
  const mainRotateX = useTransform(smoothY, [-300, 300], [2, -2]);
  const mainRotateY = useTransform(smoothX, [-300, 300], [-2, 2]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Typed fields — fast, snappy timing
  const address = useTypewriter("1247 Oak Ridge Drive, Tampa, FL", 800, 22);
  const seller = useTypewriter("Michael Johnson", 1600, 28);
  const buyer = useTypewriter("REI Capital Partners LLC", 2200, 25);
  const price = useTypewriter("$185,000", 2800, 35);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto mt-16 w-full max-w-[800px] md:mt-20"
      style={{ perspective: "1200px" }}
    >
      {/* ─── Glow behind the composition ─── */}
      <div
        className="animate-pulse-glow pointer-events-none absolute inset-0 -inset-x-20 -inset-y-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(75, 146, 160, 0.12) 0%, transparent 55%)",
        }}
      />

      {/* ═══ Main Contract Card ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ rotateX: mainRotateX, rotateY: mainRotateY }}
        className="relative z-10"
      >
        <div className="glass-card overflow-hidden rounded-2xl">
          {/* Title bar */}
          <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-5 py-3">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-3.5 w-3.5 text-accent" />
                <span className="text-xs font-semibold text-fg-secondary">
                  Purchase Agreement
                </span>
              </div>
            </div>
            <AnimatedStatus />
          </div>

          {/* Contract body */}
          <div className="p-5 md:p-6">
            {/* State badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="mb-4 inline-flex items-center gap-1.5 rounded-md bg-accent/8 px-2.5 py-1"
            >
              <MapPin className="h-3 w-3 text-accent" />
              <span className="text-[11px] font-semibold text-accent">Florida Template</span>
            </motion.div>

            {/* Form fields */}
            <div className="space-y-3">
              <FormField label="Property Address" value={address} delay={0.6} />
              <div className="grid grid-cols-2 gap-3">
                <FormField label="Seller" value={seller} delay={1.3} />
                <FormField label="Buyer" value={buyer} delay={1.8} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <FormField label="Purchase Price" value={price} delay={2.4} highlight />
                <FormField label="Earnest Money" value="$5,000" delay={2.8} />
              </div>
            </div>

            {/* Signature area */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.2, duration: 0.5 }}
              className="mt-5 rounded-xl border border-dashed border-white/[0.08] bg-white/[0.01] px-4 py-3"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-medium text-fg-muted uppercase tracking-wider">
                    Buyer Signature
                  </p>
                  <AnimatedSignature delay={3.5} />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 5.0, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1">
                    <CheckCircle2 className="h-3 w-3 text-success" />
                    <span className="text-[11px] font-semibold text-success">Signed</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ═══ Floating Card: AI Clause — positioned outside the contract ═══ */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        style={{ x: card1X, y: card1Y }}
        className="absolute -left-6 -top-8 z-20 hidden md:block lg:-left-32 lg:-top-6"
      >
        <div className="floating-card w-[210px] overflow-hidden rounded-xl border border-white/[0.08] bg-bg-surface shadow-2xl shadow-black/40">
          <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.03] px-3 py-2">
            <Sparkles className="h-3 w-3 text-accent-light" />
            <span className="text-[11px] font-semibold text-fg-secondary">AI Clause</span>
          </div>
          <div className="p-3">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="text-[11px] leading-relaxed text-fg-secondary"
            >
              &ldquo;Property sold as-is. Buyer acknowledges inspection
              period of 14 business days...&rdquo;
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.4 }}
              className="mt-2 flex gap-1.5"
            >
              <span className="rounded-md bg-success/15 px-2 py-0.5 text-[10px] font-semibold text-success">
                Approve
              </span>
              <span className="rounded-md bg-white/[0.06] px-2 py-0.5 text-[10px] font-semibold text-fg-muted">
                Edit
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ═══ Floating Card: E-Signature — positioned outside the contract ═══ */}
      <motion.div
        initial={{ opacity: 0, x: 40, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ x: card2X, y: card2Y }}
        className="absolute -right-6 -top-4 z-20 hidden md:block lg:-right-28 lg:-top-2"
      >
        <div className="floating-card w-[190px] overflow-hidden rounded-xl border border-white/[0.08] bg-bg-surface shadow-2xl shadow-black/40">
          <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.03] px-3 py-2">
            <PenTool className="h-3 w-3 text-accent" />
            <span className="text-[11px] font-semibold text-fg-secondary">E-Signature</span>
          </div>
          <div className="p-3">
            <p className="mb-1 text-[10px] font-medium uppercase tracking-wider text-fg-muted">
              Seller Signature
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.5 }}
            >
              <svg viewBox="0 0 120 35" className="h-6 w-20">
                <motion.path
                  d="M5 25 C 15 5, 25 5, 35 20 S 50 30, 60 18 S 75 5, 85 15 S 95 25, 105 18"
                  fill="none"
                  stroke="#A2C6C4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.0, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
                />
              </svg>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.6, duration: 0.3 }}
              className="mt-1.5"
            >
              <span className="text-[10px] text-fg-secondary">Michael Johnson</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ═══ Floating Card: Stats Bar ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ x: card3X, y: card3Y }}
        className="absolute -bottom-6 left-1/2 z-20 -translate-x-1/2 md:-bottom-12"
      >
        <div className="floating-card flex items-center gap-4 rounded-xl border border-white/[0.08] bg-bg-surface px-5 py-3 shadow-2xl shadow-black/40 md:gap-6">
          <StatItem value="247" label="Contracts" delay={1.6} />
          <div className="h-6 w-px bg-white/[0.08]" />
          <StatItem value="189" label="Signed" delay={1.8} />
          <div className="h-6 w-px bg-white/[0.08]" />
          <StatItem value="98%" label="Close Rate" delay={2.0} highlight />
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Sub-components ─── */

function FormField({
  label,
  value,
  delay,
  highlight = false,
}: {
  label: string;
  value: string;
  delay: number;
  highlight?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2"
    >
      <p className="text-[10px] font-medium uppercase tracking-wider text-fg-muted">
        {label}
      </p>
      <p
        className={`mt-0.5 text-sm font-medium ${
          highlight ? "text-accent-light" : "text-fg"
        }`}
      >
        {value}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
          className="ml-px inline-block h-3.5 w-px bg-accent"
        />
      </p>
    </motion.div>
  );
}

function StatItem({
  value,
  label,
  delay,
  highlight = false,
}: {
  value: string;
  label: string;
  delay: number;
  highlight?: boolean;
}) {
  const [count, setCount] = useState("0");
  const isPercent = value.includes("%");
  const numericValue = parseInt(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let frame = 0;
      const totalFrames = 40;
      const interval = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(numericValue * eased);
        setCount(current + (isPercent ? "%" : ""));
        if (frame >= totalFrames) clearInterval(interval);
      }, 25);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay, numericValue, isPercent]);

  return (
    <div className="text-center">
      <p className={`text-sm font-bold ${highlight ? "text-accent-light" : "text-fg"}`}>
        {count}
      </p>
      <p className="text-[10px] text-fg-muted">{label}</p>
    </div>
  );
}
