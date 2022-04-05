import { Navbar, NavbarText, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar style={{ color: "#333" }}>
      <NavbarText>Availity Assessment</NavbarText>
      <Nav>
        <NavItem>
          <NavLink tag={Link} to="/">
            Provider Form
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
