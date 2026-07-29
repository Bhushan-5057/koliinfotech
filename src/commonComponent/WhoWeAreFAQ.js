import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import faqData from "@/data/whoWeAreFaq.json";

const WhoWeAreFAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="w-full py-6 sm:py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Heading */}
                <div className="text-center mb-10 sm:mb-12">
                    <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900"
                        style={{ textTransform: "upperCase" }}
                    >
                        Frequently <span className="text-[#2c73df]">Asked</span> Questions
                    </h2>
                    <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                        Quick answers to help you understand how we work and what you can expect.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-3 sm:space-y-4">
                    {faqData.length === 0 && (
                        <div className="text-center py-6 text-gray-500 font-medium italic">
                            No FAQs available.
                        </div>
                    )}

                    {faqData.length > 0 && faqData.map((faq, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div
                                key={faq.id || index}
                                className="rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                            >
                                {/* Question */}
                                <button
                                    type="button"
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={isOpen}
                                    aria-controls={`who-faq-panel-${index}`}
                                    id={`who-faq-btn-${index}`}
                                    className="w-full border-none flex items-center justify-between gap-4 p-3 sm:p-4 text-left font-semibold text-gray-900 transition-colors duration-300"
                                >
                                    <span className="text-base sm:text-lg">
                                        {faq.question}
                                    </span>

                                    {/* Icon switch (better UX) */}
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-200 text-gray-900 transition-colors duration-300">
                                        {isOpen ? (
                                            <ChevronDown className="h-5 w-5" />
                                        ) : (
                                            <ChevronRight className="h-5 w-5" />
                                        )}
                                    </span>
                                </button>

                                {/* Answer */}
                                <div
                                    id={`who-faq-panel-${index}`}
                                    role="region"
                                    aria-labelledby={`who-faq-btn-${index}`}
                                    hidden={!isOpen}
                                    className={`transition-all duration-500 ease-in-out ${isOpen
                                        ? "max-h-96 opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div
                                        className={`px-5 sm:px-6 text-gray-900 leading-relaxed text-sm sm:text-base transition-all duration-500 ${isOpen ? "pb-5 sm:pb-6 pt-1" : "p-0"
                                            }`}
                                    >
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhoWeAreFAQ;
