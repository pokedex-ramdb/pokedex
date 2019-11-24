import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { GiPokecog } from "react-icons/gi";

import { Link as Links, withRouter } from "react-router-dom";

const Navbarr = props => {
  const logOut = () => {
    localStorage.removeItem("isLogin");

    props.history.push("/login");
  };
  return (
    <div>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ backgroundColor: "#000000" }}
      >
        <Container>
          <Navbar.Brand className="title" style={{ fontSize: "35px" }}>
            <Links
              to="/"
              style={{
                color: "white",
                textDecoration: "none"
              }}
            >
              <GiPokecog />
              Pokedex
            </Links>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto navnama">
              <Nav.Link
                href="#features"
                style={{ color: "white", marginLeft: "20px" }}
              >
                <Links
                  to="/"
                  style={{
                    color: "white",
                    textDecoration: "none"
                  }}
                >
                  {" "}
                  HOME
                </Links>
              </Nav.Link>
              <Nav.Link style={{ color: "white", marginLeft: "20px" }}>
                <Links
                  to="/list-pokemon"
                  style={{
                    color: "white",
                    textDecoration: "none"
                  }}
                >
                  {" "}
                  LIST
                </Links>
              </Nav.Link>
              <Nav.Link style={{ color: "white", marginLeft: "20px" }}>
                <Links
                  to="/team"
                  style={{
                    color: "white",
                    textDecoration: "none"
                  }}
                >
                  TEAM
                </Links>
              </Nav.Link>
              <Button
                variant="outline-primary"
                type="submit"
                style={{ marginLeft: "20px" }}
              >
                <Links onClick={logOut}>LOGOUT</Links>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default withRouter(Navbarr);
