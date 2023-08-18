import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import HomeSecFourTemplate from "./HomeSecFourTemplate";
import AOS from "@/templates/AOS";
import SOS from "@/templates/SOS";

const HomeSecFour = () => {
  const elements = [
    {
      id: 1,
      duration: 3,
      price: 90,
      benefits: [
        "Free Riding",
        "Unlimited Equipments",
        "Personal Trainer",
        "Weight Losing Classes",
        "Month To Mouth",
      ],
    },
    {
      id: 2,
      duration: 6,
      price: 60,
      benefits: [
        "Free Riding",
        "Unlimited Equipments",
        "Personal Trainer",
        "Weight Losing Classes",
        "Month To Mouth",
      ],
    },
    {
      id: 3,
      duration: 12,
      price: 30,
      benefits: [
        "Free Riding",
        "Unlimited Equipments",
        "Personal Trainer",
        "Weight Losing Classes",
        "Month To Mouth",
      ],
    },
  ];
  return (
    <section>
      <Container>
        <Box py={5}>
          <SOS>
            <Typography
              variant="h2"
              fontWeight={"bold"}
              className="stroked"
              textAlign={"center"}
              mb={5}
            >
              PRICING
            </Typography>
          </SOS>

          <Grid container spacing={3}>
            {elements.map((e) => (
              <Grid key={e.id} item xs={12} sm={4}>
                <AOS>
                  <HomeSecFourTemplate
                    duration={e.duration}
                    price={e.price}
                    benefits={e.benefits}
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

export default HomeSecFour;
