import React from "react";
import Transition from "../../components/transition/Transition";

import ProjectImg1 from "../../assets/images/projects/project-1.jpg";
import { MetaLogo, XLogo } from "@phosphor-icons/react";

import MagneticButton from "../../components/magneticbutton/MagneticButton";

import "./sample-blog.css";

function SampleBlog() {
  return (
    <div className="sample-blog page">
      <div className="container">
        <div className="s-blog-hero">
          <h2>Essence of Childhood</h2>
        </div>

        <div className="blog-content">
          <div className="s-blog-col scroll">
            <p>
              <span>Exhibitions • SEPTEMBER 9, 2023</span>
            </p>

            <br />
            <h4>
            The client approached me with the idea of creating a poster that would capture the essence of childhood innocence, curiosity, and unity in nature. They wanted an image that felt warm and inviting—a scene that could resonate with people of all ages, evoking memories of simple joys and peaceful moments. The core theme they wanted me to convey was &quot;togetherness&quot; through the lens of children interacting with nature.
            </h4>
            <br />
            <br />
            <p>
            The concept we settled on was a group of children standing amidst a field of sunflowers, symbolizing growth, positivity, and light. Each child would have a unique expression, reflecting different facets of curiosity, happiness, and wonder. The client wanted a whimsical feel but also a sense of diversity and inclusiveness in the characters. Sunflowers are a recurring motif here, as they naturally symbolize warmth, loyalty, and joy.
            </p>
            <br />
            <br />
            <h3>
            The illustration process began with rough sketches to establish the layout and composition.
            </h3>
            <p>
            I experimented with the arrangement of the children and sunflowers to create a sense of depth, allowing the viewer to feel as though they were in the midst of the field with the children. I aimed to keep the flow of the piece dynamic yet balanced, so the eye would move naturally across the entire scene.
            </p>
            <br />
            <br />
            <p>
            Once the composition was finalized, I moved to the coloring stage. I wanted a color palette that would feel both nostalgic and lively, so I chose soft, warm tones for the sunflowers, paired with earthy and pastel shades for the children&apos;s outfits. This helped create harmony in the image while making sure the children remained the focal point.
            </p>
            <br />
            <br />
            <p>
            At its heart, this poster is about celebrating the beauty of diversity and togetherness in the natural world. The sunflowers symbolize growth and light, and I wanted each child to look as if they were part of this natural beauty—a piece of a larger, harmonious whole.
            </p>
            <br />
            <br />
            <p>
            By placing a book in one child’s hands, I also wanted to hint at the theme of learning and exploration. It suggests that nature itself is a story waiting to be read, and that the curiosity of children drives them to discover the world around them.
            </p>
            <br />
            <br />
            <p>
            Overall, I hope this piece inspires viewers to appreciate the simplicity and beauty of these small, joyful moments. It’s a reminder that, much like sunflowers in a field, we all stand together, growing towards the light.
            </p>
            <br />
            <br />
          </div>
          <div className="s-blog-col sticky">
            <p id="blog-share">
              <span>Share</span>{" "}
              <div className="share-icon">
                <MetaLogo size={18} weight="light" color="#fff" />
              </div>
              <div className="share-icon">
                <XLogo size={18} weight="light" color="#fff" />
              </div>
            </p>

            <div className="blog-content-img">
              <img src={ProjectImg1} alt="" />
            </div>
          </div>
        </div>

        <MagneticButton />
      </div>
    </div>
  );
}

export default Transition(SampleBlog);
