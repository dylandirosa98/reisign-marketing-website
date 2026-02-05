"use client";

import {
  FileText,
  Map,
  Sparkles,
  PenTool,
  Users,
  BarChart3,
} from "lucide-react";
import { AnimateIn, StaggerContainer, StaggerItem } from "./AnimateIn";

const features = [
  {
    icon: FileText,
    title: "Smart Contract Creation",
    description:
      "Multi-step guided workflow for purchase agreements and assignment contracts. Fill in property details, parties, and pricing — your contract is ready in minutes.",
    size: "large" as const,
    gradient: "from-accent-dark/20 to-transparent",
  },
  {
    icon: Map,
    title: "50-State Templates",
    description:
      "Pre-built, legally-formatted templates for every US state. State-specific language auto-selected based on your deal.",
    size: "small" as const,
    gradient: "from-accent/10 to-transparent",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Clauses",
    description:
      "Describe your deal in plain English. AI generates custom contract clauses tailored to your situation — inspection, financing, assignment rights, and more.",
    size: "small" as const,
    gradient: "from-accent-light/10 to-transparent",
  },
  {
    icon: PenTool,
    title: "Professional E-Signatures",
    description:
      "Send contracts for signature with one click. Signers don't need accounts — just a secure link in their email. Track status in real time from sent to signed.",
    size: "large" as const,
    gradient: "from-accent-muted/10 to-transparent",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Invite your team, assign roles, and standardize your workflow. Everyone shares a single workspace with isolated company data.",
    size: "small" as const,
    gradient: "from-accent-dark/15 to-transparent",
  },
  {
    icon: BarChart3,
    title: "Dashboard & Analytics",
    description:
      "See your deal pipeline at a glance. Track drafts, pending signatures, and completed contracts with real-time status updates.",
    size: "small" as const,
    gradient: "from-accent/10 to-transparent",
  },
];

export function FeatureBento() {
  return (
    <section id="features" className="relative px-6 py-24 lg:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="animate-pulse-glow absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(75, 146, 160, 0.08) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1200px]">
        {/* Section Header */}
        <AnimateIn className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-accent uppercase">
            Features
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Everything you need{" "}
            <span className="text-gradient">to close</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] text-base text-fg-secondary">
            From contract creation to signed PDF — every step of the wholesaling
            workflow, handled.
          </p>
        </AnimateIn>

        {/* Bento Grid */}
        <StaggerContainer
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5"
          staggerDelay={0.08}
        >
          {features.map((feature) => (
            <StaggerItem
              key={feature.title}
              className={
                feature.size === "large"
                  ? "md:col-span-2 lg:col-span-2"
                  : ""
              }
            >
              <div className="glass-card group relative h-full overflow-hidden rounded-2xl p-6 lg:p-8">
                {/* Gradient background */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                    <feature.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-fg">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-fg-secondary">
                    {feature.description}
                  </p>
                </div>

                {/* Hover border glow line — top */}
                <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent transition-all duration-500 group-hover:via-accent/30" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
