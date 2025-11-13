import Image from "next/image";
import Navbar from "@/components/Navbar";
import CitiesSection from "@/features/cities/section/CitiesSection";
import FreshSpaceSection from "@/features/offices/section/FreshSpaceSection";
import BenefitSection from "@/features/benefits/section/BenefitSection";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <CitiesSection />
      <BenefitSection />
      <FreshSpaceSection />
    </>

  );
}
