import { makeStyles } from "@material-ui/core";
// import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    marginBottom: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderLeft: "5px solid #fe3d71",
    [theme.breakpoints.down("md")]: {
      borderLeft: "2px solid #fe3d71",
    },
  },
  heading: {
    color: "rgb(91, 93, 94)",
    fontSize: "20px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "30px",
    },
  },
  capsule: {
    backgroundColor: "#fe3d71",
    borderRadius: "0 25px 25px 0",
    padding: "2px 7px 2px 2px",
    color: "white",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "235px",
    [theme.breakpoints.up("sm")]: {
      width: "400px",
    },
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  btn: {
    padding: "5px",
  },
  close: {
    paddingLeft: "10px",
  },
  // purple: {
  //   color: theme.palette.getContrastText(deepPurple[500]),
  //   backgroundColor: deepPurple[500],
  // },
}));
