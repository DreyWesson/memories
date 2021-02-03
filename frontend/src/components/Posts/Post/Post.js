import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  IconButton,
} from "@material-ui/core/";
import moment from "moment";
import useStyles from "./styles";
import {
  DeleteOutlined,
  FavoriteBorderOutlined,
  MoreHorizOutlined,
} from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { setModal } from "../../../features/post/modalSlice";
import {
  deletePost,
  likePost,
  setCurrentId,
} from "../../../features/post/postsSlice";

export const Post = ({ post }) => {
  const classes = useStyles(),
    dispatch = useDispatch();
  const postEdit = () => {
    dispatch(setModal(true));
    dispatch(setCurrentId(post._id));
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h2" className={classes.smallHeading}>
          {post.creator}
        </Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button size="small" onClick={postEdit}>
          <IconButton aria-label="edit">
            <MoreHorizOutlined fontSize="default" style={{ color: "white" }} />
          </IconButton>
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          className={classes.btnColor}
          onClick={() => dispatch(likePost({ id: post._id }))}
        >
          <FavoriteBorderOutlined fontSize="small" />
          &nbsp; Like &nbsp;{post.likeCount}
        </Button>
        <Button
          size="small"
          className={classes.btnColor}
          onClick={() => dispatch(deletePost({ id: post._id }))}
        >
          <DeleteOutlined fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};
