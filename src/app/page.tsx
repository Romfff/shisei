import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { BentoPhilosophy } from "@/components/BentoPhilosophy";
import { InteractiveMenu } from "@/components/InteractiveMenu";
import { ProductionProcess } from "@/components/ProductionProcess";
import { MealCalculator } from "@/components/MealCalculator";
import { TestimonialsTrust } from "@/components/TestimonialsTrust";
import { TastingForm } from "@/components/TastingForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbf9] text-[#191c1f]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <BentoPhilosophy />
        <InteractiveMenu />
        <ProductionProcess />
        <MealCalculator />
        <TestimonialsTrust />
        <TastingForm />
      </main>
      <Footer />
    </div>
  );
}
