import React from "react";
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
import { useState } from "react";

const ProviderForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    NPI: "",
    address: "",
    city: "",
    zip: "",
    state: "",
  });

  const handleSubmit = (e) => {
    alert(`Thank you, your information has been received!\n`+
          `${formData.firstName} ${formData.lastName}\n`+
          `${formData.email} ${formData.phone}\n`+
          `${formData.NPI} ${formData.address}\n`+
          `${formData.city} ${formData.state} ${formData.zip}`);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Card body style={{ borderColor: "#333", color: "#333" }}>
      <CardTitle tag="h3">Healthcare Provider Registration</CardTitle>
      <Col>
        <Form onSubmit={handleSubmit}>
          <FormGroup row>
            <Label for="firstName" sm={2}>
              First Name
            </Label>
            <Col sm={4}>
              <Input
                id="firstName"
                name="firstName"
                onChange={handleChange}
                required
              ></Input>
            </Col>
            <Label for="lastName" sm={2}>
              Last Name
            </Label>
            <Col sm={4}>
              <Input
                id="lastName"
                name="lastName"
                onChange={handleChange}
                required
              ></Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="email" sm={2}>
              Email Address
            </Label>
            <Col sm={4}>
              <Input
                id="email"
                name="email"
                onChange={handleChange}
                required
              ></Input>
            </Col>
            <Label for="phone" sm={2}>
              Telephone Number
            </Label>
            <Col sm={4}>
              <Input
                id="phone"
                name="phone"
                onChange={handleChange}
                required
              ></Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="NPI" sm={2}>
              NPI Number
            </Label>
            <Col sm={4}>
              <Input
                id="NPI"
                name="NPI"
                onChange={handleChange}
                required
              ></Input>
            </Col>
            <Label for="address" sm={2}>
              Business Street Address
            </Label>
            <Col sm={4}>
              <Input
                id="address"
                name="address"
                onChange={handleChange}
                required
              ></Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="city" sm={1}>
              City
            </Label>
            <Col sm={3}>
              <Input
                id="city"
                name="city"
                onChange={handleChange}
                required
              ></Input>
            </Col>
            <Label for="state" sm={1}>
              State
            </Label>
            <Col sm={3}>
              <Input
                id="state"
                name="state"
                type="select"
                onChange={handleChange}
                required
              >
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </Input>
            </Col>
            <Label for="zip" sm={1}>
              Zip
            </Label>
            <Col sm={3}>
              <Input
                id="zip"
                name="zip"
                onChange={handleChange}
                required
              ></Input>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col>
              <Button color="warning" type="submit">
                Submit
              </Button>
              <Button color="warning" type="reset">
                Reset
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Col>
    </Card>
  );
};

export default ProviderForm;
