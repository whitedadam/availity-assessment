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
  Row,
  FormText,
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

  const [formValidations, setFormValidations] = useState({
    emailValid: null,
    phoneValid: null,
    NPIValid: null,
    zipValid: null,
  });

  const handleSubmit = (e) => {
    alert(
      `Thank you, your information has been received!\n` +
        `${formData.firstName} ${formData.lastName}\n` +
        `${formData.email} ${formData.phone}\n` +
        `${formData.NPI} ${formData.address}\n` +
        `${formData.city} ${formData.state} ${formData.zip}`
    );
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
    formValidation(e);
  };

  const formValidation = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    // Email Validation logic using regex
    let emailRegex = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );
    if (name === "email") {
      emailRegex.test(value)
        ? setFormValidations({ ...formValidations, emailValid: true })
        : setFormValidations({ ...formValidations, emailValid: false });
    }

    // Phone Validation using regex
    let phoneRegex = new RegExp(
      // eslint-disable-next-line no-useless-escape
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    );
    if (name === "phone") {
      phoneRegex.test(value)
        ? setFormValidations({ ...formValidations, phoneValid: true })
        : setFormValidations({ ...formValidations, phoneValid: false });
    }

    // NPI Validation using regex
    let NPIregex = new RegExp(/^\d{10}$/);
    if (name === "NPI") {
      NPIregex.test(value)
        ? setFormValidations({ ...formValidations, NPIValid: true })
        : setFormValidations({ ...formValidations, NPIValid: false });
    }

    // Zip Code validation using regex
    let zipRegex = new RegExp(/^\d{5}$/);
    if (name === "zip") {
      zipRegex.test(value)
        ? setFormValidations({ ...formValidations, zipValid: true })
        : setFormValidations({ ...formValidations, zipValid: false });
    }
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
                valid={formValidations.emailValid}
                invalid={
                  formValidations.emailValid === null
                    ? false
                    : !formValidations.emailValid
                }
                required
              ></Input>
              <FormText>Ex: yourname@email.com</FormText>
            </Col>
            <Label for="phone" sm={2}>
              Telephone Number
            </Label>
            <Col sm={4}>
              <Input
                id="phone"
                name="phone"
                onChange={handleChange}
                valid={formValidations.phoneValid}
                invalid={
                  formValidations.phoneValid === null
                    ? false
                    : !formValidations.phoneValid
                }
                required
              ></Input>
              <FormText>Please include area code.</FormText>
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
                valid={formValidations.NPIValid}
                invalid={
                  formValidations.NPIValid === null
                    ? false
                    : !formValidations.NPIValid
                }
                required
              ></Input>
              <FormText>10 Digit NPI number with no letters.</FormText>
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
                valid={formValidations.zipValid}
                invalid={
                  formValidations.zipValid === null
                    ? false
                    : !formValidations.zipValid
                }
                required
              ></Input>
              <FormText>Ex: 12345</FormText>
            </Col>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col>
                <Button
                  color="warning"
                  type="submit"
                  style={{ borderColor: "#333", margin: "5px" }}
                >
                  Submit
                </Button>
                <Button
                  color="warning"
                  type="reset"
                  style={{ borderColor: "#333", margin: "5px" }}
                >
                  Reset
                </Button>
              </Col>
            </Row>
          </FormGroup>
        </Form>
      </Col>
    </Card>
  );
};

export default ProviderForm;
