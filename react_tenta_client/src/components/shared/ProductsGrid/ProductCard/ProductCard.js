import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secundary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
  },
  img: {
    width: 300,
    height: 300,
  },
}));

export default function ProductCard(props) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.paper}>{props.title}</Paper>
      <img className={classes.img} alt="complex" src={props.imgSrc} />
      <p>{props.description}</p>
      <a href={props.url}>More</a>
    </div>
  );
}
