import React from "react";
import Transition from "../../components/transition/Transition";

import "./contact.css";

import MagneticButton from "../../components/magneticbutton/MagneticButton";

const Contact = () => {
  return (
    <div className="contact page">
      <div className="container">
        <section className="contact-hero">
          <div className="contact-row">
            <div className="contact-col"></div>
            <div className="contact-col">
              <h1>
                Feel free to write me a message <span>or let's be social!</span>
              </h1>
            </div>
          </div>
        </section>

        <section className="section contact-form">
          <div className="contact-row">
            <div className="contact-col">
              <p>
                <span>Contact</span>
              </p>
            </div>
            <div className="contact-col">
              <form action="">
                <div className="input">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="input">
                  <textarea type="text" placeholder="Message" rows={6} />
                </div>
                <div className="input">
                  <input type="text" placeholder="Email" />
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="contact-subscribe">
          <div className="contact-row">
            <div className="contact-col">
              <p>
                <span>Newsletter</span>
              </p>
            </div>
            <div className="contact-col">
              <h3>
                Subscribe to my newsletter to get insights & advice on kiling time
              </h3>
              <p>
              So, if you&apos;re someone like me who wants to &quot;kill it&quot; in life, take my advice: don&apos;t kill yourself; kill your negative thoughts instead. Use that energy to kill something creative, like a project or a plant you forgot to water—trust me, it&apos;s much more satisfying.
              </p>

              <div className="input">
                <input type="text" placeholder="Email" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-socials">
          <div className="contact-row">
            <div className="contact-col">
              <p>
                <span>Socials</span>
              </p>
            </div>
            <div className="contact-col">
              <div className="contact-social-link">
                <p>
                  <a href="https://dcardgm.com">Instagram</a>
                </p>
              </div>
              <div className="contact-social-link">
                <p>
                  <a href="https://dcardgm.com">Twitter</a>
                </p>
              </div>
              <div className="contact-social-link">
                <p>
                  <a href="https://dcardgm.com">LinkedIn</a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <MagneticButton />
      </div>
    </div>
  );
};

export default Transition(Contact);
