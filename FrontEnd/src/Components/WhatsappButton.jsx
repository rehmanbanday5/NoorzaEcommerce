import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "923373187771";

  const message = encodeURIComponent(
    "Hi Noorza! I need help with a product or order.",
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get help on WhatsApp"
      title="Chat with Noorza"
      className="fixed right-0 top-1/2 z-50 flex -translate-y-1/2 flex-col items-center gap-2 rounded-l-lg border border-r-0 border-white/20 bg-[#176B45] px-2.5 py-3 text-white shadow-md transition-colors duration-300 hover:bg-[#25D366] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
    >
      <FaWhatsapp size={21} aria-hidden="true" className="rotate-180" />

      <span className="font-['Manrope'] text-[11px] font-semibold tracking-wide [writing-mode:vertical-rl] rotate-180">
        Help
      </span>
    </a>
  );
};

export default WhatsAppButton;
