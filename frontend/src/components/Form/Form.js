import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  ThemeProvider,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import {
  createPost,
  selectPosts,
  updatePost,
  setCurrentId,
} from "../../features/post/postsSlice";
import useStyles, { theme } from "./styles";
import { setModal } from "../../features/post/modalSlice";
import { useSnackbar } from "notistack";
import { option, snackMessages } from "../../snackMessages";
import { Link } from "react-router-dom";

const initValue = {
  title: "",
  message: "",
  tags: "",
};
export const Form = ({
  values: { title, message, tags },
  errors,
  touched,
  handleChange,
  isValid,
  setFieldTouched,
}) => {
  const { enqueueSnackbar } = useSnackbar(),
    [postData, setPostData] = useState(initValue),
    { posts, currentId } = useSelector(selectPosts),
    post = currentId
      ? posts?.find((message) => message._id === currentId)
      : null,
    dispatch = useDispatch(),
    classes = useStyles();

  const user = JSON.parse(localStorage.getItem("profile"));

  const clear = () => {
    setCurrentId(null);
    setPostData(initValue);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(
        updatePost({ ...postData, currentId, name: user?.result?.name })
      );
      setTimeout(() => {
        enqueueSnackbar(snackMessages.updatePost, option);
      }, 3000);
    } else {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      setTimeout(() => {
        enqueueSnackbar(snackMessages.createPost, option);
      }, 3000);
    }
    clear();
    dispatch(setModal(false));
  };

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    post && setPostData(post);
  }, [post]);

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper} style={{ minWidth: "180px" }}>
        <Typography variant="h6" align="center">
          <p>Please, Sign in to create your own memories.</p>
          <Button component={Link} to="/auth" color="secondary">
            Sign In
          </Button>
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={onSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editing "${post?.title}"` : "Creating a Memory"}
        </Typography>
        <ThemeProvider theme={theme}>
          <TextField
            className={classes.margin}
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            helperText={touched.title ? errors.title : ""}
            error={touched.title && Boolean(errors.title)}
            value={title}
            onChange={(e) => change("title", e)}
          />
          <TextField
            className={classes.margin}
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            multiline
            rows={4}
            helperText={touched.message ? errors.message : ""}
            error={touched.message && Boolean(errors.message)}
            value={message}
            onChange={(e) => change("message", e)}
          />
          <TextField
            className={classes.margin}
            name="tags"
            variant="outlined"
            label="Tags (coma separated)"
            fullWidth
            helperText={touched.tags ? errors.tags : ""}
            error={touched.tags && Boolean(errors.tags)}
            value={tags}
            onChange={(e) => change("tags", e)}
          />
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
          <Button
            className={classes.buttonSubmit}
            color="secondary"
            variant="contained"
            size="large"
            type="submit"
            fullWidth
            disabled={!isValid}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={clear}
            fullWidth
            className={classes.btnClear}
          >
            Clear
          </Button>
        </ThemeProvider>
      </form>
    </Paper>
  );
};

export default Form;
