
import React, { useState } from 'react';
import Logo, { LogoShape, LogoSize } from './Logo';

const LogoGenerator: React.FC = () => {
  const [shape, setShape] = useState<LogoShape>('circle');
  const [primaryColor, setPrimaryColor] = useState('#3b82f6');
  const [secondaryColor, setSecondaryColor] = useState('');
  const [size, setSize] = useState<LogoSize>('lg');
  const [text, setText] = useState('Logo');
  const [customPath, setCustomPath] = useState('');

  // Example custom SVG paths
  const examplePaths = [
    { name: 'Wave', path: 'M0,12 C8,6 16,18 24,12' },
    { name: 'Burst', path: 'M12,2 L15,10 L23,10 L16,15 L19,23 L12,18 L5,23 L8,15 L1,10 L9,10 Z' },
    { name: 'Swoosh', path: 'M2,12 Q8,2 12,12 T22,12' },
  ];

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md dark:bg-gray-800 space-y-6">
      <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100">Logo Generator</h2>
      
      <div className="flex justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <Logo
          shape={shape}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor || undefined}
          size={size}
          text={text}
          customPath={customPath}
        />
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Shape</label>
            <select
              value={shape}
              onChange={(e) => setShape(e.target.value as LogoShape)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-white dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="circle">Circle</option>
              <option value="square">Square</option>
              <option value="triangle">Triangle</option>
              <option value="star">Star</option>
              <option value="hexagon">Hexagon</option>
              <option value="custom">Custom</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Size</label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value as LogoSize)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-white dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
              <option value="xl">Extra Large</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Text (optional)
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-white dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Primary Color
            </label>
            <div className="mt-1 flex">
              <input
                type="color"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="h-9 w-9 rounded-md border border-gray-300"
              />
              <input
                type="text"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="ml-2 flex-1 border border-gray-300 rounded-md shadow-sm py-1 px-3 bg-white dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Fill Color (optional)
            </label>
            <div className="mt-1 flex">
              <input
                type="color"
                value={secondaryColor || '#ffffff'}
                onChange={(e) => setSecondaryColor(e.target.value)}
                className="h-9 w-9 rounded-md border border-gray-300"
              />
              <input
                type="text"
                value={secondaryColor}
                onChange={(e) => setSecondaryColor(e.target.value)}
                placeholder="transparent"
                className="ml-2 flex-1 border border-gray-300 rounded-md shadow-sm py-1 px-3 bg-white dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </div>
        </div>
        
        {shape === 'custom' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Custom SVG Path
            </label>
            <textarea
              value={customPath}
              onChange={(e) => setCustomPath(e.target.value)}
              rows={2}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-white dark:bg-gray-700 dark:border-gray-600"
              placeholder="Example: M12,2 L15,10 L23,10 L16,15 L19,23 L12,18 L5,23 L8,15 L1,10 L9,10 Z"
            />
            <div className="mt-2 grid grid-cols-3 gap-2">
              {examplePaths.map((example) => (
                <button
                  key={example.name}
                  onClick={() => setCustomPath(example.path)}
                  className="py-1 px-2 text-xs bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded"
                >
                  {example.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogoGenerator;
