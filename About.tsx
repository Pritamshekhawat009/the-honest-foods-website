import SectionHead from '@/components/SectionHead';
import Reveal from '@/components/Reveal';
import WhyCard from '@/components/WhyCard';
import Icon from '@/components/Icon';
import { whyChooseUs } from '@/data/why';
import type { IconName } from '@/types';

const ABOUT_POINTS: { title: string; description: string; icon: IconName }[] = [
  { title: 'Customer-First', description: 'Every decision starts with the person ordering the meal.', icon: 'heart' },
  { title: 'Hygiene', description: 'Audited kitchens with strict cleanliness protocols.', icon: 'shield' },
  { title: 'Quality Ingredients', description: 'Sourced fresh, never substituted for cost.', icon: 'leaf' },
  { title: 'Honest Cooking', description: 'No artificial shortcuts, ever.', icon: 'flask' },
  { title: 'Affordable Pricing', description: 'Fair prices for everyday eating.', icon: 'tag' },
  { title: 'Consistency', description: 'The same great taste, order after order.', icon: 'repeat' },
  { title: 'Modern Kitchens', description: 'Purpose-built for speed and quality.', icon: 'bolt' },
  { title: 'Technology-Driven', description: 'Smart systems behind every order.', icon: 'clock' },
];

export default function About() {
  return (
    <>
      <section className="pt-[160px] pb-[110px] bg-white">
        <div className="max-w-[1240px] mx-auto px-7">
          <SectionHead
            eyebrow="About Us"
            title="Built to make honest food the easy choice."
            description="The Honest Foods is a multi-brand food company built around one belief — that everyday meals should be made with real ingredients, real care, and real consistency."
          />

          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
            <Reveal className="relative">
              <div
                role="img"
                aria-label="Illustration representing a modern, hygienic kitchen"
                className="rounded-[22px] w-full h-[520px] flex items-center justify-center p-7 bg-[linear-gradient(165deg,#163828_0%,#1F4D3A_55%,#2c6b4d_100%)]"
              >
                <svg
                  viewBox="0 0 320 400"
                  fill="none"
                  stroke="#F8F6F2"
                  strokeWidth={2.4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-[70%] h-[70%]"
                >
                  <rect x="20" y="20" width="280" height="360" rx="18" fill="none" stroke="rgba(248,246,242,0.18)" />
                  <circle cx="160" cy="150" r="62" stroke="#F2B66B" strokeWidth={3} />
                  <path d="M130 150a30 30 0 0 1 60 0" stroke="#F8F6F2" />
                  <path d="M110 230c10-14 24-22 50-22s40 8 50 22" stroke="#F8F6F2" />
                  <path
                    d="M96 100c4-16 10-24 10-40M132 90c4-18 12-26 8-46M160 90c4-18 10-26 6-46"
                    stroke="#F2B66B"
                  />
                  <path d="M70 300h180M70 320h140M70 340h160" stroke="rgba(248,246,242,0.35)" />
                </svg>
              </div>
              <div className="absolute -bottom-7 -left-7 bg-orange text-white px-6 py-5 rounded-[14px] shadow-premium max-w-[230px] sm:block">
                <b className="block font-serif text-[30px]">6+</b>
                <span className="text-[12.5px] font-mono uppercase tracking-wider">
                  Brands, one standard
                </span>
              </div>
            </Reveal>

            <Reveal>
              <h3 className="text-[26px] mb-3.5">
                A customer-first, technology-driven kitchen company
              </h3>
              <p className="text-charcoal-soft text-[15.5px]">
                We operate as a multi-brand cloud kitchen company — running several focused food
                brands from modern, technology-driven kitchens. Every brand shares the same
                backbone: hygienic processes, quality ingredients, honest cooking and consistent
                pricing, so customers always know what to expect.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-9">
                {ABOUT_POINTS.map((p) => (
                  <div key={p.title} className="flex gap-3.5 items-start">
                    <div className="w-[38px] h-[38px] rounded-[10px] bg-cream-deep flex items-center justify-center flex-shrink-0 text-green">
                      <Icon name={p.icon} size={18} />
                    </div>
                    <div>
                      <h4 className="text-[16px] mb-0.5 text-charcoal font-sans font-bold">
                        {p.title}
                      </h4>
                      <p className="text-[14px] text-charcoal-soft">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-[110px] bg-cream">
        <div className="max-w-[1240px] mx-auto px-7">
          <SectionHead eyebrow="What Sets Us Apart" title="Why Choose Us" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChooseUs.map((item) => (
              <WhyCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
