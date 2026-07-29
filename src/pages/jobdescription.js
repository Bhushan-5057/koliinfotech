import React, { Fragment } from 'react'
import dynamic from "next/dynamic";
import Head from "next/head";

const JobDescriptionHeroSection = dynamic(
  () => import('@/PagesComponent/JobDescriptionPage/JobDescriptionHeroSection')
);
const DescriptionSection = dynamic(
  () => import('@/PagesComponent/JobDescriptionPage/DescriptionSection')
);

const JobDescription = () => {
    return (
        <Fragment>
            <Head>
                <title>Job Description | KOLI Infotech Pvt. Ltd.</title>
                <meta
                  name="description"
                  content="Explore current job openings at KOLI Infotech in Surat. Review role details and apply for software, QA, and digital positions."
                />
            </Head>
            <JobDescriptionHeroSection />
            <DescriptionSection />
        </Fragment>
    )
}

export default JobDescription
