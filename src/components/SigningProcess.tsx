"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
  MotionValue,
} from "framer-motion";
import {
  FileText,
  Sparkles,
  PenTool,
  Send,
  CheckCircle2,
  Mail,
  Download,
} from "lucide-react";
import { AnimateIn } from "./AnimateIn";

const stages = [
  {
    key: "create",
    icon: FileText,
    label: "Create",
    title: "Start your contract",
    description:
      "Choose a template, enter your deal details, and your contract is auto-populated with the right language for your state.",
  },
  {
    key: "ai",
    icon: Sparkles,
    label: "Enhance",
    title: "Add AI clauses",
    description:
      "Describe your deal situation and let AI generate custom clauses — as-is condition, inspection, financing, assignment rights.",
  },
  {
    key: "sign",
    icon: PenTool,
    label: "Sign",
    title: "Sign your part",
    description:
      "Draw or type your signature directly in the contract. Add initials and company information.",
  },
  {
    key: "send",
    icon: Send,
    label: "Send",
    title: "Send for signature",
    description:
      "Enter the signer's email and send. They receive a secure link — no account needed, no app to download.",
  },
  {
    key: "done",
    icon: CheckCircle2,
    label: "Close",
    title: "Deal closed",
    description:
      "Track real-time status as your contract moves from sent to viewed to signed. Download the executed PDF.",
  },
];

