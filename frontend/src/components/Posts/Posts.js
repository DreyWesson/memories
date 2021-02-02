import { Grid, Modal } from "@material-ui/core";
import React, { useState } from "react";
import { ErrorPage, Form, Loader } from "..";
import { Post } from "./Post/Post";
import { MonochromePhotosOutlined } from "@material-ui/icons/";
import useStyles, { getModalStyle } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts, setCurrentId } from "../../features/post/postsSlice";
import { selectModal, setModal } from "../../features/post/modalSlice";

export const Posts = () => {
  const dispatch = useDispatch(),
    [modalStyle] = useState(getModalStyle),
    classes = useStyles(),
    { posts, hasErrors } = useSelector(selectPosts),
    { open } = useSelector(selectModal);

  return (
    <>
      {hasErrors ? (
        <ErrorPage />
      ) : !posts?.length ? (
        <Loader />
      ) : (
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {posts?.map((post) => (
            <Grid key={post._id} item xs={12} sm={4} md={4}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      )}
      {/* <div className={classes.posts}> */}
      <div className={classes.postsContainer}>
        <MonochromePhotosOutlined
          className={classes.postsCreateBtn}
          onClick={() => dispatch(setModal(true))}
        />
      </div>
      <Modal
        open={open}
        onClose={() => {
          dispatch(setModal(false));
          dispatch(setCurrentId(null));
        }}
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
