import { infos } from "@/config/landing";
import Features from "@/components/sections/features";
import HeroLanding from "@/components/sections/hero-landing";
import InfoLanding from "@/components/sections/info-landing";
import Powered from "@/components/sections/powered";
import PreviewLanding from "@/components/sections/preview-landing";
import Testimonials from "@/components/sections/testimonials";
import "../animations.css";

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroLanding />
      <PreviewLanding />
      <Powered />
      <InfoLanding data={infos[0]} />
      <Features />
      <Testimonials />
    </div>
  );
}