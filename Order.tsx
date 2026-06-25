import SectionHead from '@/components/SectionHead';
import Reveal from '@/components/Reveal';
import { brands } from '@/data/brands';

export default function Order() {
  return (
    <section className="pt-[160px] pb-[110px]">
      <div className="max-w-[1240px] mx-auto px-7">
        <SectionHead
          eyebrow="Order Now"
          title="Order from any Honest Foods brand."
          description="Choose a brand below and order directly through your favourite platform."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {brands.map((brand) => (
            <Reveal key={brand.id}>
              <div className="bg-white border border-charcoal/10 rounded-[22px] p-7 flex gap-5">
                <div className="w-[82px] h-[82px] rounded-2xl bg-white border border-charcoal/10 flex items-center justify-center flex-shrink-0 p-2">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-1">{brand.name}</h3>
                  <p className="text-[13.5px] text-charcoal-soft mb-2.5">{brand.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3.5">
                    {brand.menu.slice(0, 4).map((item) => (
                      <span
                        key={item}
                        className="text-[11.5px] bg-cream-deep px-2.5 py-1.5 rounded-full font-medium text-charcoal"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    <a
                      href={brand.swiggyUrl}
                      className="text-[12.5px] px-3.5 py-2 rounded-full font-semibold border border-charcoal/10 text-charcoal hover:border-orange hover:text-orange-deep transition-colors"
                      aria-label={`Order ${brand.name} on Swiggy`}
                    >
                      Order on Swiggy
                    </a>
                    <a
                      href={brand.zomatoUrl}
                      className="text-[12.5px] px-3.5 py-2 rounded-full font-semibold border border-charcoal/10 text-charcoal hover:border-orange hover:text-orange-deep transition-colors"
                      aria-label={`Order ${brand.name} on Zomato`}
                    >
                      Order on Zomato
                    </a>
                    <a
                      href={brand.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[12.5px] px-3.5 py-2 rounded-full font-semibold border border-charcoal/10 text-charcoal hover:border-orange hover:text-orange-deep transition-colors"
                      aria-label={`Order ${brand.name} on WhatsApp`}
                    >
                      Order on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
