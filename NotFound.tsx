import { Link } from 'react-router-dom';
import Button from '@/components/Button';

export default function NotFound() {
  return (
    <section className="pt-[160px] pb-[140px] min-h-[60vh] flex items-center justify-center text-center">
      <div className="max-w-[480px] px-7">
        <div className="eyebrow text-orange before:bg-orange justify-center">404</div>
        <h1 className="mt-3.5 text-[clamp(28px,4vw,42px)] text-green-deep">
          This page wandered off the menu.
        </h1>
        <p className="mt-4 text-charcoal-soft text-[15.5px]">
          The page you're looking for doesn't exist or may have moved. Let's get you back to
          something honest and delicious.
        </p>
        <Link to="/" className="inline-block mt-8">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </section>
  );
}
