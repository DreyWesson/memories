import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    alignItems: "center",
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  posts: {
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
    position: "relative",
  },
  postsContainer: {
    position: "absolute",
    bottom: "10px",
    color: "#fe3d71",
  },
  postsCreateBtn: {
    position: "fixed",
    right: ".2em",
    bottom: "10px",
    fontSize: "3em !important",
    [theme.breakpoints.up("sm")]: {
      right: "1em",
    },
  },
}));

export function getModalStyle() {
  const top = 50,
    left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
