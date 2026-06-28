import React, { useEffect, useRef } from 'react';

const HANJA_CHARS = [
  '冥', '死', '生', '魂', '閻', '審', '判', '獄', '道', 
  '天', '人', '極', '盤', '靈', '幻', '法', '斬', '命', 
  '罰', '業', '輪', '廻', '開', '地', '院', '관', '사'
];

interface IncenseThread {
  baseX: number;
  amp1: number;
  amp2: number;
  freq1: number;
  freq2: number;
  speed1: number;
  speed2: number;
  phase: number;
  rgb: string;
  width: number;
}

export const HanjaRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let columns = 0;
    let drops: number[] = [];
    let threads: IncenseThread[] = [];
    let time = 0;
    const fontSize = 20;

    const INCENSE_COLORS = ['185, 28, 28', '220, 38, 38', '153, 27, 27', '225, 29, 72', '180, 40, 40'];

    const createThread = (width: number): IncenseThread => ({
      baseX: Math.random() * width,
      amp1: Math.random() * 50 + 35,
      amp2: Math.random() * 25 + 10,
      freq1: Math.random() * 4 + 4,
      freq2: Math.random() * 8 + 8,
      speed1: Math.random() * 0.035 + 0.025,
      speed2: Math.random() * 0.05 + 0.03,
      phase: Math.random() * Math.PI * 2,
      rgb: INCENSE_COLORS[Math.floor(Math.random() * INCENSE_COLORS.length)],
      width: Math.random() * 2.2 + 1.2,
    });

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -100);
      }

      // Initialize wispy linear incense threads
      const threadCount = Math.floor(canvas.width / 140);
      threads = [];
      for (let i = 0; i < threadCount; i++) {
        threads.push(createThread(canvas.width));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const draw = () => {
      // Semi-transparent fade to create trailing effect
      ctx.fillStyle = 'rgba(7, 7, 7, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 1. Draw Hanja Rain (Falling downwards)
      ctx.font = `${fontSize}px "Noto Serif KR", serif`;
      for (let i = 0; i < drops.length; i++) {
         const char = HANJA_CHARS[Math.floor(Math.random() * HANJA_CHARS.length)];
        
        const isHead = Math.random() > 0.85;
        ctx.fillStyle = isHead ? '#611717' : '#3d0c0c';
        ctx.shadowBlur = 0;

        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      // 2. Draw Wispy Linear Incense Smoke Threads (Rising upwards)
      time += 1;
      for (let i = 0; i < threads.length; i++) {
        const th = threads[i];

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(th.baseX, canvas.height);

        const segments = 60;
        const stepY = canvas.height / segments;

        for (let s = 1; s <= segments; s++) {
          const y = canvas.height - s * stepY;
          const p = s / segments; // 0 at bottom base, 1 at top ceiling

          // Amplitude widens super-linearly as smoke ascends
          const env1 = Math.pow(p, 1.4) * th.amp1;
          const env2 = Math.pow(p, 1.9) * th.amp2;

          const sway = Math.sin(p * th.freq1 - time * th.speed1 + th.phase) * env1
                     + Math.cos(p * th.freq2 - time * th.speed2) * env2
                     + Math.sin(time * 0.007 + th.phase) * (p * 30); // gentle room air draft

          ctx.lineTo(th.baseX + sway, y);
        }

        const grad = ctx.createLinearGradient(0, canvas.height, 0, 0);
        grad.addColorStop(0, `rgba(${th.rgb}, 0.38)`);
        grad.addColorStop(0.3, `rgba(${th.rgb}, 0.22)`);
        grad.addColorStop(0.7, `rgba(${th.rgb}, 0.08)`);
        grad.addColorStop(1, `rgba(${th.rgb}, 0)`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = th.width;
        ctx.shadowColor = `rgba(${th.rgb}, 0.45)`;
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.restore();
      }

      animationFrameId = setTimeout(() => {
        requestAnimationFrame(draw);
      }, 55) as unknown as number;
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[0] opacity-65 select-none"
    />
  );
};
