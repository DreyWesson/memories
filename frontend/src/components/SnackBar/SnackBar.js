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
import { Link } from "react-router-dom";

export const SnackBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const { name, imageUrl } = user?.result;
  const handleClose = (event, reason) => {
    setOpen(false);
  };
  useEffect(() => {
    // const token = user?.token;

    // JWT

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);
  const sm = () => (window.innerWidth < 576 ? true : false);

  const snapBarMessage = () => {
    return !user ? (
      <div className={classes.profile}>
        <Avatar alt={name} src={imageUrl}>
          {name.charAt(0)}
        </Avatar>
        <Typography className={classes.userName}>{name}</Typography>
        <Button
          className={classes.btn}
          variant="contained"
          // onClick={logout}
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
      <Button onClick={() => setOpen(true)}>Profile</Button>
      <Snackbar
        className={classes.root}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={sm ? 12000 : null}
        onClose={handleClose}
        message={!user ? "Sign in to Post" : snapBarMessage()}
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
