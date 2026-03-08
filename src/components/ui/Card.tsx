import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  className?: string;
  children: ReactNode;
  highlighted?: boolean;
}

export function Card({ className, children, highlighted = false }: CardProps) {
  return (
    <div
      className={cn(
        "glass-card p-6",
        highlighted && "gradient-border",
        className
      )}
    >
      {children}
    </div>
  );
}
