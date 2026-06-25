import SectionHead from '@/components/SectionHead';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blogs';

export default function Blogs() {
  return (
    <section className="pt-[160px] pb-[110px]">
      <div className="max-w-[1240px] mx-auto px-7">
        <SectionHead
          eyebrow="Blogs"
          title="Stories from our kitchens."
          description="Notes on ingredients, hygiene, and how we build food brands people trust."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
