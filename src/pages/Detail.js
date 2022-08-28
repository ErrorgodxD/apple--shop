import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data";

function Detail(props) {
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (isNaN(num) === true) {
      alert("숫자만 입력하세요");
    }
  });

  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);

  let { id } = useParams();
  let [num, setNum] = useState("");

  return (
    <div>
      <div className="container">
        {alert === true ? (
          <div className="alert alert-warning">2초 안에 클릭하면 ...!!!!</div>
        ) : null}

        {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          버튼
        </button>
        <div className="row">
          <div className="col-md-6">
            <img
              src={
                "https://codingapple1.github.io/shop/shoes" + props.id + ".jpg"
              }
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
      </div>
    </div>
  );
}

export default Detail;
