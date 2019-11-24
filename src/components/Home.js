import React from "react";
import "../App.css";
import { Jumbotron, Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      <Jumbotron fluid className="jumbotron">
        <p className="hi" style={{color:'white', fontSize:'30px', marginLeft:'50px'}}>Welcome to pokedex... </p>
        <p className="hi" style={{color:'white', fontSize:'40px', marginLeft:'50px', lineHeight:'5px'}}>mr. Rizkianakbar </p>
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
          <Col lg={4} sm={12}>
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
          <Col lg={4} sm={12}>
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
        <div className="buton">
          <br />
          <br />
          <br />
          <br />
          <p style={{ textAlign: "center", color: "white", fontSize: "30px" }}>
            Wanna see your favorite pokemon ?
          </p>
          {/* <Button variant="primary" style={{ alignContent: "center" }}>
            GET STARTED !!
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
