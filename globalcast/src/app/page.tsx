import FAQ from "@/componets/FAQ";
import Footer from "@/componets/Footer";
import HeroSection from "@/componets/HeroSection";
import Marque from "@/componets/Marque";
import RegisterForm from "@/componets/RegisterForm";
import { TestimonialShowcase } from "@/componets/TestimonialShowcase";
import VideoPlayer from "@/componets/VideoPlayer";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <Marque/>
    <TestimonialShowcase/>
    <VideoPlayer/>
    <RegisterForm/>
     <FAQ/>
    <Footer/>
    </>
  );
}
