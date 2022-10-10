import React from "react";
import PropTypes from "prop-types";
import "./tam-principle.css";
import { render } from "@testing-library/react";
import Accordion from "react-bootstrap/Accordion";

const principles = [
  {
    name: "Strategy and Goal Execution",
    principles: {
      t: {
        action: "Target",
        descriptionP1:
          "Without a target (goal) to aim for, it is impossible for a business or an individual to succeed. Creating a vision and setting goals aligned with that vision is an imperative first step toward achieving desired outcomes. This time-tested principle was taught thousands of years ago with this quote in Proverbs, “Where there is no vision, the people perish.”",
        descriptionP2:
          "Effectively articulating a vision is the conceptual creation precedent to any physical execution of that vision. Like an architect drafting a blueprint of a house to be built, the conceptualization of what the house looks like upon completion enables subsequent steps and project management to ensure the house is built to specifications. ",
        img: "images/tam-principles/strategy/target.png",
      },
      a: {
        action: "Align",
        descriptionP1:
          "After the vision and goals are clearly established, it is important for businesses as well as individuals to be properly aligned with those targets. Effective alignment requires knowing where you are currently and what has brought you to the present condition. Understanding the current “as-is” state allows you to have a clear view of strengths and weaknesses that a company or an individual must work with. ",
        descriptionP2:
          "When the “as-is” state is aligned and measured against the “to-be” state of the established vision and goals, the gaps will become apparent where resources must be deployed to close the gaps to achieve the desired outcomes. There is much heavy lifting to be done in this phase to appreciate resource requirements, as well as the “who’s to do what by when” next steps.",
        img: "images/tam-principles/strategy/align.png",
      },
      m: {
        action: "Manage",
        descriptionP1:
          "Successful execution of plans and goals require timely management of the progress toward those goals. Management of detailed activities typically encompass people, processes, and technologies deployed toward achieving desired outcomes. Effective leadership competencies include team orientation, active listening, and ability to scale from big picture to leading by example in the trenches. ",
        descriptionP2:
          "Accurate and timely management reporting enable accountability of everyone on the team. This is essential in correcting mistakes made and real-time pivots as needed to ensure activities are constantly aligned and realigned with goals and desired outcomes. A crucial element is establishing performance metrics and key indicators that have causal relationship to the desired outcomes. Too often ineffective metrics are used that have no causal relationship. This can lead to ultimate failure and much wasted time and resources.",
        img: "images/tam-principles/strategy/manage.png",
      },
    },
  },
];

const renderPrinciples = function (item) {
  // formatted principles
  let t = item.principles[0];
  let a = item.principles[1];
  let m = item.principles[2];

  return (
    <div className="  ">
      <div class="card bg-light principle">
        <div class="card-body">
          <h3 class="card-title">{item.name}</h3>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{item.principles.t.action}</Accordion.Header>
              <Accordion.Body>
                <div className="row">
                  <div className="col">
                    <p>{item.principles.t.descriptionP1}</p>
                    <p>{item.principles.t.descriptionP2}</p>
                  </div>
                  <div className="col text-center principle-img">
                    <img
                      className=".img-fluid"
                      src={item.principles.t.img}
                      alt={item.principles.t.action}
                    />
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>{item.principles.a.action}</Accordion.Header>
              <Accordion.Body>
                <div className="row">
                  <div className="col">
                    <p>{item.principles.a.descriptionP1}</p>
                    <p>{item.principles.a.descriptionP2}</p>
                  </div>
                  <div className="col text-center principle-img">
                    <img
                      className=".img-fluid"
                      src={item.principles.a.img}
                      alt={item.principles.a.action}
                    />
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>{item.principles.m.action}</Accordion.Header>
              <Accordion.Body>
                <div className="row">
                  <div className="col">
                    <p>{item.principles.m.descriptionP1}</p>
                    <p>{item.principles.m.descriptionP2}</p>
                  </div>
                  <div className="col text-center principle-img">
                    <img
                      className=".img-fluid"
                      src={item.principles.m.img}
                      alt={item.principles.m.action}
                    />
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

const TamPrinciple = () => (
  <div className="tam-principle row">{principles.map(renderPrinciples)}</div>
);

TamPrinciple.propTypes = {};

TamPrinciple.defaultProps = {};

export default TamPrinciple;
