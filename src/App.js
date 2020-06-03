import React, { useState } from "react";
import Image from "./imgContainer";
import "./styles.css";
import "./theme.css";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  divider: {
    margin: "10px 0 10px 0"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function App() {
  const classes = useStyles();
  const [imageList, setImageList] = useState([]);

  const catGenerator = () => {
    var srcLink =
      "http://thecatapi.com/api/images/get?format=src&type=gif&size=small&" +
      new Date().getTime();
    setImageList(imageList.concat(<Image src={srcLink} alt="CATSSSS" />));
  };

  const dogGenerator = () => {
    var srcLink =
      "https://api.thedogapi.com/api/images/get?format=src&type=gif&size=small&" +
      new Date().getTime();
    setImageList(imageList.concat(<Image src={srcLink} alt="dogss" />));
  };

  return (
    <div className="App">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              Are you a cat or dog lover?
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Divider className={classes.divider} />
      <Button
        id="cat"
        variant="contained"
        color="primary"
        onClick={() => catGenerator()}
      >
        CAT
      </Button>
      <Button
        id="dog"
        variant="contained"
        color="secondary"
        onClick={() => dogGenerator()}
      >
        DOG
      </Button>
      <Divider className={classes.divider} />
      <div className="ImageDiv">{imageList}</div>
    </div>
  );
}
