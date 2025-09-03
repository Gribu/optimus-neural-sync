import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Program from "@/components/Program";
import Benefits from "@/components/Benefits";
import Creator from "@/components/Creator";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WelcomeScreen from "@/components/WelcomeScreen";
import { useContent, DynamicContent } from "@/contexts/ContentContext";

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

  const mapWebhookToContent = (webhookResponse: any): DynamicContent => {
    const content = webhookResponse[0]?.content || {};
    const userType = webhookResponse[0]?.normalizedUserType || 'unknown';
    
    console.log('Mapping webhook content for user type:', userType);
    console.log('Raw webhook response:', webhookResponse);
    
    return {
      hero: {
        title: content.hero_titulo ?? "Descubre el Sistema para Reprogramar tu Mente y Acelerar tus Metas",
        subtitle: content.hero_subtitulo ?? "PROGRAMA OPTIMUS", 
        description: content.hero_descripcion ?? "La Sincronización Neuronal: Programa de alto impacto para reprogramar la mente, eliminar bloqueos y alcanzar metas más rápido.",
        cta_primary: content.hero_boton_aplicar_etiqueta ?? "Aplicar al Programa",
        cta_secondary: content.hero_boton_testimonios_etiqueta ?? "Ver Testimonios",
        badge: content.hero_insignia_resultados_etiqueta ?? "Resultados Garantizados",
        stats: {
          days: String(content.hero_estadistica_1_valor ?? "7-14"),
          days_label: content.hero_estadistica_1_etiqueta ?? "Días inicio",
          guarantee: String(content.hero_estadistica_2_valor ?? "100%"),
          guarantee_label: content.hero_estadistica_2_etiqueta ?? "Garantía",
          coaching: String(content.hero_estadistica_3_valor ?? "1:1"),
          coaching_label: content.hero_estadistica_3_etiqueta ?? "Coaching",
        }
      },
      program: {
        title: content.programa_titulo ?? "¿Qué es el Programa Optimus?",
        description: content.programa_subtitulo ?? "Un sistema integral de sincronización neuronal diseñado para líderes y emprendedores que buscan resultados excepcionales en tiempo récord.",
        confirmation: content.programa_mensaje_confirmacion ?? "Sistema probado con resultados medibles y garantizados",
        features: [
          { title: content.programa_caracteristica_1_titulo ?? "Inicio acelerado en 7-14 días", description: content.programa_caracteristica_1_descripcion ?? "Resultados visibles desde las primeras semanas" },
          { title: content.programa_caracteristica_2_titulo ?? "Definición de metas de alto impacto", description: content.programa_caracteristica_2_descripcion ?? "Estrategias precisas para objetivos ambiciosos" },
          { title: content.programa_caracteristica_3_titulo ?? "Reprogramación mental y eliminación de bloqueos", description: content.programa_caracteristica_3_descripcion ?? "Técnicas avanzadas de sincronización neuronal" },
          { title: content.programa_caracteristica_4_titulo ?? "Optimización de la matriz mental", description: content.programa_caracteristica_4_descripcion ?? "Reconfiguración de patrones limitantes" },
          { title: content.programa_caracteristica_5_titulo ?? "Acompañamiento 1-a-1 con coach experto", description: content.programa_caracteristica_5_descripcion ?? "Sesiones personalizadas de alto valor" },
          { title: content.programa_caracteristica_6_titulo ?? "Sesiones grupales con Nelson Abdul", description: content.programa_caracteristica_6_descripcion ?? "Aprendizaje directo del creador del método" },
          { title: content.programa_caracteristica_7_titulo ?? "Acceso a la plataforma Optimus", description: content.programa_caracteristica_7_descripcion ?? "Herramientas digitales exclusivas" },
          { title: content.programa_caracteristica_8_titulo ?? "Red de apoyo entre líderes y emprendedores", description: content.programa_caracteristica_8_descripcion ?? "Comunidad de alto rendimiento" },
          { title: content.programa_caracteristica_9_titulo ?? "Garantía de resultados (100% devolución en 30 días)", description: content.programa_caracteristica_9_descripcion ?? "Compromiso total con tu transformación" },
          { title: content.programa_caracteristica_10_titulo ?? "Certificación en Liderazgo Optimus", description: content.programa_caracteristica_10_descripcion ?? "Acreditación oficial del programa" }
        ]
      },
      benefits: {
        title: content.beneficios_titulo ?? "Beneficios que Transforman Vidas",
        description: content.beneficios_subtitulo ?? "Cada elemento del programa está diseñado para maximizar tu potencial y acelerar tus resultados.",
        items: [
          { title: content.beneficios_item_1_titulo ?? "Reprogramación Acelerada", description: content.beneficios_item_1_descripcion ?? "Elimina patrones limitantes en tiempo récord con técnicas de sincronización neuronal avanzada." },
          { title: content.beneficios_item_2_titulo ?? "Metas de Alto Impacto", description: content.beneficios_item_2_descripcion ?? "Define y alcanza objetivos ambiciosos con estrategias probadas de alto rendimiento." },
          { title: content.beneficios_item_3_titulo ?? "Red de Liderazgo Elite", description: content.beneficios_item_3_descripcion ?? "Conecta con una comunidad exclusiva de líderes y emprendedores de alto calibre." },
          { title: content.beneficios_item_4_titulo ?? "Resultados Tangibles", description: content.beneficios_item_4_descripcion ?? "Obtén transformaciones medibles y duraderas respaldadas por ciencia neurológica." },
          { title: content.beneficios_item_5_titulo ?? "Garantía Total", description: content.beneficios_item_5_descripcion ?? "100% de devolución en 30 días si no experimentas los resultados prometidos." },
          { title: content.beneficios_item_6_titulo ?? "Certificación Oficial", description: content.beneficios_item_6_descripcion ?? "Recibe tu certificación en Liderazgo Optimus reconocida internacionalmente." },
        ],
        guarantee: {
          title: content.beneficios_garantia_titulo ?? "Garantía de Resultados",
          description: `${content.beneficios_garantia_linea_1 ?? "Si no experimentas una transformación significativa en 30 días, te devolvemos el 100% de tu inversión."} ${content.beneficios_garantia_linea_2 ?? "Sin preguntas, sin complicaciones."}`
        }
      },
      creator: {
        title: content.creador_titulo ?? "Conoce a Nelson Abdul",
        description: content.creador_intro ?? "Experto en mentalidad de alto rendimiento y creador del revolucionario método de Sincronización Neuronal Optimus.",
        bio: [
          content.creador_parrafo_1 ?? "Con más de tres década transformando la vida de líderes y emprendedores, Nelson ha desarrollado un sistema único que combina neurociencia aplicada, física, biología y otras disciplinas, para potenciar el desarrollo personal y profesional al más alto nivel.",
          content.creador_parrafo_2 ?? "Su enfoque directo y basado en resultados ha ayudado a cientos de personas a reprogramar sus mentes, eliminar bloqueos limitantes y acelerar el logro de sus metas más ambiciosas."
        ],
        stats: {
          clients: String(content.creador_credencial_1_valor ?? "5000+"),
          clients_label: content.creador_credencial_1_etiqueta ?? "Empresarios Impactados",
          experience: String(content.creador_credencial_2_valor ?? "30+"),
          experience_label: content.creador_credencial_2_etiqueta ?? "Años de Experiencia",
          success_rate: String(content.creador_credencial_3_valor ?? "1"),
          success_rate_label: content.creador_credencial_3_etiqueta ?? "Éxito Empresarial"
        },
        cta: content.creador_boton_principal_etiqueta ?? "Trabajar con Nelson"
      },
      cta: {
        title: content.cta_titulo ?? "¿Listo para Transformar tu Mente y Acelerar tus Resultados?",
        description: content.cta_subtitulo ?? "Únete a la élite de líderes que han reprogramado su mente para el éxito extraordinario.",
        urgency: content.cta_urgencia_linea_1 ?? "⚡ Plazas limitadas para garantizar atención personalizada",
        urgency_description: content.cta_urgencia_linea_2 ?? "El programa acepta únicamente candidatos comprometidos con la excelencia.",
        primary_button: content.cta_boton_aplicar_etiqueta ?? "Aplicar al Programa Ahora",
        secondary_button: content.cta_boton_testimonios_etiqueta ?? "Ver Testimonios",
        benefit1_label: content.cta_beneficio_1_etiqueta ?? "Inicio en 7-14 días",
        benefit2_label: content.cta_beneficio_2_etiqueta ?? "Resultados garantizados",
        benefit3_label: content.cta_beneficio_3_etiqueta ?? "Coaching 1-a-1"
      }
    };
  };

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

      const rawWebhookData = await webhookResponse.json();
      const mappedContent = mapWebhookToContent(rawWebhookData);
      
      // Establecer el contenido dinámico en el contexto
      setContent(mappedContent);
      
      // Guardar la selección del usuario en el estado
      setUserProfile(selection);
      setHasCompletedWelcome(true);
      
      // También guardar en localStorage para persistencia
      localStorage.setItem('optimusUserProfile', selection);
      localStorage.setItem('optimusWelcomeCompleted', 'true');
      localStorage.setItem('optimusDynamicContent', JSON.stringify(mappedContent));
      
      console.log("Usuario se identificó como:", selection);
      console.log("País:", country);
      console.log("Contenido dinámico recibido:", mappedContent);
      
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
