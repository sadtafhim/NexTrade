import CategoryGrid from "@/Components/CategoryGrid";
import Hero from "@/Components/Hero";
import HowItWorks from "@/Components/HowItWorks";
import LogoCloud from "@/Components/LogoCloud";
import SellerCTA from "@/Components/SellerCTA";
import Trust from "@/Components/Trust";
import Image from "next/image";

export default function Home() {
  return <div className="">
    <Hero></Hero>
    <Trust></Trust>
    <CategoryGrid></CategoryGrid>
    <LogoCloud></LogoCloud>
    <HowItWorks></HowItWorks>
    <SellerCTA></SellerCTA>
  </div>;
}
