import { Navigation } from "@/components/navigation";
import { AnimatedBackground } from "@/components/animated-background";
import { HeroSection } from "@/components/hero-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { TimelineSection } from "@/components/timeline-section";
import { ProjectsSection } from "@/components/projects-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ValuesSection } from "@/components/values-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <AnimatedBackground />
      <Navigation />
      <HeroSection />
      <TimelineSection />
      <TechStackSection />
      <ProjectsSection />
      <ValuesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
