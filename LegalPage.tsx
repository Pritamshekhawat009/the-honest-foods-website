interface LegalSection {
  heading: string;
  paragraphs: string[];
}

interface LegalPageProps {
  title: string;
  updated?: string;
  sections: LegalSection[];
}

export default function LegalPage({ title, updated = '25 June 2026', sections }: LegalPageProps) {
  return (
    <section className="pt-[160px] pb-[110px] bg-white min-h-[60vh]">
      <div className="max-w-[760px] mx-auto px-7">
        <h1 className="text-[38px] mb-2">{title}</h1>
        <div className="font-mono text-[12.5px] text-charcoal-soft mb-10">
          Last updated: {updated}
        </div>
        {sections.map((s) => (
          <div key={s.heading}>
            <h2 className="text-[21px] mt-9 mb-2.5 text-charcoal">{s.heading}</h2>
            {s.paragraphs.map((p, i) => (
              <p key={i} className="text-[15px] text-charcoal-soft mb-2.5">
                {p}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
