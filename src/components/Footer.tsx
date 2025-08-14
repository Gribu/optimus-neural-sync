import { Brain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">OPTIMUS</h3>
                <p className="text-sm text-white/70">Sincronización Neuronal</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed max-w-md">
              Programa de alto impacto para reprogramar la mente, eliminar bloqueos 
              y acelerar el logro de metas extraordinarias.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-white/70 hover:text-warning transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a 
                  href="https://nelsonabdul.com/testimoniales" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-warning transition-colors"
                >
                  Testimonios
                </a>
              </li>
              <li>
                <a 
                  href="https://nelsonabdul.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-warning transition-colors"
                >
                  Aplicar
                </a>
              </li>
              <li>
                <a 
                  href="https://nelsonabdul.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-warning transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Programa</h4>
            <ul className="space-y-2 text-white/70">
              <li>Sincronización Neuronal</li>
              <li>Coaching 1-a-1</li>
              <li>Sesiones Grupales</li>
              <li>Certificación Optimus</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/70 text-sm">
            © 2024 Programa Optimus - Sincronización Neuronal. Todos los derechos reservados.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/70 hover:text-warning transition-colors">
              Aviso Legal
            </a>
            <a href="#" className="text-white/70 hover:text-warning transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-white/70 hover:text-warning transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;