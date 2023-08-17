import { Box, Typography } from "@mui/material";
import React from "react";

const Paragraph = () => {
  return (
    <Box>
      <Typography variant="h5" color={"white"} mb={2} fontWeight={"bold"}>
        Paragraph
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
        itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt
        placeat nam vero culpa sapiente consectetur similique, inventore eos
        fugit cupiditate numquam!
      </Typography>
    </Box>
  );
};

export default Paragraph;
