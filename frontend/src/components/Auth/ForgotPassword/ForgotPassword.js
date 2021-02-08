import React, { useState } from "react";
import { Input } from "../Input";
import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { sm } from "../../../utils/screenSize";
import useStyles from "../styles";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../../features/authSlice";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  // const [emailStatus, setEmailStatus] = useState("");
  // const [feedback, setFeedback] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleChange = (e) => setEmail(e.target.value);
  // const { forgotPassword } = useSelector(selectAuth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userEmail = { email };
    try {
      // const { data } = await postData("/api/auth/forgotpassword", userEmail);
      dispatch(forgotPassword(userEmail));
      // setEmailStatus(success);
      // setFeedback(data);
    } catch (error) {
      setEmail("");
      setTimeout(() => {
        // setEmailStatus("");
        // setFeedback(data);
      }, 5000);
    }
  };

  return (
    <Container component="main" maxWidth="xs" disableGutters={sm && true}>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <Typography align="center">
          Please enter the email address you register your account with. We will
          send you reset password confirmation to this email
        </Typography>
        {/* {!emailStatus && (
          <span style={{ color: "red" }} className="error-message">
            {feedback}
          </span>
        )}
        {emailStatus && (
          <span style={{ color: "green" }} className="success-message">
            {emailStatus}
          </span>
        )} */}
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Send Mail
          </Button>
        </form>
      </Paper>
    </Container>
  );
};
