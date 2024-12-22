import React from "react";
import "./about.css";

import Transition from "../../components/transition/Transition";

import Faq from "react-faq-component";
import Marquee from "react-fast-marquee";
import MagneticButton from "../../components/magneticbutton/MagneticButton";

import PortraitImg from "../../assets/images/home/portrait.jpg";

const About = () => {
  const data = {
    title: "",
    rows: [
      {
        title: "What type of works do you take on?",
        content:
          "Color Mixer #Ill mix you something pretty, or confusing, your choice.<br/><br/>Concept Art #I dream it, I draw it whether it makes sense or not.<br/><br/>Storyboarding #Because telling stories is more fun than living in one.<br/><br/>Digital Drawing #Because physical canvases are for people who know what they’re doing.<br/><br/>Layout #I’ll arrange your visuals in ways that might actually make sense.",
      },
      {
        title: "How do you charge for projects?",
        content:
          "My project pricing is tailored to the specific needs and scope of each project. I typically offer a project-based fee after a thorough discussion about the project's requirements, timelines, and expected deliverables. This approach allows for a clear understanding of the project costs upfront. For larger or more complex projects, I may also work with a phased payment schedule, ensuring transparency and alignment with project milestones.",
      },
      {
        title: "What is your hourly rate?",
        content:
          "While I primarily work with project-based pricing, I understand that some projects may require an hourly or day rate, especially during the initial phases or for ongoing support. My hourly rate is $25, reflecting my expertise and the value I bring to each project. For long-term engagements or larger projects, I am open to discussing a customized rate or retainer model that aligns with the client's needs and project goals.",
      },
    ],
  };

  return (
    <div className="about page">
      <div className="container">
        <section className="about-marquee">
          <Marquee>
            <h1>
            Drawing Before be Killed ★ Drawing Before be Killed ★ Drawing Before be Killed ★ Drawing Before be Killed ★ Drawing Before be Killed ★
            </h1>
          </Marquee>
        </section>

        <section className="about-intro">
          <h2>
          Hi, I&apos;m a self-taught illustrator with a graphic design background—and by “self-taught,” I mean spending countless hours avoiding actual life responsibilities to draw things that may or may not make sense. I&apos;ve always loved playing with colors and plants in my portraits because, let&apos;s face it, plants won&apos;t judge you for your life choices, and colors are the only thing in life you can control (kind of).
          </h2>
        </section>

        <section className="about-intro-copy">
          <div className="about-row">
            <div className="about-col">
              <p>
                <span>and it just me</span>
              </p>
            </div>
            <div className="about-col">
              <h3>
              Drawing for me is like a double-edged sword: it kills time, and I&apos;m totally fine with that because, let&apos;s be real, I&apos;d rather kill time than, well, myself. I know this whole art thing isn&apos;t exactly a financial goldmine (yet), but hey, if working a soul-sucking job would kill me anyway, I might as well enjoy the slow death of freelancing, right?
              </h3>
              <h3 style={{ textIndent: "100px" }}>
              So, if you&apos;re someone like me who wants to &quot;kill it&quot; in life, take my advice: don&apos;t kill yourself; kill your negative thoughts instead. Use that energy to kill something creative, like a project or a plant you forgot to water—trust me, it&apos;s much more satisfying.


              </h3>
            </div>
          </div>
        </section>

        <section className="about-portrait">
          <div className="about-row">
            <div className="about-col">
              <p>
                <span>Contact</span>
              </p>
              <br />
              <br />
              <p>
                <span>Email: </span> <span>bluevils@gmail.com</span>
              </p>
              <p>
                <span>Phone: </span> <span>+6281234567890</span>
              </p>
              <p>
                <span>Address: </span>{" "}
                <span>Kembangkuning, Indonesia</span>
              </p>

              <br />
              <br />
              <br />
            </div>
            <div className="about-col">
              <div className="about-portrait-img">
                <img src={PortraitImg} alt="" />
              </div>

              <div className="faqs">
                <Faq data={data} />
              </div>
            </div>
          </div>
        </section>

        <section className="about-awards">
          <div className="about-row">
            <div className="about-col"></div>
            <div className="about-col award-header">
              <p>
                <span>ACTIVITIES</span>
              </p>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2023</p>
              </div>
              <div className="award-view">
                <p>Social Election Exibittion</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>Exibittion</p>
              </div>
              <div className="award-project">
                <p>Exhibition welcoming the revilation forest</p>
              </div>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2022</p>
              </div>
              <div className="award-view">
                <p>Nationality on Agricultiz Exhibition</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>Exibittion</p>
              </div>
              <div className="award-project">
                <p>build & deploy criticism of the world in works of art</p>
              </div>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2021</p>
              </div>
              <div className="award-view">
                <p>Grad Exhibition</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>Exibittion</p>
              </div>
              <div className="award-project">
                <p>Exhibition of campus educational capabilities</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-contact">
          <div className="about-contact-copy">
            <h2>Powered by Your Creativity</h2>
            <p>
              <span>
              Hope you&apos;re ready to jump into the mind of an artist who&apos;s only slightly unbalanced, but in the best way possible.
              <br/>
              bluevils@gmail.com
              </span>
            </p>

            <br />
            <p>
              <span>+6281234567890</span>
            </p>
            <p>
              <span>Instagram • Twitter</span>
            </p>
          </div>
        </section>

        <MagneticButton />
      </div>
    </div>
  );
};

export default Transition(About);
