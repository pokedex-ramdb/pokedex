import React from "react";
import image from "../img/bg-poke.jpg";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Button,
  IconButton,
  TextField,
  Link,
  Typography
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Formik, ErrorMessage } from "formik";
import { validationForm } from "../components/validation/signup";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: "100%"
  },
  grid: {
    height: "100%"
  },
  quoteContainer: {
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  quote: {
    backgroundColor: theme.palette.neutral,
    backgroundImage: `url(${image})`,
    height: "900px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  quoteInner: {
    textAlign: "center",
    flexBasis: "600px"
  },
  quoteText: {
    color: theme.palette.white,
    fontWeight: 300
  },
  name: {
    marginTop: theme.spacing(3),
    color: theme.palette.white
  },
  bio: {
    color: theme.palette.white
  },
  contentContainer: {},
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  contentHeader: {
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  logoImage: {
    marginLeft: theme.spacing(4)
  },
  contentBody: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center"
    }
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  title: {
    marginTop: theme.spacing(3)
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  policy: {
    marginTop: theme.spacing(1),
    display: "flex",
    alignItems: "center"
  },
  policyCheckbox: {
    marginLeft: "-14px"
  },
  signUpButton: {
    margin: theme.spacing(2, 0)
  }
}));

function SignUp(props) {
  const classes = useStyles();

  const handleBack = () => {
    history.goBack();
  };

  const { history } = props;

  return (
    <div className={classes.root}>
      <Grid
        className={classes.grid}
        container
      >
        <Grid
          className={classes.quoteContainer}
          item
          lg={5}
        >
            <div className={classes.quote}>
          </div>
        </Grid>
        <Grid
          className={classes.content}
          item
          lg={7}
          xs={12}
        >
          <div className={classes.content}>
          <div className={classes.contentHeader}>
              <IconButton onClick={handleBack}>
                <ArrowBackIcon />
              </IconButton>
            </div>
            <div className={classes.contentBody}>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: ""
                }}
                validate={validationForm}
                onSubmit={(values, { setSubmitting }) => {
                  localStorage.setItem("user", JSON.stringify(values));
                  props.history.push("/login");
                }}
              >
                {({
                  values,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting
                }) => (
                  <form
                   
                    className={classes.form}
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    <Typography className={classes.title} variant="h3">
                      Create new account
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                      Use your email to create new account
                    </Typography>
                    <TextField
                      className={classes.textField}
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={values.firstName}
                      autoFocus
                    />
                    <p
                      style={{
                        color: "red",
                        fontStyle: "italic"
                      }}
                    >
                      <ErrorMessage name="firstName" />
                    </p>

                    <TextField
                      className={classes.textField}
                      variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={values.lastName}
                      autoComplete="lname"
                    />
                    <p
                      style={{
                        color: "red",
                        fontStyle: "italic"
                      }}
                    >
                      <ErrorMessage name="lastName" />
                    </p>

                    <TextField
                      className={classes.textField}
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={values.email}
                      autoComplete="email"
                    />
                    <p
                      style={{
                        color: "red",
                        fontStyle: "italic"
                      }}
                    >
                      <ErrorMessage name="email" />
                    </p>

                    <TextField
                      className={classes.textField}
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={values.password}
                      autoComplete="current-password"
                    />
                    <p
                      style={{
                        color: "red",
                        fontStyle: "italic"
                      }}
                    >
                      <ErrorMessage name="password" />
                    </p>

                    <Button
                      style={{ backgroundColor: "black" }}
                      className={classes.signUpButton}
                      color="primary"
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Sign up now
                    </Button>
                    <Typography color="textSecondary" variant="body1">
                      Have an account?{" "}
                      <a style={{ marginLeft: "0px" }} href="/login">
                        Sign In
                      </a>
                    </Typography>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default withRouter(SignUp);
