'use client'
import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import ProjectCard from "./ProjectCard";

// images
import Crwn1 from "../public/img/projects/crwn-clothing/p1.jpg"
import Crwn2 from "../public/img/projects/crwn-clothing/p2.jpg"
import Crwn3 from "../public/img/projects/crwn-clothing/p3.jpg"


import Send1 from "../public/img/projects/sendio/p1.jpg"
import Send2 from "../public/img/projects/sendio/p2.jpg"


import Poster1 from "../public/img/projects/poster/bg1.jpg"
import Poster2 from "../public/img/projects/poster/bg2.jpg"


import Mtg1 from "../public/img/projects/mealstogo/p1.jpg"
import Mtg2 from "../public/img/projects/mealstogo/p2.jpg"


import Media1 from "../public/img/projects/media/1.png"
import Media2 from "../public/img/projects/media/2.png"
import Media3 from "../public/img/projects/media/3.png"
import Media4 from "../public/img/projects/media/4.png"
import Media5 from "../public/img/projects/media/5.png"

import Proshop1 from "../public/img/projects/proshop/1.jpg"

import Blit1 from "../public/img/projects/blit/1.jpg"
import Blit2 from "../public/img/projects/blit/2.jpg"
import Blit3 from "../public/img/projects/blit/3.jpg"
import Blit4 from "../public/img/projects/blit/4.jpg"
import Blit5 from "../public/img/projects/blit/5.jpg"
import Blit6 from "../public/img/projects/blit/6.jpg"
import ProjectCardModal from "./ProjectCardModal";


const projects = [
  {
    title: "Crwn clothing - 2019",
    body: "A huge ecommerce application i made with React, Redux and Firebase. It contains a lot of most required features in a progressive web application.",
    img: Crwn1,
    images: [Crwn1, Crwn2, Crwn3]
  },
  {
    title: "Send Io - 2020",
    body: "Personal project that aims to connect people, it makes easy to find and talk with anyone. The back-end was made in nodejs and mongoDB.",
    img: Send1,
    images: [Send1, Send2]
  },
  {
    title: "Poster - 2020",
    body: "An amazing social media where you can share states, photos, thoughs and chat in real time with your contacts. It's a big application that teaches you important concepts of react, web sockets and databases to perform a workfull insfrastructure.",
    img: Poster1,
    images: [Poster1, Poster2]
  },
  {
    title: "Meals To Go - 2021",
    body: "A big mobile application that i worked on. It allows you to find places all around the world, you only have to create an account and search your city to see all the restaurants around you.",
    img: Mtg1,
    images: [Mtg1, Mtg2]
  },
  {
    title: "Media Ind - 2022",
    body: "An amazing social media that allows you to chat in real time and know people all over the world!",
    img: Media1,
    images: [Media1, Media2, Media3, Media4, Media5]
  },
  {
    title: "Proshop - 2023",
    body: "A minimalist tech e-commerce for selling online products with payments processor integration",
    img: Proshop1,
    images: [Proshop1]
  },
  {
    title: "Blit - 2024",
    body: "An Android chatbot that aims to be a personal AI assistant. It can help people with homework, work, day to day activities and more with the ability to recognize voice audio and read text inputs with a plus of image generation based on text!",
    img: Blit1,
    images: [Blit1, Blit2, Blit3, Blit4, Blit5, Blit6]
  },
]

const Projects = () => {
  const [selected, setSelected] = React.useState<typeof projects[0] | null>(null)
  
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {
          projects.map((p, idx) => (
            <ProjectCard
              key={idx}
              img={p.img.src}
              title={p.title}
              onClick={() => setSelected(p)}
            />
          ))
        }
      </div>
      {selected && <ProjectCardModal title={selected.title} body={selected.body} images={selected?.images} show={selected!!} handleClose={() => setSelected(null)} />}
    </div>
  );
};

export default Projects;
