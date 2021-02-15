import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import { Input } from "../..";
import { resetPassword } from "../../../features/authSlice";
import { sm } from "../../../utils/screenSize";
import useStyles from "../styles";
import { useHistory } from "react-router-dom";

import { useSnackbar } from "notistack";
import { snackMessages } from "../../../snackMessages";

const initialState = {
  password: "",
  confirmPassword: "",
};
export const ResetPassword = ({
  values: { password, confirmPassword },
  errors,
  touched,
  // handleSubmit,
  handleChange,
  isValid,
  setFieldTouched,
  match,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState(initialState);
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [success, setSuccess] = useState("");
  // const [error, setError] = useState("");
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const dispatch = useDispatch();
  const history = useHistory();

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // console.log(formData.confirmPassword);

  // const onChange = (e) =>
  // setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setFormData("");
      // setTimeout(() => {
      //   setError("");
      // }, 5000);
      // return setError("Passwords don't match");
    }

    const passwordDetails = {
      password: formData.password,
    };
    try {
      console.log("Got here");
      dispatch(resetPassword({ passwordDetails, match, history }));
      // const { data } = await resetPassword(passwordDetails, match);
      // console.log(data);
      // setSuccess(data.data);
    } catch (error) {
      // setError(error.response.data.error);
      setTimeout(() => {
        enqueueSnackbar(snackMessages.signin, {
          variant: "success",
        });
        // setError("");
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
          Reset Password
        </Typography>
        <Typography align="center">
          Please enter a new password to access your account
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Input
              name="password"
              label="Password"
              handleChange={change}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
              helperText={touched.password ? errors.password : ""}
              error={touched.password && Boolean(errors.password)}
            />
            <Input
              name="confirmPassword"
              label="Repeat Password"
              handleChange={change}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
              helperText={touched.confirmPassword ? errors.confirmPassword : ""}
              error={touched.confirmPassword && Boolean(errors.confirmPassword)}
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!isValid}
          >
            Reset Password
          </Button>
        </form>
      </Paper>
    </Container>
  );
};
