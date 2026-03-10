import { getFeaturedCaseStudies } from "@/lib/content";
import HeroSection from "@/components/home/HeroSection";
import LogoStrip from "@/components/home/LogoStrip";
import ServicesSection from "@/components/home/ServicesSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import TeamSection from "@/components/home/TeamSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  const featuredCaseStudies = getFeaturedCaseStudies(3);

  return (
    <>
      <HeroSection />
      <LogoStrip />
      <ServicesSection />
      <CaseStudiesSection caseStudies={featuredCaseStudies} />
      <TeamSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
