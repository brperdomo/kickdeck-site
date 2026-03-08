import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <GradientText as="h1" className="text-8xl font-bold">
        404
      </GradientText>
      <h2 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
        Page Not Found
      </h2>
      <p className="mt-2 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8">
        <Button href="/">Go Home</Button>
      </div>
    </main>
  );
}
