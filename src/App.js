import "./App.js";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Nav, Navbar, Container } from "react-bootstrap";
import "./App.css";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./pages/Detail";
import styled from "styled-components";
import axios from "axios";

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Grab</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/About");
              }}
            >
              About us
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                navigate("/About/location");
              }}
            >
              Location
            </Nav.Link>
            <Nav.Link className="login">Join Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg" />
              <div className="container">
                <div className="row">
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i + 1} />;
                  })}
                </div>
              </div>
              <button
                onClick={() => {
                  setCount(count + 1);
                  if (count === 1) {
                    axios
                      .get("https://codingapple1.github.io/shop/data2.json")
                      .then(data => {
                        let prod = [...shoes, ...data.data];
                        setShoes(prod);
                      })
                      .catch(() => {
                        console.log("제품1");
                      });
                  } else if (count === 2) {
                    axios
                      .get("https://codingapple1.github.io/shop/data3.json")
                      .then(data => {
                        let prod = [...shoes, ...data.data];
                        setShoes(prod);
                      });
                  } else if (count === 3) {
                    axios
                      .get("https://codingapple1.github.io/shop/data4.json")
                      .then(data => {
                        let prod = [...shoes, ...data.data];
                        setShoes(prod);
                      });
                  } else if (count >= 3) {
                    alert("제품이 없습니다.");
                  }
                }}
              >
                더보기
              </button>
            </>
          }
        />
        <Route path="*" element={<div>페이지를 찾을 수 없음</div>} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>맴버들</div>} />
          <Route path="location" element={<div>위치정보</div>} />
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰 받기</p>} />
        </Route>

        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
      </Routes>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <a href={"/detail/" + props.shoes.id + ""}>
        <img
          src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
          width="80%"
          alt="shoes"
        />
      </a>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
