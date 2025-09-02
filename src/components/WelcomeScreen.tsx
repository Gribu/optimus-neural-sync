import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface WelcomeScreenProps {
  onComplete: (selection: string) => void;
}

const WelcomeScreen = ({ onComplete }: WelcomeScreenProps) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSubmit = () => {
    if (selectedOption) {
      onComplete(selectedOption);
    }
  };

  const options = [
    { value: "empresario", label: "Empresario" },
    { value: "emprendedor", label: "Emprendedor" },
    { value: "lider-equipos", label: "Líder de Equipos" }
  ];

  return (
    <div className="fixed inset-0 bg-primary flex items-center justify-center z-50">
      <div className="bg-background rounded-lg p-8 max-w-md w-full mx-4 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            ¿Con cuál de las siguientes opciones te identificas más?
          </h1>
        </div>

        <RadioGroup
          value={selectedOption}
          onValueChange={setSelectedOption}
          className="space-y-4 mb-8"
        >
          {options.map((option) => (
            <div key={option.value} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors">
              <RadioGroupItem 
                value={option.value} 
                id={option.value}
                className="border-primary"
              />
              <Label 
                htmlFor={option.value}
                className="text-foreground font-medium cursor-pointer flex-1"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>

        <Button
          onClick={handleSubmit}
          disabled={!selectedOption}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3"
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default WelcomeScreen;