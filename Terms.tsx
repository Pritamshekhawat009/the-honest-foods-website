import LegalPage from '@/components/LegalPage';

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      sections={[
        {
          heading: 'Acceptance of Terms',
          paragraphs: [
            'By accessing or using The Honest Foods website or ordering from any of our brands, you agree to these Terms of Service.',
          ],
        },
        {
          heading: 'Orders',
          paragraphs: [
            'All orders are subject to availability, kitchen capacity and delivery zone coverage. We reserve the right to refuse or cancel any order at our discretion.',
          ],
        },
        {
          heading: 'Pricing',
          paragraphs: [
            'Prices listed on our platforms are subject to change without prior notice and may vary slightly across delivery partners.',
          ],
        },
        {
          heading: 'Intellectual Property',
          paragraphs: [
            'All brand names, logos, recipes, and content on this website are the property of The Honest Foods and may not be used without permission.',
          ],
        },
        {
          heading: 'Limitation of Liability',
          paragraphs: [
            'The Honest Foods is not liable for delays or issues caused by third-party delivery partners once an order has been handed over for delivery.',
          ],
        },
        {
          heading: 'Governing Law',
          paragraphs: [
            'These terms are governed by the laws of India, with disputes subject to the jurisdiction of courts in Gurugram, Haryana.',
          ],
        },
      ]}
    />
  );
}
