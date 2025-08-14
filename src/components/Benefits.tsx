import { Brain, Target, Users, Trophy, Shield, Zap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Reprogramación Acelerada",
      description: "Elimina patrones limitantes en tiempo récord con técnicas de sincronización neuronal avanzada."
    },
    {
      icon: Target,
      title: "Metas de Alto Impacto",
      description: "Define y alcanza objetivos ambiciosos con estrategias probadas de alto rendimiento."
    },
    {
      icon: Users,
      title: "Red de Liderazgo Elite",
      description: "Conecta con una comunidad exclusiva de líderes y emprendedores de alto calibre."
    },
    {
      icon: Trophy,
      title: "Resultados Tangibles",
      description: "Obtén transformaciones medibles y duraderas respaldadas por ciencia neurológica."
    },
    {
      icon: Shield,
      title: "Garantía Total",
      description: "100% de devolución en 30 días si no experimentas los resultados prometidos."
    },
    {
      icon: Zap,
      title: "Certificación Oficial",
      description: "Recibe tu certificación en Liderazgo Optimus reconocida internacionalmente."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Beneficios que <span className="text-transparent bg-gradient-to-r from-secondary to-accent bg-clip-text">Transforman Vidas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada elemento del programa está diseñado para maximizar tu potencial y acelerar tus resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-muted/50 to-background border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Highlight */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-warning/10 to-secondary/10 rounded-2xl p-8 text-center border border-warning/20">
            <Shield className="w-12 h-12 text-warning mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Garantía de Resultados</h3>
            <p className="text-lg text-muted-foreground">
              Si no experimentas una transformación significativa en 30 días, 
              <strong className="text-foreground"> te devolvemos el 100% de tu inversión</strong>. 
              Sin preguntas, sin complicaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;