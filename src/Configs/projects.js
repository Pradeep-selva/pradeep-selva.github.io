import { Project } from "../Shared";

export const projects = [
  {
    title: "Connecsoc",
    repoLink: "https://github.com/Pradeep-selva/connecsoc",
    thumbnail: Project.connecsoc,
    description:
      "A social media website powered by react, redux, firebase and typescript. Join the site, make an account and post things for the rest of the users to see.\n\n"
  },
  {
    title: "Yelp Camp",
    repoLink: "https://github.com/Pradeep-selva/YelpCamp",
    thumbnail: Project.yelp,
    description:
      "This is a website that allows you to browse through campgrounds registered by users.You can create, read, update and delete (CRUD) from the application. This application follows REST-ful routing.",
    id: "yelp"
  },

  {
    title: "Arcadia Discord Bot",
    repoLink: "https://github.com/Pradeep-selva/Arcadia-Bot",
    thumbnail: Project.arcadia,
    description:
      "A server specific general purpose discord bot built with discord.py that has a userbase of over 1k people.\n\n\n"
  },
  {
    title: "Readers Inventory",
    repoLink: "https://github.com/Pradeep-selva/readers-inventory",
    thumbnail: Project.readersInv,
    description:
      "This a website where you can add details of your favorite books, and manage them. Stay organised with your book lists and always find something new to read as others add books"
  },
  {
    title: "Face and Eye Detector",
    repoLink: "https://github.com/Pradeep-selva/Face-and-eye-detector",
    thumbnail: Project.facedetect,
    description:
      "A program that can detect eyes and face from input provided by webcam in real time built using the OpenCV library of Python3.\n\n",
    whiteText: true
  },
  {
    title: "Tensorflow Pokemon Predictor",
    repoLink: "https://github.com/Pradeep-selva/TensorFlow-Pokemon-Predictor",
    thumbnail: Project.pokemon,
    description:
      "This is a machine learning program built using Tensorflow to predict whether a given pokemon is legendary or not.\n\n\n"
  }
];
