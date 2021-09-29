import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddNotes } from "../slice/NoteSlice";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
  flex: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-Around",
  },
  padding: {
    padding: 10,
    margin: 10,
    flexBasis: 420,
    // textAlign: "center",
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
const AllNotes = () => {
  const classes = useStyles();
  const history = useHistory();
  const [notesDataLocal, setNotesDataLocal] = useState([]);
  const notes = useSelector((state) => state.notes.value);
  const dispatch = useDispatch();
  useEffect(() => {
    var userMsgData = JSON.parse(localStorage.getItem("userMsg"));
    setNotesDataLocal(userMsgData);
  }, []);

  const handleDelete = (i) => {
    console.log(i);
    var userMsgData = JSON.parse(localStorage.getItem("userMsg"));
    userMsgData.splice(i, 1);
    localStorage.setItem("userMsg", JSON.stringify(userMsgData));
    setNotesDataLocal(userMsgData);
    console.log(userMsgData, "userMsgData");
    console.log(notesDataLocal, "notesDataLocal");
  };

  const handleEdit = (i) => {
    history.push(`/edit/${i}`);
  };

  useEffect(() => {
    var userMsgData = JSON.parse(localStorage.getItem("userMsg"));
    dispatch(AddNotes(userMsgData));
    console.log(notes, "notes");
  }, []);
  return (
    <>
      <h1>All Notes</h1>
      <div className={classes.flex}>
        {Array.isArray(notesDataLocal) &&
          notesDataLocal.map((value, i) => {
            return (
              <div key={i} className={classes.padding}>
                <h2>{value.heading}</h2>
                <p>Categories {value.categories}</p>
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

export default AllNotes;
