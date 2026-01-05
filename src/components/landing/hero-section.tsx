import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-28">
      <div className="space-y-6 animate-fade-in-up">
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
        </div>
      </div>
      <div className="flex justify-center animate-fade-in">
        <Image
          src="https://picsum.photos/seed/hero/1200/800"
          alt="FinTrack Dashboard"
          width={1200}
          height={800}
          className="rounded-lg shadow-2xl"
          data-ai-hint="finance dashboard"
        />
      </div>
    </section>
  );
}