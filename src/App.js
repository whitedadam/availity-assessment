import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProviderForm from "./components/ProviderForm";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Container>
        <Navigation />
        <Row>
          <Col>
            <Routes>
              <Route path="/" element={<ProviderForm />}></Route>
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default App;
