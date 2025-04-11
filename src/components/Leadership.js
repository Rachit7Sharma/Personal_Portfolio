import { Container, Row, Col } from "react-bootstrap";
import { PeopleFill } from 'react-bootstrap-icons';

export const Leadership = () => {
  return (
    <section className="leadership" id="leadership">
      <Container>
        <Row>
          <Col>
            <div className="section-header">
              <h2><PeopleFill size={26} /> Positions of Responsibility</h2>
            </div>
            <h5>Team Manager – Inferno DTU (Aug 2024 – Apr 2025)</h5>
            <ul>
              <li>Led a 35+ member Mars Rover team for IRC and URC challenges.</li>
              <li>Directed sub-team coordination, review cycles, and testing protocols.</li>
              <li>Enhanced autonomous systems and oversaw system integration plans.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
