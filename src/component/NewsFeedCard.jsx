import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

// Importing Share Button for sharing the contents
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function NewsFeedCard({
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
  const [expanded, setExpanded] = React.useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ margin: "0px auto" }} className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            className={classes.avatar}
            style={{ backgroundColor: "black" }}
          >
            NYT
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${section[0].toUpperCase() + section.slice(1)} | ${itemType}`}
        subheader={`${createdDate
          .slice(0, 10)
          .split("-")
          .reverse()
          .join("-")} | ${createdDate.slice(11, 19)}`}
      />
      <CardMedia
        className={classes.media}
        image={image.url}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {title}

          <hr />

          <span style={{ fontWeight: "bolder" }}>{byLine}</span>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={() => {
            likeCount == 0
              ? setLikeCount((pre) => pre + 1)
              : setLikeCount((pre) => pre - 1);
          }}
        >
          <FavoriteIcon color={likeCount == 0 ? "" : "primary"} />
        </IconButton>
        <IconButton>{likeCount}</IconButton>
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography style={{ fontWeight: "bold" }} paragraph>
            Abstract :
          </Typography>
          <Typography paragraph>{abstract}</Typography>
          <Typography paragraph>
            <a style={{ textDecoration: "none" }} href={url} target="_target">
              <span
                style={{
                  boxShadow: "2px 4px 6px gray",
                  padding: "4px 8px",
                }}
              >
                🔗Read more here🔗
              </span>
            </a>
          </Typography>
          <hr style={{ margin: "0px 0px 10px 0px" }} />
          <Typography>
            <EmailShareButton style={{ padding: "0px 2px" }} url={url}>
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
            <FacebookShareButton style={{ padding: "0px 2px" }} url={url}>
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton style={{ padding: "0px 2px" }} url={url}>
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <WhatsappShareButton style={{ padding: "0px 2px" }} url={url}>
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default NewsFeedCard;
