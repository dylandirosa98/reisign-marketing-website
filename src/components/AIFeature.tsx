"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles,
  FileText,
  Scale,
  ShieldCheck,
  Handshake,
  ArrowRight,
} from "lucide-react";
import { AnimateIn } from "./AnimateIn";

const clauseTypes = [
  { icon: ShieldCheck, label: "As-Is Condition" },
  { icon: Scale, label: "Inspection Contingency" },
  { icon: FileText, label: "Financing Contingency" },
  { icon: Handshake, label: "Assignment Rights" },
];

export function AIFeature() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden px-6 py-24 lg:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute top-0 left-1/4 h-[400px] w-[600px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(98, 180, 183, 0.8) 0%, transparent 60%)",
          }}
        />
      </div>

      <div ref={ref} className="relative mx-auto max-w-[1200px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Copy */}
          <div>
            <AnimateIn>
              <p className="mb-3 text-sm font-semibold tracking-wide text-accent uppercase">
                AI-Powered
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Clauses that{" "}
                <span className="text-gradient">understand your deal</span>
              </h2>
              <p className="mt-4 max-w-[440px] text-base leading-relaxed text-fg-secondary">
                Describe your situation in plain English. Our AI generates
                custom contract clauses tailored to your specific deal —
                review, edit, and approve each one before it&apos;s added
                to your contract.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.2} className="mt-8">
              <a
                href="https://app.reisign.com/signup"
                className="group inline-flex items-center gap-2 rounded-xl border border-accent/20 bg-accent/5 px-6 py-3 text-sm font-semibold text-accent transition-all duration-300 hover:border-accent/30 hover:bg-accent/10"
              >
                Try AI Clauses Free
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </AnimateIn>
          </div>

          {/* Right — Visual "OS panel" */}
          <AnimateIn delay={0.15} direction="left">
            <div className="glass-card relative overflow-hidden rounded-2xl p-1">
              {/* Panel header */}
              <div className="flex items-center gap-3 rounded-t-xl border-b border-white/[0.06] bg-white/[0.02] px-5 py-3">
                <Sparkles className="h-4 w-4 text-accent-light" />
                <span className="text-sm font-medium text-fg-secondary">
                  AI Clause Generator
                </span>
              </div>

              {/* Panel body */}
              <div className="space-y-4 p-5">
                {/* Input area mock */}
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <p className="text-xs font-medium text-fg-muted uppercase tracking-wide mb-2">
                    Deal Description
                  </p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-sm leading-relaxed text-fg-secondary"
                  >
                    &ldquo;Purchasing a distressed property as-is in Florida.
                    Seller needs to close within 21 days. Property has a
                    tenant with a month-to-month lease.&rdquo;
                  </motion.p>
                </div>

                {/* Generated clauses */}
                <div className="space-y-2.5">
                  {clauseTypes.map((clause, i) => (
                    <motion.div
                      key={clause.label}
                      initial={{ opacity: 0, x: 12 }}
                      animate={
                        isInView
                          ? { opacity: 1, x: 0 }
                          : {}
                      }
                      transition={{
                        duration: 0.5,
                        delay: 1.0 + i * 0.15,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3 transition-colors duration-200 hover:border-accent/15 hover:bg-white/[0.03]"
                    >
                      <div className="flex items-center gap-3">
                        <clause.icon className="h-4 w-4 text-accent/70" />
                        <span className="text-sm font-medium text-fg">
                          {clause.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-md bg-success/10 px-2 py-0.5 text-xs font-medium text-success">
                          Generated
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Status bar */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  className="flex items-center justify-between pt-2"
                >
                  <span className="text-xs text-fg-muted">
                    4 clauses generated
                  </span>
                  <span className="text-xs font-medium text-accent">
                    Powered by GPT-4
                  </span>
                </motion.div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
