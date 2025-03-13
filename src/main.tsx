
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Check for user's preferred theme or use system preference
if (typeof document !== 'undefined') {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.classList.add(savedTheme);
  } else {
    // Check for system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.add(prefersDark ? 'dark' : 'light');
    localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
  }
}

createRoot(document.getElementById("root")!).render(<App />);
