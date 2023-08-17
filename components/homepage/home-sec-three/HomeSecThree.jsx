"use client";
import AOS from "@/templates/AOS";
import { Box, Container, Grid } from "@mui/material";
import React from "react";

const HomeSecThree = () => {
  const images = [
    { id: 1, img: "/images/gallery/gallery1.png", width: 4 },
    { id: 2, img: "/images/gallery/gallery2.png", width: 4 },
    { id: 3, img: "/images/gallery/gallery3.png", width: 4 },
    { id: 4, img: "/images/gallery/gallery4.png", width: 3 },
    { id: 5, img: "/images/gallery/gallery5.png", width: 3 },
    { id: 6, img: "/images/gallery/gallery6.png", width: 6 },
  ];

  return (
    <section>
      <Container>
        <Box py={5}>
          <Grid container spacing={3}>
            {images.map((img) => (
              <Grid key={img.id} item xs={12} sm={12} md={img.width}>
                <AOS>
                  <Box>
                    <img
                      src={img.img}
                      alt="Muscle Gaining"
                      width={"100%"}
                      height={500}
                    />
                  </Box>
                </AOS>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default HomeSecThree;
