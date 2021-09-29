import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Swal from "sweetalert2";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Your Website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(9),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  root: {
    marginTop: theme.spacing(9),
    minWidth: 440,
  },
  marginTop: {
    marginTop: "3px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  padding: {
    padding: "5px",
  },
}));

const ContactPage = () => {
  const classes = useStyles();
  const [userMsg, setUserMsg] = useState({
    heading: "",
    categories: "",
    message: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setUserMsg({ ...userMsg, [name]: value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(userMsg);

    var userMsgData = JSON.parse(localStorage.getItem("userMsg"));
    console.log(userMsgData, "localStorage");
    if (!Array.isArray(userMsgData)) {
      userMsgData = [];
    }
    userMsgData.push(userMsg);
    localStorage.setItem("userMsg", JSON.stringify(userMsgData));

    Swal.fire("Note added successfully", "Note added successfully", "success");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <div className={`${classes.paper} ${classes.marginTop}`}>
            <Typography component="h1" variant="h5">
              Create Notes
            </Typography>
            <form className={classes.form} onSubmit={HandleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    value={userMsg.heading}
                    id="heading"
                    label="heading"
                    name="heading"
                    autoComplete="heading"
                    onChange={HandleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    value={userMsg.categories}
                    id="categories"
                    label="categories"
                    name="categories"
                    autoComplete="categories"
                    onChange={HandleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextareaAutosize
                    aria-label="minimum height"
                    rowsMin={5}
                    style={{ width: "100%" }}
                    value={userMsg.message}
                    required
                    name="message"
                    onChange={HandleChange}
                    placeholder="Write Message Here"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Add Note
              </Button>
              <Grid container justify="flex-end"></Grid>
            </form>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ContactPage;
