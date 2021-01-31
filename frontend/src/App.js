import React, { useEffect } from "react";
import { AppBar, Container, Grid, Grow, Typography } from "@material-ui/core";
import memories from "./images/memories.png";
import { ErrorPage, Loader, Posts } from "./components";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts, fetchPosts } from "./features/post/postsSlice";
import { selectModal } from "./features/post/modalSlice";
import Pusher from "pusher-js";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loading, hasErrors, currentId, posts } = useSelector(selectPosts);
  const { open } = useSelector(selectModal);

  console.log("LOADING: ", loading);
  console.log("hasErrors: ", hasErrors);
  console.log("currentId: ", currentId);
  console.log("posts: ", posts);
  console.log("open: ", open);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    // Pusher.logToConsole = true;

    let pusher = new Pusher("4f051944159df55f7c75", {
      cluster: "eu",
    });

    let channel = pusher.subscribe("posts");
    channel.bind("inserted", (data) => {
      console.log("Data received ", data);
      dispatch(fetchPosts());
    });
    let del = pusher.subscribe("posts");
    del.bind("deleted", (data) => {
      console.log("Data deleted ", data);
      dispatch(fetchPosts());
    });
    let updated = pusher.subscribe("posts");
    updated.bind("deleted", (data) => {
      console.log("Data updated ", data);
      dispatch(fetchPosts());
    });
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  } else if (hasErrors) {
    return <ErrorPage />;
  }

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
          Memories
        </Typography>
      </AppBar>
      <Grow in>
        {/* <Container> */}
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
        {/* </Container> */}
      </Grow>
    </Container>
  );
}

export default App;
