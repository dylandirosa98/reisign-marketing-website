"use client";

import {
  Shield,
  MapPin,
  Sparkles,
  UserCheck,
} from "lucide-react";
import { StaggerContainer, StaggerItem } from "./AnimateIn";

const trustItems = [
  {
    icon: MapPin,
    label: "All 50 States",
    description: "Templates for every state",
  },
  {
    icon: Shield,
    label: "Bank-Level Security",
    description: "256-bit encryption",
  },
  {
    icon: Sparkles,
    label: "AI-Powered",
    description: "Smart clause generation",
  },
  {
    icon: UserCheck,
    label: "No Signer Accounts",
    description: "Just click and sign",
  },
];

export function TrustStrip() {
  return (
    <section className="relative px-6 py-20">
      <div className="section-divider mx-auto mb-16 max-w-[600px]" />
      <StaggerContainer
        className="mx-auto grid max-w-[1000px] grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8"
        staggerDelay={0.08}
      >
        {trustItems.map((item) => (
          <StaggerItem
            key={item.label}
            className="flex flex-col items-center gap-3 text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03]">
              <item.icon className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-sm font-semibold text-fg">{item.label}</p>
              <p className="mt-0.5 text-xs text-fg-muted">{item.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
