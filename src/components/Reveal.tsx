import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
}

export const Reveal: React.FC<RevealProps> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }
    
    // Zwiększamy threshold do 0.15, aby element animował się głębiej w polu widzenia
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.15 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [prefersReduced]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[800ms] ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${prefersReduced ? '!opacity-100 !translate-y-0 !transition-none' : ''}`}
    >
      {children}
    </div>
  );
};