import { useState, type FormEvent } from 'react';
import SectionHead from '@/components/SectionHead';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { companyInfo } from '@/data/company';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire this up to your lead-capture / email API endpoint.
    setSubmitted(true);
    e.currentTarget.reset();
  };

  return (
    <section className="pt-[160px] pb-[110px]">
      <div className="max-w-[1240px] mx-auto px-7">
        <SectionHead
          eyebrow="Contact"
          title="We'd love to hear from you."
          description="Reach out for orders, partnerships, or anything else — we respond honestly and quickly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Reveal>
            <div className="bg-white rounded-[22px] border border-charcoal/10 p-7">
              <ContactRow icon="heart" label="Company" value={companyInfo.name} />
              <ContactRow icon="bolt" label="Phone" value={companyInfo.phone} href={companyInfo.phoneHref} />
              <ContactRow icon="tag" label="Email" value={companyInfo.email} href={companyInfo.emailHref} />
              <ContactRow icon="shield" label="Address" value={companyInfo.address.full} last />

              <div className="flex gap-3 mt-5">
                <a
                  href={companyInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-[42px] h-[42px] rounded-full bg-green-deep text-white flex items-center justify-center hover:bg-orange transition-colors"
                >
                  <Icon name="bolt" size={18} />
                </a>
                <a
                  href={companyInfo.social.instagram}
                  aria-label="Instagram"
                  className="w-[42px] h-[42px] rounded-full bg-green-deep text-white flex items-center justify-center hover:bg-orange transition-colors"
                >
                  <Icon name="heart" size={18} />
                </a>
                <a
                  href={companyInfo.social.facebook}
                  aria-label="Facebook"
                  className="w-[42px] h-[42px] rounded-full bg-green-deep text-white flex items-center justify-center hover:bg-orange transition-colors"
                >
                  <Icon name="repeat" size={18} />
                </a>
                <a
                  href={companyInfo.social.linkedin}
                  aria-label="LinkedIn"
                  className="w-[42px] h-[42px] rounded-full bg-green-deep text-white flex items-center justify-center hover:bg-orange transition-colors"
                >
                  <Icon name="tag" size={18} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative border border-charcoal/10 rounded-[14px] overflow-hidden">
              <iframe
                src={companyInfo.mapsEmbedUrl}
                width="100%"
                height="260"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Honest Foods location - UG-105, Ansal Corporate Plaza, Palam Vihar, Gurugram"
              />
              <a
                href={companyInfo.mapsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 bg-white text-green-deep text-[12.5px] font-semibold px-3.5 py-2 rounded-full inline-flex items-center gap-1.5 shadow-md hover:bg-orange hover:text-white transition-colors"
              >
                Open in Google Maps <Icon name="bolt" size={14} />
              </a>
            </div>

            <div className="bg-white rounded-[22px] border border-charcoal/10 p-6 mt-5">
              <h3 className="text-[19px] mb-4">Send a message</h3>

              {submitted && (
                <div className="mb-4 p-3 rounded-[10px] bg-green/10 text-green-deep text-[13.5px] font-medium">
                  Thanks for reaching out! We will get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-[12.5px] font-semibold mb-1.5 text-charcoal-soft uppercase tracking-wide">
                    Name
                  </label>
                  <input required name="name" placeholder="Your name" className="input-field" />
                </div>
                <div className="mb-4">
                  <label className="block text-[12.5px] font-semibold mb-1.5 text-charcoal-soft uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    className="input-field"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-[12.5px] font-semibold mb-1.5 text-charcoal-soft uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="How can we help?"
                    className="input-field"
                  />
                </div>
                <Button type="submit" className="w-full justify-center">
                  Send Message
                </Button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  last = false,
}: {
  icon: 'heart' | 'bolt' | 'tag' | 'shield';
  label: string;
  value: string;
  href?: string;
  last?: boolean;
}) {
  const content = href ? (
    <a href={href} className="hover:text-orange-deep transition-colors">
      {value}
    </a>
  ) : (
    value
  );

  return (
    <div className={`flex gap-4 py-4 items-start ${last ? '' : 'border-b border-charcoal/10'}`}>
      <div className="w-[42px] h-[42px] rounded-[11px] bg-cream-deep flex items-center justify-center text-green flex-shrink-0">
        <Icon name={icon} size={20} />
      </div>
      <div>
        <h4 className="text-[14px] font-sans font-bold mb-0.5">{label}</h4>
        <p className="text-[14px] text-charcoal-soft">{content}</p>
      </div>
    </div>
  );
}
