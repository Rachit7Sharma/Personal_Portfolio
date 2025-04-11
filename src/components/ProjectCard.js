import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, icon }) => {
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
        </div>
      </div>
    </Col>
  );
};
