import React, { useEffect } from "react";
import { AppBar, Container, Grid, Grow, Typography } from "@material-ui/core";
import memories from "./images/memories.png";
import { Posts } from "./components";
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
    Pusher.logToConsole = true;
    const pusher = new Pusher("4f051944159df55f7c75", {
      cluster: "eu",
    });
    const pusherAction = (data) => {
      console.log("Data: ", data);
      dispatch(fetchPosts());
    };

    const pushPost = pusher.subscribe("posts");
    pushPost.bind("inserted", pusherAction);
    pushPost.bind("deleted", pusherAction);
    pushPost.bind("updated", pusherAction);
  }, [dispatch]);

  // if (loading) {
  //   return <Loader />;
  // } else if (hasErrors) {
  //   return <ErrorPage />;
  // }

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
