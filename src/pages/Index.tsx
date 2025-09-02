import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Program from "@/components/Program";
import Benefits from "@/components/Benefits";
import Creator from "@/components/Creator";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WelcomeScreen from "@/components/WelcomeScreen";
import { useContent } from "@/contexts/ContentContext";

const Index = () => {
  const [hasCompletedWelcome, setHasCompletedWelcome] = useState(false);
  const [userProfile, setUserProfile] = useState<string>("");
  const { setContent } = useContent();

  // Cargar datos existentes al montar el componente
  useEffect(() => {
    const savedWelcomeStatus = localStorage.getItem('optimusWelcomeCompleted');
    const savedProfile = localStorage.getItem('optimusUserProfile');
    const savedContent = localStorage.getItem('optimusDynamicContent');

    if (savedWelcomeStatus === 'true' && savedProfile) {
      setHasCompletedWelcome(true);
      setUserProfile(savedProfile);
      
      // Cargar contenido dinámico si existe
      if (savedContent) {
        try {
          const dynamicContent = JSON.parse(savedContent);
          setContent(dynamicContent);
        } catch (error) {
          console.error('Error parsing saved content:', error);
        }
      }
    }
  }, [setContent]);

  const handleWelcomeComplete = async (selection: string) => {
    try {
      // Obtener país del usuario usando una API de geolocalización
      const getCountry = async () => {
        try {
          const response = await fetch('https://ipapi.co/json/');
          const data = await response.json();
          return data.country_name || 'Unknown';
        } catch (error) {
          console.error('Error getting country:', error);
          return 'Unknown';
        }
      };

      const country = await getCountry();
      
      // Enviar datos al webhook
      const webhookResponse = await fetch('https://optimussync.app.n8n.cloud/webhook/8e364aab-9cd7-44f1-bce6-4787192df2c6', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_type: selection,
          country: country,
          timestamp: new Date().toISOString()
        }),
      });

      if (!webhookResponse.ok) {
        throw new Error('Webhook request failed');
      }

      const dynamicContent = await webhookResponse.json();
      
      // Establecer el contenido dinámico en el contexto
      setContent(dynamicContent);
      
      // Guardar la selección del usuario en el estado
      setUserProfile(selection);
      setHasCompletedWelcome(true);
      
      // También guardar en localStorage para persistencia
      localStorage.setItem('optimusUserProfile', selection);
      localStorage.setItem('optimusWelcomeCompleted', 'true');
      localStorage.setItem('optimusDynamicContent', JSON.stringify(dynamicContent));
      
      console.log("Usuario se identificó como:", selection);
      console.log("País:", country);
      console.log("Contenido dinámico recibido:", dynamicContent);
      
    } catch (error) {
      console.error('Error in welcome completion:', error);
      // En caso de error, continúa con contenido estático
      setUserProfile(selection);
      setHasCompletedWelcome(true);
      localStorage.setItem('optimusUserProfile', selection);
      localStorage.setItem('optimusWelcomeCompleted', 'true');
    }
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
