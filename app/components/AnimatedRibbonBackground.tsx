"use client";

import { useEffect, useRef } from "react";

class Line {
  public angle: number[];
  public color: string;

  constructor(angle: number[], color: string) {
    this.angle = angle;
    this.color = color;
  }
}

class Ribbon {
  public angle: number[];
  private speedSeeds: number[];
  private speedSigns: number[];
  public speed: number[] = [];
  public lines: Line[] = [];

  constructor(speedMin: number, speedMax: number) {
    this.angle = [
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
    ];

    const rndSign = () => (Math.random() > 0.5 ? 1 : -1);

    this.speedSeeds = [
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
    ];
    this.speedSigns = [rndSign(), rndSign(), rndSign(), rndSign()];
    this.updateSpeeds(speedMin, speedMax);
  }

  public updateSpeeds(speedMin: number, speedMax: number) {
    this.speed = this.speedSeeds.map(
      (seed, i) =>
        this.speedSigns[i] * (speedMin + seed * (speedMax - speedMin)),
    );
  }

  update(maxWidth: number) {
    this.angle[0] += this.speed[0];
    this.angle[1] += this.speed[1];
    this.angle[2] += this.speed[2];
    this.angle[3] += this.speed[3];

    const nextAngle = [
      Math.sin(this.angle[0]),
      Math.sin(this.angle[1]),
      Math.sin(this.angle[2]),
      Math.sin(this.angle[3]),
    ];

    this.lines.push(new Line(nextAngle, ""));

    if (this.lines.length > maxWidth) {
      this.lines.shift();
    }
  }
}

function hsla(h: number, s: number, l: number, a: number): string {
  return `hsla(${h}, ${s}%, ${l}%, ${a})`;
}

export default function AnimatedRibbonBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const ribbonsRef = useRef<Ribbon[]>([]);
  const hueRef = useRef<number>(294);
  const hueForwardRef = useRef<boolean>(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Configuration from template
    const ribbonCount = 15;
    const ribbonWidth = 120;
    const ribbonRotation = 180;
    const ribbonHueStart = 294;
    const ribbonHueEnd = 360;
    const ribbonSaturationStart = 100;
    const ribbonSaturationEnd = 100;
    const ribbonLightnessStart = 50;
    const ribbonLightnessEnd = 50;
    const ribbonAmplitude = 0.3;
    const ribbonSpeedMin = 0.004;
    const ribbonSpeedMax = 0.008;
    const ribbonLineWidth = 0.3;
    const ribbonLineOpacity = 0.26;
    const trailOpacity = 0.1;
    const bgColors = ["#000", "#5d0e21"];
    const bgAngle = 90;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize ribbons
    hueRef.current = ribbonHueStart;
    ribbonsRef.current = [];
    for (let i = 0; i < ribbonCount; i++) {
      ribbonsRef.current.push(
        new Ribbon(ribbonSpeedMin, ribbonSpeedMax),
      );
    }

    // Preload ribbons
    for (let i = 0; i < ribbonCount; i++) {
      for (let j = 0; j < ribbonWidth; j++) {
        updateColor();
        ribbonsRef.current[i].update(ribbonWidth);
      }
    }

    function updateColor() {
      hueRef.current += hueForwardRef.current ? 0.05 : -0.05;

      if (hueRef.current > ribbonHueEnd && hueForwardRef.current) {
        hueRef.current = ribbonHueEnd;
        hueForwardRef.current = false;
      } else if (hueRef.current < ribbonHueStart && !hueForwardRef.current) {
        hueRef.current = ribbonHueStart;
        hueForwardRef.current = true;
      }
    }

    const drawBackground = (ctx: CanvasRenderingContext2D) => {
      // Draw linear gradient background with specified colors and angle
      const angleRad = (bgAngle * Math.PI) / 180;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const diagonal = Math.sqrt(canvas.width ** 2 + canvas.height ** 2);
      
      const x1 = centerX - (diagonal / 2) * Math.cos(angleRad);
      const y1 = centerY - (diagonal / 2) * Math.sin(angleRad);
      const x2 = centerX + (diagonal / 2) * Math.cos(angleRad);
      const y2 = centerY + (diagonal / 2) * Math.sin(angleRad);
      
      const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
      gradient.addColorStop(0, bgColors[0]);
      gradient.addColorStop(1, bgColors[1]);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = () => {
      updateColor();

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background
      drawBackground(ctx);

      const diagonal = Math.sqrt(canvas.width ** 2 + canvas.height ** 2);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      const radius = diagonal / 2;
      const radius3 = radius / 3;
      const rotationRad = (ribbonRotation * Math.PI) / 180;

      ctx.lineWidth = ribbonLineWidth;

      ribbonsRef.current.forEach((ribbon) => {
        ribbon.update(ribbonWidth);

        ribbon.lines.forEach((line, index) => {
          const angle = line.angle;

          const x1 =
            centerX -
            radius *
              Math.cos(angle[0] * ribbonAmplitude + rotationRad);
          const y1 =
            centerY -
            radius *
              Math.sin(angle[0] * ribbonAmplitude + rotationRad);
          const x2 =
            centerX +
            radius *
              Math.cos(angle[3] * ribbonAmplitude + rotationRad);
          const y2 =
            centerY +
            radius *
              Math.sin(angle[3] * ribbonAmplitude + rotationRad);

          const cpx1 =
            centerX -
            radius3 * Math.cos(angle[1] * ribbonAmplitude * 2);
          const cpy1 =
            centerY -
            radius3 * Math.sin(angle[1] * ribbonAmplitude * 2);
          const cpx2 =
            centerX +
            radius3 * Math.cos(angle[2] * ribbonAmplitude * 2);
          const cpy2 =
            centerY +
            radius3 * Math.sin(angle[2] * ribbonAmplitude * 2);

          const progress = index / (ribbon.lines.length - 1 || 1);

          const lineHue =
            ribbonHueEnd +
            (ribbonHueStart - ribbonHueEnd) * progress;
          const lineSaturation =
            ribbonSaturationEnd +
            (ribbonSaturationStart - ribbonSaturationEnd) * progress;
          const lineLightness =
            ribbonLightnessEnd +
            (ribbonLightnessStart - ribbonLightnessEnd) * progress;

          // Apply trail opacity for fading effect
          const opacity = ribbonLineOpacity * (1 - progress * (1 - trailOpacity));
          
          ctx.strokeStyle = hsla(
            lineHue,
            lineSaturation,
            lineLightness,
            opacity,
          );
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x2, y2);
          ctx.stroke();
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}
