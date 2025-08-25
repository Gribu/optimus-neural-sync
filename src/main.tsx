import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("🚀 Main.tsx: Starting React app...");

const rootElement = document.getElementById("root");
console.log("🔍 Main.tsx: Root element found:", rootElement);

if (rootElement) {
  console.log("✅ Main.tsx: Rendering App component...");
  createRoot(rootElement).render(<App />);
} else {
  console.error("❌ Main.tsx: Root element not found!");
}
