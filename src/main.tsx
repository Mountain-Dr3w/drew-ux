
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Set dark mode at the application level before rendering
if (typeof document !== 'undefined') {
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
}

createRoot(document.getElementById("root")!).render(<App />);
