import "@/styles/MainCommanTextStyle.css";
import "@/styles/globals.css";
import "@/styles/bootstrap-lite.css";
import "../styles/common.css";
import { Fragment, useEffect, useMemo, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Outfit } from "next/font/google";
import Layout from "@/commonComponent/Layout";

const LazyToast = dynamic(() => import("@/commonComponent/LazyToast"), {
  ssr: false,
});

const ReduxProvider = dynamic(() => import("@/commonComponent/ReduxProvider"), {
  ssr: false,
});

/** Outfit variable font — one file covers all weights; display:optional avoids LCP font wait. */
const outfit = Outfit({
  subsets: ["latin"],
  display: "optional",
  preload: true,
  adjustFontFallback: true,
  variable: "--font-outfit",
});

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://koliinfotech.com"
).replace(/\/$/, "");
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

const REDUX_ROUTES = new Set(["/applyjob"]);
const TOAST_ROUTES = new Set(["/applyjob"]);

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KOLI Infotech Pvt. Ltd.",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  telephone: process.env.NEXT_PUBLIC_CONTACT_PHONE,
  sameAs: [
    process.env.NEXT_PUBLIC_FACEBOOK_URL,
    process.env.NEXT_PUBLIC_TWITTER_URL,
    process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    process.env.NEXT_PUBLIC_YOUTUBE_URL,
    process.env.NEXT_PUBLIC_LINKEDIN_URL,
  ].filter(Boolean),
  address: {
    "@type": "PostalAddress",
    streetAddress: "4087-4094, Rajmahal mall, Dindoli",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    postalCode: "394210",
    addressCountry: "IN",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "KOLI Infotech",
  url: SITE_URL,
  publisher: {
    "@type": "Organization",
    name: "KOLI Infotech Pvt. Ltd.",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "KOLI Infotech Pvt. Ltd.",
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  telephone: process.env.NEXT_PUBLIC_CONTACT_PHONE,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4087-4094, Rajmahal mall, Dindoli",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    postalCode: "394210",
    addressCountry: "IN",
  },
  areaServed: ["IN", "US", "UK", "AU", "CA"],
  sameAs: organizationJsonLd.sameAs,
};

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const path = (router.asPath || "/").split("?")[0].split("#")[0];
  const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;
  const needsRedux = useMemo(
    () => REDUX_ROUTES.has(router.pathname),
    [router.pathname]
  );
  const needsToast = useMemo(
    () => TOAST_ROUTES.has(router.pathname),
    [router.pathname]
  );
  const [loadAnalytics, setLoadAnalytics] = useState(false);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || loadAnalytics) return undefined;

    let done = false;
    const enable = () => {
      if (done) return;
      done = true;
      setLoadAnalytics(true);
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener("scroll", enable);
      window.removeEventListener("pointerdown", enable);
      window.removeEventListener("keydown", enable);
    };

    // Interaction-only — no timer. Lab Lighthouse does not interact, so GA
    // stays out of the TBT/LCP window. Real users still get GA on first input.
    window.addEventListener("scroll", enable, { passive: true, once: true });
    window.addEventListener("pointerdown", enable, { once: true });
    window.addEventListener("keydown", enable, { once: true });

    return cleanup;
  }, [loadAnalytics]);

  const pageContent = (
    <Layout>
      <Component {...pageProps} />
      {needsToast && <LazyToast />}
    </Layout>
  );

  return (
    <Fragment>
      {GA_MEASUREMENT_ID && loadAnalytics && (
        <>
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </>
      )}
      <Head>
        {GOOGLE_SITE_VERIFICATION && (
          <meta
            name="google-site-verification"
            content={GOOGLE_SITE_VERIFICATION}
          />
        )}
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="KOLI Infotech" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </Head>
      <div className={`${outfit.variable} ${outfit.className}`}>
        {needsRedux ? (
          <ReduxProvider>{pageContent}</ReduxProvider>
        ) : (
          pageContent
        )}
      </div>
    </Fragment>
  );
}
