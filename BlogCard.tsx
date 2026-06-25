import type { BlogPost } from '@/types';
import Reveal from './Reveal';
import Icon from './Icon';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Reveal>
      <div className="bg-white rounded-[22px] overflow-hidden border border-charcoal/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-premium">
        <div
          className="h-[190px] w-full flex items-center justify-center text-white/90"
          style={{
            background: `linear-gradient(155deg, ${post.tint} 0%, ${post.tint}cc 100%)`,
          }}
        >
          <Icon name={post.icon} size={42} />
        </div>
        <div className="p-5">
          <span className="font-mono text-[11px] uppercase text-orange tracking-wider font-semibold">
            {post.category}
          </span>
          <h3 className="text-[18.5px] my-2 leading-tight">{post.title}</h3>
          <p className="text-[13.5px] text-charcoal-soft">{post.excerpt}</p>
          <div className="flex justify-between items-center mt-4 text-[12px] text-charcoal-soft font-mono">
            <span>{post.date}</span>
            <span>{post.readTime} read</span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
