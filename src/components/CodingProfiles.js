import { Container, Row, Col } from "react-bootstrap";
import { CodeSlash } from 'react-bootstrap-icons';

export const CodingProfiles = () => {
  return (
    <section className="coding-profiles" id="coding">
      <Container>
        <Row>
          <Col>
            <div className="section-header">
              <h2><CodeSlash size={26} /> Competitive Coding</h2>
            </div>
            <p>My Competitive Programming Profiles can be found below :</p>
            <ul>
              <li><a href="https://leetcode.com/u/Rachit7Sharma/" target="_blank">LeetCode Rating - 1624</a></li>
              <li><a href="https://www.codechef.com/users/rachit7sharma" target="_blank">CodeChef – 2★</a></li>
              <li><a href="https://codeforces.com/profile/Rachit7Sharma" target="_blank">Codeforces – Newbie</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
