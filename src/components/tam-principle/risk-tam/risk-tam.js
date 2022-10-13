import React from "react";
import PropTypes from "prop-types";
import "./risk-tam.css";
import Accordion from "react-bootstrap/Accordion";

const RiskTam = () => (
  <div className="risk-tam">
    <div className="tam-principle row">
      <div id="Risk Management">
        <div class="card bg-light principle">
          <div class="card-body">
            <h3 class="card-title text-center">Risk Management</h3>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h5>Transfer Risk</h5>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="row container">
                    <div className="pt-4 col-lg">
                      <div className="paragraph">
                        <span className="bolded-inline">
                          Risk management is unfortunately viewed by most as a
                          burden and expense that negatively impacts the bottom
                          line of both businesses and individuals.
                        </span>
                        <span>
                          It is easy to believe that bad things only happen to
                          someone else. Consequently, proactive risk management
                          is seldom deployed in the pursuit of top-line revenue
                          or gross income generation to fully understand the
                          risk/reward and likelihood/severity of such
                          activities.{" "}
                        </span>
                        <span className="bolded">
                          Risk management can best be viewed with a 2 X 2 matrix
                          of likelihood vs. severity.
                        </span>
                      </div>
                    </div>
                    <div className="col-lg text-center principle-img m-2">
                      <img
                        className="img-fluid"
                        src="images/tam-principles/risk/four.png"
                        alt="tam-principle"
                      />
                    </div>
                  </div>
                  <div className="row container">
                    <div className="pt-4 col-lg">
                      <div className="paragraph">
                        <span className="bolded-inline">
                          Transfer of risk is important when there is an
                          identified risk associated with business or personal
                          activities with high likelihood and high severity of
                          negative impact that the risk will be realized.
                        </span>
                        <span>
                          Risk transfer is typically done through purchase of
                          insurance contracts by paying an insurance premium to
                          transfer the risk of loss to an insurance company. An
                          example of transferring a known high-risk event would
                          be Florida businesses and homeowners buying hurricane
                          and flood insurance.
                        </span>
                        <span className="bolded">
                          A risk assessment should be performed for all business
                          and personal activities to determine the risk profile
                          so that it can be effectively managed.
                        </span>
                      </div>
                    </div>
                    <div className="col-lg text-center principle-img m-2">
                      <img
                        className="img-fluid"
                        src="images/tam-principles/risk/destruction.png"
                        alt="tam-principle"
                      />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h5>Accept Risk</h5>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="row container">
                    <div className="text-center principle-img">
                      <img
                        className="img-fluid"
                        src="images/tam-principles/risk/family.png"
                        alt="tam-principle Designed by pch.vector / Freepik"
                      />
                    </div>
                    <div className="pt-4 col-lg">
                      <div className="paragraph">
                        <span className="bolded-inline">
                          Accepting risks that are low likelihood and low
                          severity if they become realized is a wise decision
                          from a cost/benefit perspective.
                        </span>
                        <span>
                          In essence, for low-risk business and personal
                          activities, being self-insured means a willingness to
                          bear the consequences and costs for these risks if
                          they are realized.
                        </span>
                        <span className="bolded-inline-surrounded">
                          The negative impact to the bottom line should be
                          immaterial because they occur so infrequently, and
                          they have low impact even if they do
                        </span>
                      </div>
                      <div className="paragraph">
                        <span>
                          A good example of low likelihood and low severity risk
                          is the risk that you and your family might be run over
                          by a car while leisurely walking in a public park.
                        </span>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h5>Mitigate Risk</h5>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="row container">
                    <div className=" text-center principle-img m-2">
                      <img
                        className="img-fluid"
                        src="images/tam-principles/risk/mitigate-1.png"
                        alt="tam-principle"
                      />
                    </div>
                    <div className="pt-4 col-lg">
                      <div className="paragraph">
                        <span className="bolded-inline">
                          For risks that are low likelihood and high severity,
                          mitigation strategies should be developed to reduce
                          the risk.
                        </span>
                        <span>
                          An example of this type of risk is a 7.0 earthquake on
                          the Richter scale. These types of infrequent
                          “hundred-year” events may not be experienced in some
                          people’s lifetime. But when these risks are realized,
                          they have severe consequences to those that are
                          impacted.
                        </span>
                      </div>
                      <div className="paragraph">
                        <span>
                          In this example, risk mitigation strategies could
                          include more stringent building code requirements that
                          ensure buildings have earthquake-resistant designs by
                          incorporating ductility within the structure and its
                          structural members. A ductile building can bend and
                          flex when exposed to the horizontal or vertical shear
                          forces of an earthquake.
                        </span>
                      </div>
                      <div className="paragraph">
                        <span className="bolded">
                          The principle of risk mitigation is to have a good
                          understanding of the likelihood and severity of
                          activities and events that can occur, and to design
                          and execute risk reduction and controls to reduce the
                          risk within cost/benefit and resource constraints.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row container">
                    <div className="text-center principle-img m-2">
                      <img
                        className="img-fluid"
                        src="images/tam-principles/risk/mitigate-2.png"
                        alt="tam-principle"
                      />
                    </div>
                    <div className="pt-4 col-lg">
                      <div className="paragraph">
                        <span className="bolded-inline">
                          Risks that have high likelihood and low severity are
                          often ignored because one occurrence may seem like an
                          immaterial negative effect.
                        </span>
                        <span>
                          But when accumulated repeatedly over time, the
                          negative impact could be undesirable. An example of
                          this type of risk is a leaky ceiling that starts with
                          occasional drops of water. If the leak is left to
                          progress without investigating the cause and source of
                          the leak, then over time the leak will become more
                          pronounced and greater damage will result.
                        </span>
                      </div>
                      <div className="paragraph bolded">
                        Good risk mitigation requires risk identification, risk
                        assessment, risk reduction actions, and risk control
                        monitoring to reduce exposure to negative outcomes in
                        business and to individuals.
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

RiskTam.propTypes = {};

RiskTam.defaultProps = {};

export default RiskTam;
