import React, { useState } from "react";

import "./carousel.css";

const Carousel = ({ children, ariaLabel = "Carousel" }) => {
  const items = React.Children.toArray(children);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items.length) return null;

  const showPrevious = () =>
    setActiveIndex((index) => (index - 1 + items.length) % items.length);
  const showNext = () => setActiveIndex((index) => (index + 1) % items.length);

  return (
    <div
      className="quote-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div className="quote-carousel-stage">{items[activeIndex]}</div>
      <div className="quote-carousel-controls">
        <button type="button" onClick={showPrevious}>
          Previous
        </button>
        <span aria-live="polite">
          {activeIndex + 1} / {items.length}
        </span>
        <button type="button" onClick={showNext}>
          Next
        </button>
      </div>
    </div>
  );
};

Carousel.Item = ({ children }) => (
  <div className="quote-carousel-item" role="group" aria-roledescription="slide">
    {children}
  </div>
);

export default Carousel;
