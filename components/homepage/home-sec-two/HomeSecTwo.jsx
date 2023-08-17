import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import HomeSecTwoTemplate from "./HomeSecTwoTemplate";
import AOS from "@/templates/AOS";
import SOS from "@/templates/SOS";

const HomeSecTwo = () => {
  const elements = [
    {
      id: 1,
      title: "BODY BUILDING",
      description:
        "You’ll look at graphs and charts in Task One, how to approach the task",
      img: "/images/gallery/team1.png",
    },
    {
      id: 2,
      title: "MUSCLE GAIN",
      description:
        "You’ll look at graphs and charts in Task One, how to approach the task",
      img: "/images/gallery/team2.png",
    },
    {
      id: 3,
      title: "WEIGHT LOSS",
      description:
        "You’ll look at graphs and charts in Task One, how to approach the task",
      img: "/images/gallery/team3.png",
    },
  ];
  return (
    <section>
      <Container>
        <Box py={5}>
          <SOS>
            <Typography
              variant="h1"
              fontWeight={"bold"}
              className="stroked"
              textAlign={"center"}
              mb={5}
            >
              WHAT I OFFER
            </Typography>
          </SOS>
          <Grid container spacing={5}>
            {elements.map((e) => (
              <Grid key={e.id} item xs={12} sm={12} md={4}>
                <AOS>
                  <HomeSecTwoTemplate
                    title={e.title}
                    description={e.description}
                    img={e.img}
                  />
                </AOS>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default HomeSecTwo;
