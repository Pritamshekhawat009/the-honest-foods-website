import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '@/assets/logos/the-honest-foods-logo.png';
import Icon from './Icon';
import Button from './Button';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/brands', label: 'Brands' },
  { to: '/order', label: 'Order Now' },
  { to: '/franchise', label: 'Franchise' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMobileOpen(false);
  }, []);

  const navLinkClass = (isActive: boolean) =>
    `font-semibold text-[14.5px] py-1.5 relative transition-opacity ${
      isActive ? 'opacity-100 text-green-deep' : 'opacity-75 hover:opacity-100 text-charcoal'
    }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          scrolled ? 'bg-cream/95 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.06)] py-3.5' : 'py-5'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-7">
          <nav className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2.5 cursor-pointer"
              aria-label="The Honest Foods home"
            >
              <img src={logo} alt="The Honest Foods" className="h-[38px] w-auto object-contain" />
            </button>

            <div className="hidden lg:flex gap-7 items-center">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => navLinkClass(isActive)}
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <span className="absolute -bottom-[3px] left-0 right-0 h-[2px] bg-orange rounded" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="flex items-center gap-3.5">
              <Button size="sm" onClick={() => navigate('/order')} className="hidden sm:inline-flex">
                <span>Order Now</span> <Icon name="bolt" size={15} />
              </Button>
              <button
                className="lg:hidden flex flex-col gap-[5px] p-1.5"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <span className="w-6 h-[2px] bg-green-deep rounded" />
                <span className="w-6 h-[2px] bg-green-deep rounded" />
                <span className="w-6 h-[2px] bg-green-deep rounded" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile slide-in menu */}
      <div
        className={`fixed inset-0 bg-green-deep z-[1100] flex flex-col p-7 transition-transform duration-300 lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="self-end text-cream text-3xl"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        {NAV_LINKS.map((link) => (
          <button
            key={link.to}
            onClick={() => {
              navigate(link.to);
              setMobileOpen(false);
            }}
            className="text-left font-serif text-[28px] text-cream py-3.5 border-b border-cream/10"
          >
            {link.label}
          </button>
        ))}
      </div>
    </>
  );
}
