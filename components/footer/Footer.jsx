"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SocialMedia from "@/templates/SocialMedia";

const Footer = () => {
  const contactDetails = [
    {
      id: 1,
      icon: <MyLocationIcon />,
      title: "Location",
      details: "Los Santos, San Andreas",
    },
    { id: 2, icon: <PhoneIcon />, title: "Phone", details: "+20 128 652-3946" },
    {
      id: 3,
      icon: <MailIcon />,
      title: "Email",
      details: "dev.ahmedismael@outlook.com",
    },
  ];

  const pages = [
    { id: 1, title: "HOME", url: "/" },
    { id: 2, title: "ABOUT", url: "/about" },
    { id: 3, title: "COURSES", url: "/courses" },
    { id: 4, title: "PRICING", url: "/pricing" },
    { id: 5, title: "GALLERY", url: "/gallery" },
    { id: 6, title: "BLOG", url: "/blog" },
    { id: 7, title: "CONTACT", url: "/contact" },
  ];

  const socialMedia = [<TwitterIcon />, <LinkedInIcon />, <GitHubIcon />];

  return (
    <footer>
      <Box py={10} bgcolor={"#111111"}>
        <Container>
          <Grid container spacing={5}>
            {contactDetails.map((e) => (
              <Grid key={e.id} item xs={12} sm={12} md={4}>
                <Box display={"flex"}>
                  <Box mr={2}>
                    <Box bgcolor={"red"} borderRadius={"100%"} p={2}>
                      {e.icon}
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="h5" fontWeight={"bold"}>
                      {e.title}
                    </Typography>
                    <Typography>{e.details}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container>
        <Box py={10} borderBottom={"1px solid #111111"}>
          <Typography
            variant="h3"
            textAlign={"center"}
            fontWeight={"bold"}
            mb={5}
          >
            GANTON GYM
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"center"}
            flexWrap={"wrap"}
            mb={5}
          >
            {pages.map((page) => (
              <Box key={page.id} mr={2}>
                <Link href={page.url}>
                  <Typography textAlign={"center"} fontWeight={"bold"}>
                    {page.title}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            {socialMedia.map((e, index) => (
              <Box key={index} mr={1}>
                <SocialMedia>{e}</SocialMedia>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      <Box py={5}>
        <Typography textAlign={"center"} color={"silver"}>
          Copyright ©2023 All rights reserved
        </Typography>
        <Typography textAlign={"center"} color={"silver"}>
          Developed with <FavoriteIcon fontSize="small" sx={{ color: "red" }} />{" "}
          by
          <Link href={"https://ahmedismael.vercel.app"} target="_blank">
            <Button>Ahmed Ismael</Button>
          </Link>
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
