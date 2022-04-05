import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProviderForm from "./components/ProviderForm";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Questions from "./components/Questions"
import LispChecker from "./components/LispChecker";

const App = () => {
  const [ author ] = useState("Adam Whited");

  return (
    <Router>
      <Container>
        <Navigation />
        <Row>
          <Col>
            <Routes>
              <Route path="/" element={<ProviderForm />}></Route>
              <Route path="/questions" element={<Questions />}></Route>
              <Route path="/lisp-checker" element={<LispChecker />}></Route>
            </Routes>
          </Col>
        </Row>
        <Row>
          <Footer author={author} />
        </Row>
      </Container>
    </Router>
  );
};

export default App;
