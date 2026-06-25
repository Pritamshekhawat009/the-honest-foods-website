import type { ReactNode, ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'outline' | 'outline-dark';
type Size = 'md' | 'sm';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    'bg-orange text-white shadow-[0_8px_20px_-6px_rgba(230,126,34,0.55)] hover:bg-orange-deep hover:-translate-y-0.5',
  outline:
    'bg-transparent text-cream border border-cream/50 hover:bg-cream/10 hover:border-white',
  'outline-dark':
    'bg-transparent text-green-deep border border-green-deep hover:bg-green-deep hover:text-white',
};

const SIZE_CLASSES: Record<Size, string> = {
  md: 'px-7 py-[15px] text-[15px]',
  sm: 'px-[18px] py-[10px] text-[13.5px]',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={`inline-flex items-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-200 ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`}
    >
      {children}
    </button>
  );
}
