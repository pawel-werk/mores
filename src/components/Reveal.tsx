import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: 'fade' | 'clip' | 'line';
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  delay = 0, 
  className = '',
  variant = 'fade'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.15 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [prefersReduced]);

  // Wspólne parametry płynnego, edytorskiego ruchu (custom easing)
  const baseStyles = "transition-all ease-[cubic-bezier(0.16,1,0.3,1)]";
  
  let variantStyles = "";
  let hiddenStyles = "";
  let visibleStyles = "";

  switch (variant) {
    case 'clip':
      // Odsłanianie materiałów/zdjęć od dołu (maskowanie)
      variantStyles = "duration-[1200ms]";
      hiddenStyles = "[clip-path:inset(100%_0_0_0)]";
      visibleStyles = "[clip-path:inset(0_0_0_0)]";
      break;
    case 'line':
      // Rysowanie poziomych osi czasu i separatorów
      variantStyles = "duration-[1000ms] origin-left";
      hiddenStyles = "scale-x-0";
      visibleStyles = "scale-x-100";
      break;
    case 'fade':
    default:
      // Subtelniejszy fade do tekstów - mniejsze przesunięcie (translate-y-2 zamiast translate-y-4)
      variantStyles = "duration-[1000ms]";
      hiddenStyles = "opacity-0 translate-y-2"; 
      visibleStyles = "opacity-100 translate-y-0";
      break;
  }

  // Wymuszenie stanu widocznego przy preferencji reduced-motion
  const reducedMotionStyles = prefersReduced 
    ? '!opacity-100 !translate-y-0 ![clip-path:inset(0_0_0_0)] !scale-x-100 !transition-none' 
    : '';

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${baseStyles} ${variantStyles} ${isVisible ? visibleStyles : hiddenStyles} ${reducedMotionStyles} ${className}`.trim()}
    >
      {children}
    </div>
  );
};