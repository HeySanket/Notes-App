import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Button } from "@material-ui/core";
import AppRoutes from "../routes/AppRoutes";
import { Link } from "react-router-dom";
import DifferentCategoriesRoute from "./DifferentCategoriesRoute";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  mer: {
    margin: 5,
  },
}));
const DifferentCategories = () => {
  const classes = useStyles();
  const [notesDataLocal, setNotesDataLocal] = useState([]);
  const [sortedName, setSortedName] = useState([]);

  useEffect(() => {
    var userMsgData = JSON.parse(localStorage.getItem("userMsg"));
    setNotesDataLocal(userMsgData);
  }, []);

  useEffect(() => {
    var userMsgData = JSON.parse(localStorage.getItem("userMsg"));
    if (!Array.isArray(userMsgData)) {
      userMsgData = [];
    }
    localStorage.setItem("userMsg", JSON.stringify(userMsgData));
    var o = userMsgData.map((value, i) => {
      return value.categories;
    });
    console.log(o, "ooooo");

    var names = o;

    var uniq = names
      .map((name) => {
        return { count: 1, name: name };
      })
      .reduce((a, b) => {
        a[b.name] = (a[b.name] || 0) + b.count;
        return a;
      }, {});

    var sorted = Object.keys(uniq).sort((a, b) => uniq[a] < uniq[b]);

    console.log(sorted, "sorted");
    setSortedName(sorted);
  }, []);

  return (
    <>
      <h1>Different Categories</h1>
      <Grid container spacing={3}>
        <Grid item lg={3} xs={4}>
          <Paper className={classes.paper}>
            {Array.isArray(sortedName) &&
              sortedName.map((value, index) => {
                return (
                  <Button
                    className={classes.mer}
                    fullWidth
                    key={index}
                    variant="contained"
                    color="primary"
                  >
                    {Array.isArray(AppRoutes) &&
                      AppRoutes.reduce((val, i) => {
                        return (
                          <Link
                            to={`/categories/${value}`}
                            style={{ color: "#fff", textDecoration: "none" }}
                          >
                            {sortedName[index]}
                          </Link>
                        );
                      })}
                  </Button>
                );
              })}
          </Paper>
        </Grid>
        <Grid item lg={9} xs={8}>
          <Paper className={classes.paper}>
            <DifferentCategoriesRoute />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default DifferentCategories;
