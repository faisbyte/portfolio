"use client";

import { useEffect, useRef } from "react";

export default function FloatingShapes() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const shapes: HTMLDivElement[] = [];
    const shapeCount = 12;

    // Create floating shapes
    for (let i = 0; i < shapeCount; i++) {
      const shape = document.createElement("div");
      const size = Math.random() * 60 + 20;
      const isCircle = Math.random() > 0.5;
      
      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;
      shape.style.position = "absolute";
      shape.style.borderRadius = isCircle ? "50%" : "8px";
      shape.style.background = `rgba(255, 255, 255, ${Math.random() * 0.1 + 0.05})`;
      shape.style.backdropFilter = "blur(10px)";
      shape.style.border = "1px solid rgba(255, 255, 255, 0.2)";
      shape.style.left = `${Math.random() * 100}%`;
      shape.style.top = `${Math.random() * 100}%`;
      shape.style.pointerEvents = "none";
      shape.style.transition = "transform 0.3s ease-out";
      
      container.appendChild(shape);
      shapes.push(shape);

      // Animate each shape
      const animateShape = () => {
        const x = (Math.random() - 0.5) * 200;
        const y = (Math.random() - 0.5) * 200;
        const duration = Math.random() * 3000 + 2000;
        
        shape.animate(
          [
            { transform: `translate(0, 0) rotate(0deg)` },
            { transform: `translate(${x}px, ${y}px) rotate(360deg)` },
          ],
          {
            duration: duration,
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in-out",
          }
        );
      };

      animateShape();
    }

    return () => {
      shapes.forEach((shape) => {
        if (container.contains(shape)) {
          container.removeChild(shape);
        }
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
}
