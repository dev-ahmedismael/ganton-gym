import AOS from "@/templates/AOS";
import PrimaryButton from "@/templates/PrimaryButton";
import SOS from "@/templates/SOS";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const HomeSecFive = () => {
  return (
    <section>
      <Container>
        <Box py={5}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12} md={6}>
              <SOS>
                <img
                  src="/images/gallery/about.png"
                  alt="About Me"
                  width={"100%"}
                />
              </SOS>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <AOS>
                <Typography variant="h2" fontWeight={"bold"} mb={3}>
                  ABOUT ME
                </Typography>
                <Typography mb={3}>
                  You’ll look at graphs and charts in Task One, how to approach
                  the task and the language needed for a successful answer.
                  You’ll examine Task Two questions and learn how to plan, write
                  and check academic essays. Task One, how to approach the task
                  and the language needed for a successful answer. You’ll
                  examine Task Two questions and learn how to plan, write and
                  check academic essays.
                </Typography>
                <Box width={"fit-content"}>
                  <Link href={"/courses"}>
                    <PrimaryButton>My Courses</PrimaryButton>
                  </Link>
                </Box>
              </AOS>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default HomeSecFive;
