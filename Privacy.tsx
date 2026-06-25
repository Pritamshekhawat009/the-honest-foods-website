import LegalPage from '@/components/LegalPage';

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      sections={[
        {
          heading: 'Overview',
          paragraphs: [
            'The Honest Foods ("we", "us", "our") respects your privacy and is committed to protecting the personal information you share with us across our brands, website and ordering channels.',
          ],
        },
        {
          heading: 'Information We Collect',
          paragraphs: [
            'We may collect your name, phone number, email address, delivery address and order history when you place an order, contact us, or submit a franchise inquiry.',
          ],
        },
        {
          heading: 'How We Use Your Information',
          paragraphs: [
            'We use your information to process orders, respond to inquiries, improve our services, and occasionally share relevant updates about our brands. We do not sell your personal information to third parties.',
          ],
        },
        {
          heading: 'Data Sharing',
          paragraphs: [
            'We may share limited information with delivery partners, payment processors and platforms such as Swiggy, Zomato and WhatsApp Business strictly to fulfil your orders.',
          ],
        },
        {
          heading: 'Data Security',
          paragraphs: [
            'We use reasonable technical and organisational measures to protect your data, though no method of transmission over the internet is completely secure.',
          ],
        },
        {
          heading: 'Your Rights',
          paragraphs: [
            'You may request access to, correction of, or deletion of your personal data by writing to hello@thehonestfoods.in.',
          ],
        },
        {
          heading: 'Contact',
          paragraphs: [
            'For privacy-related questions, contact us at hello@thehonestfoods.in or +91 92893 93331.',
          ],
        },
      ]}
    />
  );
}
