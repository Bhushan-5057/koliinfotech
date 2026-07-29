import dynamic from "next/dynamic";
import ServiceFAQ from "./ServiceFAQ";

const FinalCTA = dynamic(() => import("./FinalCTA"), { ssr: false });

/**
 * Standard conversion block for service pages: FAQ + final contact push.
 */
const ServicePageExtras = ({ serviceKey, faqTitle }) => {
  return (
    <>
      <ServiceFAQ serviceKey={serviceKey} title={faqTitle} />
      <FinalCTA />
    </>
  );
};

export default ServicePageExtras;
