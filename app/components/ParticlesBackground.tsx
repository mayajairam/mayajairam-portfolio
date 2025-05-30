'use client';

import React, { useEffect, useRef } from 'react';

type ParticleOptions = {
  density: number;
  dotColor: string;
  lineColor: string;
  particleRadius: number;
  lineWidth: number;
  proximity: number;
  minSpeed: number;
  maxSpeed: number;
  createOnClick: number;
  repulse: number;
};

type ParticlesBackgroundProps = Partial<ParticleOptions> & {
  backgroundColors?: string;
  zIndex?: number;
};

type Position = { x: number; y: number };

class Particle {
  position: Position;
  speed: Position;
  canvas: HTMLCanvasElement;
  options: ParticleOptions;

  constructor(canvas: HTMLCanvasElement, options: ParticleOptions, x?: number, y?: number) {
    this.canvas = canvas;
    this.options = options;

    if (x !== undefined && y !== undefined) {
      this.position = { x, y };
    } else {
      this.position = {
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
      };
    }

    const speedVal = this.options.minSpeed + Math.random() * (this.options.maxSpeed - this.options.minSpeed);
    const angle = Math.random() * Math.PI * 2;

    this.speed = {
      x: Math.cos(angle) * speedVal,
      y: Math.sin(angle) * speedVal,
    };
  }

  update(mousePos: Position) {
    if (this.options.repulse > 0 && mousePos) {
      const dx = this.position.x - mousePos.x;
      const dy = this.position.y - mousePos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.options.repulse) {
        const force = (this.options.repulse - distance) / this.options.repulse;
        const angle = Math.atan2(dy, dx);

        // Repel if close, attract if far but in range
        const direction = distance < this.options.repulse * 0.5 ? -1 : 1;

        this.speed.x += direction * Math.cos(angle) * force * 2;
        this.speed.y += direction * Math.sin(angle) * force * 2;
    }

    }

    const currentSpeed = Math.sqrt(this.speed.x ** 2 + this.speed.y ** 2);
    const { minSpeed, maxSpeed } = this.options;

    if (currentSpeed > maxSpeed) {
      const ratio = maxSpeed / currentSpeed;
      this.speed.x *= ratio;
      this.speed.y *= ratio;
    } else if (currentSpeed > 0.01 && currentSpeed < minSpeed) {
      const ratio = minSpeed / currentSpeed;
      this.speed.x *= ratio;
      this.speed.y *= ratio;
    }

    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    this.speed.x *= 0.99;
    this.speed.y *= 0.99;

    if (this.position.x > this.canvas.width || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }

    if (this.position.y > this.canvas.height || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }
  }

  draw(ctx: CanvasRenderingContext2D, particles: Particle[], options: ParticleOptions) {
    ctx.save();
    ctx.shadowBlur = 8;
    ctx.shadowColor = options.dotColor;
    ctx.fillStyle = options.dotColor;
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, options.particleRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();


    // for (const other of particles) {
    //   const dist = Math.hypot(this.position.x - other.position.x, this.position.y - other.position.y);
    //   if (dist < options.proximity) {
    //     ctx.strokeStyle = options.lineColor;
    //     ctx.lineWidth = options.lineWidth;
    //     ctx.beginPath();
    //     ctx.moveTo(this.position.x, this.position.y);
    //     ctx.lineTo(other.position.x, other.position.y);
    //     ctx.stroke();
    //   }
    // }
  }
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({
  backgroundColors = 'transparent',
  density = 150,
  dotColor = '#5cbdaa',
  lineColor = '#5cbdaa',
  particleRadius = 3,
  lineWidth = 0.7,
  proximity = 150,
  minSpeed = 0.6,
  maxSpeed = 0.6,
  createOnClick = 0,
  repulse = 0,
  zIndex = 0,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number | null>(null);
  const resizeTimeoutId = useRef<NodeJS.Timeout | null>(null);
  const mousePos = useRef<Position>({ x: 0, y: 0 });

  const options: ParticleOptions = {
    density,
    dotColor,
    lineColor,
    particleRadius,
    lineWidth,
    proximity,
    minSpeed,
    maxSpeed,
    createOnClick,
    repulse,
  };

  const createParticles = (canvas: HTMLCanvasElement) => {
    particles.current = [];
    for (let i = 0; i < options.density; i++) {
      particles.current.push(new Particle(canvas, options));
    }
  };

  const createParticlesAtPoint = (x: number, y: number) => {
    if (!canvasRef.current) return;

    for (let i = 0; i < options.createOnClick; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 50;
      const newX = x + radius * Math.cos(angle);
      const newY = y + radius * Math.sin(angle);

      particles.current.push(new Particle(canvasRef.current, options, newX, newY));
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    mousePos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const handleClick = (e: MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    createParticlesAtPoint(e.clientX - rect.left, e.clientY - rect.top);
  };

  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createParticles(canvas);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles.current) {
        p.update(mousePos.current);
        p.draw(ctx, particles.current, options);
      }
      animationFrameId.current = requestAnimationFrame(draw);
    };

    if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    draw();
  };

  const handleResize = () => {
    if (resizeTimeoutId.current) clearTimeout(resizeTimeoutId.current);
    resizeTimeoutId.current = setTimeout(() => {
      initCanvas();
    }, 250);
  };

  useEffect(() => {
    initCanvas();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      if (resizeTimeoutId.current) clearTimeout(resizeTimeoutId.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex, pointerEvents: 'none' }}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: backgroundColors,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;