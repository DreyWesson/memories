import { createMuiTheme, makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: "rgb(91, 93, 94)",
    color: "white",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1e90ff",
    },
  },
});
