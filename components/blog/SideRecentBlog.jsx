import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const SideRecentBlog = () => {
  const posts = [
    {
      id: 1,
      img: "/images/post/post_1.png",
      title: "From life was you fish...",
      date: "January 12, 2019",
    },
    {
      id: 2,
      img: "/images/post/post_2.png",
      title: "The Amazing Hubble",
      date: "02 Hours ago",
    },
    {
      id: 3,
      img: "/images/post/post_3.png",
      title: "Astronomy Or Astrology",
      date: "03 Hours ago",
    },
    {
      id: 4,
      img: "/images/post/post_4.png",
      title: "Asteroids telescope",
      date: "01 Hours ago",
    },
  ];
  return (
    <Box>
      <Typography variant="h5" color={"white"} mb={3} fontWeight={"bold"}>
        Recent Post
      </Typography>
      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid key={post.id} item xs={12}>
            <Box display={"flex"}>
              <Box mr={2}>
                <img src={post.img} alt={post.title} width={60} height={60} />
              </Box>
              <Box>
                <Typography fontWeight={"bold"}>{post.title}</Typography>
                <Typography fontSize={"small"}>{post.date}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SideRecentBlog;
