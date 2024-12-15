import React from "react";
import Transition from "../../components/transition/Transition";

import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";

import MagneticButton from "../../components/magneticbutton/MagneticButton";

import "./blog.css";

const Blog = () => {
  return (
    <div className="blog page">
      <div className="container">
        <div className="blog-hero">
          <h1>
            Journal <span>on Kiling Time</span>
          </h1>
        </div>

        <section className="blogs">
          <div className="blog-row">
            <div className="blog-col">
              <div className="blog-item">
                <div className="blog-divider">
                  <div className="b-div-1"></div>
                  <div className="b-div-2"></div>
                </div>

                <div className="blog-title-wrapper">
                  <div className="blog-title">
                    <h3>
                      <Link to="/sample-blog">
                        Shadow & Light: Exploring Visual Depth in Ilustration
                      </Link>
                    </h3>
                    <p>
                      <span>Insights</span>
                    </p>
                  </div>

                  <div className="blog-arrow">
                    <ArrowRight size={32} weight="light" color="#fff" />
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-col">
              <div className="blog-item">
                <div className="blog-divider">
                  <div className="b-div-1"></div>
                  <div className="b-div-2"></div>
                </div>

                <div className="blog-title-wrapper">
                  <div className="blog-title">
                    <h3>
                      <Link to="/sample-blog">
                        Minimalist Methods: The Art of Less is More
                      </Link>
                    </h3>
                    <p>
                      <span>Creative Process</span>
                    </p>
                  </div>

                  <div className="blog-arrow">
                    <ArrowRight size={32} weight="light" color="#fff" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-row">
            <div className="blog-col">
              <div className="blog-item">
                <div className="blog-divider">
                  <div className="b-div-1"></div>
                  <div className="b-div-2"></div>
                </div>

                <div className="blog-title-wrapper">
                  <div className="blog-title">
                    <h3>
                      <Link to="/sample-blog">
                        Color Theory, Crafted: A Illustration Spectrum
                      </Link>
                    </h3>
                    <p>
                      <span>Techniques</span>
                    </p>
                  </div>

                  <div className="blog-arrow">
                    <ArrowRight size={32} weight="light" color="#fff" />
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-col">
              <div className="blog-item">
                <div className="blog-divider">
                  <div className="b-div-1"></div>
                  <div className="b-div-2"></div>
                </div>

                <div className="blog-title-wrapper">
                  <div className="blog-title">
                    <h3>
                      <Link to="/sample-blog">
                        Digital Narratives: Telling Stories Through Illustration
                      </Link>
                    </h3>
                    <p>
                      <span>Storytelling</span>
                    </p>
                  </div>

                  <div className="blog-arrow">
                    <ArrowRight size={32} weight="light" color="#fff" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-row">
            <div className="blog-col">
              <div className="blog-item">
                <div className="blog-divider">
                  <div className="b-div-1"></div>
                  <div className="b-div-2"></div>
                </div>

                <div className="blog-title-wrapper">
                  <div className="blog-title">
                    <h3>
                      <Link to="/sample-blog">
                        The Future
                      </Link>
                    </h3>
                    <p>
                      <span>Innovation</span>
                    </p>
                  </div>

                  <div className="blog-arrow">
                    <ArrowRight size={32} weight="light" color="#fff" />
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-col">
              <div className="blog-item">
                <div className="blog-divider">
                  <div className="b-div-1"></div>
                  <div className="b-div-2"></div>
                </div>

                <div className="blog-title-wrapper">
                  <div className="blog-title">
                    <h3>
                      <Link to="/sample-blog">
                        2024 Trends: Ilustration
                      </Link>
                    </h3>
                    <p>
                      <span>Trends</span>
                    </p>
                  </div>

                  <div className="blog-arrow">
                    <ArrowRight size={32} weight="light" color="#fff" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-row">
            <div className="blog-col">
              <div className="blog-item">
                <div className="blog-divider">
                  <div className="b-div-1"></div>
                  <div className="b-div-2"></div>
                </div>

                <div className="blog-title-wrapper">
                  <div className="blog-title">
                    <h3>
                      <Link to="/sample-blog">
                        Shadow & Light: Exploring Visual Depth in Illustration
                      </Link>
                    </h3>
                    <p>
                      <span>Insights</span>
                    </p>
                  </div>

                  <div className="blog-arrow">
                    <ArrowRight size={32} weight="light" color="#fff" />
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-col"></div>
          </div>
        </section>

        <section className="about-contact">
          <div className="about-contact-copy">
          <h2>Powered by Your Creativity</h2>
            <p>
              <span>
              Hope you&apos;re ready to jump into the mind of an artist who&apos;s only slightly unbalanced, but in the best way possible.
              <br/>
              harzi@hardiharzi.com
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

export default Transition(Blog);
