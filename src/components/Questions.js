import { Row, Col, Card, CardTitle, CardBody } from "reactstrap";

const Questions = () => {
  return (
    <Row>
      <Col>
        <Card style={{ borderColor: "#333" }}>
          <CardTitle tag={"h5"}>Proudest Professional Achievement</CardTitle>
          <CardBody>Lorem ipsum dollar</CardBody>
        </Card>
      </Col>
      <Col>
        <Card style={{ borderColor: "#333" }}>
          <CardTitle tag={"h5"}>Something I Have Read and Would Recommend</CardTitle>
          <CardBody>Lorem ipsum dollar</CardBody>
        </Card>
      </Col>
      <Col>
        <Card style={{ borderColor: "#333" }}>
          <CardTitle tag={"h5"}>Explaining to Grandma What Availity Does</CardTitle>
          <CardBody>Lorem ipsum dollar</CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Questions;
