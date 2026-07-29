import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import NewHeader from "./NewHeader";
import { useRouter } from "next/router";

const Footer = dynamic(() => import("./Footer"), {
  ssr: false,
  loading: () => <div aria-hidden="true" style={{ minHeight: "28rem" }} />,
});

const LoaderComponent = dynamic(() => import("./loaderComponent"), {
  ssr: false,
});

const FloatingCallWidget = dynamic(() => import("./FloatingCallWidget"), {
  ssr: false,
});

const FloatingTabBar = dynamic(
  () => import("@/PagesComponent/FloatingTabBar/FloatingTabBar"),
  { ssr: false }
);

const ScrollProgress = dynamic(() => import("./ScrollProgress"), { ssr: false });

const MobileStickyBar = dynamic(() => import("./MobileStickyBar"), {
  ssr: false,
});

/** Show route loader only if navigation exceeds this delay (avoids flash on fast routes). */
const LOADER_DELAY_MS = 180;
const LOADER_MIN_VISIBLE_MS = 220;
/** Reduced from 12s — capture visitors before they bounce. */
const WIDGET_DELAY_MS = 3000;
const TAB_BAR_DELAY_MS = 3000;

const Layout = ({ children }) => {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const [showCallWidget, setShowCallWidget] = useState(false);
  const [showTabBar, setShowTabBar] = useState(false);

  const TRANSPARENT_PAGES = [
    "/",
    "/home-page",
    "/artificial-intelligence-machine-learning",
    "/mobile-app-development",
    "/custom-software-development",
    "/web-development",
    "/cloud-services",
    "/data-security",
    "/qa-testing",
    "/hire-developer",
    "/who-we-are",
    "/about-company",
    "/our-culture",
    "/solution-on-demand",
    "/career",
    "/careers",
    "/blogs",
    "/contact-us",
    "/digital-marketing",
  ];
  const isTransparentHeaderPage = TRANSPARENT_PAGES.includes(router.pathname);

  useEffect(() => {
    let showTimer;
    let hideTimer;
    let startedAt = 0;

    const handleRouteStart = () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      startedAt = Date.now();
      showTimer = setTimeout(() => setLoader(true), LOADER_DELAY_MS);
    };

    const handleRouteComplete = () => {
      clearTimeout(showTimer);
      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(0, LOADER_MIN_VISIBLE_MS - elapsed);
      hideTimer = setTimeout(() => setLoader(false), remaining);
    };

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteComplete);
    router.events.on("routeChangeError", handleRouteComplete);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteComplete);
      router.events.off("routeChangeError", handleRouteComplete);
    };
  }, [router.events]);

  useEffect(() => {
    let cancelled = false;
    let timeoutId;
    let idleId;

    const mountWidget = () => {
      if (!cancelled) setShowCallWidget(true);
    };

    const schedule = () => {
      if (typeof window !== "undefined" && "requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(mountWidget, {
          timeout: WIDGET_DELAY_MS,
        });
      } else {
        timeoutId = window.setTimeout(mountWidget, WIDGET_DELAY_MS);
      }
    };

    if (document.readyState === "complete") {
      schedule();
    } else {
      window.addEventListener("load", schedule, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", schedule);
      if (idleId != null && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    let timeoutId;
    let idleId;

    const mountTabBar = () => {
      if (!cancelled) setShowTabBar(true);
    };

    const schedule = () => {
      if (typeof window !== "undefined" && "requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(mountTabBar, {
          timeout: TAB_BAR_DELAY_MS,
        });
      } else {
        timeoutId = window.setTimeout(mountTabBar, TAB_BAR_DELAY_MS);
      }
    };

    if (document.readyState === "complete") {
      schedule();
    } else {
      window.addEventListener("load", schedule, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", schedule);
      if (idleId != null && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {loader && <LoaderComponent />}
      <ScrollProgress />
      <NewHeader />
      <main className={`${isTransparentHeaderPage ? "" : "pt-24"} pb-16 lg:pb-0`}>{children}</main>
      {showTabBar && <FloatingTabBar />}
      {showCallWidget && <FloatingCallWidget />}
      <MobileStickyBar />
      <Footer />
    </>
  );
};

export default Layout;
