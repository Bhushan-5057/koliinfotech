import React, { memo, useMemo } from "react";
import Image from "next/image";
import CssMarquee from "@/commonComponent/CssMarquee";
import clientsWeServedData from "@/data/clientsWeServed.json";

const ClientLogoStrip = () => {
  const clientsData = useMemo(
    () =>
      (clientsWeServedData || []).map((client) => ({
        ...client,
        title: client.title || client.name,
        image: client.image || client.logo,
      })),
    []
  );

  if (!clientsData.length) return null;

  const marqueeDuration = Math.max(clientsData.length * 3, 20);

  return (
    <section className="relative py-10 md:py-12 bg-white border-b border-slate-100 overflow-hidden section-fade-up">
      <div className="container mx-auto px-4 max-w-7xl">
        <p className="text-center text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-slate-900 mb-6">
          Trusted by leading businesses across industries
        </p>
        <CssMarquee
          duration={marqueeDuration}
          pauseOnHover
          gap={32}
          className="client-marquee"
          itemClassName="client-marquee-item"
        >
          {clientsData.map((client, index) => (
            <div
              key={client.id || index}
              className="flex items-center justify-center px-4 h-14 md:h-16 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <div className="relative w-28 md:w-40 h-18 md:h-20">
                <Image
                  src={client.image}
                  alt={client.title || "Client logo"}
                  fill
                  className="object-contain"
                  sizes="300px"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </CssMarquee>
      </div>
    </section>
  );
};

export default memo(ClientLogoStrip);
