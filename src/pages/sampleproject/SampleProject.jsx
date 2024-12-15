import React, { useEffect, useRef } from "react";
import "./sample-project.css";

import Transition from "../../components/transition/Transition";
import { Link } from "react-router-dom";
import gsap from "gsap";

import ProjectImg1 from "../../assets/images/projects/project-1.jpg";
import ProjectImg2 from "../../assets/images/projects/project-2.jpg";
import ProjectImg3 from "../../assets/images/projects/project-3.jpg";
import ProjectImg4 from "../../assets/images/projects/project-4.jpg";
import ProjectImg5 from "../../assets/images/projects/project-5.jpg";

const SampleProject = () => {
  const nextProjectPreview = useRef();
  const nextProjectPreviewBg = useRef();

  const handleNextProjectHover = () => {
    nextProjectPreview.current.play();
    nextProjectPreviewBg.current.play();
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const nextProjectContainer = document.querySelector(
      ".next-project-preview"
    );

    gsap.to(".next-project-preview", {
      x: clientX - nextProjectContainer.offsetWidth / 2,
      y: clientY - nextProjectContainer.offsetHeight / 2,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleNextProjectHoverOut = () => {
    nextProjectPreview.current.reverse();
    nextProjectPreviewBg.current.reverse();
  };

  useEffect(() => {
    nextProjectPreview.current = gsap
      .timeline({ paused: true })
      .to(".next-project-preview", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
      });

    nextProjectPreviewBg.current = gsap
      .timeline({ paused: true })
      .to(".nextProjectPreviewBg", {
        opacity: 1,
        duration: 0.3,
      });
  }, []);

  return (
    <div className="project page">
      <section className="project-hero">
        <img src={ProjectImg2} alt="" />
      </section>

      <div className="nextProjectPreviewBg">
        <img src={ProjectImg3} alt="" />
      </div>

      <div className="container">
        <section className="project-title">
          <h1>Quantleaf</h1>
          <p>Illustration</p>
        </section>

        <section className="project-brief">
          <h2>
            CThe client approached me with the idea of creating a poster that would capture the essence of childhood innocence, curiosity, and unity in nature. They wanted an image that felt warm and inviting—a scene that could resonate with people of all ages, evoking memories of simple joys and peaceful moments. The core theme they wanted me to convey was &quots;togetherness&quots; through the lens of children interacting with nature.
          </h2>
        </section>

        <section className="project-description">
          <div className="project-row">
            <div className="project-col">
              <div className="project-sub-col">
                <p>
                  <span>Year</span>
                </p>
                <p>2023</p>
              </div>
              <div className="project-sub-col">
                <p>
                  <span>Concept:</span>
                </p>
                <p>The concept we settled on was a group of children standing amidst a field of sunflowers, symbolizing growth, positivity, and light. Each child would have a unique expression, reflecting different facets of curiosity, happiness, and wonder. The client wanted a whimsical feel but also a sense of diversity and inclusiveness in the characters. Sunflowers are a recurring motif here, as they naturally symbolize warmth, loyalty, and joy.</p>
              </div>
            </div>
            <div className="project-col">
              <p>
                <span>Main Message:</span>
              </p>
              <p>
              At its heart, this poster is about celebrating the beauty of diversity and togetherness in the natural world. The sunflowers symbolize growth and light, and I wanted each child to look as if they were part of this natural beauty—a piece of a larger, harmonious whole.
              <br/>
              <br/>
              By placing a book in one child&apos;s hands, I also wanted to hint at the theme of learning and exploration. It suggests that nature itself is a story waiting to be read, and that the curiosity of children drives them to discover the world around them.
              <br/>
              <br/>
              Overall, I hope this piece inspires viewers to appreciate the simplicity and beauty of these small, joyful moments. It&apos;s a reminder that, much like sunflowers in a field, we all stand together, growing towards the light.
              </p>
            </div>
          </div>
        </section>

        <section className="project-images">
          <div className="project-img-row">
            <div className="project-img">
              <img src={ProjectImg1} alt="" />
            </div>

            <div className="project-img">
              <img src={ProjectImg2} alt="" />
            </div>
          </div>
          <div className="project-img-row">
            <div className="project-img">
              <img src={ProjectImg3} alt="" />
            </div>

            <div className="project-img">
              <img src={ProjectImg4} alt="" />
            </div>
          </div>
          <div className="project-img-row">
            <div className="project-img">
              <img src={ProjectImg5} alt="" />
            </div>

            <div className="project-img"></div>
          </div>
        </section>

        <section className="next-project">
          <div className="next-project-preview">
            <img src={ProjectImg3} alt="" />
          </div>
          <div className="next-project-copy">
            <p>
              <span>Next Project</span>
            </p>
            <h1
              onMouseOver={() => {
                handleNextProjectHover();
                document.addEventListener("mousemove", handleMouseMove);
              }}
              onMouseOut={() => {
                handleNextProjectHoverOut();
                document.removeEventListener("mousemove", handleMouseMove);
              }}
            >
              <Link to="/">Mystrove Leaf</Link>
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Transition(SampleProject);
