import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useStyles from "./styles";
import {
  Auth,
  // ForgotPassword,
  Home,
  Navbar,
  // ResetPassword,
} from "./components";
import { sm } from "./utils/screenSize";
import { ResetForm } from "./components/Auth/ResetPassword/Index";
import { ForgotPasswordForm } from "./components/Auth/ForgotPassword/Index";

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
          <Route path="/forgotpassword" exact component={ForgotPasswordForm} />
          <Route
            path="/resetpassword/:resetToken"
            exact
            component={ResetForm}
          />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
