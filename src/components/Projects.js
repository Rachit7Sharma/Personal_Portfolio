import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { FaRobot, FaHospitalSymbol, FaBitcoin, FaChartLine, FaMoneyBillWave } from "react-icons/fa";

export const Projects = () => {
  const featuredProjects = [
    {
      title: "Arohn - Mars Rover",
      description: "Developed autonomous navigation using ROS with LIDAR, stereo/depth cameras, GPS, and IMU. Integrated and optimized the rover’s electronics subsystem for Mars-like terrains.",
      icon: <FaRobot size={80} color="#00d8ff" />,
      link: "https://youtu.be/umCCxwXcIcg?feature=shared"
    },
    {
      title: "Budget Tracker (Website)",
      description: "Created a responsive budget tracker with modular inputs, expense logs, and real-time spending visualizations using Chart.js.",
      icon: <FaMoneyBillWave size={80} color="#2ecc71" />,
      link: "https://rachit7sharma.github.io/Budget-Tracker/"
    },
    {
      title: "Crypto Anveshan",
      description: "Designed frontend using HTML/CSS and built a backend database for managing bond purchases via cryptocurrency. Ensured smooth transactional flow with custom logic.",
      icon: <FaBitcoin size={80} color="#f7931a" />,
      link: "#"
    },
  ];

  const dataScienceProjects = [
    {
      title: "NeuroSEO",
      description: "Developed an LLM‑integrated SEO assistant using LangChain‑driven RAG pipelines and chatbot APIs for real‑time, data‑driven content optimization.",
      icon: <FaChartLine size={80} color="#9b59b6" />,
    },
    {
      title: "DOMOlytics",
      description: "Used Python and DOMO to analyze clickstream data, boosting user engagement by 15% and enabling predictive analytics with automated validation.",
      icon: <FaChartLine size={80} color="#2980b9" />,
    },
    {
      title: "Hospital Management System",
      description: "Built an end-to-end system for doctors and patients using Python, SQL, and PyMySQL. Enabled secure scheduling and medical data storage with unique IDs.",
      icon: <FaHospitalSymbol size={80} color="#e91e63" />,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>My journey in robotics, data science, and software development is driven by a passion to create innovative, real-world solutions.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Featured</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Data Science</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Extra</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {featuredProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {dataScienceProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>I thrive in collaborative environments and love working on interdisciplinary problem-solving challenges.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Decoration"/>
    </section>
  )
}