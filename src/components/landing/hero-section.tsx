import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-image");

  return (
    <section className="container grid lg:grid-cols-2 gap-10 items-center py-12 md:py-24 lg:py-32">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
          Take Control of Your
          <span className="text-primary"> Finances</span>
        </h1>
        <p className="max-w-[600px] text-muted-foreground md:text-xl">
          FinTrack is the simplest way to manage your personal finances. Track
          your spending, create budgets, and achieve your financial goals with
          ease.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="/dashboard">Get Started for Free</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#">Learn More</Link>
          </Button>
        </div>
      </div>
      <div className="flex justify-center">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="FinTrack Dashboard"
            width={1200}
            height={800}
            className="rounded-lg shadow-2xl"
            data-ai-hint={heroImage.imageHint}
          />
        )}
      </div>
    </section>
  );
}