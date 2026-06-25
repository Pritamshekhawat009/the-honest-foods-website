export interface Brand {
  id: string;
  name: string;
  tagline: string;
  description: string;
  menu: string[];
  logo: string;
  shortCode: string;
  swiggyUrl: string;
  zomatoUrl: string;
  whatsappUrl: string;
}

export interface WhyItem {
  title: string;
  description: string;
  icon: IconName;
}

export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  icon: IconName;
  tint: string;
  date: string;
  readTime: string;
}

export interface FranchiseBenefit {
  title: string;
  description: string;
}

export type IconName =
  | 'leaf'
  | 'clock'
  | 'shield'
  | 'flask'
  | 'repeat'
  | 'tag'
  | 'bolt'
  | 'heart';
