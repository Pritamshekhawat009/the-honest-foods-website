import type { WhyItem } from '@/types';
import Reveal from './Reveal';
import Icon from './Icon';

export default function WhyCard({ item }: { item: WhyItem }) {
  return (
    <Reveal>
      <div className="bg-white rounded-[14px] p-7 border border-charcoal/10 transition-all duration-300 hover:-translate-y-1.5 hover:border-orange">
        <div className="w-[46px] h-[46px] rounded-xl bg-green-deep text-orange-light flex items-center justify-center mb-4">
          <Icon name={item.icon} size={22} />
        </div>
        <h4 className="text-[17px] text-charcoal mb-1.5 font-sans font-bold">{item.title}</h4>
        <p className="text-[13.5px] text-charcoal-soft">{item.description}</p>
      </div>
    </Reveal>
  );
}
