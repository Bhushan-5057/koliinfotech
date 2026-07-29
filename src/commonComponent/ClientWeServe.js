import React, { Fragment, useMemo } from "react";
import Image from "next/image";
import CssMarquee from "@/commonComponent/CssMarquee";
import clientsWeServedData from "@/data/clientsWeServed.json";

const ClientWeServe = () => {
  const clientsData = useMemo(
    () =>
      (clientsWeServedData || []).map((client) => ({
        ...client,
        title: client.title || client.name,
        image: client.image || client.logo,
      })),
    []
  );

  const marqueeDuration = Math.max(clientsData.length * 4, 24);

  return (
    <Fragment>
      <section className="relative py-16 md:py-24 bg-white overflow-hidden ">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tighter uppercase mb-6">
              Clients <span className="text-[#3f689f]">We Served</span>
            </h2>
            <div className="flex justify-center mb-6">
              <div className="h-1 w-16 bg-[#3f689f] rounded-full"></div>
            </div>
            <p className="text-gray-900 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs italic">
              Trusted by leading businesses worldwide
            </p>
          </div>

          {clientsData.length === 0 && (
            <div className="text-center py-6 text-gray-500 font-medium italic">
              No clients listed.
            </div>
          )}

          {clientsData.length > 0 && (
            <div className="client-slider-wrapper">
              <CssMarquee
                duration={marqueeDuration}
                pauseOnHover={false}
                gap={24}
                className="client-marquee"
                itemClassName="client-marquee-item"
              >
                {clientsData.map((client, index) => (
                  <div className="px-3 h-full" key={client.id || index}>
                    <div className="group bg-white rounded-2xl p-6 h-full flex flex-col items-center justify-center border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                      <div className="relative w-full h-20 mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                        <Image
                          src={client.image}
                          alt={client.title || "Client Logo"}
                          className="object-contain"
                          fill
                          sizes="(max-width: 768px) 100px, 150px"
                          loading="lazy"
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="text-slate-700 font-semibold text-sm md:text-base group-hover:text-blue-600 transition-colors duration-300 px-1">
                          {client.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </CssMarquee>
            </div>
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default ClientWeServe;
