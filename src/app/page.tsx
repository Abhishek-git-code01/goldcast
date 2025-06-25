import FAQ from "@/componets/FAQ";
import Footer from "@/componets/Footer";
import HeroSection from "@/componets/HeroSection";
import Marque from "@/componets/Marque";
import RegisterForm from "@/componets/RegisterForm";
import { TestimonialShowcase } from "@/componets/TestimonialShowcase";
import VideoPlayer from "@/componets/VideoPlayer";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Marque />
      <Suspense fallback={<div className="text-white text-center py-10">Loading testimonials...</div>}>
        <TestimonialShowcase />
      </Suspense>
      <Suspense fallback={<div className="text-white text-center py-10">Loading video...</div>}>
        <VideoPlayer />
      </Suspense>
      <RegisterForm />
      <Suspense fallback={<div className="text-white text-center py-10">Loading FAQs...</div>}>
        <FAQ />
      </Suspense>
      <Footer />
    </>
  );
}
