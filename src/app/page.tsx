import { HeroSection } from "@/components/landing/hero-section";
import { AppHeader } from "@/components/layout/app-header-landing";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-1">
        <HeroSection />
      </main>
    </div>
  );
}
