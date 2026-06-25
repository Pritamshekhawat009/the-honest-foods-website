import { useState, type FormEvent } from 'react';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import { franchiseBenefits, investmentBudgets } from '@/data/franchise';

interface FranchiseFormState {
  name: string;
  phone: string;
  email: string;
  city: string;
  budget: string;
  message: string;
}

const INITIAL_STATE: FranchiseFormState = {
  name: '',
  phone: '',
  email: '',
  city: '',
  budget: investmentBudgets[0],
  message: '',
};

export default function Franchise() {
  const [form, setForm] = useState<FranchiseFormState>(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire this up to your CRM / lead-capture API endpoint.
    console.log('Franchise inquiry submitted:', form);
    setSubmitted(true);
    setForm(INITIAL_STATE);
  };

  return (
    <section className="pt-[160px] pb-[110px] bg-green-deep text-cream">
      <div className="max-w-[1240px] mx-auto px-7 grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-16 items-start">
        <Reveal>
          <div className="mb-9">
            <div className="eyebrow text-orange-light before:bg-orange-light">Franchise With Us</div>
            <h2 className="mt-3.5 text-[clamp(30px,4vw,46px)] leading-[1.12] text-white">
              Why Partner With The Honest Foods
            </h2>
            <p className="mt-4 text-[16.5px] text-cream/80">
              Join a multi-brand cloud kitchen model built for operators who want more revenue
              from less square footage.
            </p>
          </div>
          {franchiseBenefits.map((f, i) => (
            <div key={f.title} className="flex gap-4 py-4 border-b border-cream/10">
              <div className="font-mono text-orange-light text-[13px] pt-0.5">0{i + 1}</div>
              <div>
                <h4 className="text-white text-[16.5px] mb-1 font-sans font-bold">{f.title}</h4>
                <p className="text-cream/70 text-[13.5px]">{f.description}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal>
          <div className="bg-cream text-charcoal rounded-[22px] p-8">
            <h3 className="text-green-deep mb-4 text-[22px]">Franchise Inquiry</h3>

            {submitted && (
              <div className="mb-5 p-3.5 rounded-[10px] bg-green/10 text-green-deep text-[13.5px] font-medium">
                Thank you for your interest! Our franchise team will contact you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <Field label="Full Name">
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="input-field"
                />
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <Field label="Phone">
                  <input
                    required
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91"
                    className="input-field"
                  />
                </Field>
                <Field label="Email">
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className="input-field"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <Field label="City">
                  <input
                    required
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="input-field"
                  />
                </Field>
                <Field label="Investment Budget">
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="input-field"
                  >
                    {investmentBudgets.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Message">
                <textarea
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your interest"
                  className="input-field"
                />
              </Field>

              <Button type="submit" className="w-full justify-center">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <label className="block text-[12.5px] font-semibold mb-1.5 text-charcoal-soft uppercase tracking-wide">
        {label}
      </label>
      {children}
    </div>
  );
}
