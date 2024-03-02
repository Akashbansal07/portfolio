// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Akash Bansal",
  tagline: "I build things for web",
  img: profile,
  about: `I am currently pursuing my Master's degree in Computer Science from Delhi Technological University, and I hold a Bachelor's degree in Computer Science from Maharishi Dayanand University. I have completed a web developer internship at CYBEPRO and am actively seeking opportunities as a software developer.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/akash-bansal-2243b0211/",
  github: "https://github.com/Akashbansal07",
  instagram: "https://www.instagram.com/____iak______/"
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Web Developer Intern",
    Company: `CybePro`,
    Location: "Gurugram",
    Type: "Internship",
    Duration: "Dec 2022- April 2023",
  },
  {
    Position: "Teaching Assistant",
    Company: `Delhi Technological University`,
    Location: "Delhi",
    Type: "Teacher",
    Duration: "August 2022 - Dec 2023",
  },
  
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Master's in Computer Science",
    Company: "Delhi Technological University",
    Location: "Delhi",
    Type: "Full Time",
    Duration: "August 2022 - Present",
  },
  {
    Position: "Bachelor in Computer Science",
    Company: `Maharishi Dayanand University`,
    Location: "Rohtak",
    Type: "Full Time",
    Duration: "August 2018 - May 2022",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,


  tailwind: tailwind,

  vscode: vscode,
  
  git: git,
  github: github,
  
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Google Drive",
    image: projectImage1,
    description: ` Efficient File Management: Google Drive enables easy file uploads, downloads, and deletion for streamlined
    storage control.
    ◦ Optimized User Experience: Experience seamless navigation, storage tracking, and customization options for
    enhanced usability.
    ◦ Secure & Customizable: Benefit from Google authentication, private file settings, and theme options for
    personalized security. Built with ReactJs, TailwindCSS, Redux Toolkit, and Firebase`,
    techstack: "HTML/CSS, JavaScript,ReactJs,Fire",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Twitter Sentiment analysis",
    image: projectImage2,
    description: `Loaded Twitter Sentiment Analysis dataset with 1.6 million samples, ensuring equal representation of negative and positive sentiments.
    ◦ Conducted data preprocessing using NLTK library, removing stop words, usernames, links, etc.
    ◦ Developed and evaluated a Logistic Regression classification model, achieving a 79% accuracy.
    `,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://github.com/Akashbansal07/twitter-sentiment-Analysis",
    githubLink: "https://github.com/Akashbansal07/twitter-sentiment-Analysis",
  },
  {
    title: "Face Mask Recognition",
    image: projectImage3,
    description: `Implemented a Face Mask Recognition System utilizing a Python-based Convolutional Neural Network (CNN) with the VGG16 architecture.
    ◦ Developed a real-time mask detection solution capable of efficiently identifying masks in live video streams.
    ◦ Utilized a dataset containing approximately 5000 images with and without masks for training. Achieved an
    accuracy of 88.5% in the first epoch and 91.7% in the second epoch.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://github.com/Akashbansal07/face-mask-recognition",
    githubLink: "https://github.com/Akashbansal07/face-mask-recognition",
  },
  {
    title: "Customer segment Analysis",
    image: projectImage4,
    description: ` Executed a Customer Segmentation Analysis project utilizing dimensionality reduction and agglomerative clustering methods.
    ◦ Categorized 2200 customers into four segments based on family structures, income, and spending behaviors.
    ◦ Profiling customers enabled businesses to craft more precise and effective marketing strategies, enhancing overall
    marketing planning and success.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://github.com/Akashbansal07/Customer-segmentation-clustering",
    githubLink: "https://github.com/Akashbansal07/Customer-segmentation-clustering",
  },
  {
    title: "Flappy Bird",
    image: projectImage5,
    description: `Welcome to the Flappy Bird Clone project in Python! This repository hosts a faithful recreation of the classic Flappy Bird game using Python programming. The game captures the essence of the original while offering a customizable and extensible codebase that can serve as a foundation for further game development learning.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://github.com/Akashbansal07/flappy-bird-game",
    githubLink: "https://github.com/Akashbansal07/flappy-bird-game",
  },
  {
    title: "Myntra",
    image: projectImage6,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://github.com/Akashbansal07/Myntra-clone",
    githubLink: "https://github.com/Akashbansal07/Myntra-clone",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "akashbansalhry@gmail.com",
  phone: "+91 9996418123",
};
