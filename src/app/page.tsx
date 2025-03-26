import FeatureCourses from "@/components/FeatureCourses";
import HeroSection from "@/components/HeroSection";
import { Instructors } from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="min-h-screen antialiased bg-black/[0.95] bg-grid-white/[0.02]">
       
        <HeroSection/>
        <FeatureCourses/>
        <WhyChooseUs/>
        <MusicSchoolTestimonials/>
        <UpcomingWebinars/>
        <Instructors/>
      </main>
    </>
  );
}
