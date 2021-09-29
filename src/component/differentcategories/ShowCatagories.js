import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  flex: {
    display: "flex",
    flexWrap: "wrap",
  },
  padding: {
    padding: 10,
    margin: 10,
    flexBasis: 450,
    boxShadow: "0 0 10px gray",
  },
  t_right: {
    textAlign: "right",
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
});
const ShowCatagories = () => {
  const [notesDataLocal, setNotesDataLocal] = useState([]);
  const [notesDataFilter, setNotesDataFilter] = useState([]);
  const classes = useStyles();
  const history = useHistory();

  const { name } = useParams();

  useEffect(() => {
    var filterArray = notesDataLocal.filter((value, i) => {
      return value.categories == name;
    });
    console.log(filterArray, "filterArray");
    console.log(name, "name");
    setNotesDataFilter(filterArray);
  }, [name]);

  const handleEdit = (i) => {
    history.push(`/edit/${i}`);
  };

  useEffect(() => {
    var userMsgData = JSON.parse(localStorage.getItem("userMsg"));
    setNotesDataLocal(userMsgData);
    setNotesDataFilter(userMsgData);
  }, []);

  return (
    <>
      <div className={classes.flex}>
        {Array.isArray(notesDataFilter) &&
          notesDataFilter.map((value, i) => {
            return (
              <div key={i} className={classes.padding}>
                <h2>{value.heading}</h2>
                <p>{value.categories}</p>
                <p>{value.message}</p>
                <p className={classes.t_right}>
                  <span className={classes.DeleteBtn}>
                    <DeleteIcon />
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

export default ShowCatagories;
