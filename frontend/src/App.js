import React, { useEffect } from "react";
import { AppBar, Container, Grid, Grow, Typography } from "@material-ui/core";
import memories from "./images/memories.png";
import { Posts } from "./components";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { fetchPosts } from "./features/post/postsSlice";
import Pusher from "pusher-js";

function App() {
  const classes = useStyles(),
    dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    // Pusher.logToConsole = true;
    const pusher = new Pusher("4f051944159df55f7c75", {
      cluster: "eu",
    });
    const pusherAction = (data) => {
      dispatch(fetchPosts());
    };

    const pushPost = pusher.subscribe("posts");
    pushPost.bind("inserted", pusherAction);
    pushPost.bind("deleted", pusherAction);
    pushPost.bind("updated", pusherAction);
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="sticky" color="inherit">
        <img
          src={memories}
          alt="memories"
          className={classes.image}
          height={60}
        />
        <Typography
          className={classes.heading}
          variant={window.innerWidth < 576 ? "h4" : "h3"}
          align="center"
        >
          <span
            style={
              {
                // border: "2px solid rgb(91, 93, 94)",
                // borderRight: "none",
                // borderRadius: "25px 0 0 25px ",
                // padding: "0px 2px 0px 10px",
              }
            }
          >
            Mem
          </span>
          <span className={classes.capsule}>ories</span>
        </Typography>
      </AppBar>
      <Grow in>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Posts />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
}

export default App;
