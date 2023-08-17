import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const InstagramFeeds = () => {
  const images = [
    "/images/post/post_5.png",
    "/images/post/post_6.png",
    "/images/post/post_7.png",
    "/images/post/post_8.png",
    "/images/post/post_9.png",
    "/images/post/post_10.png",
  ];
  return (
    <Box>
      <Typography variant="h5" color={"white"} mb={2} fontWeight={"bold"}>
        Instagram Feeds
      </Typography>
      <Grid container spacing={3}>
        {images.map((img, index) => (
          <Grid key={index} item xs={4} sm={4} md={4}>
            <img src={img} alt="instagram photo" width={"100%"} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InstagramFeeds;
