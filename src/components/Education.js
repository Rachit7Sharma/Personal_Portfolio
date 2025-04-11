import { Container, Row, Col } from "react-bootstrap";
import { MortarboardFill } from 'react-bootstrap-icons';

export const Education = () => {
  return (
    <section className="education" id="education">
      <Container>
        <Row>
          <Col>
            <div className="section-header">
              <h2><MortarboardFill size={24} /> Education</h2>
            </div>
            <ul>
              <li><strong>B.Tech – Electrical Engineering</strong><br />Delhi Technological University, 2022–2026<br />CGPA: 8.62</li>
              <li><strong>Class XII – CBSE</strong><br />DPS Dwarka, 2022 | 95.2%</li>
              <li><strong>Class X – CBSE</strong><br />Prudence School, 2020 | 94.8%</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
