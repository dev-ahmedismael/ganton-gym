import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "@/styles/buttons.module.css";

const PrimaryButton = ({ children }) => {
  return (
    <Box
      border={"3px solid white"}
      px={4}
      py={2}
      sx={{ cursor: "pointer" }}
      className={styles.primaryBtn}
    >
      <Typography
        variant="h6"
        fontWeight={"bold"}
        textAlign={"center"}
        position={"relative"}
        zIndex={2}
      >
        {children.toUpperCase()}
      </Typography>
    </Box>
  );
};

export default PrimaryButton;
