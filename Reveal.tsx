import { useEffect, useRef, useState, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Skip the intersection observer and show immediately (e.g. above-the-fold hero content) */
  immediate?: boolean;
}

export default function Reveal({ children, className = '', immediate = false }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(immediate);

  useEffect(() => {
    if (immediate) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate]);

  return (
    <div ref={ref} className={`reveal ${visible ? 'show' : ''} ${className}`}>
      {children}
    </div>
  );
}
