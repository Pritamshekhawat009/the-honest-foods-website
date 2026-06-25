import LegalPage from '@/components/LegalPage';

export default function Shipping() {
  return (
    <LegalPage
      title="Shipping & Delivery Policy"
      sections={[
        {
          heading: 'Delivery Areas',
          paragraphs: [
            'We currently deliver within defined zones around each of our cloud kitchens. Delivery availability is shown at checkout on our partner platforms.',
          ],
        },
        {
          heading: 'Delivery Times',
          paragraphs: [
            'Estimated delivery times are provided at checkout and may vary based on order volume, distance, weather and traffic conditions.',
          ],
        },
        {
          heading: 'Delivery Partners',
          paragraphs: [
            'Orders are delivered through trusted third-party delivery partners and platform-integrated riders to ensure timely service.',
          ],
        },
        {
          heading: 'Packaging',
          paragraphs: [
            'All food is packed in hygienic, tamper-evident packaging designed to preserve freshness and quality during transit.',
          ],
        },
      ]}
    />
  );
}
