import LegalPage from '@/components/LegalPage';

export default function Refund() {
  return (
    <LegalPage
      title="Refund & Cancellation Policy"
      sections={[
        {
          heading: 'Order Cancellations',
          paragraphs: [
            'Orders can typically be cancelled before kitchen preparation begins. Once preparation has started, cancellation may not be possible.',
          ],
        },
        {
          heading: 'Refund Eligibility',
          paragraphs: [
            'Refunds are considered for incorrect orders, quality issues, or non-delivery, and are processed through the respective ordering platform (Swiggy, Zomato or direct payment channel).',
          ],
        },
        {
          heading: 'Refund Timelines',
          paragraphs: [
            'Approved refunds are typically processed within 5–7 business days, depending on your bank or payment provider.',
          ],
        },
        {
          heading: 'How to Request a Refund',
          paragraphs: [
            'Contact us at hello@thehonestfoods.in or +91 92893 93331 with your order ID and reason for the refund request within 24 hours of delivery.',
          ],
        },
      ]}
    />
  );
}
