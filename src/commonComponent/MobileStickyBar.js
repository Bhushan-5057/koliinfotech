import React, { memo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const HIDDEN_ROUTES = ["/contact-us", "/applyjob"];

const MobileStickyBar = () => {
  const router = useRouter();

  if (HIDDEN_ROUTES.includes(router.pathname)) return null;

  const whatsappUrl = `https://wa.me/${CONTACT.whatsappFull}?text=${encodeURIComponent(
    "Hi KOLI Infotech, I'm interested in your services."
  )}`;

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-[9998] bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] safe-area-pb"
      role="navigation"
      aria-label="Quick contact"
    >
      <div className="grid grid-cols-3 divide-x divide-slate-100">
        <a
          href={`tel:+${CONTACT.whatsappFull}`}
          className="flex flex-col items-center justify-center gap-1 py-3 text-brand-600 no-underline hover:bg-brand-50 transition-colors min-h-[56px]"
          aria-label="Call KOLI Infotech"
        >
          <Phone size={20} aria-hidden="true" />
          <span className="text-[10px] font-bold uppercase tracking-wide">Call</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-emerald-600 no-underline hover:bg-emerald-50 transition-colors min-h-[56px]"
          aria-label="WhatsApp KOLI Infotech"
        >
          <MessageCircle size={20} aria-hidden="true" />
          <span className="text-[10px] font-bold uppercase tracking-wide">WhatsApp</span>
        </a>
        <Link
          href="/contact-us"
          className="flex flex-col items-center justify-center gap-1 py-3 text-brand-600 no-underline hover:bg-brand-50 transition-colors min-h-[56px]"
        >
          <Mail size={20} aria-hidden="true" />
          <span className="text-[10px] font-bold uppercase tracking-wide">Get Quote</span>
        </Link>
      </div>
    </div>
  );
};

export default memo(MobileStickyBar);
