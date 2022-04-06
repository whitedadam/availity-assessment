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
            Questions 1-3
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/lisp-checker">
            LISP Checker
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/provider-form">
            Provider Form
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/parse-csv">
            ParseCSV
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
