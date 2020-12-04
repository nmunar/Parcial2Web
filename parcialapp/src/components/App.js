import React, { useEffect, useState } from "react";
//declarar todos los componentes que se van a usar
import List from "./list";
import Chart from "./chart";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App(props) {
  //Poner los hooks
  const [lista, setLitst] = useState([]);
  const [currentObj, setCurrentObj] = useState({});
  const [message, setMessage] = useState("");
  //Declarar variables
  let updateCurrentObj = (obj) => {
    setCurrentObj(obj);
  };
  //useEffect(()=>{se setean las constantes hooks, fetch y todo para usarse en el return},[])
  useEffect(() => {
    if (navigator.onLine) {
      let URL = "";
      if (props.lan === "es") {
        URL =
          "https://gist.githubusercontent.com/jhonatan89/e379fadf8ed0f5381a2d8f8f3dea90c3/raw/e2bc20df02828d297f99558551e37959ac97a6f8/pokemon-es.json";
      } else {
        URL =
          "https://gist.githubusercontent.com/jhonatan89/2089276d3ce0faceff8e55fc3459b818/raw/30ee1a77b3e328108faaaa9aaac6f2ddaa3d3711/pokemons-en.json";
      }
      fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setLitst(data);
          setCurrentObj(data[0]);
          localStorage.setItem("Obj", JSON.stringify(data));
        });
    } else {
      if (localStorage.getItem("Obj") === null) {
        setMessage("Error while conecting with API, Try again.");
      } else {
        setLitst(JSON.parse(localStorage.getItem("Obj")));
      }
    }
  }, []);
  //Return
  return (
    <React.Fragment>
      <Navbar id="navbar">
        <Navbar.Brand href="#home"> Most Wanted Pokemons</Navbar.Brand>
      </Navbar>
      <p>{message}</p>
      <Container>
        <Row>
          <Col>
            <List objs={lista} />
          </Col>
        </Row>
        <Row>
          <Chart objs={lista} />
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
