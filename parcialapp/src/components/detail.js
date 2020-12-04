import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function Detail(props) {
  return (
    <React.Fragment>
      <Col xs={5}>
        <Card style={{ width: "24rem" }}>
          <Card.Img variant="top" src={props.movie.poster} />
          <Card.Body>
            <Card.Title>{props.obj.name}</Card.Title>
            <Card.Text>{props.obj.description}</Card.Text>
            <Card.Text>
              <b>{props.obj.cast}</b>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment>
  );
}
export default Detail;
