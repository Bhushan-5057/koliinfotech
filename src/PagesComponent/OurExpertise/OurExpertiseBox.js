import Image from "next/image";

const OurExpertiseBox = ({ image, title }) => {
  return (
    <div className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-200 hover:-translate-y-1 transition-all duration-300 text-center h-full">
      <div className="relative w-16 h-16 mx-auto mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain group-hover:scale-110 transition-transform duration-300"
          sizes="64px"
          loading="lazy"
        />
      </div>
      <h3 className="text-base font-bold text-slate-900 m-0">{title}</h3>
    </div>
  );
};

export default OurExpertiseBox;
