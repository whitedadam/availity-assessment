import {
  Card,
  CardTitle,
  Form,
  Label,
  FormGroup,
  Input,
  Button,
  Col,
} from "reactstrap";

const ProviderForm = () => {
  return (
    <Card body style={{ borderColor: "#333", color: "#333" }}>
      <CardTitle tag="h3">Healthcare Provider Registration</CardTitle>
      <Col>
      <Form>
        <FormGroup row>
          <Label for="firstName" sm={2}>
            First Name
          </Label>
          <Col sm={9}>
            <Input id="firstName" required></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="lastName" sm={2}>
            Last Name
          </Label>
          <Col sm={9}>
            <Input id="lastName" required></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="NPI" sm={2}>
            NPI Number
          </Label>
          <Col sm={9}>
            <Input id="NPI" required></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="address" sm={2}>
            Business Address
          </Label>
          <Col sm={9}>
            <Input id="address" required></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="phone" sm={2}>
            Telephone Number
          </Label>
          <Col sm={9}>
            <Input id="phone" required></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="email" sm={2}>
            Email Address
          </Label>
          <Col sm={9}>
            <Input id="email" required></Input>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col>
            <Button color="warning">Submit</Button>
          </Col>
        </FormGroup>
      </Form>
      </Col>
    </Card>
  );
};

export default ProviderForm;
