import { Navbar, NavbarText, Nav, NavItem, NavLink, Col } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navigation = () => {
  return (
    <Navbar style={{ color: "#333" }}>
      <Col sm={4}>
        <img src={logo} height={40} width={40} alt="Availity Logo"></img>
        <NavbarText>Availity Assessment</NavbarText>
      </Col>
      <Nav>
        <NavItem>
          <NavLink tag={Link} to="/">
            Provider Form
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/questions">
            Questions 1-3
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
