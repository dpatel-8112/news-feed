import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NewsFeedCard from "./NewsFeedCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function NewsFeedGridItem({
  section,
  itemType,
  createdDate,
  byLine,
  image,
  title,
  abstract,
  url,
}) {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} sm={4}>
        <Paper style={{ padding: "10px" }} className={classes.paper}>
          <NewsFeedCard
            section={section}
            itemType={itemType}
            createdDate={createdDate}
            byLine={byLine}
            image={image}
            title={title}
            abstract={abstract}
            url={url}
          />
        </Paper>
      </Grid>
    </>
  );
}

export default NewsFeedGridItem;
