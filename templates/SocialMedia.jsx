"use client";
import { Box } from "@mui/material";
import React from "react";

const SocialMedia = ({ children }) => {
  return (
    <Box
      bgcolor={"darkred"}
      p={1}
      borderRadius={"100%"}
      sx={{ "&:hover": { bgcolor: "red" }, cursor: "pointer" }}
    >
      {children}
    </Box>
  );
};

export default SocialMedia;
