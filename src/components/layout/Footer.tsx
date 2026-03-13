import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const productLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <Container>
        <div className="grid grid-cols-1 gap-10 py-16 md:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/logos/kickdeck-white.png"
                alt="KickDeck"
                width={140}
                height={40}
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Flexible tournament management
              <br />
              built to keep up with the game.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Product
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@kickdeck.io"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  hello@kickdeck.io
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@kickdeck.io"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  support@kickdeck.io
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border py-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} KickDeck. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
