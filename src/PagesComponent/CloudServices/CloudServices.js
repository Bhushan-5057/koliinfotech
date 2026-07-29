import React, { Fragment, useRef } from "react";
import Image from "next/image";
import webDevimg2 from "../../assets/images/webDevimg-2.png";
import smartphone from "../../assets/images/smartphone.png";
import pc from "../../assets/images/ux1.png";
import { COMMAN_TEXT } from "@/commonComponent/commanText";
import Link from "next/link";
import AmericanExpress from "../../assets/images/AmericanExpress.png";
import ByjusLogo1 from "../../assets/images/ByjusLogo1.png";
import HDFC from "../../assets/images/HDFC.png";
import Axis from "../../assets/images/Axis.png";
import Onfleek from "../../assets/images/onfleek.png";
import SetFlow from "../../assets/images/SetFlow.png";
import jodiBanao from "../../assets/images/jodiBanao.png";
import AmazonEC2 from "../../assets/images/AmazonEC2.png";
import Elastic from "../../assets/images/Elastic.png";
import S3Bucket from "../../assets/images/S3Bucket.png";
import amazons3 from "../../assets/images/amazons3.png";
import { CLOUDS_P1 } from "../../commonComponent/commanText";
import {
  IconChevronsLeft,
  IconChevronsRight,
} from "@/components/icons/InlineIcons";

const CloudScreen = () => {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <Fragment>
      <section className="onDemandImageCarousal m-3">
        <div className="container">
          <div className="" data-aos="fade-up">
            <h1 className="text-center pt-5 comman-heading">
              Clients that have trusted us over the years
            </h1>
            <div className="cst-hr-for-process mb-5"></div>
            <div className="text-center" style={{ display: "flex" }}>
              <div>
                <span className="px-3 arrowIcon">
                  <IconChevronsLeft
                    style={{ color: "black" }}
                    onClick={handleLeftClick}
                    className="leftarrow"
                  />
                </span>
              </div>
              <div
                className="img-slide-box"
                alt="Image not found"
                ref={carousel}
              >
                <div className="item">
                  <div className="logos-image">
                    <Image
                      src={AmericanExpress}
                      alt="image"
                      width={200}
                      height={80}
                      className="slide-img m-2 p-2 WebDev-dashed-border"
                      loading="lazy"
                      sizes="(max-width: 768px) 60vw, 20vw"
                    />
                    <Image
                      src={Onfleek}
                      alt="image"
                      width={200}
                      height={80}
                      className="slide-img m-2 p-2 WebDev-dashed-border"
                      loading="lazy"
                      sizes="(max-width: 768px) 60vw, 20vw"
                    />
                    <Image
                      src={ByjusLogo1}
                      alt="image"
                      width={200}
                      height={80}
                      className="slide-img m-2 p-2 WebDev-dashed-border"
                      loading="lazy"
                      sizes="(max-width: 768px) 60vw, 20vw"
                    />
                    <Image
                      src={jodiBanao}
                      alt="image"
                      width={200}
                      height={80}
                      className="slide-img m-2  p-2 WebDev-dashed-border"
                      loading="lazy"
                      sizes="(max-width: 768px) 60vw, 20vw"
                    />
                    <Image
                      src={HDFC}
                      alt="image"
                      width={200}
                      height={80}
                      className="slide-img m-2 p-2 WebDev-dashed-border"
                      loading="lazy"
                      sizes="(max-width: 768px) 60vw, 20vw"
                    />
                    <Image
                      src={SetFlow}
                      alt="image"
                      width={200}
                      height={80}
                      className="slide-img m-2 p-2 WebDev-dashed-border"
                      loading="lazy"
                      sizes="(max-width: 768px) 60vw, 20vw"
                    />
                    <Image
                      src={Axis}
                      alt="image"
                      width={200}
                      height={80}
                      className="slide-img m-2 p-2 WebDev-dashed-border"
                      loading="lazy"
                      sizes="(max-width: 768px) 60vw, 20vw"
                    />
                  </div>
                </div>
              </div>
              <div>
                <span className="px-3 arrowIcon">
                  <IconChevronsRight
                    style={{ color: "black" }}
                    onClick={handleRightClick}
                    className="rightarrow"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </Fragment>
  );
};

export default CloudScreen;
