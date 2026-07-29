import React, { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import FinalCTA from "@/commonComponent/FinalCTA";

const PrivacyPolicy = () => {
  return (
    <Fragment>
      <Head>
        <title>Privacy Policy | KOLI Infotech Pvt. Ltd.</title>
        <meta
          name="description"
          content="Read KOLI Infotech's privacy policy. Learn how we collect, use, and protect your personal information."
        />
      </Head>

      <section className="pt-28 pb-16 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">Privacy Policy</h1>
          <p className="text-slate-500 text-sm mb-10">Last updated: July 22, 2026</p>

          <div className="legal-doc bg-white rounded-xl p-6 md:p-10 shadow-sm text-slate-600 text-base leading-7">
            <p className="mb-10">
              KOLI Infotech Pvt. Ltd. (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy
              and is committed to protecting your personal information. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your data when you visit our website or
              use our services.
            </p>

            <div className="space-y-10">
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">Information We Collect</h2>
                <div className="space-y-3">
                  <p>We may collect the following types of information:</p>
                  <ul className="space-y-2">
                    <li>
                      <strong>Contact information:</strong> Name, email address, phone number, and company
                      name when you fill out our contact form or request a quote.
                    </li>
                    <li>
                      <strong>Usage data:</strong> IP address, browser type, pages visited, and time spent
                      on our website (via cookies and analytics tools).
                    </li>
                    <li>
                      <strong>Communication data:</strong> Messages, inquiries, and correspondence you send
                      to us via email, WhatsApp, or contact forms.
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">How We Use Your Information</h2>
                <ul className="space-y-2">
                  <li>To respond to your inquiries and provide requested services</li>
                  <li>To send project updates, proposals, and service-related communications</li>
                  <li>To improve our website, services, and user experience</li>
                  <li>To comply with legal obligations and protect our rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">Data Protection</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your
                  personal data against unauthorized access, alteration, disclosure, or destruction. This
                  includes encryption, access controls, and secure data storage practices.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">Third-Party Services</h2>
                <p>
                  We may use third-party services such as Google Analytics, Web3Forms, and cloud hosting
                  providers. These services have their own privacy policies governing how they handle
                  data. We do not sell your personal information to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">Your Rights</h2>
                <div className="space-y-3">
                  <p>You have the right to:</p>
                  <ul className="space-y-2">
                    <li>Access the personal data we hold about you</li>
                    <li>Request correction or deletion of your data</li>
                    <li>Withdraw consent for marketing communications</li>
                    <li>Lodge a complaint with a data protection authority</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">Contact Us</h2>
                <p>
                  For privacy-related questions or requests, contact us at{" "}
                  <Link href="mailto:info@koliinfotech.com" className="text-brand-600 font-semibold">
                    info@koliinfotech.com
                  </Link>{" "}
                  or visit our{" "}
                  <Link href="/contact-us" className="text-brand-600 font-semibold">
                    contact page
                  </Link>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
      <FinalCTA />
    </Fragment>
  );
};

export default PrivacyPolicy;
