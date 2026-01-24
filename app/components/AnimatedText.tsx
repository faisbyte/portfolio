"use client";

import { useEffect, useState } from "react";

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "Data Scientist",
  "Business Development Manager",
  "Problem Solver",
  "Creative Thinker",
];

export default function AnimatedText() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[currentRole];
    const fullText = current;

    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      // Deleting: remove one character at a time, faster than typing
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, 50); // Faster when deleting
      } else {
        // Finished deleting, move to next role
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 500); // Brief pause before starting next word
      }
    } else {
      // Typing: add one character at a time
      if (displayText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, 100); // Normal typing speed
      } else {
        // Finished typing, wait then start deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Pause before deleting
      }
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [displayText, isDeleting, currentRole]);

  return (
    <div className="text-center">
      <p className="text-lg sm:text-xl lg:text-2xl text-white/90 font-light">
        I'm a <span className="text-white font-semibold">{displayText}</span><span className="animate-pulse">|</span>
      </p>
    </div>
  );
}
