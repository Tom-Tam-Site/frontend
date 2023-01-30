import React from "react";
import PropTypes from "prop-types";
import "./purpose.css";

const Purpose = () => (
  <div className="purpose">
    <div className="row p-3">
      <div className="col-lg">
        <img src="images/spiritual/baby.png" className="img-fluid" />
      </div>
      <div className="col-lg">
        <p className="pt-3 paragraph">
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
    </div>
    <div className="row p-3">
      <div className="col-lg">
        <p className="pt-3 paragraph">
          <span className="bolded">
            When we die, after a relatively short sojourn on earth, we also
            leave this earth without any worldly possessions. There are two
            things that we take with us –{" "}
            <span className="underlined">
              our character and our relationships
            </span>
          </span>
          . At our death, as our spirit leaves our body, those enduring
          relationships have lasting bonds and spiritual imprint in our
          character, as well as significance to those whose lives we touched.
        </p>
      </div>
      <div className="col-lg">
        <img src="images/spiritual/family.png" className="img-fluid" />
      </div>
    </div>
    <div className="paragraph">
      <span className="bolded">Hopefully</span>, during the years between birth
      and death,{" "}
      <span className="bolded">
        our character will have grown by living time-tested spiritual principles
        and values
      </span>{" "}
      that have molded our character as internalized by our spirit.{" "}
      <span className="bolded">
        Our relationships will have increased and multiplied as we serve others
      </span>{" "}
      within our ever-expanding sphere of influence.
    </div>
  </div>
);

Purpose.propTypes = {};

Purpose.defaultProps = {};

export default Purpose;
