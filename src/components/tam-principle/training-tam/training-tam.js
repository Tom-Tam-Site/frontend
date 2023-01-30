import React from "react";

import "./training-tam.css";
import Accordion from "react-bootstrap/Accordion";

const TrainingTam = () => (
  <div className="training-tam">
    <div className="tam-principle row">
      <div id="Training and Learning">
        <div class="card bg-light principle">
          <div class="card-body">
            <h3 class="card-title text-center">Training and Learning</h3>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h2>T</h2>
                  <h5>each</h5>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="row container">
                    <div className=" text-center principle-img m-2">
                      <img
                        className="img-fluid"
                        src="images/tam-principles/training/teach.png"
                        alt="tam-principle"
                      />
                    </div>
                    <div className="pt-4">
                      <div className="paragraph">
                        <span className="bolded-inline">
                          Teaching time-tested principles should be foundational
                          to the learning process to produce positive outcomes.{" "}
                        </span>
                        <span>
                          When correct principles are internalized by the
                          learner, application of those principles will enable
                          the individual to more effectively problem solve and
                          be in control of one’s environment. It has been said
                          that{" "}
                        </span>
                        <span className="bolded">
                          by internalizing correct principles, it becomes easier
                          to make better decisions to act and not be acted upon
                          by external forces beyond our control.
                        </span>
                      </div>
                      <div className="paragraph">
                        For example, learning the principle of avoiding
                        unnecessary debt will bring financial freedom to
                        businesses and individuals able to successfully live by
                        that principle. Otherwise, a business or an individual
                        may be addressing symptoms rather than the root cause of
                        financial bondage.
                      </div>
                      <div className="paragraph">
                        <span className="bolded-inline">
                          In business, there are important principles that
                          govern effective strategic execution in key areas such
                          as marketing, operations, and finance functions.{" "}
                        </span>
                        <span>
                          These principles must be taught and understood by all
                          and integrated into the culture of the organization.
                          Likewise,{" "}
                        </span>
                        <span className="bolded">
                          there are important principles that govern an
                          individual’s happiness and progression by
                          understanding important principles governing
                          intellectual, physical, spiritual, and social
                          development.{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h2 className="A">A</h2>
                  <h5>pply</h5>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="row container">
                    <div className="text-center principle-img">
                      <img
                        className="img-fluid"
                        src="images/tam-principles/training/apply.png"
                        alt="tam-principle"
                      />
                    </div>
                    <div className="pt-4">
                      <div className="paragraph">
                        <span className="bolded">
                          Applying correct principles begins to unleash the
                          power in solving problems and adding value to achieve
                          desired goals and outcomes.{" "}
                        </span>
                        <span>
                          True principles are time-tested with cause-and-effect
                          relationships. As we align our targets and goals with
                          these principles, we are more focused on how to remove
                          problems and obstacles in our paths. Let us look at a
                          good example of applying a time-tested principle like
                          seeking win-win relationships.
                        </span>
                      </div>
                      <div className="paragraph">
                        <span className="bolded-inline">
                          The desired outcome of global trade is to help
                          countries maximize their skills and resources by
                          focusing on what they do best, and through trade
                          improve each other’s economy and standard of living.
                        </span>
                        <span>
                          The Greek philosopher Aristotle said it best that “the
                          whole is greater than the sum of its parts.” That was
                          true 2,500 years ago in his day as it is true today.{" "}
                        </span>
                        <span className="bolded-inline">
                          Global trade gives a country some benefits that it
                          cannot attain on its own, including more customers,
                          increased sales, new markets, longer product lifespan,
                          product diversification, improved risk management, and
                          more.
                        </span>
                        <span>
                          Individuals also gain by improving their quality of
                          life and access to more products and services.{" "}
                        </span>
                        <span className="bolded">
                          Otherwise, countries and individuals would be forced
                          to became jack of all trades, and master of none.{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h2 className="M">M</h2>
                  <h5>odel Behaviors</h5>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="row container">
                    <div className=" text-center principle-img col-lg">
                      <img
                        className="img-fluid"
                        src="images/tam-principles/training/model.png"
                        alt="tam-principle"
                      />
                    </div>
                    <div className="pt-4 col-lg">
                      <div className="paragraph">
                        <span className="bolded-inline">
                          Modeling correct behaviors in the learning process is
                          reflected in Benjamin Franklin’s words “tell me and I
                          forget; teach me and I may remember; involve me and I
                          learn.
                        </span>
                        <span>
                          Learning is best internalized with three exposures of
                          teaching correct principles, applying those
                          principles, and modeling the right behaviors that are
                          integral to the learning process.
                        </span>
                      </div>
                      <div className="paragraph">
                        <ul>
                          <li>
                            <span>Franklin’s “tell” stage is the</span>
                            <span className="bolded-inline-surrounded">
                              “teach correct principles”
                            </span>
                            <span>stage in the TAM acronym –</span>
                            <span className="bolded">
                              {" "}
                              this is the “what” that is being taught.
                            </span>
                          </li>
                          <li>
                            <span>Franklin’s “teach” stage is the </span>
                            <span className="bolded-inline-surrounded">
                              “application of the principle”
                            </span>
                            <span>
                              the TAM acronym relating to the subject matter
                              being taught –
                            </span>
                            <span className="bolded">
                              {" "}
                              this is the “why” that brings relevance to the
                              learner.
                            </span>
                          </li>
                          <li>
                            <span>Franklin’s “involve” stage is the </span>
                            <span className="bolded-inline-surrounded">
                              “modeling correct behaviors”
                            </span>
                            <span>
                              in the TAM acronym and shows the learner the
                              actions that will bring the desired outcome –
                            </span>
                            <span className="bolded">
                              this is the “how” that changes and aligns behavior
                              to achieve the targeted goals.
                            </span>
                          </li>
                        </ul>
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

TrainingTam.propTypes = {};

TrainingTam.defaultProps = {};

export default TrainingTam;
