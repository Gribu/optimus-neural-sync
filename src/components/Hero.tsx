import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Target } from "lucide-react";
import neuralBrainHero from "@/assets/neural-brain-hero.jpg";

const Hero = () => {
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
                <span className="text-lg font-medium text-secondary">PROGRAMA OPTIMUS</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Descubre el Sistema para{" "}
                <span className="text-transparent bg-gradient-to-r from-secondary to-accent bg-clip-text">
                  Reprogramar tu Mente
                </span>{" "}
                y Acelerar tus Metas
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                <strong>La Sincronización Neuronal:</strong> Programa de alto impacto para reprogramar la mente, eliminar bloqueos y alcanzar metas más rápido.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="cta" 
                size="lg" 
                className="group"
                onClick={() => window.open('https://nelsonabdul.com/', '_blank')}
              >
                Aplicar al Programa
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="accent" 
                size="lg"
                onClick={() => window.open('https://nelsonabdul.com/testimoniales', '_blank')}
              >
                Ver Testimonios
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex justify-center lg:justify-start">
              <div className="grid grid-cols-3 gap-8 text-center lg:text-left">
                <div>
                  <div className="text-2xl font-bold text-primary">7-14</div>
                  <div className="text-sm text-muted-foreground">Días inicio</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">100%</div>
                  <div className="text-sm text-muted-foreground">Garantía</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">1:1</div>
                  <div className="text-sm text-muted-foreground">Coaching</div>
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