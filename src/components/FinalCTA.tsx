"use client";

import { ArrowRight } from "lucide-react";
import { AnimateIn } from "./AnimateIn";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:py-32">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="animate-float-slow absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.12]"
          style={{
            background:
              "radial-gradient(circle, rgba(75, 146, 160, 0.6) 0%, transparent 55%)",
          }}
        />
        <div
          className="animate-float absolute bottom-0 right-[20%] h-[300px] w-[300px] rounded-full opacity-[0.08]"
          style={{
            background:
              "radial-gradient(circle, rgba(98, 180, 183, 0.7) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[700px] text-center">
        <AnimateIn>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to close{" "}
            <span className="text-gradient">more deals?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[460px] text-base text-fg-secondary lg:text-lg">
            Start creating professional contracts today. Free to use, no
            credit card required.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.15} className="mt-8">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://app.reisign.com/signup"
              className="glow-button inline-flex items-center gap-2.5 rounded-xl px-10 py-4 text-base font-semibold text-white"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <p className="mt-6 text-sm text-fg-muted">
            Free plan includes 2 contracts/month &middot; Upgrade anytime
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
