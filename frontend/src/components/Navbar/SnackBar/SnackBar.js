import React, { Fragment, useEffect, useState } from "react";
import { Close } from "@material-ui/icons";
import useStyles from "./styles";
import {
  Avatar,
  Button,
  IconButton,
  Snackbar,
  Typography,
} from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { setLogout } from "../../../features/authSlice";
import { useDispatch } from "react-redux";
import { sm } from "../../../utils/screenSize";
import { snackMessages } from "../../../snackMessages";
import { useSnackbar } from "notistack";
import decode from "jwt-decode";

export const SnackBar = () => {
  const classes = useStyles(),
    dispatch = useDispatch(),
    history = useHistory(),
    [open, setOpen] = useState(false),
    [user, setUser] = useState(JSON.parse(localStorage.getItem("profile"))),
    location = useLocation(),
    { enqueueSnackbar } = useSnackbar(),
    handleClose = (event, reason) => setOpen(false),
    openSnack = () => setOpen(true);

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      // Check for token expiry
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    dispatch(setLogout());
    history.push("/");
    setUser(null);
    handleClose();
    enqueueSnackbar(snackMessages.logout, {
      variant: "warning",
    });
  };

  const snapBarMessage = () => {
    return user?.result ? (
      <div className={classes.profile}>
        <Avatar
          className={classes.purple}
          alt={user?.result.name}
          src={user?.result.imageUrl}
        >
          {user?.result.name.charAt(0)}
        </Avatar>
        <Typography className={classes.userName}>
          {user?.result.name}
        </Typography>
        <Button
          className={classes.btn}
          variant="contained"
          onClick={logout}
          color="secondary"
          size="small"
        >
          Logout
        </Button>
      </div>
    ) : (
      <div className={classes.profile}>
        <span className={classes.leftPad}>Sign in to Post</span>
        <Button
          component={Link}
          to="/auth"
          variant="contained"
          color="secondary"
          size="small"
          className={classes.btn}
        >
          Sign In
        </Button>
      </div>
    );
  };

  return (
    <div>
      {user?.result ? (
        <div style={{ display: "flex" }} onClick={openSnack}>
          {window.innerWidth > 576 && <Button>Your Profile</Button>}
          <Avatar
            className={classes.purple}
            alt={user?.result.name}
            src={user?.result.imageUrl}
          >
            {user?.result.name.charAt(0)}
          </Avatar>
        </div>
      ) : (
        <Button onClick={openSnack}>Profile</Button>
      )}
      <Snackbar
        className={classes.root}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={sm ? 8000 : null}
        onClose={handleClose}
        message={snapBarMessage()}
        action={
          <Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
              className={classes.close}
            >
              <Close fontSize="small" />
            </IconButton>
          </Fragment>
        }
      />
    </div>
  );
};
