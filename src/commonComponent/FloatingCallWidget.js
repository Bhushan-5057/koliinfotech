import React, { useState, useEffect } from "react";
import Image from "next/image";
import KoliLogo from "../assets/Logo/koli_logo.png";
import IndianFlag from "../assets/images/indian-flag.svg";
import "./FloatingCallWidget.css";

function IconX({ size = 20, className, color = "currentColor" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
      <path d="M18 6 6 18" /><path d="m6 6 12 12" />
    </svg>
  );
}
function IconPhone({ size = 24, className, color = "currentColor", fill }) {
  const f = fill || "none";
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={f} stroke={color} strokeWidth={f === "none" ? "2" : "0"} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function IconCalendar({ size = 16, className, color = "currentColor" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
      <path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" />
    </svg>
  );
}
function IconChevronDown({ size = 14, className, color = "currentColor" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

const FloatingCallWidget = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [activeTab, setActiveTab] = useState("now");
    const [seconds, setSeconds] = useState(28);
    const [isCalling, setIsCalling] = useState(false);
    const [callScheduled, setCallScheduled] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [selectedDate, setSelectedDate] = useState("Today");
    const [selectedTime, setSelectedTime] = useState("15:00");
    const [isMissed, setIsMissed] = useState(false);
    const [showDateDropdown, setShowDateDropdown] = useState(false);
    const [showTimeDropdown, setShowTimeDropdown] = useState(false);

    const dateOptions = React.useMemo(() => {
        const options = ["Today", "Tomorrow"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        for (let i = 2; i <= 4; i++) {
            const date = new Date();
            date.setDate(date.getDate() + i);
            options.push(`${date.getDate()} ${months[date.getMonth()]}`);
        }
        return options;
    }, []);

    const BRAND_BLUE = "#3f689f";

    // Show widget after page render with staggered delays
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
            // Popup appears exactly 2 seconds AFTER the icon
            const popupTimer = setTimeout(() => {
                setShowPopup(true);
            }, 2000);
            return () => clearTimeout(popupTimer);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleYesClick = () => {
        setShowPopup(false);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setCallScheduled(false);
        setIsMissed(false);
        setIsCalling(false);
        setShowDateDropdown(false);
        setShowTimeDropdown(false);
        // Reset popup to show again when modal closes
        setShowPopup(true);
    };

    const handlePhoneChange = (e) => {
        const val = e.target.value.replace(/\D/g, ""); // Remove non-numeric
        if (val.length <= 10) {
            setPhoneNumber(val);
            if (phoneError) setPhoneError("");
        }
    };

    const handleCallSubmit = () => {
        if (!phoneNumber) {
            setPhoneError("Phone number is required");
            return;
        }
        if (phoneNumber.length !== 10) {
            setPhoneError("Please enter 10 digits");
            return;
        }
        setPhoneError("");

        const companyWhatsApp = process.env.NEXT_PUBLIC_WHATSAPP_FULL_NUMBER;
        const message = encodeURIComponent(
            activeTab === "now"
                ? `Hi KOLI Infotech! I would like to request a callback.\nMy phone number: +91-${phoneNumber}\nPlease call me at your earliest convenience.`
                : `Hi KOLI Infotech! I would like to schedule a callback.\nMy phone number: +91-${phoneNumber}\nPreferred date: ${selectedDate}\nPreferred time: ${selectedTime}`
        );
        window.open(`https://wa.me/${companyWhatsApp}?text=${message}`, "_blank", "noopener,noreferrer");
        if (activeTab === "later") {
            setCallScheduled(true);
        }
    };

    // Countdown logic for "Calling now" state
    useEffect(() => {
        let interval;
        if (isCalling && seconds > 0) {
            interval = setInterval(() => {
                setSeconds((prev) => prev - 1);
            }, 1000);
        } else if (isCalling && seconds === 0) {
            setIsCalling(false);
            setIsMissed(true);
        }
        return () => clearInterval(interval);
    }, [isCalling, seconds]);

    const handleMissedCall = () => {
        setIsMissed(false);
        setShowModal(true);
    };

    return (
        <div className="floating-call-widget fixed inset-0 pointer-events-none z-[10001]">
            {/* Floating Icon and Small Popup - Hidden when Modal is open */}
            {isVisible && !showModal && (
                <div
                    className="floating-call-anchor fixed right-4 bottom-24 sm:right-6 sm:bottom-28 md:right-10 md:bottom-10 lg:bottom-10 pointer-events-auto"
                >
                    <div className="relative flex flex-col items-end gap-3">
                        {showPopup && (
                            <div className="group absolute bottom-full mb-3 right-0 translate-x-0 bg-white rounded-2xl shadow-[0_18px_40px_rgba(15,23,42,0.18)] px-3 py-3.5 w-[168px] md:w-[180px] border border-slate-100 flex flex-col items-center">
                                        <button
                                            type="button"
                                            aria-label="Close connection prompt"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setShowPopup(false);
                                            }}
                                            className="absolute top-2 right-2 text-gray-300 hover:text-gray-500 transition-opacity duration-300 bg-transparent border-none outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f689f] p-1.5 z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 rounded-md"
                                        >
                                            <IconX size={14} aria-hidden="true" />
                                        </button>

                                        <div className="text-center w-full px-1">
                                            <h4 className="font-bold text-[#333] mb-1.5 text-[15px]">Hi there!</h4>
                                            <p className="text-[12px] text-gray-500 mb-3.5 font-medium leading-snug">
                                                Would you like to connect with us? We&apos;ll call you at the earliest!
                                            </p>
                                            <button
                                                onClick={handleYesClick}
                                                className="px-6 py-2.5 rounded-xl text-white font-bold transition-all hover:opacity-95 hover:-translate-y-0.5 active:scale-95 border-none shadow-md outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white text-[13px] mx-auto flex items-center justify-center min-w-[88px]"
                                                style={{ backgroundColor: BRAND_BLUE, borderRadius: "10px" }}
                                            >
                                                Yes
                                            </button>
                                        </div>
                            </div>
                                )}

                        <button
                                type="button"
                                aria-label="Open call request"
                                onClick={() => { setShowPopup(false); setShowModal(true); }}
                                className="floating-call-fab rounded-full flex items-center justify-center text-white border-none outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                style={{ backgroundColor: BRAND_BLUE }}
                            >
                                <IconPhone fill="white" color="white" size={30} aria-hidden="true" />
                        </button>
                        </div>
                </div>
            )}

            {/* Central Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-start md:items-center justify-center p-2 md:p-4 pointer-events-auto overflow-y-auto">
                    <div
                        onClick={closeModal}
                        className="absolute inset-0 bg-black/40"
                    />

                    <div
                        className="bg-white rounded-[1.5rem] shadow-2xl w-full max-w-[42rem] relative z-10 my-auto"
                        style={{
                            maxHeight: "calc(100vh - 40px)",
                        }}
                    >
                            <button
                                type="button"
                                aria-label="Close call request dialog"
                                onClick={closeModal}
                                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors z-20 bg-transparent border-none p-0 outline-none focus:outline-none"
                            >
                                <IconX size={20} aria-hidden="true" />
                            </button>

                            {/* Tabs Header */}
                            <div className="flex border-b border-gray-100 bg-transparent overflow-hidden justify-center">
                                <button
                                    onClick={() => setActiveTab("now")}
                                    className={`flex-1 pt-4 pb-3 flex flex-col items-center gap-1 transition-colors border-none relative bg-transparent outline-none focus:outline-none focus:ring-0 active:bg-transparent ${activeTab === "now" ? "" : "opacity-30 hover:opacity-50"}`}
                                    style={{ webkitTapHighlightColor: "transparent" }}
                                >
                                    <IconPhone size={16} color={activeTab === "now" ? BRAND_BLUE : "#4b5563"} />
                                    <span className={`text-[10px] font-extrabold uppercase tracking-widest select-none`} style={{ color: activeTab === "now" ? BRAND_BLUE : "#4b5563" }}>Call me now</span>
                                    {activeTab === "now" && (
                                        <div className="absolute bottom-[2px] h-0.5 w-16 bg-[#3f689f]" />
                                    )}
                                </button>
                                <div className="w-[1px] bg-gray-100/50 self-stretch my-3" />
                                <button
                                    onClick={() => setActiveTab("later")}
                                    className={`flex-1 pt-4 pb-3 flex flex-col items-center gap-1 transition-colors border-none relative bg-transparent outline-none focus:outline-none focus:ring-0 active:bg-transparent ${activeTab === "later" ? "" : "opacity-30 hover:opacity-50"}`}
                                    style={{ webkitTapHighlightColor: "transparent" }}
                                >
                                    <IconCalendar size={16} color={activeTab === "later" ? BRAND_BLUE : "#4b5563"} />
                                    <span className={`text-[10px] font-extrabold uppercase tracking-widest select-none`} style={{ color: activeTab === "later" ? BRAND_BLUE : "#4b5563" }}>Call me later</span>
                                    {activeTab === "later" && (
                                        <div className="absolute bottom-0 h-0.5 w-16 bg-[#3f689f]" />
                                    )}
                                </button>
                            </div>

                            <div className="pt-3 pb-1 md:pt-4 md:pb-2 flex justify-center">
                                <Image
                                    src={KoliLogo}
                                    alt="KOLI Infotech"
                                    width={150}
                                    height={60}
                                    className="object-contain md:w-[150px] md:h-[60px]"
                                />
                            </div>

                            <div className="px-4 py-3 md:px-6 lg:px-12 md:py-6 text-center flex flex-col items-center justify-start md:justify-center overflow-y-auto custom-scrollbar">
                                    {isCalling ? (
                                        <div key="calling" className="py-4">
                                            <h2 className="text-xl font-bold text-gray-800 mb-4 tracking-tight">WE ARE CALLING</h2>
                                            <div className="text-5xl font-black mb-4" style={{ color: BRAND_BLUE }}>
                                                00:{seconds < 10 ? `0${seconds}` : seconds}
                                            </div>
                                            <p className="text-[13px] text-gray-500 font-medium">Please have your phone ready</p>
                                        </div>
                                    ) : callScheduled ? (
                                        <div key="scheduled" className="py-2 text-center">
                                            <div className="w-12 h-12 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-3 border border-green-100">
                                                <IconPhone size={24} />
                                            </div>
                                            <h2 className="text-xl font-bold text-gray-800 mb-1">Thank You!</h2>
                                            <p className="text-sm text-gray-600 font-medium">We will call you on <span className="font-bold">{selectedDate}</span> at <span className="font-bold">{selectedTime}</span></p>
                                            <button
                                                onClick={closeModal}
                                                className="mt-6 px-10 py-2 rounded-lg text-white font-bold border-none shadow-md transition-transform active:scale-95 outline-none focus:outline-none text-xs"
                                                style={{ backgroundColor: BRAND_BLUE, borderRadius: "8px" }}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    ) : isMissed ? (
                                        <div key="missed" className="py-2 text-center">
                                            <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-3 border border-red-100">
                                                <IconX size={28} />
                                            </div>
                                            <h2 className="text-xl font-bold text-gray-800 mb-1">Missed the call?</h2>
                                            <p className="text-sm text-gray-600 mb-6 font-medium">No worries, would you like to schedule another one?</p>
                                            <button
                                                onClick={handleMissedCall}
                                                className="px-10 py-2 rounded-lg text-white font-bold border-none shadow-md transition-transform active:scale-95 outline-none focus:outline-none text-xs"
                                                style={{ backgroundColor: BRAND_BLUE, borderRadius: "8px" }}
                                            >
                                                Reschedule
                                            </button>
                                        </div>
                                    ) : (
                                        <div key="form" className="w-full flex flex-col items-center">
                                            <h2 className="text-[18px] md:text-[28px] font-extrabold text-gray-700 mb-4 md:mb-8 max-w-xl mx-auto leading-tight">
                                                {activeTab === "now" ? "Connect with us on WhatsApp — we\'ll call you at the earliest!" : "Choose the best time for the callback:"}
                                            </h2>

                                            <div className="w-full max-w-lg mx-auto">
                                                {activeTab === "later" && (
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 relative">
                                                        {/* Custom Date Dropdown */}
                                                        <div className="relative">
                                                            <button
                                                                onClick={() => {
                                                                    setShowDateDropdown(!showDateDropdown);
                                                                    setShowTimeDropdown(false);
                                                                }}
                                                                className="w-full bg-white border border-gray-200 px-3 py-3 flex items-center justify-between cursor-pointer focus:outline-none transition-colors text-xs font-bold hover:border-gray-300"
                                                                style={{ borderRadius: "8px" }}
                                                            >
                                                                <span>{selectedDate}</span>
                                                                <IconChevronDown size={14} className={`text-gray-400 transition-transform ${showDateDropdown ? 'rotate-180' : ''}`} />
                                                            </button>
                                                            
                                                            {showDateDropdown && (
                                                                <div
                                                                    className="absolute z-[100] top-full mt-1 left-0 w-full bg-white border border-gray-100 shadow-xl overflow-hidden py-1"
                                                                    style={{ borderRadius: "8px" }}
                                                                >
                                                                        {dateOptions.map((opt, idx) => (
                                                                            <div
                                                                                key={idx}
                                                                                onClick={() => {
                                                                                    setSelectedDate(opt);
                                                                                    setShowDateDropdown(false);
                                                                                }}
                                                                                className="px-4 py-2 text-xs font-bold text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors text-left"
                                                                            >
                                                                                {opt}
                                                                            </div>
                                                                        ))}
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* Custom Time Dropdown */}
                                                        <div className="relative">
                                                            <button
                                                                onClick={() => {
                                                                    setShowTimeDropdown(!showTimeDropdown);
                                                                    setShowDateDropdown(false);
                                                                }}
                                                                className="w-full bg-white border border-gray-200 px-3 py-3 flex items-center justify-between cursor-pointer focus:outline-none transition-colors text-xs font-bold hover:border-gray-300"
                                                                style={{ borderRadius: "8px" }}
                                                            >
                                                                <span>{selectedTime}</span>
                                                                <IconChevronDown size={14} className={`text-gray-400 transition-transform ${showTimeDropdown ? 'rotate-180' : ''}`} />
                                                            </button>

                                                            {showTimeDropdown && (
                                                                <div
                                                                    className="absolute z-[100] top-full mt-1 left-0 w-full bg-white border border-gray-100 shadow-xl overflow-hidden py-1"
                                                                    style={{ borderRadius: "8px" }}
                                                                >
                                                                        {["15:00", "15:30", "16:00", "16:30", "17:00"].map((time) => (
                                                                            <div
                                                                                key={time}
                                                                                onClick={() => {
                                                                                    setSelectedTime(time);
                                                                                    setShowTimeDropdown(false);
                                                                                }}
                                                                                className="px-4 py-2 text-xs font-bold text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors text-left"
                                                                            >
                                                                                {time}
                                                                            </div>
                                                                        ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="flex flex-col md:flex-row items-stretch gap-3">
                                                    <div className="w-full md:w-1/2 flex flex-col items-start min-w-0">
                                                        <div className={`w-full flex items-center bg-white border px-3 py-0 transition-all shadow-sm h-[48px] ${phoneError ? 'border-red-500 ring-1 ring-red-500/20' : 'border-gray-200 focus-within:border-[#3f689f] focus-within:ring-1 focus-within:ring-[#3f689f]/20'}`} style={{ borderRadius: "8px" }}>
                                                            <div className="flex items-center gap-2 border-r border-gray-100 pr-3 mr-3 h-full">
                                                                <div className="w-5 h-3 overflow-hidden relative">
                                                                    <Image src={IndianFlag} alt="India flag" fill className="object-cover" />
                                                                </div>
                                                                <IconChevronDown size={14} className="text-gray-400" />
                                                            </div>
                                                            <input
                                                                type="tel"
                                                                placeholder={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}
                                                                value={phoneNumber}
                                                                onChange={handlePhoneChange}
                                                                className="w-full focus:outline-none text-sm font-bold text-gray-600 placeholder:text-gray-400 bg-transparent border-none outline-none shadow-none h-full"
                                                            />
                                                        </div>
                                                        {phoneError && <p className="text-[10px] text-red-500 font-bold mt-1 ml-1">{phoneError}</p>}
                                                    </div>
                                                    <button
                                                        onClick={handleCallSubmit}
                                                        className="w-full md:w-1/2 px-4 text-white font-extrabold transition-all hover:opacity-95 shadow-md active:scale-[0.98] text-[13px] border-none whitespace-nowrap outline-none focus:outline-none flex items-center justify-center h-[48px]"
                                                        style={{ backgroundColor: BRAND_BLUE, borderRadius: "8px" }}
                                                    >
                                                        {activeTab === "now" ? "Call me now" : "Call me later"}
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mt-4 md:mt-8 space-y-2 md:space-y-3">
                                                <p className="text-[10px] md:text-[11px] text-gray-400 font-bold uppercase tracking-wide">You are already the 14th person who has ordered a call</p>
                                                <div className="pt-1 md:pt-2">
                                                    <p className="text-[9px] md:text-[10px] text-gray-300 font-bold italic">Your phone number will not be used for marketing purposes</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                
                            </div>
                        </div>
                    </div>
            )}

            {/* Global Style overrides to kill focus borders once and for all */}
            
        </div>
    );
};

export default FloatingCallWidget;
