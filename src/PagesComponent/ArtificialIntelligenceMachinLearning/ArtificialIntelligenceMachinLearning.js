import React, { Fragment } from "react";
import Image from "next/image";
import EmblaLogoSlider from "@/commonComponent/EmblaLogoSlider";
import AmericanExpress from "../../assets/images/AmericanExpress.png";
import ByjusLogo1 from "../../assets/images/ByjusLogo3.jpg";
import HDFC from "../../assets/images/HDFC.png";
import Axis from "../../assets/images/Axis_Bank2.png";
import ooredoo from "../../assets/images/Ooredoo-Logo.png";
import Astrosadhna from "../../assets/images/Astrosadhna2.webp";
import SetFlow from "../../assets/images/SetFlow.png";
import jodiBanao from "../../assets/images/jodiBanao.png";
import turing from "../../assets/images/Turing_Logo.jpg";
import aaban from "../../assets/images/aabansolution.jpg";
import VoiceocLogo from "../../assets/images/Voice_oc_4.png";
import "./ArtificialIntelligenceMachinLearning.css";

const clientLogos = [
  { src: AmericanExpress, alt: "American Express" },
  { src: VoiceocLogo, alt: "Voiceoc Logo" },
  { src: ByjusLogo1, alt: "Byju's Logo" },
  { src: jodiBanao, alt: "Jodi Banao Logo" },
  { src: HDFC, alt: "HDFC Logo" },
  { src: SetFlow, alt: "SetFlow Logo" },
  { src: Axis, alt: "Axis Logo" },
  { src: ooredoo, alt: "ooredoo Logo" },
  { src: Astrosadhna, alt: "Astrosadhna Logo" },
  { src: turing, alt: "Turing Logo" },
  { src: aaban, alt: "Aaban Logo" },
];

const AiandMlScreen = () => {
  return (
    <Fragment>
      <section className="onDemandImageCarousal m-3">
        <div className="container">
          <h3 className="text-center pt-5 comman-heading">Clients We Served</h3>
          <div className="cst-hr-for-process mb-5"></div>
          <EmblaLogoSlider>
            {clientLogos.map((logo) => (
              <div className="slide-item" key={logo.alt}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={80}
                  className="slide-img m-2 p-2 WebDev-dashed-border"
                  loading="lazy"
                  sizes="(max-width: 768px) 60vw, 20vw"
                />
              </div>
            ))}
          </EmblaLogoSlider>
        </div>
        
      </section>
    </Fragment>
  );
};

export default AiandMlScreen;
