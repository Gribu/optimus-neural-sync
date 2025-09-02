import { CheckCircle, Clock, Target, Brain, Users, Shield, Award, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useContent } from "@/contexts/ContentContext";

const Program = () => {
  const { content } = useContent();

  const defaultFeatures = [
    {
      title: "Inicio acelerado en 7-14 días",
      description: "Resultados visibles desde las primeras semanas"
    },
    {
      title: "Definición de metas de alto impacto",
      description: "Estrategias precisas para objetivos ambiciosos"
    },
    {
      title: "Reprogramación mental y eliminación de bloqueos",
      description: "Técnicas avanzadas de sincronización neuronal"
    },
    {
      title: "Optimización de la matriz mental",
      description: "Reconfiguración de patrones limitantes"
    },
    {
      title: "Acompañamiento 1-a-1 con coach experto",
      description: "Sesiones personalizadas de alto valor"
    },
    {
      title: "Sesiones grupales con Nelson Abdul",
      description: "Aprendizaje directo del creador del método"
    },
    {
      title: "Acceso a la plataforma Optimus",
      description: "Herramientas digitales exclusivas"
    },
    {
      title: "Red de apoyo entre líderes y emprendedores",
      description: "Comunidad de alto rendimiento"
    },
    {
      title: "Garantía de resultados (100% devolución en 30 días)",
      description: "Compromiso total con tu transformación"
    },
    {
      title: "Certificación en Liderazgo Optimus",
      description: "Acreditación oficial del programa"
    }
  ];

  const defaultContent = {
    title: "¿Qué es el Programa Optimus?",
    description: "Un sistema integral de sincronización neuronal diseñado para líderes y emprendedores que buscan resultados excepcionales en tiempo récord.",
    features: defaultFeatures
  };

  const programContent = content?.program || defaultContent;

  const icons = [Clock, Target, Brain, Brain, Headphones, Users, Award, Users, Shield, Award];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {programContent.title.split(' ').map((word, index) => {
              if (word.includes('Optimus')) {
                return (
                  <span key={index} className="text-primary">{word} </span>
                );
              }
              return word + ' ';
            })}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {programContent.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programContent.features.map((feature, index) => {
            const IconComponent = icons[index] || Clock;
            return (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-background">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-6 py-3 rounded-full">
            <CheckCircle className="w-5 h-5 text-secondary" />
            <span className="font-medium text-secondary">
              Sistema probado con resultados medibles y garantizados
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;