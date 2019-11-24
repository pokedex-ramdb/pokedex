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

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
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
            moves: []
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
                this.setState({ imgURL: response.data.sprites});
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
                  </CardMedia>
                <Paper style={{margin:"0 auto", marginTop:"20px",width:"500px"}} className={useStyles.root}>
                    <Table aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>Moves</StyledTableCell>
                            <StyledTableCell>Moves</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {this.state.moves.map((item, key) => (
                            <StyledTableRow key={key}>
                            <StyledTableCell component="th" scope="row">
                                {item.move.name}
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                {item.move.name}
                            </StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                </Paper>

                <Paper style={{margin:"0 auto", marginTop:"20px",width:"500px"}} className={useStyles.root}>
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

                <Paper style={{margin:"0 auto", marginTop:"20px",width:"500px"}} className={useStyles.root}>
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
