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
  const [userProfile, setUserProfile] = useState<string>("");

  const handleWelcomeComplete = (selection: string) => {
    // Guardar la selección del usuario en el estado
    setUserProfile(selection);
    setHasCompletedWelcome(true);
    
    // También guardar en localStorage para persistencia
    localStorage.setItem('optimusUserProfile', selection);
    localStorage.setItem('optimusWelcomeCompleted', 'true');
    
    console.log("Usuario se identificó como:", selection);
  };

  if (!hasCompletedWelcome) {
    return <WelcomeScreen onComplete={handleWelcomeComplete} />;
  }

  return (
    <div className="min-h-screen animate-fade-in">
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
