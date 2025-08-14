import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, CheckCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-accent text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              ¿Listo para <span className="text-warning">Transformar tu Mente</span> y Acelerar tus Resultados?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Únete a la élite de líderes que han reprogramado su mente para el éxito extraordinario.
            </p>
          </div>

          {/* Quick Benefits */}
          <div className="grid md:grid-cols-3 gap-6 my-12">
            <div className="flex items-center justify-center gap-3 bg-white/10 rounded-lg py-4 px-6 backdrop-blur-sm">
              <Clock className="w-6 h-6 text-warning" />
              <span className="font-medium">Inicio en 7-14 días</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/10 rounded-lg py-4 px-6 backdrop-blur-sm">
              <CheckCircle className="w-6 h-6 text-warning" />
              <span className="font-medium">Resultados garantizados</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/10 rounded-lg py-4 px-6 backdrop-blur-sm">
              <ArrowRight className="w-6 h-6 text-warning" />
              <span className="font-medium">Coaching 1-a-1</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="cta" 
              size="lg" 
              className="group text-lg px-8 py-4"
              onClick={() => window.open('https://nelsonabdul.com/', '_blank')}
            >
              Aplicar al Programa Ahora
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
              onClick={() => window.open('https://nelsonabdul.com/testimoniales', '_blank')}
            >
              Ver Testimonios
            </Button>
          </div>

          {/* Urgency/Scarcity */}
          <div className="mt-8 p-6 bg-warning/20 rounded-xl border border-warning/30">
            <p className="text-warning font-semibold text-lg">
              ⚡ Plazas limitadas para garantizar atención personalizada
            </p>
            <p className="text-white/80 mt-2">
              El programa acepta únicamente candidatos comprometidos con la excelencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;