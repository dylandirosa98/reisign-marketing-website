"use client";

import { Check, ArrowRight } from "lucide-react";
import { AnimateIn, StaggerContainer, StaggerItem } from "./AnimateIn";

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlighted?: boolean;
  badge?: string;
}

const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "Try it out with basic features",
    features: [
      "2 contracts per month",
      "1 user",
      "Basic templates",
      "E-signature workflow",
      "PDF downloads",
    ],
    cta: "Get Started",
    href: "https://app.reisign.com/signup",
  },
  {
    name: "Standard",
    price: "$39",
    period: "/mo",
    description: "For solo wholesalers closing deals",
    features: [
      "5 contracts per month",
      "1 user",
      "All 50 state templates",
      "Custom templates",
      "AI clause generation",
      "AI template generation",
      "Priority support",
      "$1.49 per extra contract",
    ],
    cta: "Start Free Trial",
    href: "https://app.reisign.com/signup",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Teams",
    price: "$59",
    period: "/mo",
    description: "For growing wholesaling teams",
    features: [
      "10 contracts per month",
      "3 team members",
      "All 50 state templates",
      "Custom templates",
      "AI clause generation",
      "Role-based access",
      "Priority support",
      "$0.97 per extra contract",
      "$19/mo per extra seat",
    ],
    cta: "Start Free Trial",
    href: "https://app.reisign.com/signup",
  },
  {
    name: "Enterprise",
    price: "$129",
    period: "/mo",
    description: "For high-volume operations",
    features: [
      "300 contracts per month",
      "4 team members",
      "All 50 state templates",
      "Custom templates",
      "AI clause generation",
      "Custom branding",
      "API access",
      "Dedicated support",
      "$0.97 per extra contract",
      "$19/mo per extra seat",
    ],
    cta: "Start Free Trial",
    href: "https://app.reisign.com/signup",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative px-6 py-24 lg:py-32">
      {/* Section divider */}
      <div className="section-divider mx-auto mb-24 max-w-[600px] lg:mb-32" />

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(75, 146, 160, 0.8) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1200px]">
        {/* Section Header */}
        <AnimateIn className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-accent uppercase">
            Pricing
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Simple,{" "}
            <span className="text-gradient">transparent pricing</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[400px] text-base text-fg-secondary">
            Start free. Scale as you grow. No hidden fees.
          </p>
        </AnimateIn>

        {/* Pricing Grid */}
        <StaggerContainer
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.08}
        >
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <div
                className={`glass-card relative flex h-full flex-col overflow-hidden rounded-2xl p-6 ${
                  plan.highlighted
                    ? "border-accent/25 bg-accent/[0.04]"
                    : ""
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute top-0 right-0 rounded-bl-xl bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                    {plan.badge}
                  </div>
                )}

                {/* Plan name */}
                <p className="text-sm font-semibold text-accent">
                  {plan.name}
                </p>

                {/* Price */}
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-fg">
                    {plan.price}
                  </span>
                  <span className="text-sm text-fg-muted">{plan.period}</span>
                </div>

                {/* Description */}
                <p className="mt-2 text-sm text-fg-secondary">
                  {plan.description}
                </p>

                {/* Divider */}
                <div className="my-6 h-px bg-white/[0.06]" />

                {/* Features */}
                <ul className="flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-fg-secondary"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent/70" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={plan.href}
                  className={`mt-6 flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? "glow-button text-white"
                      : "border border-white/[0.1] bg-white/[0.03] text-fg hover:border-white/[0.15] hover:bg-white/[0.05]"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
