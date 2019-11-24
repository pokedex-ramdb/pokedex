import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default class ListPokemon extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            image: []
        };
    }

    componentDidMount = () => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon")
            .then(response => {
                this.setState({ data: response.data.results});
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {

        let id = 0

        return (
            <div 
                style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around"
            }}
            >
                {this.state.data.map(
                        (item, key) => {
                            id = key + 1
                            return (
            <Card
                 style={{
                    maxWidth: "200px",
                    margin: "10px",
                }}
                className={useStyles.card}
                key={key}>

            <CardActionArea>
              <img
                style={{width:"200px", height:"200px"}}
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png">
              </img>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {item.name}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
              style={{backgroundColor:"black", color:"white"}}
               size="small"
               color="primary"
               href={`/pokemon/${id}-${item.name}`}>
                Detail
              </Button>
            </CardActions>
          </Card>
           );
        }
    )}
          </div>
        )
    }
}
