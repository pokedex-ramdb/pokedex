import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { GiPokecog } from "react-icons/gi";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as Links
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    },
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: "none"
    }
  },
  appBar: {
    borderBottom: `0px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2)
  }
}));

export default function Pricing() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar
          className={classes.toolbar}
          style={{ backgroundColor: "#000000", color: "white" }}
        >
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <span className="title">
              <GiPokecog />
              Pokedex
            </span>
          </Typography>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              <span className="navname">
                <Links
                  to="/"
                  style={{
                    color: "white",
                    textDecoration: "none"
                  }}
                >
                  Home
                </Links>
              </span>
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              <span className="navname">
                <Links
                  to="/list-pokemon"
                  style={{
                    color: "white",
                    textDecoration: "none"
                  }}
                >
                  List
                </Links>
              </span>
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              <span className="navname">
                <Links
                  to="/team"
                  style={{
                    color: "white",
                    textDecoration: "none"
                  }}
                >
                  Team
                </Links>
              </span>
            </Link>
          </nav>
          <Button color="primary" variant="outlined" className={classes.link}>
            <Links to="/login">
              <span style={{ color: "white" }}>Login</span>
            </Links>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
