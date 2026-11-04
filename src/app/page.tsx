import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { ServiceEcosystem } from "@/components/ServiceEcosystem";
import { AboutShinsei } from "@/components/AboutShinsei";
import { Standards5S } from "@/components/Standards5S";
import { ContactShinsei } from "@/components/ContactShinsei";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbf7ef] text-[#222222]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <ServiceEcosystem />
        <AboutShinsei />
        <Standards5S />
        <ContactShinsei />
      </main>
      <Footer />
    </div>
  );
}
