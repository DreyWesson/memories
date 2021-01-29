import React, { useEffect, useState } from "react";
import { AppBar, Container, Grid, Grow, Typography } from "@material-ui/core";
import memories from "./images/memories.png";
import { ErrorPage, Loader, Posts } from "./components";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts, fetchPosts } from "./features/post/postsSlice";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const { loading, hasErrors, posts } = useSelector(selectPosts);
  console.log(loading);
  console.log(hasErrors);
  console.log(posts);

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
