import React from "react";
import CaseStudyDetailPage from "@/PagesComponent/CaseStudies/CaseStudyDetailPage";
import caseStudiesData from "@/data/caseStudies.json";

const CaseStudyDetail = ({ study, related }) => (
  <CaseStudyDetailPage study={study} related={related} />
);

export async function getStaticPaths() {
  const studies = Array.isArray(caseStudiesData) ? caseStudiesData : [];
  const paths = studies
    .filter((item) => item?.slug)
    .map((item) => ({ params: { slug: item.slug } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const studies = Array.isArray(caseStudiesData) ? caseStudiesData : [];
  const study = studies.find((item) => item.slug === params.slug) || null;

  if (!study) {
    return { notFound: true };
  }

  const related = studies
    .filter((item) => item.slug !== study.slug)
    .sort((a, b) => {
      const aScore = a.industry === study.industry ? 1 : 0;
      const bScore = b.industry === study.industry ? 1 : 0;
      return bScore - aScore;
    })
    .slice(0, 3);

  return {
    props: {
      study,
      related,
    },
  };
}

export default CaseStudyDetail;
