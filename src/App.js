import React from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { AppBar, Tab, Tabs, Grid } from "@material-ui/core";
import Transaction from "./pages/transaction";
import Broadcast from "./pages/broadcast";
import Sign from "./pages/sign";

export default function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          fullWidth
        >
          <Tab label="Create" component={Link} to="/transaction" />
          <Tab label="Sign" component={Link} to="/sign" />
          <Tab label="Broadcast" component={Link} to="/broadcast" />
        </Tabs>
      </AppBar>

      <Switch>
        <Route exact path="/">
          <Redirect to="/transaction" />
        </Route>
        <Route path="/transaction" component={Transaction} />
        <Route path="/sign" component={Broadcast} />
        <Route path="/broadcast" component={Sign} />
      </Switch>
    </>
  );
}
