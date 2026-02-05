"use client";

import {
  ClipboardList,
  FileCheck,
  Sparkles,
  PenTool,
  Send,
  Eye,
  Download,
} from "lucide-react";
import { AnimateIn, StaggerContainer, StaggerItem } from "./AnimateIn";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Enter Deal Details",
    description:
      "Property address, seller info, buyer info, and pricing — all in a guided form.",
  },
  {
    number: "02",
    icon: FileCheck,
    title: "Choose Your Template",
    description:
      "Purchase agreement or assignment contract. State-specific template auto-selected.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Customize with AI",
    description:
      "Generate custom clauses for your deal. Edit, approve, or reject each one.",
  },
  {
    number: "04",
    icon: PenTool,
    title: "Sign Your Part",
    description:
      "Draw or type your signature and initials. Add your company information.",
  },
  {
    number: "05",
    icon: Send,
    title: "Send for Signature",
    description:
      "Enter signer details and send. They get a secure link — no account needed.",
  },
  {
    number: "06",
    icon: Eye,
    title: "Track in Real Time",
    description:
      "Watch your contract move from Sent to Viewed to Completed. Resend if needed.",
  },
  {
    number: "07",
    icon: Download,
    title: "Download Signed PDF",
    description:
      "Fully executed document stored securely and available for download anytime.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative px-6 py-24 lg:py-32">
      {/* Section divider */}
      <div className="section-divider mx-auto mb-24 max-w-[600px] lg:mb-32" />

      <div className="relative mx-auto max-w-[1200px]">
        {/* Section Header */}
        <AnimateIn className="mb-16 text-center lg:mb-20">
          <p className="mb-3 text-sm font-semibold tracking-wide text-accent uppercase">
            How It Works
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            From draft to signed{" "}
            <span className="text-gradient">in minutes</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] text-base text-fg-secondary">
            Seven simple steps. That&apos;s all it takes to create, sign, and
            close a professional real estate contract.
          </p>
        </AnimateIn>

        {/* Steps Grid */}
        <StaggerContainer
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
          staggerDelay={0.06}
        >
          {steps.map((step, i) => (
            <StaggerItem
              key={step.number}
              className={
                i >= 4 ? "sm:col-span-1 lg:col-span-1" : ""
              }
            >
              <div className="glass-card group relative h-full overflow-hidden rounded-2xl p-6">
                {/* Step number */}
                <span className="mb-4 block font-mono text-xs font-semibold text-accent/60">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] transition-colors duration-300 group-hover:border-accent/20 group-hover:bg-accent/5">
                  <step.icon className="h-5 w-5 text-accent transition-colors" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-base font-semibold text-fg">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-fg-secondary">
                  {step.description}
                </p>

                {/* Connecting line (visual) */}
                {i < steps.length - 1 && (
                  <div className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-5 -translate-y-1/2 translate-x-full bg-gradient-to-r from-accent/20 to-transparent lg:block" />
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <AnimateIn delay={0.6} className="mt-12 text-center">
          <a
            href="https://app.reisign.com/signup"
            className="group inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-light"
          >
            Start your first contract
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              &rarr;
            </span>
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
