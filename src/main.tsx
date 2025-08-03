
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Check for user's preferred theme or use system preference
if (typeof document !== 'undefined') {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.classList.add(savedTheme);
  } else {
    // Default to dark mode
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}

createRoot(document.getElementById("root")!).render(<App />);
