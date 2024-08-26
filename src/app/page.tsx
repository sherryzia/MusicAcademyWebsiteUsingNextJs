import HeroSection from "@/components/HeroSection";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import MeetOurInstructors from "@/components/MeetOurInstructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
<main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialCards/>
      <UpcomingWebinar/>
      <MeetOurInstructors/>
      <Footer/>
</main>  );
}
