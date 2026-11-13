import AboutSection from "@/components/home/AboutSection";
import Banner from "@/components/home/Banner";
import ChooseUsSection from "@/components/home/ChooseUsSection";
import FaqSection from "@/components/home/FaqSection";
import ServicesSection from "@/components/home/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutSection isPadding={true} />
      <ServicesSection />
      <ChooseUsSection />
      <FaqSection />
    </>
  );
}
