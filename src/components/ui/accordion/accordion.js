import React, { createContext, useContext, useId, useState } from "react";

import "./accordion.css";

const AccordionItemContext = createContext(null);

const Accordion = ({ children }) => (
  <div className="accordion-list">{children}</div>
);

const AccordionItem = ({ children }) => {
  const [open, setOpen] = useState(false);
  const itemId = useId();

  return (
    <AccordionItemContext.Provider value={{ open, setOpen, itemId }}>
      <section className={`accordion-item${open ? " is-open" : ""}`}>
        {children}
      </section>
    </AccordionItemContext.Provider>
  );
};

const AccordionHeader = ({ children }) => {
  const { open, setOpen, itemId } = useContext(AccordionItemContext);

  return (
    <h4 className="accordion-heading">
      <button
        className="accordion-trigger"
        type="button"
        aria-expanded={open}
        aria-controls={`accordion-panel-${itemId}`}
        onClick={() => setOpen(!open)}
      >
        <span className="accordion-trigger-content">{children}</span>
        <span className="accordion-icon" aria-hidden="true">
          +
        </span>
      </button>
    </h4>
  );
};

const AccordionBody = ({ children }) => {
  const { open, itemId } = useContext(AccordionItemContext);

  return (
    <div
      id={`accordion-panel-${itemId}`}
      className="accordion-panel"
      hidden={!open}
    >
      {children}
    </div>
  );
};

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

export default Accordion;
