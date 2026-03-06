"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Sparkles,
  PenTool,
  Send,
  CheckCircle2,
} from "lucide-react";
import { AnimateIn } from "./AnimateIn";

const stages = [
  {
    key: "create",
    icon: FileText,
    title: "Start your contract",
    description:
      "Choose a template, enter your deal details, and your contract is auto-populated with the right language for your state.",
  },
  {
    key: "ai",
    icon: Sparkles,
    title: "Add AI clauses",
    description:
      "Describe your deal situation and let AI generate custom clauses — as-is condition, inspection, financing, assignment rights.",
  },
  {
    key: "sign",
    icon: PenTool,
    title: "Sign your part",
    description:
      "Draw or type your signature directly in the contract. Add initials and company information.",
  },
  {
    key: "send",
    icon: Send,
    title: "Send for signature",
    description:
      "Enter the signer's email and send. They receive a secure link — no account needed, no app to download.",
  },
  {
    key: "done",
    icon: CheckCircle2,
    title: "Deal closed",
    description:
      "Track real-time status as your contract moves from sent to viewed to signed. Download the executed PDF.",
  },
];

export function SigningProcess() {
  return (
    <section className="relative px-6 py-24 lg:py-32">
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

      <div className="relative mx-auto max-w-[900px]">
        {/* Header */}
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

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent/20 to-transparent lg:left-6" />

          <div className="space-y-6">
            {stages.map((stage, i) => (
              <AnimateIn key={stage.key} delay={i * 0.08}>
                <div className="relative flex gap-6 lg:gap-8">
                  {/* Icon + connector dot */}
                  <div className="relative flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-bg-surface shadow-sm lg:h-12 lg:w-12">
                      <stage.icon className="h-4.5 w-4.5 text-accent lg:h-5 lg:w-5" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-2xl border border-white/[0.06] bg-bg-surface/50 px-5 py-4">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-accent/60">
                        Step {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-fg">
                      {stage.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-fg-secondary">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
