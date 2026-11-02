import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { AboutShinsei } from "@/components/AboutShinsei";
import { Standards5S } from "@/components/Standards5S";
import { FoodCoffee } from "@/components/FoodCoffee";
import { MealCalculator } from "@/components/MealCalculator";
import { ShinseiTravel } from "@/components/ShinseiTravel";
import { TestimonialsTrust } from "@/components/TestimonialsTrust";
import { ContactShinsei } from "@/components/ContactShinsei";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbf7ef] text-[#222222]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <AboutShinsei />
        <Standards5S />
        <FoodCoffee />
        <MealCalculator />
        <ShinseiTravel />
        <TestimonialsTrust />
        <ContactShinsei />
      </main>
      <Footer />
    </div>
  );
}
