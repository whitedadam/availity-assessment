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

  const lispValidation = () => {
    // variables
    let arr = formData.split(""); // parsing input string to array
    let out = [];
    let validation = [];

    // pulling parenthesis from input string array
    arr.forEach((element) => {
      if (element === "(" || element === ")") out.push(element);
    });

    // if out is empty then there is no parenthesis, can assume string is invalid
    if (!out.length) return false;

    // iterating through out array, if there is an opening bracket
    // it is pushed to the validation array and removed from the out array.
    // If there is a closing bracket, that is removed from the out array
    // and an opening bracket is removed from the end of the validation array.
    for (let i = 0; i < out.length; ) {
      if (out[i] === "(") {
        validation.push(out.shift()); // putting opening bracket on validation array
      } else if (out[i] === ")") {
        // if validation array is empty but there are still closing brackets, code is invalid
        if (!validation.length) return false;
        // else removing opening bracket from validation array and removing closing bracket from out array
        validation.pop();
        out.shift();
      } // if
    } // for

    // if there is nothing in the validation array return true
    // if there is something in the validation array return false
    return !validation.length ? true : false;
  };

  // Will update Verdict, called upon Submit
  const handleVerdict = () => {
    setVerdict(lispValidation());
  };

  // Calls verdict logic.
  const handleSubmit = (e) => {
    handleVerdict();
    e.preventDefault();
  };

  // Captures formdata 
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
