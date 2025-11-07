import { HeroSection } from "./components/HeroSection";
import { DilemmaSection } from "./components/DilemmaSection";
import { ToarSection } from "./components/ToarSection";
import { VictimsVictorySection } from "./components/VictimsVictorySection";
import { VoicesSection } from "./components/VoicesSection";
import { ReflectionSection } from "./components/ReflectionSection";
import { PsychosocialSection } from "./components/PsychosocialSection";
import { FooterSection } from "./components/FooterSection";

export default function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <DilemmaSection />
      <ToarSection />
      <VictimsVictorySection />
      <VoicesSection />
      <ReflectionSection />
      <PsychosocialSection />
      <FooterSection />
    </div>
  );
}
