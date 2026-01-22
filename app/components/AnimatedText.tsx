"use client";

import { useEffect, useState } from "react";

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "Data Scientist",
  "Problem Solver",
  "Creative Thinker",
];

export default function AnimatedText() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const current = roles[currentRole];
    const fullText = current;

    if (isDeleting) {
      if (displayText.length > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
        timeout = setTimeout(() => {}, 50);
      } else {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    } else {
      if (displayText.length < fullText.length) {
        setDisplayText(fullText.slice(0, displayText.length + 1));
        timeout = setTimeout(() => {}, 100);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [displayText, isDeleting, currentRole]);

  return (
    <div className="text-center">
      <p className="text-lg sm:text-xl lg:text-2xl text-white/90 font-light">
        I'm a{" "}
        <span className="inline-block min-w-[200px] text-left">
          <span className="text-white font-semibold">{displayText}</span>
          <span className="animate-pulse">|</span>
        </span>
      </p>
    </div>
  );
}
