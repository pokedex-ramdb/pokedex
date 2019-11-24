import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import axios from 'axios'
import Typography from '@material-ui/core/Typography';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }),
)(TableRow);
  
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
      },
      table: {
        width:"200px"
      },
    }),
  );

class DetailPokemon extends Component  {

    constructor(props) {
        super(props);

        this.state = {
            id: "",
            name: "",
            imgURL: [],
            abilities: [],
            moves: [],
            stats: [],
            weight: []
        };
    }

    componentDidMount = () => {

        const {
            match: {
                params: { id, name }
            }
        } = this.props;

        this.setState({ id: id });
        this.setState({ name: name });

        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => {
            this.setState({ weight: response.data});
        })
        .catch(error => {
            console.log(error);
        });

        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => {
                this.setState({ imgURL: response.data.sprites});
            })
            .catch(error => {
                console.log(error);
            });

        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => {
                this.setState({ stats: response.data.stats});
            })
            .catch(error => {
                console.log(error);
            });

        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => {
                this.setState({ abilities: response.data.abilities});
            })
            .catch(error => {
                console.log(error);
            });

        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => {
                this.setState({ moves: response.data.moves});
            })
            .catch(error => {
                console.log(error);
            });

    };

    render() {
        console.log(this.state.abilities)
        console.log(this.state.moves)
        console.log(this.state.imgURL.front_shiny)
        console.log(this.state.stats)
        return (
            <div>
                
                <CardMedia style={{textAlign:"center"}}>
                    <img
                        style={{marginTop:"20px", width:"300px", height:"300px"}}
                        src={this.state.imgURL.front_shiny}>
                    </img>
                    <p>
                    <img
                        style={{marginTop:"20px", width:"100px", height:"100px"}}
                        src={this.state.imgURL.back_default}>
                    </img>
                    <img
                        style={{marginTop:"20px", width:"100px", height:"100px"}}
                        src={this.state.imgURL.front_default}>
                    </img>
                    <img
                        style={{marginTop:"20px", width:"100px", height:"100px"}}
                        src={this.state.imgURL.back_shiny}>
                    </img>
                    </p>
                    <div style={{marginBottom:"50px", marginTop:"20px"}}>
                    <Typography variant="h3" component="h3">
                            {this.state.name}
                    </Typography>
                    <Typography style={{color:"#636363"}} variant="h5" component="h3">
                            {this.state.weight.weight} Kg
                    </Typography>
                    </div>
                  </CardMedia>
                <Paper style={{margin:"0 auto", marginTop:"20px",width:"700px", marginBottom:"50px"}} className={useStyles.root}>
                    <Table aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>Base Statistic</StyledTableCell>
                            <StyledTableCell>Expertise</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {this.state.stats.map((item, key) => (
                            <StyledTableRow key={key}>
                            <StyledTableCell component="th" scope="row">
                                {item.base_stat}
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                {item.stat.name}
                            </StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                </Paper>

                <Paper style={{margin:"0 auto", marginTop:"20px",width:"500px", marginBottom:"50px"}} className={useStyles.root}>
                    <Table aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>Abilities</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {this.state.abilities.map((item, key) => (
                            <StyledTableRow key={key}>
                            <StyledTableCell component="th" scope="row">
                                {item.ability.name}
                            </StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                </Paper>

                <Paper style={{margin:"0 auto", marginTop:"20px",width:"500px", marginBottom:"50px"}} className={useStyles.root}>
                    <Table aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>Moves</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {this.state.moves.map((item, key) => (
                            <StyledTableRow key={key}>
                            <StyledTableCell component="th" scope="row">
                                {item.move.name}
                            </StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}

export default withRouter(DetailPokemon)
