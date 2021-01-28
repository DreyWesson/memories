import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  loaderContainer: {
    display: "grid",
    placeItems: "center",
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
  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
}));
