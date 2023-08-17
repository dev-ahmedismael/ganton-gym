import PrimaryButton from "@/templates/PrimaryButton";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const HomeSecFourTemplate = ({ duration, price, benefits }) => {
  return (
    <Box py={5} border={"1px solid lightgray"}>
      <Container>
        <Box
          bgcolor={"red"}
          borderRadius={"100%"}
          width={"fit-content"}
          p={2}
          mb={3}
        >
          <img
            src="/images/icon/price.png"
            alt="Dumb-bells Icon"
            width={50}
            height={50}
          />
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4">{duration} MONTHS</Typography>

            <Box display={"flex"}>
              <Typography variant="h5" color={"red"} mr={1}>
                ${price}/M
              </Typography>
              <Typography pt={1}>(SINGLE CLASS)</Typography>
            </Box>
          </Grid>

          {benefits.map((benefit, index) => (
            <Grid key={index} item xs={12}>
              <Box display={"flex"}>
                <Box mr={2}>
                  <img src="/images/icon/check.png" alt="Check Icon" />
                </Box>
                <Typography>{benefit}</Typography>
              </Box>
            </Grid>
          ))}
          <Grid item xs={12}>
            <PrimaryButton>Join now</PrimaryButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeSecFourTemplate;
