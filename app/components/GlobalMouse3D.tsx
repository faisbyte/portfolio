"use client";

import { useEffect, useState } from "react";

export default function GlobalMouse3D({ children }: { children: React.ReactNode }) {
  const [transform, setTransform] = useState("");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate normalized position (-1 to 1)
      const x = (clientX / innerWidth) * 2 - 1;
      const y = (clientY / innerHeight) * 2 - 1;
      
      // Apply 3D rotation based on mouse position
      const rotateX = y * -15; // Max 15 degrees
      const rotateY = x * 15; // Max 15 degrees
      
      // Add slight translation for depth effect
      const translateX = x * 10;
      const translateY = y * 10;
      
      setTransform(
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px) translateZ(0)`
      );
    };

    const handleMouseLeave = () => {
      setTransform("perspective(1000px) rotateX(0) rotateY(0) translateX(0) translateY(0) translateZ(0)");
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      style={{
        transform,
        transformStyle: "preserve-3d",
        transition: "transform 0.1s ease-out",
        display: "inline-block",
      }}
    >
      {children}
    </div>
  );
}
