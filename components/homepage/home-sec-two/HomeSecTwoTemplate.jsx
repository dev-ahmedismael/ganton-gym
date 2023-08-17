import { Box, Typography } from "@mui/material";
import React from "react";

const HomeSecTwoTemplate = ({ img, title, description }) => {
  return (
    <Box>
      <img src={img} alt={title} width={"100%"} />
      <Typography variant="h5" fontWeight={"bold"} textAlign={"center"} my={2}>
        {title}
      </Typography>
      <Typography fontWeight={"bold"} textAlign={"center"}>
        {description}
      </Typography>
    </Box>
  );
};

export default HomeSecTwoTemplate;
