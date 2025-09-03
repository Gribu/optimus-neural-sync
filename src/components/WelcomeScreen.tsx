import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Brain, Target } from "lucide-react";

interface WelcomeScreenProps {
  onComplete: (selection: string) => void;
}

const WelcomeScreen = ({ onComplete }: WelcomeScreenProps) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isExiting, setIsExiting] = useState(false);

  const handleSubmit = () => {
    if (selectedOption) {
      setIsExiting(true);
      // Delay to allow exit animation to play
      setTimeout(() => {
        onComplete(selectedOption);
      }, 300);
    }
  };

  const options = [
    { 
      value: "empresario", 
      label: "Empresario",
      description: "Diriges tu propia empresa"
    },
    { 
      value: "emprendedor", 
      label: "Emprendedor",
      description: "Construyes nuevos proyectos"
    },
    { 
      value: "lider-equipos", 
      label: "Líder de Equipos",
      description: "Lideras personas y resultados"
    }
  ];

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-primary via-primary to-primary/90 flex items-center justify-center z-50 transition-all duration-300 ${
      isExiting ? 'animate-fade-out' : 'animate-fade-in'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      {/* Main Content Card */}
      <div className={`bg-background/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-lg w-full mx-4 shadow-2xl border border-white/10 transition-all duration-300 ${
        isExiting ? 'animate-scale-out' : 'animate-scale-in'
      }`}>
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Brain className="w-8 h-8 text-secondary animate-pulse" />
            <span className="text-lg font-semibold text-secondary">PROGRAMA OPTIMUS</span>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
            ¿Con cuál de las siguientes opciones{" "}
            <span className="text-transparent bg-gradient-to-r from-secondary to-accent bg-clip-text">
              te identificas más?
            </span>
          </h1>
          
          <p className="text-muted-foreground">
            Personaliza tu experiencia en el programa
          </p>
        </div>

        {/* Options */}
        <RadioGroup
          value={selectedOption}
          onValueChange={setSelectedOption}
          className="space-y-4 mb-10"
        >
          {options.map((option, index) => (
            <div 
              key={option.value} 
              className={`relative group transition-all duration-200 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div 
                className={`flex items-start space-x-4 p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer hover:shadow-lg ${
                  selectedOption === option.value 
                    ? 'border-accent bg-accent/5 shadow-md' 
                    : 'border-border hover:border-accent/50 hover:bg-accent/2'
                }`}
                onClick={() => setSelectedOption(option.value)}
              >
                <RadioGroupItem 
                  value={option.value} 
                  id={option.value}
                  className="mt-1 border-2 border-accent data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                />
                <div className="flex-1">
                  <Label 
                    htmlFor={option.value}
                    className="text-foreground font-semibold cursor-pointer text-lg block mb-1"
                  >
                    {option.label}
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    {option.description}
                  </p>
                </div>
                {selectedOption === option.value && (
                  <Target className="w-5 h-5 text-accent animate-pulse" />
                )}
              </div>
            </div>
          ))}
        </RadioGroup>

        {/* CTA Button */}
        <Button
          onClick={handleSubmit}
          disabled={!selectedOption}
          className="w-full bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground font-semibold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {selectedOption ? 'Continuar al Programa' : 'Selecciona una opción'}
        </Button>
      </div>
    </div>
  );
};

export default WelcomeScreen;