import React from "react";
import "../App.css";
import { Jumbotron, Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import yarn from "./yarn.png";
import js from "./js.png";
import mtui from "./mtui.png";
import nodejs from "./nodejs.png";
import react from "./react.png";
import vc from "./vc.png";
import rb from "./rb.png";
import css from "./css.svg";
import mozilla from "./mozilla.png";
import axios from "./axios.png";
import reacticons from "./reacticons.png";
import ubuntu from "./ubuntu.png";

const Home = () => {
  return (
    <div>
      <Jumbotron fluid className="jumbotron">
        <p
          className="hi"
          style={{
            color: "white",
            fontSize: "30px",
            marginLeft: "50px",
            marginTop: "80px"
          }}
        >
          Welcome to pokedex...{" "}
        </p>
        <p
          className="hi"
          style={{
            color: "white",
            fontSize: "40px",
            marginLeft: "50px",
            lineHeight: "5px"
          }}
        >
          mr. Rizkianakbar{" "}
        </p>
      </Jumbotron>
      <Container>
        <Row>
          <Col xs={12} style={{ textAlign: "center" }}>
            <h1 className="navnamee">Pokedex</h1>
            <hr
              style={{
                width: "300px",
                border: "1px solid black",
                borderRadius: "50%"
              }}
            />
            <p className="ket">Find your favorite pokemon</p>
          </Col>
        </Row>
        <Row style={{ textAlign: "center" }}>
          <Col lg={4} sm={12} style={{ marginTop: "60px" }}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title className="navnamee">20 List Pokemon</Card.Title>
                <Card.Text className="ket">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} sm={12} style={{ marginTop: "60px" }}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title className="navnamee">Get Data from API</Card.Title>
                <Card.Text className="ket">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} sm={12} style={{ marginTop: "60px" }}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title className="navnamee">Responsive</Card.Title>
                <Card.Text className="ket">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <div className="imgfixed">
        <div center>
          <br />
          <br />
          <br />
          <br />
          <p style={{ textAlign: "center", color: "white", fontSize: "30px" }}>
            Do you want to see your favorite Pokemon ?
          </p>
          <Button variant="outline-primary" className="buton">
            GET STARTED !!
          </Button>
        </div>
      </div>
      <Container>
        <Row>
          <Col xs={12} style={{ textAlign: "center" }}>
            <h1 className="navnamee" style={{ marginTop: "50px" }}>
              List Stack
            </h1>
            <hr
              style={{
                width: "300px",
                border: "1px solid black",
                borderRadius: "50%"
              }}
            />
            <p className="ket">Find your favorite pokemon</p>
          </Col>
        </Row>

        <Row>
          <Col xs={4} lg={2} style={{ textAlign: "center", marginTop: "20px" }}>
            <img src={js} alt="Yarn" className="liststack"></img>
          </Col>
          <Col xs={4} lg={2} style={{ textAlign: "center", marginTop: "20px" }}>
            <img src={react} alt="Yarn" className="liststack"></img>
          </Col>
          <Col xs={4} lg={2} style={{ textAlign: "center", marginTop: "20px" }}>
            <img
              src={nodejs}
              style={{ width: "130px" }}
              alt="Yarn"
              className="liststack"
            ></img>
          </Col>

          <Col xs={4} lg={2} style={{ textAlign: "center", marginTop: "20px" }}>
            <img
              src={yarn}
              alt="Yarn"
              style={{ width: "130px" }}
              className="liststack"
            ></img>
          </Col>
          <Col xs={4} lg={2} style={{ textAlign: "center", marginTop: "20px" }}>
            <img src={mtui} alt="Yarn" className="liststack"></img>
          </Col>
          <Col xs={4} lg={2} style={{ textAlign: "center", marginTop: "20px" }}>
            <img src={vc} alt="Yarn" className="liststack"></img>
          </Col>
        </Row>
        <Row>
          <Col xs={4} lg={2} style={{ textAlign: "center", marginTop: "20px" }}>
            <img src={ubuntu} alt="Yarn" className="liststack"></img>
          </Col>
          <Col xs={4} lg={2} style={{ textAlign: "center", marginTop: "20px" }}>
            <img src={reacticons} alt="Yarn" className="liststack"></img>
          </Col>
          <Col xs={4} lg={2} style={{ textAlign: "center", marginTop: "20px" }}>
            <img
              src={css}
              style={{ width: "50px" }}
              alt="Yarn"
              className="liststack"
            ></img>
          </Col>

          <Col xs={4} lg={2} style={{ textAlign: "center", marginTop: "20px" }}>
            <img
              src={axios}
              alt="Yarn"
              style={{ width: "130px" }}
              className="liststack"
            ></img>
          </Col>
          <Col xs={4} lg={2} style={{ textAlign: "center", marginTop: "20px" }}>
            <img src={rb} alt="Yarn" className="liststack"></img>
          </Col>
          <Col xs={4} lg={2} style={{ textAlign: "center", marginTop: "20px" }}>
            <img src={mozilla} alt="Yarn" className="liststack"></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