export function SigningProcess() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll across the tall outer container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth out the progress for buttery animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.8,
  });

  // Stages play out across a comfortable scroll range within the tall container
  const activeProgress = useTransform(smoothProgress, [0.2, 0.65], [0, 4]);

  // 3D flip entrance — card starts flipped and rotates in
  const flipRotateY = useTransform(smoothProgress, [0.05, 0.2], [90, 0]);
  const flipScale = useTransform(smoothProgress, [0.05, 0.2], [0.8, 1]);
  const flipOpacity = useTransform(smoothProgress, [0.05, 0.18], [0, 1]);

  return (
    // Tall outer container — gives the sticky content more scroll runway
    <div ref={containerRef} className="relative lg:min-h-[250vh]">
      {/* Sticky inner section — stays in view while you scroll through the height */}
      <div className="lg:sticky lg:top-0 px-6 py-24 lg:py-32">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div
            className="absolute top-1/3 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06]"
            style={{
              background:
                "radial-gradient(ellipse, rgba(75, 146, 160, 0.8) 0%, transparent 55%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1200px]">
          {/* Section Header */}
          <AnimateIn className="mb-16 text-center lg:mb-20">
            <p className="mb-3 text-sm font-semibold tracking-wide uppercase text-accent">
              The Signing Experience
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Watch your deal{" "}
              <span className="text-gradient">come together</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[480px] text-base text-fg-secondary">
              A seamless flow from blank contract to fully executed deal — all in
              one platform.
            </p>
          </AnimateIn>

          {/* Scroll-driven layout — both columns matched height */}
          <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Animated visual panel with 3D flip entrance */}
            <div className="hidden lg:block">
              <div style={{ perspective: "1200px" }} className="h-full">
                <motion.div
                  style={{
                    rotateY: flipRotateY,
                    scale: flipScale,
                    opacity: flipOpacity,
                    transformOrigin: "left center",
                  }}
                  className="h-full"
                >
                  <ContractVisual scrollProgress={activeProgress} />
                </motion.div>
              </div>
            </div>

            {/* Right: Stage cards — compact, matched to contract height */}
            <div className="flex flex-col justify-between gap-3 lg:gap-3">
              {stages.map((stage, i) => (
                <StageCard key={stage.key} stage={stage} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Animated contract visual ─── */
function ContractVisual({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}) {
  const progressPercent = useTransform(scrollProgress, [0, 4], ["0%", "100%"]);

  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-bg-surface shadow-2xl shadow-black/30">
      {/* Title bar */}
      <div className="flex items-center gap-3 border-b border-white/[0.06] bg-white/[0.02] px-5 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        </div>
        <span className="text-xs font-semibold text-fg-secondary">
          Assignment Contract — Texas
        </span>
      </div>

      {/* Contract body */}
      <div className="relative flex-1 p-6">
        {/* Stage 1: Contract fields */}
        <ScrollStageBlock progress={scrollProgress} showAt={0}>
          <div className="space-y-3">
            <VisualField
              label="Property"
              value="4821 Elm Street, Houston, TX 77001"
            />
            <div className="grid grid-cols-2 gap-3">
              <VisualField label="Seller" value="Robert Williams" />
              <VisualField label="Wholesaler" value="QuickFlip Homes LLC" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <VisualField label="Contract Price" value="$142,000" accent />
              <VisualField label="Assignment Fee" value="$18,000" accent />
            </div>
          </div>
        </ScrollStageBlock>

        {/* Stage 2: AI clauses */}
        <ScrollStageBlock progress={scrollProgress} showAt={1}>
          <div className="mt-4 space-y-2">
            <div className="mb-3 flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-accent-light" />
              <span className="text-xs font-semibold text-accent-light">
                AI Clauses Generated
              </span>
            </div>
            {["As-Is Condition", "Assignment Rights", "Inspection Period"].map(
              (clause) => (
                <div
                  key={clause}
                  className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5"
                >
                  <span className="text-xs font-medium text-fg">{clause}</span>
                  <span className="rounded-md bg-success/10 px-2 py-0.5 text-[10px] font-semibold text-success">
                    Added
                  </span>
                </div>
              )
            )}
          </div>
        </ScrollStageBlock>

        {/* Stage 3: Signature */}
        <ScrollStageBlock progress={scrollProgress} showAt={2}>
          <div className="mt-4 rounded-xl border border-dashed border-accent/20 bg-accent/[0.03] p-4">
            <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-fg-muted">
              Your Signature
            </p>
            <SignatureDrawing />
            <p className="mt-2 text-xs text-fg-muted">QuickFlip Homes LLC</p>
          </div>
        </ScrollStageBlock>

        {/* Stage 4: Send */}
        <ScrollStageBlock progress={scrollProgress} showAt={3}>
          <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <div className="mb-3 flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-semibold text-fg-secondary">
                Sending to signer
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-white/[0.02] px-3 py-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/10">
                <span className="text-[10px] font-bold text-accent">RW</span>
              </div>
              <div>
                <p className="text-xs font-medium text-fg">Robert Williams</p>
                <p className="text-[10px] text-fg-muted">robert.w@email.com</p>
              </div>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-accent-dark to-accent-light"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              />
            </div>
            <p className="mt-1.5 text-[10px] text-accent">
              Secure link sent via email
            </p>
          </div>
        </ScrollStageBlock>

        {/* Stage 5: Completed */}
        <ScrollStageBlock progress={scrollProgress} showAt={4}>
          <div className="mt-4 rounded-xl border border-success/20 bg-success/[0.04] p-4 text-center">
            <CheckCircle2 className="mx-auto mb-2 h-8 w-8 text-success" />
            <p className="text-sm font-semibold text-fg">Contract Completed</p>
            <p className="mt-1 text-xs text-fg-secondary">
              All parties have signed. Document is fully executed.
            </p>
            <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-white/[0.04] px-4 py-2">
              <Download className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-medium text-accent">
                Download Signed PDF
              </span>
            </div>
          </div>
        </ScrollStageBlock>

        {/* Progress indicator bar (left side) */}
        <div className="absolute bottom-0 left-0 top-0 w-0.5 bg-white/[0.04]">
          <motion.div
            className="w-full rounded-full bg-gradient-to-b from-accent to-accent-light"
            style={{ height: progressPercent }}
          />
        </div>
      </div>
    </div>
  );
}

/* ─── A block that reveals based on scroll progress ─── */
function ScrollStageBlock({
  children,
  progress,
  showAt,
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
  showAt: number;
}) {
  const opacity = useTransform(
    progress,
    [showAt - 0.3, showAt, showAt + 0.7, showAt + 1],
    [0, 1, 1, showAt === 4 ? 1 : 0.3]
  );
  const y = useTransform(progress, [showAt - 0.3, showAt], [15, 0]);
  const scale = useTransform(progress, [showAt - 0.3, showAt], [0.97, 1]);

  return (
    <motion.div style={{ opacity, y, scale }}>
      {children}
    </motion.div>
  );
}

/* ─── Stage card ─── */
function StageCard({
  stage,
  index,
}: {
  stage: (typeof stages)[number];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative flex-1 rounded-2xl border border-white/[0.06] bg-bg-surface/50 px-5 py-4 transition-all duration-300 hover:border-accent/15 hover:bg-bg-surface"
    >
      <div className="mb-2 flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] transition-colors duration-300 group-hover:border-accent/20 group-hover:bg-accent/5">
          <stage.icon className="h-4.5 w-4.5 text-accent" />
        </div>
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-accent/60">
            Step {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-base font-semibold leading-tight text-fg">{stage.title}</h3>
        </div>
      </div>

      <p className="pl-12 text-sm leading-relaxed text-fg-secondary">
        {stage.description}
      </p>

      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-transparent via-accent/0 to-transparent transition-all duration-500 group-hover:via-accent/30" />
    </motion.div>
  );
}

/* ─── Sub-components ─── */

function VisualField({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2">
      <p className="text-[10px] font-medium uppercase tracking-wider text-fg-muted">
        {label}
      </p>
      <p
        className={`mt-0.5 text-sm font-medium ${accent ? "text-accent-light" : "text-fg"}`}
      >
        {value}
      </p>
    </div>
  );
}

function SignatureDrawing() {
  return (
    <motion.svg viewBox="0 0 240 50" className="h-8 w-40">
      <motion.path
        d="M8 38 C 18 8, 30 8, 42 28 S 60 45, 72 25 S 88 5, 100 20 S 112 38, 124 22 C 130 14, 138 12, 148 22 S 165 35, 178 20 S 190 10, 205 18 L 220 24"
        fill="none"
        stroke="url(#sigGrad2)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      />
      <defs>
        <linearGradient id="sigGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4B92A0" />
          <stop offset="50%" stopColor="#62B4B7" />
          <stop offset="100%" stopColor="#A2C6C4" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
