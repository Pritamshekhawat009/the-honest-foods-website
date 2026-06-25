import LegalPage from '@/components/LegalPage';

export default function Accessibility() {
  return (
    <LegalPage
      title="Accessibility Statement"
      sections={[
        {
          heading: 'Our Commitment',
          paragraphs: [
            'The Honest Foods is committed to making our website accessible to the widest possible audience, regardless of ability or technology.',
          ],
        },
        {
          heading: 'Ongoing Improvements',
          paragraphs: [
            'We continually review our website to improve usability, including colour contrast, keyboard navigation and screen-reader compatibility.',
          ],
        },
        {
          heading: 'Feedback',
          paragraphs: [
            'If you experience any accessibility barriers while using our website, please contact us at hello@thehonestfoods.in so we can address them.',
          ],
        },
      ]}
    />
  );
}
