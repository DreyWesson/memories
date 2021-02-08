import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useStyles from "./styles";
import {
  Auth,
  ForgotPassword,
  Home,
  Navbar,
  ResetPassword,
} from "./components";
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
          <Route path="/forgotpassword" exact component={ForgotPassword} />
          <Route path="/resetpassword" exact component={ResetPassword} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
