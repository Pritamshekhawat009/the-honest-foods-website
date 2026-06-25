import LegalPage from '@/components/LegalPage';

export default function Cookies() {
  return (
    <LegalPage
      title="Cookie Policy"
      sections={[
        {
          heading: 'What Are Cookies',
          paragraphs: [
            'Cookies are small text files stored on your device that help our website function properly and improve your browsing experience.',
          ],
        },
        {
          heading: 'How We Use Cookies',
          paragraphs: [
            'We use cookies to remember preferences, understand site usage, and improve performance across our pages.',
          ],
        },
        {
          heading: 'Managing Cookies',
          paragraphs: [
            'You can control or disable cookies through your browser settings, though some features of our website may not function correctly without them.',
          ],
        },
      ]}
    />
  );
}
