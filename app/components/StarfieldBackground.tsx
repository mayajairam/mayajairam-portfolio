'use client';

import { useEffect, useRef } from 'react';
import Starback from 'starback';

const StarfieldBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const starback = new Starback(canvasRef.current, {
      type: 'dot',
      quantity: 100,
      direction: 225,
      randomOpacity: true,
      starColor: '#94a3b8', // slate-400
      backgroundColor: ['#0f172a', '#1e293b'], // gradient blue-gray
      speed: 0.3,
      starSize: [1, 2],
    });

    return () => {
      canvasRef.current?.remove(); // optional cleanup
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
};

export default StarfieldBackground;
