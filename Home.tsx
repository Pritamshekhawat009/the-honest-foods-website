import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import Reveal from '@/components/Reveal';
import SectionHead from '@/components/SectionHead';
import WhyCard from '@/components/WhyCard';
import BrandCard from '@/components/BrandCard';
import { whyChooseUs } from '@/data/why';
import { brands } from '@/data/brands';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-[140px] pb-[120px] bg-[radial-gradient(circle_at_82%_24%,rgba(230,126,34,0.35)_0%,rgba(230,126,34,0)_42%),linear-gradient(165deg,#163828_0%,#1F4D3A_48%,#235e44_75%,#F8F6F2_100%)]">
        <div className="grain-overlay" />
        <div
          aria-hidden="true"
          className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[560px] h-[560px] opacity-[0.16] pointer-events-none"
        >
          <svg
            viewBox="0 0 200 200"
            fill="none"
            stroke="#F2B66B"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full"
          >
            <path d="M30 95c0 38 30 68 68 68s68-30 68-68H30z" />
            <path d="M22 95h152" />
            <path d="M70 95c2-22 8-30 8-48M100 95c2-26 10-36 6-58M132 95c-2-20-10-28-6-46" />
            <path d="M58 178c14 6 28 9 42 9s28-3 42-9" />
          </svg>
        </div>

        <div className="max-w-[1240px] mx-auto px-7 relative z-[2]">
          <Reveal immediate className="max-w-[760px] text-cream">
            <div className="eyebrow text-orange-light before:bg-orange-light">
              The Honest Foods · Est. for everyday trust
            </div>
            <h1 className="text-[clamp(42px,6.4vw,82px)] text-white leading-[1.04] mt-4 mb-6 tracking-tight">
              Honest Food.
              <br />
              <em className="italic text-orange-light font-medium">Every Day.</em>
            </h1>
            <p className="text-lg text-cream/90 max-w-[560px] mb-9">
              We build food brands that people can trust. Every meal is prepared with quality
              ingredients, hygienic processes and honest cooking practices.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button onClick={() => navigate('/order')}>
                Order Now <Icon name="bolt" size={16} />
              </Button>
              <Button variant="outline" onClick={() => navigate('/brands')}>
                Explore Our Brands
              </Button>
            </div>
            <div className="flex gap-10 mt-16 flex-wrap">
              <div>
                <b className="block font-serif text-[34px] text-white">6</b>
                <span className="text-[13px] text-cream/70 font-mono uppercase tracking-wider">
                  Food Brands
                </span>
              </div>
              <div>
                <b className="block font-serif text-[34px] text-white">0</b>
                <span className="text-[13px] text-cream/70 font-mono uppercase tracking-wider">
                  Artificial Shortcuts
                </span>
              </div>
              <div>
                <b className="block font-serif text-[34px] text-white">100%</b>
                <span className="text-[13px] text-cream/70 font-mono uppercase tracking-wider">
                  Honest Cooking
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-[110px] bg-cream">
        <div className="max-w-[1240px] mx-auto px-7">
          <SectionHead
            eyebrow="Why Choose Us"
            title="Trust, built one meal at a time."
            description="Eight commitments that hold every brand and every kitchen to the same honest standard."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChooseUs.map((item) => (
              <WhyCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS PREVIEW */}
      <section className="py-[110px] bg-green-deep">
        <div className="max-w-[1240px] mx-auto px-7">
          <SectionHead
            eyebrow="Our Brands"
            title="One company. Six honest kitchens."
            description="Each brand has its own personality — built on the same foundation of quality and trust."
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.slice(0, 3).map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" onClick={() => navigate('/brands')}>
              View All Brands
            </Button>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-orange text-white text-center py-20">
        <div className="max-w-[1240px] mx-auto px-7">
          <h2 className="text-white text-[clamp(28px,4vw,42px)]">
            Ready for honest food, delivered fast?
          </h2>
          <p className="text-white/90 max-w-[520px] mx-auto mt-3.5 mb-8">
            Browse every brand under The Honest Foods and order in a few taps.
          </p>
          <Button
            onClick={() => navigate('/order')}
            className="!bg-white !text-orange-deep !shadow-none hover:!bg-green-deep hover:!text-white"
          >
            Order Now
          </Button>
        </div>
      </section>
    </>
  );
}
