import React from "react";

import "./testimonials.css";
import Carousel from "react-bootstrap/Carousel";
import Person from "./person/person";

const Testimonials = () => (
  <div className="testimonials text-center">
    <Carousel variant="dark">
      <Carousel.Item className="">
        <Person
          img="images/testimonials/BrighamTomco.jpeg"
          name="Brigham Tomco"
          position="Emmersion CEO and Co-Founder"
          testimony=<div>
            <span>"</span>
            <span className="bolded">
              His executive intellect is razor sharp
            </span>
            <span>
              ... uniquely positioned to deliver meaningful services to a wide
              client base.”
            </span>
          </div>
        />
      </Carousel.Item>
      <Carousel.Item className="">
        <Person
          img="images/testimonials/MarkOlson.jpeg"
          name="Mark Olson"
          position="Executive VP & CFO, Fortis Private Bank"
          testimony=<div>
            <span>"He is highly strategic in his thinking… </span>
            <span className="bolded">excellent problem-solving skills</span>
            <span>
              ... can quickly evaluate a situation and arrive at the best
              solution.”
            </span>
          </div>
        />
      </Carousel.Item>
      <Carousel.Item className="">
        <Person
          img="images/testimonials/KevinYu.webp"
          name="Kevin Yu"
          position="Founder and CEO, Yunistone Investment Group"
          testimony=<div>
            <span>"Tom is a </span>
            <span className="bolded">great speaker, motivator and mentor</span>
            <span>
              ... His leadership experience, communication skills, knowledge,
              integrity and passion influenced our young Ascend professionals in
              a very positive way…I am also
            </span>
            <span className="bolded">
              {" "}
              impressed with his coaching skills, business instinct, strategic
              thinking as well as operational and risk management expertise
            </span>
            <span>.”</span>
          </div>
        />
      </Carousel.Item>
      <Carousel.Item className="">
        <Person
          img="images/testimonials/AngelinaBanks.jpeg"
          name="Angelina Banks"
          position="VP, Regulatory Compliance at Berkley Environmental"
          testimony=<div>
            <span>"</span>
            <span className="bolded">His guidance and motivation</span>
            <span>…with extensive experience, </span>
            <span className="bolded">wisdom, compassion, understanding</span>
            <span>, and his motivational, easy-to-talk-to manner </span>
            <span className="bolded">helped me to the next level</span>
            <span>.”</span>
          </div>
        />
      </Carousel.Item>
      <Carousel.Item className="">
        <Person
          img="images/testimonials/DavidDelSol.jpeg"
          name="David Del Sol"
          position="Software Engineer, Gap Inc"
          testimony=<div>
            <div>
              Tom Tam is an exceptional servant leader.
              <div className="bolded">
                His mentorship, commitment, and principle-based guidance for
                self-improvement
              </div>{" "}
              have had a profound impact on my personal growth and professional
              success.
            </div>
          </div>
        />
      </Carousel.Item>
    </Carousel>
  </div>
);

Testimonials.propTypes = {};

Testimonials.defaultProps = {};

export default Testimonials;
