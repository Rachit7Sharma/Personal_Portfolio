import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, icon, link }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        {imgUrl ? (
          <img src={imgUrl} alt={title} />
        ) : (
          <div className="icon-placeholder">
            {icon}
          </div>
        )}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {link && (
            <div className="mt-2">
              <a href={link} target="_blank" rel="noreferrer" style={{ color: "#00d8ff", textDecoration: "underline" }}>
                View Project
              </a>
            </div>
          )}
        </div>
      </div>
    </Col>
  );
};
