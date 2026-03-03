import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { TracksSection } from "@/components/sections/tracks";
import { ScheduleSection } from "@/components/sections/schedule";
import { PrizesSection } from "@/components/sections/prizes";
import { FAQSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <TracksSection />
        <ScheduleSection />
        <PrizesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
