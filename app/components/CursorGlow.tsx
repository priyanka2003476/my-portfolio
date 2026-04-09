"use client";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-30 z-50"
      style={{
        transform: `translate(${position.x - 80}px, ${position.y - 80}px)`
      }}
    />
  );
}