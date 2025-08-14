import { Button } from "@/components/ui/button";
import { Award, Users, TrendingUp, ArrowRight } from "lucide-react";

const Creator = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Conoce a <span className="text-primary">Nelson Abdul</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Experto en mentalidad de alto rendimiento y creador del revolucionario método de 
                <strong className="text-foreground"> Sincronización Neuronal Optimus</strong>.
              </p>
              
              <div className="space-y-4 text-foreground">
                <p>
                  Con más de tres década transformando la vida de líderes y emprendedores, 
                  Nelson ha desarrollado un sistema único que combina neurociencia aplicada, física, biología y otras disciplinas, para potenciar el desarrollo personal y profesional al más alto nivel.
                </p>
                
                <p>
                  Su enfoque directo y basado en resultados ha ayudado a cientos de personas 
                  a reprogramar sus mentes, eliminar bloqueos limitantes y acelerar el logro 
                  de sus metas más ambiciosas.
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <Award className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Empresarios Impactados</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
                <div className="text-xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-warning mx-auto mb-2" />
                <div className="text-xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Éxito Empresarial</div>
              </div>
            </div>

            <div className="pt-4">
              <Button 
                variant="cta" 
                size="lg"
                className="group"
                onClick={() => window.open('https://nelsonabdul.com/', '_blank')}
              >
                Trabajar con Nelson
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Image Placeholder - Professional photo of Nelson Abdul */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <p className="text-foreground font-medium">
                  Foto profesional de Nelson Abdul
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Experto en Sincronización Neuronal
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creator;