import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import data from "../data";

function Detail(props) {
  let [tab, setTab] = useState(0);
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);

  let { id } = useParams();
  let shoei = Number(props.shoes[id].id) + 1;

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, []);

  return (
    <div>
      <div className="container">
        {alert === true ? (
          <div className="alert alert-warning">2초 안에 클릭하면 ...!!!!</div>
        ) : null}

        <div className="row">
          <div className="col-md-6">
            <img
              src={"https://codingapple1.github.io/shop/shoes" + shoei + ".jpg"}
              width="100%"
              alt="shoes"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{props.shoes[id].title}</h4>
            <p>{props.shoes[id].content}</p>
            <p>{props.shoes[id].price}원</p>

            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(0);
              }}
              eventKey="link0"
            >
              버튼0
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(1);
              }}
              eventKey="link1"
            >
              버튼1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(2);
              }}
              eventKey="link2"
            >
              버튼2
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab tab={tab} />
      </div>
    </div>
  );
}

function Tab({ tab }) {
  if (tab === 0) {
    return <div>내용0</div>;
  }
  if (tab === 1) {
    return <div>내용1</div>;
  }
  if (tab === 2) {
    return <div>내용2</div>;
  }
}

export default Detail;
