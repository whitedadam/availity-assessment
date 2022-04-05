import {
  Card,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Button,
  FormText,
  CardText,
} from "reactstrap";
import { useState } from "react";

const LispChecker = () => {
  const [verdict, setVerdict] = useState(null);
  const [formData, setFormData] = useState();

  const lispValidation = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    lispValidation(e);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormData(e.target.value);
  };

  return (
    <Card style={{ borderColor: "#333" }}>
      <CardTitle tag={"h3"}>LISP Checker</CardTitle>
      <Col>
        <Form onSubmit={handleSubmit}>
          <FormGroup style={{ margin: "10px" }}>
            <Label for="lispBox">LISP Code</Label>
            <Input
              id="lispBox"
              name="lispBox"
              type="textarea"
              onChange={handleChange}
              required
            ></Input>
            <FormText>
              Insert your LISP code above. Then click submit. If the parenthesis
              within the code are closed and nested properly, the verdict below
              will read true. Or else, false.
            </FormText>
          </FormGroup>
          <FormGroup>
            <CardText style={{ margin: "10px" }}>
              Verdict: {verdict ? "true" : "false"}
            </CardText>
          </FormGroup>
          <FormGroup>
            <Button
              color="warning"
              type="submit"
              style={{ borderColor: "#333", margin: "5px" }}
            >
              Submit
            </Button>
          </FormGroup>
        </Form>
      </Col>
    </Card>
  );
};

export default LispChecker;
