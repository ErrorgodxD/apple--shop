import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link } from "react-router-dom";
import Detail1 from "./Components/Detail1";
import Detail2 from "./Components/Detail2";

function App() {
  let [shoes] = useState(data); // eslint-disable-line no-unused-vars
  console.log(shoes);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Grab</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Shop</Nav.Link>
            <Button variant="outline-secondary" href="#login" className="login">
              Login/Join
            </Button>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="bg-main"></div>
              <div className="container">
                <div className="row">
                  {/* <Card shoes={shoes[0]} i={1} />
          <Card shoes={shoes[1]} i={2} />
          <Card shoes={shoes[2]} i={3} /> */}

                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i} />;
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route path="/Detail1" element={<Detail1 />} />
        <Route path="/Detail2" element={<Detail2 />} />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-sm">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        alt="main"
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
      <p>{props.shoes.content}</p>
      <Button
        variant="outline-secondary"
        href={"/detail" + (props.i + 1)}
        className="detail"
      >
        상세보기
      </Button>
    </div>
  );
}

export default App;
