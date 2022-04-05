import { Card, Col } from "reactstrap";

const Footer = ({ author }) => {
  return (
    <Card align="right" style={{ borderColor: "#FFF" }}>
      <Col></Col>
      <Col>
        <p>{author} | April, 2022</p>
      </Col>
    </Card>
  );
};

export default Footer;
