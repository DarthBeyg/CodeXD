import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}