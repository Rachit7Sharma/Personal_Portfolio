// // import meter1 from "../assets/img/meter1.svg";
// // import meter2 from "../assets/img/meter2.svg";
// // import meter3 from "../assets/img/meter3.svg";
// // import Carousel from 'react-multi-carousel';
// // import 'react-multi-carousel/lib/styles.css';
// // import arrow1 from "../assets/img/arrow1.svg";
// // import arrow2 from "../assets/img/arrow2.svg";
// // import colorSharp from "../assets/img/color-sharp.png"

// // export const Skills = () => {
// //   const responsive = {
// //     superLargeDesktop: {
// //       // the naming can be any, depends on you.
// //       breakpoint: { max: 4000, min: 3000 },
// //       items: 5
// //     },
// //     desktop: {
// //       breakpoint: { max: 3000, min: 1024 },
// //       items: 3
// //     },
// //     tablet: {
// //       breakpoint: { max: 1024, min: 464 },
// //       items: 2
// //     },
// //     mobile: {
// //       breakpoint: { max: 464, min: 0 },
// //       items: 1
// //     }
// //   };

// //   return (
// //     <section className="skill" id="skills">
// //         <div className="container">
// //             <div className="row">
// //                 <div className="col-12">
// //                     <div className="skill-bx wow zoomIn">
// //                         <h2>Skills</h2>
// //                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
// //                         <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
// //                             <div className="item">
// //                                 <img src={meter1} alt="Image" />
// //                                 <h5>Web Development</h5>
// //                             </div>
// //                             <div className="item">
// //                                 <img src={meter2} alt="Image" />
// //                                 <h5>Brand Identity</h5>
// //                             </div>
// //                             <div className="item">
// //                                 <img src={meter3} alt="Image" />
// //                                 <h5>Logo Design</h5>
// //                             </div>
// //                             <div className="item">
// //                                 <img src={meter1} alt="Image" />
// //                                 <h5>Web Development</h5>
// //                             </div>
// //                         </Carousel>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //         <img className="background-image-left" src={colorSharp} alt="Image" />
// //     </section>
// //   )
// // }
// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png"

// export const Skills = () => {
//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };

//   return (
//     <section className="skill" id="skills">
//         <div className="container">
//             <div className="row">
//                 <div className="col-12">
//                     <div className="skill-bx wow zoomIn">
//                         <h2>Skills</h2>
//                         <p>Here's a quick look at my technical skillset and areas of expertise:</p>
//                         <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
//                             <div className="item">
//                                 <img src={meter1} alt="Image" />
//                                 <h5>C++, Python, SQL</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter2} alt="Image" />
//                                 <h5>HTML, CSS, JavaScript</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter3} alt="Image" />
//                                 <h5>ROS, Arduino, CMake</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter1} alt="Image" />
//                                 <h5>OpenCV, NumPy, Matplotlib</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter2} alt="Image" />
//                                 <h5>Google Analytics, Domo</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter3} alt="Image" />
//                                 <h5>Jetson Nano, Linux</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter1} alt="Image" />
//                                 <h5>Gazebo, RViz, MATLAB</h5>
//                             </div>
//                         </Carousel>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <img className="background-image-left" src={colorSharp} alt="Image" />
//     </section>
//   )
// }
import { FaCode, FaTools, FaRobot, FaDatabase, FaChartLine } from 'react-icons/fa';
import { GiProcessor } from 'react-icons/gi';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const skills = [
    { icon: <FaCode />, title: "Programming", items: "C++, Python, SQL" },
    { icon: <FaTools />, title: "Frontend", items: "HTML, CSS, JavaScript" },
    { icon: <FaRobot />, title: "Robotics", items: "ROS, Arduino, CMake" },
    { icon: <FaDatabase />, title: "Data Tools", items: "Google Analytics, Domo" },
    { icon: <GiProcessor />, title: "Hardware", items: "Jetson Nano, Linux" },
    { icon: <FaChartLine />, title: "Libraries", items: "OpenCV, NumPy, Matplotlib" }
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Here’s a curated list of technologies and tools I work with:</p>
              <div className="skill-grid">
                {skills.map((skill, index) => (
                  <div className="skill-card" key={index}>
                    <div className="skill-icon">{skill.icon}</div>
                    <h5>{skill.title}</h5>
                    <p>{skill.items}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="background decoration" />
    </section>
  );
};
