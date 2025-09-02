import { useState } from "react";
import Hero from "@/components/Hero";
import Program from "@/components/Program";
import Benefits from "@/components/Benefits";
import Creator from "@/components/Creator";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WelcomeScreen from "@/components/WelcomeScreen";

const Index = () => {
  const [hasCompletedWelcome, setHasCompletedWelcome] = useState(false);

  const handleWelcomeComplete = (selection: string) => {
    console.log("Usuario seleccionó:", selection);
    setHasCompletedWelcome(true);
  };

  if (!hasCompletedWelcome) {
    return <WelcomeScreen onComplete={handleWelcomeComplete} />;
  }

  return (
    <div className="min-h-screen">
      <Hero />
      <Program />
      <Benefits />
      <Creator />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
