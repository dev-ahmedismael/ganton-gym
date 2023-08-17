import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const pages = [
    { id: 1, title: "HOME", url: "/" },
    { id: 2, title: "ABOUT", url: "/about" },
    { id: 3, title: "COURSES", url: "/courses" },
    { id: 4, title: "PRICING", url: "/pricing" },
    { id: 5, title: "GALLERY", url: "/gallery" },
    { id: 6, title: "BLOG", url: "/blog" },
    { id: 7, title: "CONTACT", url: "/contact" },
  ];
  return (
    <nav>
      <Container>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Typography variant="h6" fontWeight={"bold"}>
              GANTON GYM
            </Typography>
          </Box>
          <Box display={{ xs: "none", sm: "none", md: "none", lg: "flex" }}>
            {pages.map((page) => (
              <Box key={page.id} ml={4}>
                <Link href={page.url}>
                  <Typography
                    variant="h6"
                    fontWeight={"normal"}
                    sx={{ "&:hover": { color: "red" } }}
                  >
                    {page.title}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Box>
          <Box display={{ xs: "block", sm: "block", md: "block", lg: "none" }}>
            <NavMenu />
          </Box>
        </Box>
      </Container>
    </nav>
  );
};

export default Navbar;
