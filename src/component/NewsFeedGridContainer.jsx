import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import NewsFeedGridItem from "./NewsFeedGridItem";

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

function NewsFeedGridContainer({ technology }) {
  console.log(technology);

  // const [topic, setTopic] = useState("");
  // const [createdDate, setCreatedDate] = useState("");
  // const [abstract, setAbstract] = useState("");
  // const [itemType, setItemType] = useState("");
  // const [publishDate, setPublishDate] = useState("");
  // const [section, setSection] = useState("");
  // const [title, setTitle] = useState("");
  // const [updatedDate, setUpdatedDate] = useState("");
  // const [url, setUrl] = useState("");
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid style={{ maxWidth: "100%" }} container spacing={3}>
        {technology.map((item) => (
          <NewsFeedGridItem
            key={item.short_url}
            section={item.section}
            itemType={item.item_type}
            createdDate={item.created_date}
            byLine={item.byline}
            image={item.multimedia[0]}
            title={item.title}
            abstract={item.abstract}
            url={item.url}
          />
        ))}
      </Grid>
    </div>
  );
}

export default NewsFeedGridContainer;
