import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Target } from "lucide-react";
import neuralBrainHero from "@/assets/neural-brain-hero.jpg";
import { useContent } from "@/contexts/ContentContext";

const Hero = () => {
  const { content } = useContent();

  // Contenido por defecto como fallback
  const defaultContent = {
    title: "Descubre el Sistema para Reprogramar tu Mente y Acelerar tus Metas",
    subtitle: "PROGRAMA OPTIMUS",
    description: "La Sincronización Neuronal: Programa de alto impacto para reprogramar la mente, eliminar bloqueos y alcanzar metas más rápido.",
    cta_primary: "Aplicar al Programa",
    cta_secondary: "Ver Testimonios",
    stats: {
      days: "7-14",
      days_label: "Días inicio",
      guarantee: "100%",
      guarantee_label: "Garantía",
      coaching: "1:1",
      coaching_label: "Coaching"
    }
  };

  const heroContent = content?.hero || defaultContent;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={neuralBrainHero} 
          alt="Neural Brain Connections"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Neural Network Animation Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="neural-dots"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <Brain className="w-8 h-8 text-secondary" />
                <span className="text-lg font-medium text-secondary">{heroContent.subtitle}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {heroContent.title.split(' ').map((word, index) => {
                  const highlightWords = ['Reprogramar', 'Mente', 'Acelerar', 'Metas'];
                  if (highlightWords.includes(word)) {
                    return (
                      <span key={index} className="text-transparent bg-gradient-to-r from-secondary to-accent bg-clip-text">
                        {word}{' '}
                      </span>
                    );
                  }
                  return word + ' ';
                })}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                <strong>La Sincronización Neuronal:</strong> {heroContent.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="cta" 
                size="lg" 
                className="group"
                onClick={() => window.open('https://nelsonabdul.com/', '_blank')}
              >
                {heroContent.cta_primary}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="accent" 
                size="lg"
                onClick={() => window.open('https://nelsonabdul.com/testimoniales', '_blank')}
              >
                {heroContent.cta_secondary}
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex justify-center lg:justify-start">
              <div className="grid grid-cols-3 gap-8 text-center lg:text-left">
                <div>
                  <div className="text-2xl font-bold text-primary">{heroContent.stats.days}</div>
                  <div className="text-sm text-muted-foreground">{heroContent.stats.days_label}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">{heroContent.stats.guarantee}</div>
                  <div className="text-sm text-muted-foreground">{heroContent.stats.guarantee_label}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">{heroContent.stats.coaching}</div>
                  <div className="text-sm text-muted-foreground">{heroContent.stats.coaching_label}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={neuralBrainHero} 
                alt="Sincronización Neuronal - Reprogramación Mental"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-warning text-warning-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              <Target className="w-4 h-4 inline mr-1" />
              Resultados Garantizados
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;