import React from "react";
import Navbar from "../navbar/Navbar";
import { Box, Container, Typography } from "@mui/material";
import PrimaryButton from "@/templates/PrimaryButton";

const Header = () => {
  return (
    <header>
      <Navbar />
      <Box
        height={"80%"}
        display={{ xs: "none", sm: "none", md: "flex" }}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Container>
          <Typography variant="h2" fontWeight={"bold"} className="stroked">
            HI THIS IS GANTON
          </Typography>
          <Typography variant="h1" fontWeight={"bold"}>
            THE BEST GYM IN <br /> LOS SANTOS
          </Typography>
          <Box width={"fit-content"}>
            <PrimaryButton>Ganton Courses</PrimaryButton>
          </Box>
        </Container>
      </Box>
      <Box
        height={"80%"}
        display={{ xs: "flex", sm: "flex", md: "none" }}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Container>
          <Typography variant="h5" fontWeight={"bold"} className="stroked">
            HI THIS IS GANTON
          </Typography>
          <Typography variant="h4" fontWeight={"bold"}>
            THE BEST GYM IN <br /> LOS SANTOS
          </Typography>
          <Box width={"fit-content"}>
            <PrimaryButton>Ganton Courses</PrimaryButton>
          </Box>
        </Container>
      </Box>
    </header>
  );
};

export default Header;
