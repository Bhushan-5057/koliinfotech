"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./FloatingTabBar.css";

const FloatingTabBar = () => {
  const teamsInviteUrl = process.env.NEXT_PUBLIC_TEAMS_INVITE_URL;
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_FULL_NUMBER;
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi KOLI Infotech, I'm interested in your IT services."
  )}`;

  const tabs = [
    teamsInviteUrl
      ? {
          key: "teams",
          href: teamsInviteUrl,
          external: true,
          label: "Teams Chat",
          ariaLabel: "Contact KOLI Infotech on Microsoft Teams",
          src: "/assets/images/teams.png",
          alt: "Microsoft Teams",
        }
      : null,
    {
      key: "whatsapp",
      href: whatsappUrl,
      external: true,
      label: contactPhone ? `WhatsApp: ${contactPhone}` : "WhatsApp",
      ariaLabel: "Contact KOLI Infotech on WhatsApp",
      src: "/assets/images/icons8-whatsapp-128.png",
      alt: "WhatsApp",
    },
    {
      key: "email",
      href: `mailto:${contactEmail}`,
      external: false,
      label: contactEmail || "Email Us",
      ariaLabel: `Email ${contactEmail || "KOLI Infotech"}`,
      src: "/assets/images/mail.png",
      alt: "Email",
    },
  ].filter(Boolean);

  return (
    <div className="float-tabs hidden lg:flex flex-col gap-3 fixed top-1/2 left-0 -translate-y-1/2 pl-0 pr-2 py-2">
      {tabs.map((tab) => (
        <Link
          key={tab.key}
          href={tab.href}
          target={tab.external ? "_blank" : undefined}
          rel={tab.external ? "noopener noreferrer" : undefined}
          className="float-tab no-underline flex items-center"
          aria-label={tab.ariaLabel}
          title={tab.ariaLabel}
        >
          <span className="float-tab__icon-wrap">
            <Image
              src={tab.src}
              alt={tab.alt}
              width={36}
              height={36}
              className="float-tab__img"
            />
          </span>
          <span className="float-tab__label" role="tooltip">
            {tab.label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default FloatingTabBar;
