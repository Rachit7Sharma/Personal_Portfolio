// import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.svg";
// import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";

// export const Footer = () => {
//   return (
//     <footer className="footer">
//       <Container>
//         <Row className="align-items-center">
//           <MailchimpForm />
//           <Col size={12} sm={6}>
//             <img src={logo} alt="Logo" />
//           </Col>
//           <Col size={12} sm={6} className="text-center text-sm-end">
//             <div className="social-icon">
//               <a href="#"><img src={navIcon1} alt="Icon" /></a>
//               <a href="#"><img src={navIcon2} alt="Icon" /></a>
//               <a href="#"><img src={navIcon3} alt="Icon" /></a>
//             </div>
//             <p>Copyright 2022. All Rights Reserved</p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   )
// }
import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/rachit-sharma-748379284" target="_blank" rel="noreferrer">
              <img src={navIcon1} alt="LinkedIn" className="icon-default" />
            </a>
            <a href="https://github.com/Rachit7Sharma" target="_blank" rel="noreferrer">
              <img src={navIcon2} alt="GitHub" className="icon-invert" />
            </a>
            <a href="https://leetcode.com/u/Rachit7Sharma/" target="_blank" rel="noreferrer">
              <img src={navIcon3} alt="LeetCode" className="icon-invert" />
            </a>
          </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
