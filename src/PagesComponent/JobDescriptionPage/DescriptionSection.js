import React, { Fragment, useEffect, useMemo } from "react";import { useRouter } from "next/router";
import openingData from "@/data/opening.json";

const DescriptionSection = () => {
  const router = useRouter();
  const Id = router.query;

  const openingDataMapped = useMemo(() => {
    const openings = openingData || [];
    const rawId = Id?.Id ?? Id?.id;
    if (rawId == null) return null;
    const match = openings.find(
      (opening) => String(opening.id) === String(rawId)
    );
    if (!match) return null;
    return {
      ...match,
      job_title: match.job_title || match.title,
    };
  }, [Id]);
const handleClick = () => {
    const ID = Id;
    router.push({
      pathname: "/applyjob",
      query: ID,
    });
  };

  return (
    <Fragment>
      <section className="container">
        <div>
     
          <h1
            className="text-center pt-5 fw-bold mb-4 text-uppercase"
            data-aos="flip-down"
          >
            {openingDataMapped?.job_title}
          </h1>

          <div className="cst-hr-for-process mt-2 mb-2" data-aos="flip-down" />

          <div className="row text-center mt-4" data-aos="flip-down">
            <div className="col-12 col-sm-4 mb-2">
              <h5 className="text-primary fw-bold">
                {openingDataMapped?.experience} 
              </h5>
            </div>
            <div className="col-12 col-sm-4 mb-2">
              <h5 className="text-primary fw-bold">FULL-TIME</h5>
            </div>
            <div className="col-12 col-sm-4 mb-2">
              <h5 className="text-primary fw-bold">
                {openingDataMapped?.location?.toUpperCase()}
              </h5>
            </div>
          </div>

         
          <div className="mt-5 px-2 px-sm-4">
            {/* {ReactHtmlParser(openingDataMapped?.description)} */}
          </div>

        
          <div className="d-flex justify-content-center mt-4 mb-5 applybtn-sm">
            <button
              type="submit"
              onClick={() => handleClick()}
              className="button apply-now p-2"
            >
              <svg
                className="svgIcon"
                viewBox="0 0 512 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
              </svg>
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default DescriptionSection;
