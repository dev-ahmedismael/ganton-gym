import { Grid } from "@mui/material";
import React from "react";
import HomeSecOneTemplate from "./HomeSecOneTemplate";
import AOS from "@/templates/AOS";

const HomeSecOne = () => {
  const elements = [
    {
      id: 1,
      title: "Personal Training",
      description:
        "You’ll look at graphs and charts in Task One, how to approach the task and the language needed for a successful answer.",
      img: "/images/gallery/cat1.png",
      button: "primary",
    },
    {
      id: 2,
      title: "Group Training",
      description:
        "You’ll look at graphs and charts in Task One, how to approach the task and the language needed for a successful answer.",
      img: "/images/gallery/cat2.png",
      button: "secondary",
    },
  ];
  return (
    <section>
      <Grid container spacing={5}>
        {elements.map((e) => (
          <Grid key={e.id} item xs={12} sm={12} md={6}>
            <AOS>
              <HomeSecOneTemplate
                title={e.title}
                description={e.description}
                img={e.img}
                button={e.button}
              />
            </AOS>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default HomeSecOne;
