import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import NewsFeedCard from "./NewsFeedCard";
import NewsFeedGridContainer from "./NewsFeedGridContainer";

function Home() {
  const [technology, setTechnology] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchNews();
    setIsLoading(false);
    return () => {};
  }, []);

  const fetchNews = () => {
    {
      axios
        .get(
          "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=gHtEY6KJBC0pgwZtpHUuva9VfpvN98RX"
        )
        .then((response) => {
          //   console.log(response);

          setTechnology(response.data.results);
          //   console.log(technology);

          //   console.log("Abstract : " + response.data.results[0].abstract);
          //   console.log("By Line : " + response.data.results[0].byline);
          //   console.log("Item Type : " + response.data.results[0].item_type);
          //   console.log(
          //     "Publish date : " + response.data.results[0].published_date
          //   );
          //   console.log("Section : " + response.data.results[0].section);
          //   console.log("Title : " + response.data.results[0].title);
          //   console.log(
          //     "Updated Date : " + response.data.results[0].updated_date
          //   );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <h2>Home - News Feed</h2>

      {isLoading != true ? (
        <NewsFeedGridContainer technology={technology} />
      ) : (
        "<Loading>"
      )}

      {/* <NewsFeedCard />
      <NewsFeedCard /> */}
    </div>
  );
}

export default Home;
