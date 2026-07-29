// import React, { Fragment, useEffect } from "react";
// import Image from "next/image";
// import conpiesImg from "../../assets/images/compies.png";
// import Image2 from "../../assets/images/middle.png";
// import Vector from "../../assets/images/Vector.png";
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import { COMMAN_TEXT } from "../../commonComponent/commanText";
// import Aos from "aos";
// import "aos/dist/aos.css";

// const DiscussIdeaScreen = () => {
//   const data = [
//     {
//       service: "Web Designing",
//       detail:
//         " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco",
//     },
//     {
//       service: "Web Development",
//       detail:
//         " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco",
//     },
//     {
//       service: "Mobile Development",
//       detail:
//         " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco",
//     },
//     {
//       service: "Web Designing",
//       detail:
//         " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco",
//     },
//     {
//       service: "Web Development",
//       detail:
//         " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco",
//     },
//     {
//       service: "Mobile Development",
//       detail:
//         " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco",
//     },
//   ];

//   useEffect(() => {
//     setTimeout(() => {
//       Aos.init();
//     }, 1500);
//   }, []);

//   return (
//     <Fragment>
//       <section>
//         <div className="container">
//           <div className="row mt-5" style={{ alignItems: "center" }}></div>
//         </div>
//       </section>
//       <section>
//         <div className="container" data-aos="fade-up">
//           <div className="row mt-5 pt-5">
//             <div className="col-12 mb-4 text-center">
//               <Image src={conpiesImg} alt='Image not found' className="img-fluid " />
//             </div>
//           </div>
//         </div>
//       </section>
//       <section>
//         <div className="container" data-aos="fade-up">
//           <div className="row m-5">
//             <div className="text-center testi-detail-box">
//               <Image src={Image2} className="round img-round-cst" />
//               <p className="text-center text-decoration-underline client-name  pt-3">
//                 John Doe
//               </p>
//               <p className="text-center">{COMMAN_TEXT}</p>
//               <Image src={Vector} alt='Image not found' className="img-fluid " />
//               <div className="text-center mt-5 pb-5">
//                 <button className="btn btn-ai-class">
//                   <AiOutlineLeft className="slide-btn" />
//                 </button>
//                 <button className="btn btn-ai-class">
//                   <AiOutlineRight className="slide-btn" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Fragment>
//   );
// };

// export default DiscussIdeaScreen;
