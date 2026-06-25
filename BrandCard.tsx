import { useNavigate } from 'react-router-dom';
import type { Brand } from '@/types';
import Reveal from './Reveal';
import Button from './Button';

interface BrandCardProps {
  brand: Brand;
  /** Show the full menu list rather than just the first 3 items */
  fullMenu?: boolean;
}

export default function BrandCard({ brand, fullMenu = false }: BrandCardProps) {
  const navigate = useNavigate();
  const menuItems = fullMenu ? brand.menu : brand.menu.slice(0, 3);

  return (
    <Reveal>
      <div
        onClick={() => navigate('/order')}
        className="bg-cream rounded-[22px] overflow-hidden flex flex-col cursor-pointer border border-black/[0.04] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_-16px_rgba(0,0,0,0.35)]"
      >
        <div className="h-[190px] w-full bg-white flex items-center justify-center p-6 border-b border-black/10">
          <img
            src={brand.logo}
            alt={`${brand.name} logo`}
            loading="lazy"
            className="max-w-[78%] max-h-[140px] object-contain"
          />
        </div>
        <div className="p-6 flex flex-col gap-2.5 flex-1">
          <span className="font-mono text-[11.5px] uppercase tracking-wider text-orange font-semibold">
            {brand.tagline}
          </span>
          <h3 className="text-[23px] text-green-deep">{brand.name}</h3>
          <p className="text-[14px] text-charcoal-soft mb-1">{brand.description}</p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {menuItems.map((item) => (
              <span
                key={item}
                className="text-[11.5px] bg-cream-deep px-2.5 py-1.5 rounded-full font-medium text-charcoal"
              >
                {item}
              </span>
            ))}
          </div>
          <Button
            variant="outline-dark"
            size="sm"
            className="mt-auto self-start"
            onClick={(e) => {
              e.stopPropagation();
              navigate('/order');
            }}
          >
            Explore Menu →
          </Button>
        </div>
      </div>
    </Reveal>
  );
}
