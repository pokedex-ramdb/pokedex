import React from "react";
import "../../../App.css";
import { Jumbotron, Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import yarn from "../../../components/yarn.png";
import js from "../../../components/js.png";
import mtui from "../../../components/mtui.png";
import nodejs from "../../../components/nodejs.png";
import react from "../../../components/react.png";
import vc from "../../../components/vc.png";
import rb from "../../../components/rb.png";
import css from "../../../components/css.svg";
import mozilla from "../../../components/mozilla.png";
import axios from "../../../components/axios.png";
import reacticons from "../../../components/reacticons.png";
import ubuntu from "../../../components/ubuntu.png";
import { Link as Links } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Jumbotron fluid className="jumbotron">
       
      </Jumbotron>
      <Container>
        <Row>
          <Col xs={12} style={{ textAlign: "center" }}>
            <h1 className="navnamee">Pokedex</h1>
            <hr
              className="hr"
              style={{
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
            <Links to="/login">GET STARTED !!</Links>
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
              className="hr"
              style={{
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
