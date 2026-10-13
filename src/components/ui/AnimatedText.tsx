"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  highlightWords?: string[];
  highlightClass?: string;
  delay?: number;
  once?: boolean;
}

export function AnimatedText({
  text,
  className = "",
  as: Component = "h2",
  highlightWords = [],
  highlightClass = "text-[#EE6C25] font-black drop-shadow-[0_0_20px_rgba(238,108,37,0.4)]",
  delay = 0,
  once = true,
}: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [once]);

  const words = text.split(" ");
  let charCounter = 0;

  return (
    <div
      ref={containerRef}
      className={`inline-block overflow-hidden ${className}`}
      aria-label={text}
    >
      <Component className="inline-block">
        {words.map((word, wordIdx) => {
          const isHighlight = highlightWords.some(
            (hw) => hw.toLowerCase() === word.replace(/[^\w]/g, "").toLowerCase()
          );

          return (
            <span
              key={wordIdx}
              className={`inline-block whitespace-nowrap mr-[0.28em] ${
                isHighlight ? highlightClass : "text-white"
              }`}
            >
              {word.split("").map((char, charIdx) => {
                const currentDelay = delay + charCounter * 18;
                charCounter++;

                return (
                  <span
                    key={charIdx}
                    className="inline-block transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translate3d(0, 0, 0)"
                        : "translate3d(0, 30px, 0)",
                      transitionDelay: `${currentDelay}ms`,
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </span>
          );
        })}
      </Component>
    </div>
  );
}
