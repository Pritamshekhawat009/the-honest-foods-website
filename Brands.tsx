import SectionHead from '@/components/SectionHead';
import BrandCard from '@/components/BrandCard';
import { brands } from '@/data/brands';

export default function Brands() {
  return (
    <section className="pt-[160px] pb-[110px] bg-green-deep">
      <div className="max-w-[1240px] mx-auto px-7">
        <SectionHead
          eyebrow="Our Brands"
          title="Six kitchens. One honest standard."
          description="Every brand has its own cuisine and identity — but all share the same commitment to quality, hygiene and honest cooking."
          light
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} fullMenu />
          ))}
        </div>
      </div>
    </section>
  );
}
