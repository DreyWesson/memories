import React, { useEffect, useState } from "react";
import { AppBar, Container, Grid, Grow, Typography } from "@material-ui/core";
import memories from "./images/memories.png";
import { ErrorPage, Loader, Posts } from "./components";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts, fetchPosts } from "./features/post/postsSlice";
import { selectModal } from "./features/post/modalSlice";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const state = useSelector(selectModal);
  console.log(state);
  const { posts, loading, hasErrors } = useSelector(selectPosts);
  const { open } = useSelector(selectModal);
  console.log("POSTS: ", posts);
  console.log("LOADING", loading);
  console.log("HASERROR: ", hasErrors);
  console.log("OPEN: ", open);

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
            <Posts currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
        {/* </Container> */}
      </Grow>
    </Container>
  );
}

export default App;
