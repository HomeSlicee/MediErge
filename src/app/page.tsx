import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServiceCards from "@/components/ServiceCards";
import HowItWorks from "@/components/HowItWorks";
import WhyMediErge from "@/components/WhyMediErge";
import Testimonials from "@/components/Testimonials";
import DoctorPanel from "@/components/DoctorPanel";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServiceCards />
        <HowItWorks />
        <WhyMediErge />
        <DoctorPanel />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
