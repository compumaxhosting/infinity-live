import OurServices from "../components/servicesSection/OurServices";
import CarouselSection from "../components/carouselSection/CarouselSection";
import Footer from "../components/Footer";
import HeaderTwo from "../components/headerSection/HeaderTwo";
import HeroSection from "../components/Hero";
import MapComponent from "../components/MapComponent";
import ServicesSection from "@/components/ContactSection";
import SocialLinks from "@/components/SocialLinks";
import OurTestimonial from "@/components/OurTestimonial";
import OurAffiliatesSection from "@/components/OurAffiliatesSection";
import ContactScroll from "@/components/extras/ContactScroll";
import PhoneCall from "@/components/PhoneCall";
import FaqHomeSection from "@/components/FaqHomeSection";

export default function Home() {
  return (
    <>
      {/* Page Sections */}
      <HeaderTwo />
      <CarouselSection />
      <HeroSection />
      <OurServices />
      <FaqHomeSection />
      <OurTestimonial />
      <OurAffiliatesSection />
      <ServicesSection />
      <SocialLinks />
      <ContactScroll />
      <MapComponent />
      <Footer />
      <PhoneCall />
    </>
  );
}
