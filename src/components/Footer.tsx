import Image from "next/image";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Templates", href: "https://app.reisign.com/dashboard/templates" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Contact", href: "https://app.reisign.com/dashboard/support" },
  ],
  Legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-12 lg:py-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Logo & tagline */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center">
              <Image
                src="/logo-full.png"
                alt="REI Sign"
                width={818}
                height={264}
                className="h-13 w-auto"
              />
            </div>
            <p className="mt-3 max-w-[280px] text-sm leading-relaxed text-fg-muted">
              Contract management & e-signature platform built for real estate
              wholesalers.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="mb-3 text-sm font-semibold text-fg">
                {category}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-fg-muted transition-colors duration-200 hover:text-fg-secondary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-fg-muted">
            &copy; {new Date().getFullYear()} REI Sign. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://app.reisign.com/login"
              className="text-xs text-fg-muted transition-colors hover:text-fg-secondary"
            >
              Log In
            </a>
            <a
              href="https://app.reisign.com/signup"
              className="text-xs font-medium text-accent transition-colors hover:text-accent-light"
            >
              Sign Up Free
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
