import React, { Fragment, useState } from "react";
import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  Snackbar,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import memories from "../../images/memories.png";
import { Link } from "react-router-dom";
import { Close } from "@material-ui/icons";

export const Navbar = () => {
  const classes = useStyles();
  const user = null;
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    setOpen(false);
  };
  const sm = () => (window.innerWidth < 576 ? true : false);
  // const snapBarSignInLogic = () => {};

  return (
    <AppBar className={classes.appBar} position="sticky" color="inherit">
      <div className={classes.brandContainer}>
        <img src={memories} alt="memories" height={45} />
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant={sm ? "h4" : "h3"}
          align="center"
          style={{ textDecoration: "none" }}
        >
          Mem
          <span className={classes.capsule}>ories</span>
        </Typography>
      </div>

      <div>
        <Button onClick={() => setOpen(true)}>Profile</Button>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={open}
          autoHideDuration={sm ? 6000 : null}
          onClose={handleClose}
          message={!user && "Sign in to Post"}
          action={
            <Fragment>
              {user?.result ? (
                <div className={classes.profile}>
                  <Avatar
                  // alt={user?.result.name}
                  // src={user?.result.imageUrl}
                  >
                    {/* {user?.result.name.charAt(0)} */}
                  </Avatar>
                  <Typography
                    // className={classes.userName}
                    variant={!sm > 576 && "h6"}
                  >
                    Drey Wesson
                    {/* {user?.result.name} */}
                  </Typography>
                  <Button
                    variant="contained"
                    // color="secondary"
                    className={classes.btn}
                    // onClick={logout}
                    color="secondary"
                    size="small"
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <Button
                  component={Link}
                  to="/auth"
                  variant="contained"
                  color="secondary"
                  size="small"
                >
                  Sign In
                </Button>
              )}

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
    </AppBar>
  );
};
