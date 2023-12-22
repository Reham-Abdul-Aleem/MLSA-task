/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio.jpg";

const imageAltText = "An image of a desk with a laptop, notebook and coffee mug.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Mini Shopping system using oop in cpp",
    description:
      "Developed while studying Object Oriented Programming in C++ course. It is a mini shopping system that allows the user to add items to the cart, remove items from the cart, and display the total price of the items in the cart.",
    url: "https://drive.google.com/file/d/1rU_hL0c6D_W3-IPdQRV_y6zRaJX0hEYY/view?usp=sharing",
  },
  {
    title: "Contact Book in cpp",
    description:
      "Developed while studying Data Structures and Algorithms in C++ course. It is a contact book that allows the user to add contacts, remove contacts, search for contacts, and display all contacts.",
    url: "https://drive.google.com/file/d/1rU_hL0c6D_W3-IPdQRV_y6zRaJX0hEYY/view?usp=share_link",
  },
  {
    title: "Big Data and its scope in Data Analytics",
    description:
      "Written while studying Academic Reading and Writing course. It is a technical report that discusses the concept of big data and its scope in data analytics.",
    url: "https://drive.google.com/file/d/1GcUOOJhCSp3AFi4pY5z1rtVWUTalt7zW/view?usp=share_link",
  },
  {
    title: "Pigeonhole sort Algorithm",
    description: "A learning from Discrete Structures.",
    url: "https://docs.google.com/document/d/1CvRi1dE-eU2eDZQ1I293RcOnpQ0gSkxH/edit?usp=sharing&ouid=103697941375953546622&rtpof=true&sd=true",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
