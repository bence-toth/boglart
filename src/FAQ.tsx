import { Fragment } from "react";
import { frequentlyAskedQuestions } from "./constants";

import "./FAQ.css";

// TODO: Translate

const FAQ = () => (
  <section className="section-wrapper">
    <div className="section-inner-wrapper">
      <h2>Gyakran ismételt kérdések</h2>
      <dl className="faq">
        {frequentlyAskedQuestions.map((faq) => (
          <Fragment key={faq.question}>
            <dt>{faq.question}</dt>
            <dd>{faq.answer}</dd>
          </Fragment>
        ))}
      </dl>
    </div>
  </section>
);

export default FAQ;
