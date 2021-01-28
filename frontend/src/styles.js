import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "10px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgb(91, 93, 94)",
  },
  image: {
    marginRight: "15px",
  },
  loaderContainer: {
    display: "grid",
    placeItems: "center",
    width: "100vw",
    height: "100vh",
  },
  loader: {
    border: "0.7rem solid #f8f9fa",
    borderRadius: "50%",
    background: "#e7e8f5",
    borderTop: "0.7rem solid #5e6be0",
    width: "5rem",
    height: "5rem",
    animation: `$spin 2s linear infinite`,
    [theme.breakpoints.up("md")]: {
      width: "7rem",
      height: "7rem",
    },
  },
  errorPage: {
    maxWidth: "100%",
    display: "grid",
    placeItems: "center",
    height: "100vh",
  },
  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
}));
