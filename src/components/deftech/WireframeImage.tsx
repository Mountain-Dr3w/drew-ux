
import React, { useRef, useEffect } from 'react';

const WireframeImage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 800;
    canvas.height = 600;

    // Background
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Header bar
    ctx.fillStyle = '#F6F6F7';
    ctx.fillRect(20, 20, canvas.width - 40, 40);

    // Menu tabs
    ctx.fillStyle = '#E5E7EB';
    for (let i = 0; i < 3; i++) {
      ctx.fillRect(30 + (i * 100), 25, 80, 30);
    }

    // Main chart area
    ctx.fillStyle = '#F6F6F7';
    ctx.fillRect(20, 80, 500, 300);

    // Sidebar
    ctx.fillStyle = '#F3F4F6';
    ctx.fillRect(540, 80, 240, 300);

    // Fleet status boxes
    ctx.fillStyle = '#E5E7EB';
    for (let i = 0; i < 4; i++) {
      ctx.fillRect(20 + (i * 130), 400, 110, 80);
      
      // Fleet labels
      ctx.fillStyle = '#6B7280';
      ctx.font = '14px Inter';
      ctx.fillText(`Fleet ${String.fromCharCode(65 + i)}`, 45 + (i * 130), 430);
      ctx.fillText(`${85 - (i * 5)}%`, 55 + (i * 130), 460);
    }

    // Add some chart bars
    ctx.fillStyle = '#D1D5DB';
    const barWidth = 30;
    const heights = [150, 200, 100, 180, 130, 160];
    heights.forEach((height, i) => {
      ctx.fillRect(40 + (i * 50), 280 - height, barWidth, height);
    });
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="w-full h-full object-cover rounded-lg"
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  );
};

export default WireframeImage;
