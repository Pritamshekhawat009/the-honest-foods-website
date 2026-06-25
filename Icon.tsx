import type { IconName } from '@/types';

const PATHS: Record<IconName, string> = {
  leaf: '<path d="M12 21c-4.5-1-8-4.5-8-9.5C4 6 8 3 13 3c5 0 8 4 8 8 0 6-5 10-9 10z"/><path d="M8 16c4-2 6-6 7-12"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  shield: '<path d="M12 3l8 4v5c0 5-3.5 8.5-8 9.5C7.5 20.5 4 17 4 12V7l8-4z"/>',
  flask: '<path d="M9 3h6M10 3v6L5 19a1 1 0 0 0 1 2h12a1 1 0 0 0 1-2l-5-10V3"/>',
  repeat:
    '<path d="M17 2l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 22l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/>',
  tag: '<path d="M20.6 12.6L12 21.2a2 2 0 0 1-2.8 0l-7-7a2 2 0 0 1 0-2.8L11 3h6a2 2 0 0 1 2 2v6z"/><circle cx="14.5" cy="8.5" r="1"/>',
  bolt: '<path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/>',
  heart:
    '<path d="M20.8 8.6c0-3-2.4-5-5-5-1.9 0-3.3 1-4.3 2.4C10.5 4.6 9.1 3.6 7.2 3.6c-2.6 0-5 2-5 5 0 5 6.9 9.8 9.3 11.3a1 1 0 0 0 1 0c2.4-1.5 9.3-6.3 9.3-11.3z"/>',
};

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export default function Icon({ name, size = 20, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      dangerouslySetInnerHTML={{ __html: PATHS[name] }}
      aria-hidden="true"
    />
  );
}
