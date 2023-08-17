import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import AOS from "@/templates/AOS";
import SideSearch from "./SideSearch";
import SideCategories from "./SideCategories";
import SideRecentBlog from "./SideRecentBlog";
import TagCloud from "./TagCloud";
import Paragraph from "./Paragraph";
import InstagramFeeds from "./InstagramFeeds";
import SOS from "@/templates/SOS";

const Blog = () => {
  const images = [
    "/images/blog/single_blog_1.png",
    "/images/blog/single_blog_2.png",
    "/images/blog/single_blog_3.png",
    "/images/blog/single_blog_4.png",
    "/images/blog/single_blog_5.png",
  ];
  const sideElements = [
    <SideSearch />,
    <SideCategories />,
    <SideRecentBlog />,
    <TagCloud />,
    <Paragraph />,
    <InstagramFeeds />,
  ];
  return (
    <section>
      <Container>
        <Box py={10}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12} md={8}>
              {images.map((img, index) => (
                <Box key={index} bgcolor={"#111111"} py={3}>
                  <Container>
                    <AOS>
                      <img src={img} alt="Blog image" width={"100%"} />
                      <Typography
                        variant="h5"
                        fontWeight={"bold"}
                        color={"red"}
                        my={2}
                      >
                        Google inks pact for new 35-storey office
                      </Typography>
                      <Typography color={"silver"}>
                        That dominion stars lights dominion divide years for
                        fourth have don't stars is that he earth it first
                        without heaven in place seed it second morning saying.
                      </Typography>
                    </AOS>
                  </Container>
                </Box>
              ))}
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              {sideElements.map((e, index) => (
                <Box key={index} mb={3}>
                  <SOS>{e}</SOS>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default Blog;
