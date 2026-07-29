import React, { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import FinalCTA from "@/commonComponent/FinalCTA";

const TermsOfService = () => {
  return (
    <Fragment>
      <Head>
        <title>Terms of Service | KOLI Infotech Pvt. Ltd.</title>
        <meta
          name="description"
          content="Terms of Service for KOLI Infotech. Read our terms and conditions for using our website and IT services."
        />
      </Head>

      <section className="pt-28 pb-16 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">Terms of Service</h1>
          <p className="text-slate-500 text-sm mb-10">Last updated: July 22, 2026</p>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              Welcome to KOLI Infotech Pvt. Ltd. By accessing or using our website and services, you
              agree to be bound by these Terms of Service. Please read them carefully.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">1. Services</h2>
            <p>
              KOLI Infotech provides software development, web development, mobile app development,
              cloud services, digital marketing, and related IT consulting services. Specific
              deliverables, timelines, and pricing are defined in individual project agreements or
              statements of work.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">2. Intellectual Property</h2>
            <p>
              Upon full payment, all custom code, designs, and deliverables created specifically for
              your project become your intellectual property, unless otherwise stated in your project
              agreement. We retain rights to our pre-existing tools, frameworks, and general
              know-how.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">3. Client Responsibilities</h2>
            <p>Clients agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate project requirements and timely feedback</li>
              <li>Make payments according to agreed milestones and schedules</li>
              <li>Provide necessary access, content, and approvals for project progress</li>
              <li>Not use our services for illegal or unethical purposes</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">4. Payment Terms</h2>
            <p>
              Payment terms are outlined in individual project proposals. Unless otherwise agreed,
              projects typically require an upfront deposit with milestone-based payments. Late
              payments may result in project suspension.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">5. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential any proprietary information shared during the
              course of engagement. We are happy to sign Non-Disclosure Agreements (NDAs) upon
              request.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">6. Limitation of Liability</h2>
            <p>
              KOLI Infotech shall not be liable for any indirect, incidental, or consequential damages
              arising from the use of our services. Our total liability is limited to the amount paid
              for the specific service giving rise to the claim.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">7. Website Use</h2>
            <p>
              You may not reproduce, distribute, or create derivative works from our website content
              without written permission. We reserve the right to modify these terms at any time.
              Continued use of our website constitutes acceptance of updated terms.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">8. Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes shall be subject to the
              exclusive jurisdiction of courts in Surat, Gujarat.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Contact</h2>
            <p>
              Questions about these terms? Contact us at{" "}
              <Link href="mailto:info@koliinfotech.com" className="text-brand-600 font-semibold">
                info@koliinfotech.com
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
      <FinalCTA />
    </Fragment>
  );
};

export default TermsOfService;
