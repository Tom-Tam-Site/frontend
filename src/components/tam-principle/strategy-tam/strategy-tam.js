import React from "react";
import PropTypes from "prop-types";
import "./strategy-tam.css";
import Accordion from "react-bootstrap/Accordion";

const StrategyTam = () => (
  <div className="strategy-tam">
    <div className="tam-principle row">
      <div id="Strategy and Goal Execution">
        <div class="card bg-light principle">
          <div class="card-body">
            <h3 class="card-title text-center">Strategy and Goal Execution</h3>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h2>T</h2>
                  <h5>arget</h5>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="row container">
                    <div className="col-lg text-center principle-img">
                      <img
                        className="img-fluid"
                        src="images/tam-principles/strategy/target.png"
                        alt="tam-principle"
                      />
                    </div>
                    <div className="pt-4 col-lg">
                      <div className="paragraph">
                        <span className="bolded-inline">
                          Without a target (goal) to aim for, it is impossible
                          for a business or an individual to succeed. Creating a
                          vision and setting goals aligned with that vision is
                          an imperative first step toward achieving desired
                          outcomes.
                        </span>
                        <span>
                          This time-tested principle was taught thousands of
                          years ago with this quote in Proverbs, “Where there is
                          no vision, the people perish.”
                        </span>
                      </div>
                      <div className="paragraph">
                        <span className="bolded-inline">
                          Effectively articulating a vision is the conceptual
                          creation precedent to any physical execution of that
                          vision.
                        </span>
                        <span>
                          Like an architect drafting a blueprint of a house to
                          be built, the conceptualization of what the house
                          looks like upon completion enables subsequent steps
                          and project management to ensure the house is built to
                          specifications.
                        </span>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h2 className="A">A</h2>
                  <h5>lign</h5>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="row container">
                    <div className="text-center principle-img">
                      <img
                        className="img-fluid"
                        src="images/tam-principles/strategy/align.png"
                        alt="tam-principle"
                      />
                    </div>
                    <div className="pt-4 col-lg">
                      <div className="paragraph">
                        <span className="bolded-inline">
                          After the vision and goals are clearly established, it
                          is important for businesses as well as individuals to
                          be properly aligned with those targets.
                        </span>
                        <span>
                          Effective alignment requires knowing where you are
                          currently and what has brought you to the present
                          condition. Understanding the current “as-is” state
                          allows you to have a clear view of strengths and
                          weaknesses that a company or an individual must work
                          with.
                        </span>
                      </div>
                      <div className="paragraph">
                        <span className="bolded-inline">
                          When the “as-is” state is aligned and measured against
                          the “to-be” state of the established vision and goals,
                          the gaps will become apparent where resources must be
                          deployed to close the gaps to achieve the desired
                          outcomes.
                        </span>
                        <span>
                          There is much heavy lifting to be done in this phase
                          to appreciate resource requirements, as well as the “
                          <span className="bolded-inline">who’s</span>
                          to do <span className="bolded">what</span> by{" "}
                          <span className="bolded">when</span>” next steps.
                        </span>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h2 className="M">M</h2>
                  <h5>anage</h5>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="row container">
                    <div className="col-lg text-center principle-img m-2">
                      <img
                        className="img-fluid"
                        src="images/tam-principles/strategy/success.png"
                        alt="tam-principle"
                      />
                    </div>
                    <div className="pt-4 col-lg">
                      <div className="paragraph">
                        <div className="bolded-inline">
                          Successful execution of plans and goals require timely
                          management of the progress toward those goals.
                        </div>
                        <div>
                          Management of detailed activities typically encompass
                          <span className="bolded-inline-surrounded">
                            people, processes, and technologies
                          </span>
                          deployed toward achieving desired outcomes. Effective
                          leadership competencies include team orientation,
                          active listening, and ability to scale from big
                          picture to leading by example in the trenches.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row container">
                    <div className="col-lg text-center principle-img m-2">
                      <img
                        className="img-fluid"
                        src="images/tam-principles/strategy/team.png"
                        alt="tam-principle"
                      />
                    </div>
                    <div className="pt-4 col-lg">
                      <div className="paragraph">
                        <span className="bolded">
                          Accurate and timely management reporting enable
                          accountability of everyone on the team.
                        </span>
                        <span>
                          This is essential in correcting mistakes made and
                          real-time pivots as needed to ensure activities are
                          constantly aligned and realigned with goals and
                          desired outcomes.
                        </span>
                        <span className="bolded-inline-surrounded">
                          A crucial element is establishing performance metrics
                          and key indicators that have causal relationship to
                          the desired outcomes.
                        </span>
                        <span>
                          Too often ineffective metrics are used that have no
                          causal relationship. This can lead to ultimate failure
                          and much wasted time and resources.
                        </span>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  </div>
);

StrategyTam.propTypes = {};

StrategyTam.defaultProps = {};

export default StrategyTam;
