import React from "react";
import { Switch, Route } from "react-router-dom";
import AllNotes from "../allNotes/AllNotes";
import ShowCatagories from "./ShowCatagories";
const DifferentCategoriesRoute = () => {
  return (
    <>
      <Switch>
        <Route path={`/categories/:name`}>
          <ShowCatagories />
        </Route>
        <Route path={`/categories`}>
          <AllNotes />
        </Route>
      </Switch>
    </>
  );
};

export default DifferentCategoriesRoute;
