import PrimaryButton from "@/templates/PrimaryButton";
import SecondaryButton from "@/templates/SecondaryButton";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const HomeSecOneTemplate = ({ title, description, img, button }) => {
  return (
    <Box position={"relative"}>
      <Box className="img-wrap">
        <img src={img} alt={title} width={"100%"} height={500} />
      </Box>

      <Box
        position={"absolute"}
        top={0}
        left={0}
        width={"100%"}
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="h3" fontWeight={"bold"} textAlign={"center"}>
          {title.toUpperCase()}
        </Typography>
        <Box width={"70%"} my={3}>
          <Typography fontWeight={"bold"} textAlign={"center"}>
            {description}
          </Typography>
        </Box>
        <Box maxWidth={"fit-content"}>
          <Link href={"/courses"}>
            {button === "primary" ? (
              <PrimaryButton>View Courses</PrimaryButton>
            ) : (
              <SecondaryButton>View Courses</SecondaryButton>
            )}
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeSecOneTemplate;
