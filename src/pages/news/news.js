import React from "react";

import "./news.css";
import Contact from "../../components/contact/contact";

const News = () => (
  <div className="news">
    <div class="text-center">
      <a
        class="btn btn-success"
        type="button"
        href="https://tamadvisors.blogspot.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Economic and Political Blog
      </a>
    </div>

    <div className="row p-2">
      <div className="text-center principle-img col-lg">
        <img
          className="img-fluid news-image"
          src="images/news/economic.png"
          alt="tam-principle"
        />
      </div>
      <div className=" p-2 col-lg">
        <div className="paragraph">
          <span className="bolded">
            Political and economic forces significantly impact our lives and
            livelihood
          </span>
          {". "}
          This is not surprising since{" "}
          <span className="bolded">
            power and money are intoxicating forces for those that seek to
            dominate and control others
          </span>
          . Unfortunately, many people do not want to engage in political
          discussions because most tend to get emotional due to their upbringing
          and bias. Many do not understand economic principles and concepts
          since they have never studied or spent time to learn.
        </div>
      </div>
    </div>
    <div className="row text-center">
      <div className="paragraph p-1 col">
        In the spirit of{" "}
        <span className="bolded">
          proclaiming truth and dispelling falsehood
        </span>{" "}
        in these two areas where there are blatant lies and deceit, this blog
        will help those interested in learning the truth for themselves.{" "}
        <span className="bolded">
          We must discern fact-based truth corroborated from creditable sources
          to avoid being emotionally manipulated by unsupported opinions
        </span>
        .
      </div>
      <div className="col-lg">
        <img src="images/news/news2.png" className="img-fluid news-image" />
      </div>
    </div>

    <div className="paragraph text-center bg-light p-3">
      This{" "}
      <span className="bolded embedded-link">
        <a
          className="embedded-link"
          href="https://tamadvisors.blogspot.com/"
          target="_blank"
          rel="noreferrer"
        >
          blog
        </a>
      </span>{" "}
      contains personal articles, as well as from other fact-based sources that
      are beneficial to truth seekers.
      <div className="bolded">
        Your thoughts, comments, and insights are welcomed.
      </div>
    </div>
    <div className="text-center">
      <Contact />
    </div>
  </div>
);

News.propTypes = {};

News.defaultProps = {};

export default News;
