import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
  },
  flex: {
    display: "flex",
    flexWrap: "wrap",
  },
  padding: {
    padding: 10,
    margin: 10,
    flexBasis: 320,
    // textAlign: "center",
    boxShadow: "0 0 10px gray",
  },
  t_right: {
    textAlign: "right",
  },
  marBtn: {
    margin: 10,
  },
  DeleteBtn: {
    color: "#f00",
    courser: "pointer",
    "&:hover": {
      color: "orange",
    },
  },
  EditBtn: {
    color: "blue",
    courser: "pointer",
    "&:hover": {
      color: "blue",
    },
  },
}));
const SearchNotes = () => {
  const classes = useStyles();
  const [searchText, setSearchText] = useState({
    search: "",
  });
  const history = useHistory();

  const [notesData, setNotesData] = useState([]);
  const [notesDataLocal, setNotesDataLocal] = useState([]);
  const [sortedName, setSortedName] = useState([]);

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setSearchText({ ...searchText, [name]: value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(searchText);
    var filterArray = notesDataLocal.filter((value, i) => {
      return value.categories == searchText.search;
    });
    setNotesData(filterArray);
    console.log(filterArray, "filterArray");
    console.log(searchText.search, "searchText.search");
  };

  useEffect(() => {
    var userMsgData = JSON.parse(localStorage.getItem("userMsg"));
    setNotesDataLocal(userMsgData);
    setNotesData(userMsgData);
  }, []);

  console.log(notesData, "notesData");

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

    console.log(sorted, "sorted 99998");
    setSortedName(sorted);
  }, []);

  const handleDelete = (i) => {
    console.log(i);
    var filterArray = notesDataLocal.filter((value, i) => {
      return value.categories == searchText.search;
    });
    // setNotesData(filterArray.splice(i, 1));
    // userMsgData.splice(i, 1);
    // localStorage.setItem("userMsg", JSON.stringify(userMsgData));
    // console.log(userMsgData, "userMsgData");
    // console.log(notesDataLocal, "notesDataLocal");
    // notesData.splice(i, 1);
    // setNotesData(notesData);
    // console.log(notesData, "notesData");
  };
  const handleEdit = (i) => {
    // console.log(i);
    history.push(`/edit/${i}`);
  };
  const setInputBox = (value) => {
    setSearchText({ search: value });
    console.log(value);
  };
  return (
    <>
      <form onSubmit={HandleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  value={searchText.search}
                  id="search"
                  label="Search Categories"
                  name="search"
                  autoComplete="search"
                  onChange={HandleChange}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
      <div>
        <h1>Categories List</h1>
        {Array.isArray(sortedName) &&
          sortedName.map((value, i) => {
            return (
              <Button
                className={classes.marBtn}
                key={i}
                variant="outlined"
                color="secondary"
                onClick={() => setInputBox(value)}
              >
                {value}
              </Button>
            );
          })}
      </div>
      <div className={classes.flex}>
        {Array.isArray(notesData) &&
          notesData.map((value, i) => {
            return (
              <div key={i} className={classes.padding}>
                <h2>{value.heading}</h2>
                <p>categories {value.categories}</p>
                <p>{value.message}</p>
                <p className={classes.t_right}>
                  <span className={classes.DeleteBtn}>
                    <DeleteIcon onClick={() => handleDelete(i)} />
                  </span>
                  <span className={classes.EditBtn}>
                    <EditIcon onClick={() => handleEdit(i)} />
                  </span>
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default SearchNotes;
