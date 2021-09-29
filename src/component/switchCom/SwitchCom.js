import React from "react";
import { Switch, Route } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes";
const SwitchCom = () => {
  return (
    <>
      <Switch>
        {Array.isArray(AppRoutes) &&
          AppRoutes.map((value, index) => {
            return (
              <Route
                key={index}
                path={value.path}
                exact={value.path == "/" ? true : false}
              >
                {value.component}
              </Route>
            );
          })}
      </Switch>
    </>
  );
};

export default SwitchCom;
