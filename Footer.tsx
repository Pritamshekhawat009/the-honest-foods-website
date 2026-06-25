import { Link } from 'react-router-dom';
import logo from '@/assets/logos/the-honest-foods-logo.png';
import { brands } from '@/data/brands';
import { companyInfo } from '@/data/company';
import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80 pt-20">
      <div className="max-w-[1240px] mx-auto px-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-9 pb-12 border-b border-cream/10">
          <div>
            <div className="inline-flex items-center bg-white rounded-[10px] px-3 py-2 mb-3.5">
              <img src={logo} alt="The Honest Foods" className="h-[30px]" />
            </div>
            <p className="text-[13.5px] leading-7 max-w-[260px]">
              A multi-brand food company building honest, hygienic, high-quality food brands
              people can trust — every single day.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href={companyInfo.social.instagram}
                aria-label="Instagram"
                className="w-[42px] h-[42px] rounded-full bg-green-deep flex items-center justify-center hover:bg-orange transition-colors"
              >
                <Icon name="heart" size={18} />
              </a>
              <a
                href={companyInfo.social.facebook}
                aria-label="Facebook"
                className="w-[42px] h-[42px] rounded-full bg-green-deep flex items-center justify-center hover:bg-orange transition-colors"
              >
                <Icon name="repeat" size={18} />
              </a>
              <a
                href={companyInfo.social.linkedin}
                aria-label="LinkedIn"
                className="w-[42px] h-[42px] rounded-full bg-green-deep flex items-center justify-center hover:bg-orange transition-colors"
              >
                <Icon name="tag" size={18} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white text-[13px] uppercase tracking-wider mb-4 font-mono">
              Brands
            </h5>
            <div className="flex flex-col gap-2.5">
              {brands.map((b) => (
                <Link key={b.id} to="/order" className="text-[13.5px] hover:text-orange transition-colors">
                  {b.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-white text-[13px] uppercase tracking-wider mb-4 font-mono">
              Company
            </h5>
            <div className="flex flex-col gap-2.5">
              <Link to="/about" className="text-[13.5px] hover:text-orange transition-colors">About</Link>
              <Link to="/blogs" className="text-[13.5px] hover:text-orange transition-colors">Blogs</Link>
              <Link to="/franchise" className="text-[13.5px] hover:text-orange transition-colors">Franchise</Link>
              <Link to="/contact" className="text-[13.5px] hover:text-orange transition-colors">Careers</Link>
              <Link to="/contact" className="text-[13.5px] hover:text-orange transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h5 className="text-white text-[13px] uppercase tracking-wider mb-4 font-mono">
              Support
            </h5>
            <div className="flex flex-col gap-2.5">
              <Link to="/privacy-policy" className="text-[13.5px] hover:text-orange transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-[13.5px] hover:text-orange transition-colors">Terms of Service</Link>
              <Link to="/refund-policy" className="text-[13.5px] hover:text-orange transition-colors">Refund & Cancellation</Link>
              <Link to="/shipping-policy" className="text-[13.5px] hover:text-orange transition-colors">Shipping & Delivery</Link>
              <Link to="/cookie-policy" className="text-[13.5px] hover:text-orange transition-colors">Cookie Policy</Link>
              <Link to="/accessibility" className="text-[13.5px] hover:text-orange transition-colors">Accessibility</Link>
            </div>
          </div>

          <div>
            <h5 className="text-white text-[13px] uppercase tracking-wider mb-4 font-mono">
              Contact
            </h5>
            <div className="flex flex-col gap-2.5 text-[13.5px]">
              <span>{companyInfo.phone}</span>
              <span>{companyInfo.email}</span>
              <span className="max-w-[210px]">{companyInfo.address.full}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center py-6 text-[12.5px] flex-wrap gap-2.5">
          <span>© {new Date().getFullYear()} The Honest Foods. All rights reserved.</span>
          <span className="font-mono opacity-70">Honest Food. Every Day.</span>
        </div>
      </div>
    </footer>
  );
}
