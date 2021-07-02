import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import UsersList from "../../components/UsersList/UsersList";
import { Switch, Route } from "react-router-dom";
import UsersSingle from "../../components/UsersSingle/UsersSingle";
import { ROUTES } from "../../constants";

const UsersLayout = () => {
  const { goBack } = useHistory();

  return (
    <div className="container">
      <Button variant="contained" color="primary" onClick={goBack}>
        Back
      </Button>
      <Switch>
        <Route exact path={ROUTES.users}>
          <UsersList />
        </Route>

        <Route exact path={ROUTES.singleUser}>
          <UsersSingle />
        </Route>
      </Switch>
    </div>
  );
};

export default UsersLayout;
