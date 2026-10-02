import React from "react";
import "./purpose.css";

const Purpose = () => (
  <div className="purpose">
    <section className="purpose-section purpose-section-media">
      <div className="purpose-image-wrap">
        <img src="images/character-life.webp" className="img-fluid visual-asset" alt="A family life journey representing character and relationships" width="1400" height="700" loading="lazy" decoding="async" />
      </div>
      <div className="purpose-copy">
        <p>
          <span className="bolded">
            Each of us is born into this world without any worldly possession.
            Yet, there are two things we have at birth that make us unique –{" "}
            <span className="underlined">
              our character and our relationships
            </span>
          </span>
          . Our character is defined by our spirit that entered our body at
          birth to give us life. Our first relationships on earth are our
          parents that gave us our physical bodies.
        </p>
      </div>
    </section>
    <section className="purpose-section purpose-section-reverse">
      <div className="purpose-copy">
        <p>
          <span className="bolded">
            When we die, after a relatively short sojourn on earth, we also
            leave this earth without any worldly possessions. There are two
            things that we take with us –{" "}
            <span className="underlined">
              our character and our relationships
            </span>
          </span>
          . At our death, as our spirit leaves our body, those enduring
          relationships have lasting bonds and value imprint in our
          character, as well as significance to those whose lives we touched.
        </p>
      </div>
      <div className="purpose-image-wrap">
        <img src="images/character-values.webp" className="img-fluid visual-asset" alt="Reflection and daily choices shaping character" width="1400" height="700" loading="lazy" decoding="async" />
      </div>
    </section>
    <p className="purpose-reflection">
      <span className="bolded">Hopefully</span>, during the years between birth
      and death,{" "}
      <span className="bolded">
        our character will have grown by living time-tested moral principles
        and values
      </span>{" "}
      that have molded our character as internalized by our spirit.{" "}
      <span className="bolded">
        Our relationships will have increased and multiplied as we serve others
      </span>{" "}
      within our ever-expanding sphere of influence.
    </p>
  </div>
);

Purpose.propTypes = {};

Purpose.defaultProps = {};

export default Purpose;
