import ContactSection from "@/app/components/ContactSection"
import GallerySection from "@/app/components/GallerySection";
import HeaderSection from "@/app/components/HeaderSection";
import Logobar from "@/app/components/Logobar";
import Navigation from "@/app/components/Navigation";
import SkillSection from "@/app/components/SkillSection";
import TestimonialSection from "@/app/components/TestimonialSection";

export default function Home ()
{
  return (
    <div className="text-fs17 bg-white text-[#2D2D2D]">
      <Navigation />
      <HeaderSection />
      <Logobar />
      <SkillSection />
      <GallerySection />
      <TestimonialSection />
      <ContactSection />
    </div>
  );
}
