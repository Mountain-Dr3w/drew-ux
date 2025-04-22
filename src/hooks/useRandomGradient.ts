
import { useState, useEffect, useRef, CSSProperties } from 'react';

const gradients = [
  // A mix with more colors, as requested
  'linear-gradient(120deg, #8b5cf6 0%, #1eaedb 30%, #f97316 60%, #9b87f5 100%)',
  'linear-gradient(160deg, #d946ef 0%, #8b5cf6 30%, #f97316 80%, #D3E4FD 100%)',
  'linear-gradient(110deg, #FFDEE2 0%, #D3E4FD 50%, #9b87f5 80%, #F97316 100%)',
  'linear-gradient(145deg, #1eaedb 10%, #F97316 40%, #D946EF 70%, #FFA99F 100%)',
  'linear-gradient(100deg, #8b5cf6, #FFDEE2 35%, #F97316 70%, #0EA5E9 100%)'
];

// Generates a random integer from min‒max (inclusive)
function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function useRandomGradient() {
  const [state, setState] = useState<{
    gradient: string;
    angle: number;
    bgPos: string;
  }>({
    gradient: gradients[0],
    angle: 120,
    bgPos: '50% 50%'
  });

  // To avoid repeating the same combination
  const lastIndex = useRef<number>(-1);

  useEffect(() => {
    let shouldStop = false;
    function update() {
      if (shouldStop) return;

      // Randomly pick gradient
      let idx = randInt(0, gradients.length - 1);
      while (idx === lastIndex.current) {
        idx = randInt(0, gradients.length - 1);
      }
      lastIndex.current = idx;
      const gradient = gradients[idx];

      // Random angle between 80–170 (to give perceptible direction change)
      const angle = randInt(80, 170);

      // Random bgPos for the shifting feel
      const x = randInt(30, 70);
      const y = randInt(30, 70);
      const bgPos = `${x}% ${y}%`;

      setState({ gradient, angle, bgPos });

      // Schedule next update randomly between 2.5s–4.5s
      const next = randInt(2500, 4500);
      setTimeout(update, next);
    }

    update();
    return () => { shouldStop = true; };
  }, []);

  // Compose an inline style
  const style: CSSProperties = {
    background: state.gradient.replace(/\d+deg/, `${state.angle}deg`),
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    WebkitTextFillColor: 'transparent',
    transition: 'background 2.2s cubic-bezier(.66,0,.33,1), background-position 2.2s cubic-bezier(.66,0,.33,1)',
    backgroundPosition: state.bgPos,
    backgroundSize: '200% 200%',
    // The rest for anti-aliasing
    fontWeight: 700
  };

  return style;
}
