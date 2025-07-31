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
              <p><strong>June 2025 – July 2025</strong></p>
              <ul>
                <li>Enhanced client SEO outcomes by integrating LLMs and chatbot APIs, optimizing LangChain-powered RAG pipelines for real-time, data-informed responses.</li>
                <li>Refactored serialization processes to generate structured outputs with embedded internal/external citations, ensuring 80% link accuracy.</li>
                <li>Developed a brand ranking framework using 7+ industry-specific metrics, dynamically scoring and ranking 200+ brands via LLM-driven API prompts.</li>
                <li><strong>Skills:</strong> Python, LangChain, GA4, SEO Analytics, Prompt Engineering</li>
              </ul>
            </div>

            <div className="experience-box">
              <h4>Data Analytics Intern – Publicis Sapient</h4>
              <p><strong>June 2024 – July 2024</strong></p>
              <ul>
                <li>Analyzed clickstream data to extract insights that improved user engagement by 12%; built automated dashboards to track KPIs.</li>
                <li>Tailored DOMO ML models for performance analysis; automated data validation using Python across DOMO and GA4.</li>
                <li><strong>Skills:</strong> Python, SQL, Machine Learning, GA4, Domo</li>
              </ul>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};
