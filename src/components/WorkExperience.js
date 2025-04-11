import { Container, Row, Col } from "react-bootstrap";
import { Briefcase } from 'react-bootstrap-icons';

export const WorkExperience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col>
            <div className="section-header">
              <h2><Briefcase size={28} /> Work Experience</h2>
            </div>
            <div className="experience-box">
              <h4>Data Analytics Intern – Publicis Sapient</h4>
              <p><strong>June 2024 – July 2024</strong></p>
              <ul>
                <li>Analyzed clickstream data and identified behavioral patterns for business optimization.</li>
                <li>Built real-time dashboards in Domo, integrated with GA4 datasets.</li>
                <li>Developed ML-based models for engagement prediction and outcome tracking.</li>
                <li><strong>Skills:</strong> Python, SQL, Machine Learning, GA4, Domo</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
