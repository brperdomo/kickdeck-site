"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

const getStartedSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().min(2, "Organization name must be at least 2 characters"),
  interest: z.string().max(1000, "Must be under 1000 characters").optional(),
});

type GetStartedFormData = z.infer<typeof getStartedSchema>;

type FormStatus = "idle" | "submitting" | "success" | "error";

export function GetStartedForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<GetStartedFormData>({
    resolver: zodResolver(getStartedSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      interest: "",
    },
  });

  const onSubmit = async (data: GetStartedFormData) => {
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/get-started", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Something went wrong");
      }

      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="glass-card p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
          <svg
            className="h-6 w-6 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-foreground">Request Received!</h3>
        <p className="mt-2 text-muted-foreground">
          Thanks for your interest in KickDeck! Our team will reach out within
          24 hours to get you started.
        </p>
        <Button
          className="mt-6"
          variant="secondary"
          onClick={() => setStatus("idle")}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="gs-name" className="text-sm font-medium text-foreground mb-1.5 block">
          Full Name
        </label>
        <Input
          id="gs-name"
          placeholder="Your name"
          {...register("name")}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="gs-email" className="text-sm font-medium text-foreground mb-1.5 block">
          Email
        </label>
        <Input
          id="gs-email"
          type="email"
          placeholder="you@example.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>

      {/* Organization */}
      <div>
        <label htmlFor="gs-org" className="text-sm font-medium text-foreground mb-1.5 block">
          Organization
        </label>
        <Input
          id="gs-org"
          placeholder="Your club, league, or organization"
          {...register("organization")}
        />
        {errors.organization && (
          <p className="mt-1 text-sm text-red-400">{errors.organization.message}</p>
        )}
      </div>

      {/* Interest (optional) */}
      <div>
        <label htmlFor="gs-interest" className="text-sm font-medium text-foreground mb-1.5 block">
          What are you most interested in? <span className="text-muted-foreground">(optional)</span>
        </label>
        <Textarea
          id="gs-interest"
          placeholder="e.g. AI scheduling, payment processing, a specific feature you'd like to see..."
          rows={4}
          {...register("interest")}
        />
        {errors.interest && (
          <p className="mt-1 text-sm text-red-400">{errors.interest.message}</p>
        )}
      </div>

      {/* Error message */}
      {status === "error" && (
        <div className="rounded-lg bg-red-500/10 p-3 text-sm text-red-400">
          {errorMessage}
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        className="w-full"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <svg
              className="h-4 w-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Submitting...
          </>
        ) : (
          "Request Free Trial"
        )}
      </Button>
    </form>
  );
}
