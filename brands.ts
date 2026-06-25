import type { Brand } from '@/types';

import localRootsLogo from '@/assets/logos/local-roots-logo.jpg';
import tiffinStoryLogo from '@/assets/logos/tiffin-story-logo.jpg';
import soulOfBiryaniLogo from '@/assets/logos/soul-of-biryani-logo.jpg';
import shawarmaHqLogo from '@/assets/logos/shawarma-hq-logo.png';
import chowmenLogo from '@/assets/logos/chowmen-logo.png';
import tandooriFactoryLogo from '@/assets/logos/tandoori-factory-logo.png';

// WhatsApp ordering number for The Honest Foods. Swiggy/Zomato links are
// placeholders until each brand's live storefront URL is available.
const WHATSAPP_NUMBER = '919289393331';

export const brands: Brand[] = [
  {
    id: 'local-roots',
    name: 'Local Roots',
    tagline: 'Honest Indian Kitchen',
    description:
      'Modern Indian meals prepared with quality ingredients and balanced cooking for everyday dining.',
    menu: [
      'Dal Tadka Meal',
      'Butter Chicken',
      'Paneer Butter Masala',
      'Chicken Curry',
      'Jeera Rice',
      'Tandoori Roti',
    ],
    logo: localRootsLogo,
    shortCode: 'LR',
    swiggyUrl: '#',
    zomatoUrl: '#',
    whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    id: 'tiffin-story',
    name: 'The Tiffin Story',
    tagline: 'Home Style Meals',
    description: 'Fresh home-style meals and thalis prepared daily.',
    menu: [
      'Veg Thali',
      'Mini Thali',
      'Rajma Chawal',
      'Chole Rice',
      'Dal Rice',
      'Mix Veg Combo',
    ],
    logo: tiffinStoryLogo,
    shortCode: 'TS',
    swiggyUrl: '#',
    zomatoUrl: '#',
    whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    id: 'soul-of-biryani',
    name: 'Soul of Biryani',
    tagline: 'Authentic Regional Biryanis',
    description: 'Authentic biryanis made without artificial colours or flavours.',
    menu: [
      'Hyderabadi Chicken Biryani',
      'Lucknowi Chicken Biryani',
      'Paneer Biryani',
      'Veg Dum Biryani',
      'Egg Biryani',
      'Chicken 65',
    ],
    logo: soulOfBiryaniLogo,
    shortCode: 'SB',
    swiggyUrl: '#',
    zomatoUrl: '#',
    whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    id: 'shawarma-hq',
    name: 'Shawarma HQ',
    tagline: 'Fresh Shawarma & Wraps',
    description: 'Fresh shawarma, wraps and loaded platters.',
    menu: [
      'Classic Chicken Shawarma',
      'Mexican Shawarma',
      'Paneer Shawarma',
      'Falafel Wrap',
      'Chicken Platter',
      'Fries',
    ],
    logo: shawarmaHqLogo,
    shortCode: 'SQ',
    swiggyUrl: '#',
    zomatoUrl: '#',
    whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    id: 'chowmen',
    name: 'ChowMEN',
    tagline: 'Street Style Chinese',
    description: 'Fresh Indo-Chinese food prepared with quality ingredients.',
    menu: [
      'Hakka Noodles',
      'Schezwan Noodles',
      'Fried Rice',
      'Chilli Chicken',
      'Manchurian',
      'Spring Rolls',
    ],
    logo: chowmenLogo,
    shortCode: 'CM',
    swiggyUrl: '#',
    zomatoUrl: '#',
    whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    id: 'tandoori-factory',
    name: 'Tandoori Factory',
    tagline: 'Grills • Kebabs • Tandoor',
    description: 'Authentic North Indian tandoor and grilled specialities.',
    menu: [
      'Chicken Tikka',
      'Tandoori Chicken',
      'Paneer Tikka',
      'Seekh Kebab',
      'Butter Naan',
      'Malai Tikka',
    ],
    logo: tandooriFactoryLogo,
    shortCode: 'TF',
    swiggyUrl: '#',
    zomatoUrl: '#',
    whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
];
