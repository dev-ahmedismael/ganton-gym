import AOS from "@/templates/AOS";
import SOS from "@/templates/SOS";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const HomeSecSix = () => {
  const blog = [
    {
      id: 1,
      img: "/images/gallery/blog1.png",
      title: "Gym & Fitness",
      description: "YOUR ANTIBIOTIC ONE DAY TO 10 DAY OPTIONS",
    },
    {
      id: 2,
      img: "/images/gallery/blog2.png",
      title: "Gym & Fitness",
      description: "YOUR ANTIBIOTIC ONE DAY TO 10 DAY OPTIONS",
    },
  ];
  return (
    <section>
      <Container>
        <Box py={5}>
          <SOS>
            <Typography
              variant="h1"
              textAlign={"center"}
              className="stroked"
              fontWeight={"bold"}
              mb={5}
            >
              FROM BLOG
            </Typography>
          </SOS>
          <Grid container spacing={5}>
            {blog.map((e) => (
              <Grid item xs={12} sm={12} md={6} key={e.id}>
                <AOS>
                  <img src={e.img} alt={e.title} width={"100%"} />
                  <Typography
                    color={"red"}
                    fontWeight={"bold"}
                    variant="h6"
                    my={2}
                  >
                    {e.title}
                  </Typography>
                  <Typography fontWeight={"bold"} variant="h5">
                    {e.description}
                  </Typography>
                </AOS>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default HomeSecSix;
