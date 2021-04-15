import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  makeStyles,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 250,
  },
  title: {
    fontSize: 14,
  },
  media: {
    height: 140,
  },
  actions: {
    justifyContent: "center",
  },
});

export default function CategoryCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <CardMedia
          className={classes.media}
          image={props.imgSrc}
          title={props.title}
        />
      </CardContent>
      <CardActions className={classes.actions}>
        <Button size="small" href={props.url}>
          {props.title}
        </Button>
      </CardActions>
    </Card>
  );
}
