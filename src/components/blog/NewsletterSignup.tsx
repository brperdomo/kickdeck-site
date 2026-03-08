"use client";

import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function NewsletterSignup() {
  return (
    <Card className="mx-auto max-w-2xl p-8 text-center">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        Stay Updated
      </h2>
      <p className="mt-2 text-muted-foreground">
        Get the latest articles and tournament management tips delivered to your
        inbox.
      </p>
      <form
        className="mt-6 flex flex-col gap-3 sm:flex-row"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          type="email"
          placeholder="you@example.com"
          className="flex-1"
          required
        />
        <Button type="submit" className="shrink-0">
          Subscribe
        </Button>
      </form>
    </Card>
  );
}
