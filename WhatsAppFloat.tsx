import { companyInfo } from '@/data/company';

export default function WhatsAppFloat() {
  return (
    <a
      href={companyInfo.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[900] w-[58px] h-[58px] rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_10px_28px_rgba(0,0,0,0.25)] hover:scale-110 transition-transform"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.9-.4-1.8-1-2.6-1.8-.7-.7-1.3-1.5-1.8-2.4-.1-.2 0-.4.1-.5.2-.2.5-.5.6-.7.1-.2.1-.4 0-.6-.1-.2-.7-1.6-.9-2.1-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.1 3 .1.2 1.9 2.9 4.6 4 2.7 1.1 2.7.7 3.2.7.5 0 1.6-.6 1.8-1.2.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3z" />
        <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.2L2 22l4.9-1.3C8.4 21.5 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.7 0-3.3-.5-4.6-1.3l-.3-.2-3.4.9.9-3.3-.2-.3C3.5 14.7 3 13.4 3 12c0-5 4-9 9-9s9 4 9 9-4 9.2-9 9.2z" />
      </svg>
    </a>
  );
}
