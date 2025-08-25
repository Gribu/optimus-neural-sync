import Hero from "@/components/Hero";
import Program from "@/components/Program";
import Benefits from "@/components/Benefits";
import Creator from "@/components/Creator";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";

const Index = () => {
  console.log("🏠 Index.tsx: Component rendering...");
  
  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        {/* Diagnostic Banner */}
        <div className="bg-green-500 text-white text-center py-2 text-sm font-bold">
          ✅ INDEX COMPONENT IS RENDERING - Debug Mode Active
        </div>
        
        <ErrorBoundary fallback={<div className="p-4 bg-yellow-100">Hero component failed to load</div>}>
          <Hero />
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<div className="p-4 bg-yellow-100">Program component failed to load</div>}>
          <Program />
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<div className="p-4 bg-yellow-100">Benefits component failed to load</div>}>
          <Benefits />
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<div className="p-4 bg-yellow-100">Creator component failed to load</div>}>
          <Creator />
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<div className="p-4 bg-yellow-100">CTA component failed to load</div>}>
          <CTA />
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<div className="p-4 bg-yellow-100">Footer component failed to load</div>}>
          <Footer />
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  );
};

export default Index;
