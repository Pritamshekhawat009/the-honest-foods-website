import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Brands from '@/pages/Brands';
import Order from '@/pages/Order';
import Franchise from '@/pages/Franchise';
import Blogs from '@/pages/Blogs';
import Contact from '@/pages/Contact';
import Privacy from '@/pages/legal/Privacy';
import Terms from '@/pages/legal/Terms';
import Refund from '@/pages/legal/Refund';
import Shipping from '@/pages/legal/Shipping';
import Cookies from '@/pages/legal/Cookies';
import Accessibility from '@/pages/legal/Accessibility';
import NotFound from '@/pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/order" element={<Order />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-of-service" element={<Terms />} />
          <Route path="/refund-policy" element={<Refund />} />
          <Route path="/shipping-policy" element={<Shipping />} />
          <Route path="/cookie-policy" element={<Cookies />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
