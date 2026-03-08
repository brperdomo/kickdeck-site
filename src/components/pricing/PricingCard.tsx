import { Check } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { PricingTier } from "@/lib/constants";
import { APP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  tier: PricingTier;
}

export function PricingCard({ tier }: PricingCardProps) {
  const ctaHref = tier.name === "Enterprise" ? "/contact" : APP_URL;

  return (
    <div
      className={cn(
        "glass-card flex flex-col p-8",
        tier.highlighted && "gradient-border animate-pulse-glow",
      )}
    >
      {/* Badge */}
      {tier.badge && (
        <div className="mb-4">
          <Badge>{tier.badge}</Badge>
        </div>
      )}

      {/* Name */}
      <h3 className="text-xl font-semibold">{tier.name}</h3>

      {/* Price */}
      <div className="mt-4 flex items-baseline gap-1">
        {tier.price !== null ? (
          <>
            <span className="text-5xl font-bold tracking-tight">
              ${tier.price}
            </span>
            <span className="text-muted-foreground">/mo</span>
          </>
        ) : (
          <span className="text-5xl font-bold tracking-tight">Custom</span>
        )}
      </div>

      {/* Description */}
      <p className="mt-4 text-sm text-muted-foreground">{tier.description}</p>

      {/* Feature list */}
      <ul className="mt-8 flex-1 space-y-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-8">
        <Button
          href={ctaHref}
          variant={tier.highlighted ? "primary" : "secondary"}
          className="w-full"
        >
          {tier.cta}
        </Button>
      </div>
    </div>
  );
}
