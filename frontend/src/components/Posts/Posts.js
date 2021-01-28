import { Grid, Modal } from "@material-ui/core";
import React, { useState } from "react";
import { Form, Loader } from "..";
import { Post } from "./Post/Post";
import { MonochromePhotosOutlined } from "@material-ui/icons/";
import useStyles, { getModalStyle } from "./styles";
import { useSelector } from "react-redux";
import { selectPosts } from "../../features/post/postsSlice";

export const Posts = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();

  const { posts } = useSelector(selectPosts);

  return (
    <>
      {!posts?.length ? (
        <Loader />
      ) : (
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {posts?.map((post) => (
            <Grid key={post._id} item xs={12}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      )}
      {/* <div className={classes.posts}> */}
      <div className={classes.postsContainer}>
        <MonochromePhotosOutlined
          className={classes.postsCreateBtn}
          onClick={handleOpen}
        />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <Form />
        </div>
      </Modal>
      {/* </div> */}
    </>
  );
};
