import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import arbox from "./arbox.png";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button as Buttons
} from "react-bootstrap";

const useStyles = makeStyles({
  card: {
    maxWidth: 350
  },
  media: {
    height: 140
  }
});

export default class ListPokemon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: "",
      data: [],
      dn: [
        {
          fname: "Jayne",
          lname: "Washington",
          email: "jaynewashington@exposa.com",
          gender: "female"
        },
        {
          fname: "Peterson",
          lname: "Dalton",
          email: "petersondalton@exposa.com",
          gender: "male"
        },
        {
          fname: "Velazquez",
          lname: "Calderon",
          email: "velazquezcalderon@exposa.com",
          gender: "male"
        },
        {
          fname: "Norman",
          lname: "Reed",
          email: "normanreed@exposa.com",
          gender: "male"
        }
      ]
    };
  }

  componentDidMount = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then(response => {
        this.setState({ data: response.data.results });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter, data } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = data.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });

    console.log(filteredData);

    let id = 0;

    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop: "300px"
        }}
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Container>
          <Row>
            <Col xs={12} lg={12} style={{ marginBottom: "5%" }}>
              <Form inline>
                <FormControl
                  type="text"
                  value={filter}
                  onChange={this.handleChange}
                  placeholder="Search"
                  className="mr-sm-2"
                />
              </Form>
            </Col>
          </Row>
        </Container>

        {filteredData.map((item, key) => {
          id = key + 1;
          return (
            <Card
              style={{
                maxWidth: "200px",
                margin: "10px"
              }}
              className={useStyles.card}
              key={key}
            >
              <CardActionArea>
                <img
                  style={{ width: "200px", height: "200px" }}
                  src={arbox}
                ></img>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ textAlign: "center" }}
                  >
                    <a href={`/pokemon/${id}-${item.name}`}>{item.name}</a>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
    );
  }
}
