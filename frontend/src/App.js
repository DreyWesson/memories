import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useStyles from "./styles";

import { Auth, Home, Navbar } from "./components";
import { sm } from "./utils/screenSize";

function App() {
  const classes = useStyles();

  return (
    <Router>
      <Container
        maxWidth="lg"
        className={classes.root}
        disableGutters={sm && true}
      >
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
