import { Fragment } from "react";

import { parseAnnotatedString } from "./utility";

import type { LanguagePack } from "./languagePack";

import "./FAQ.css";

interface FAQProps {
  languagePack: LanguagePack;
}
const FAQ = ({ languagePack }: FAQProps) => (
  <section className="section-wrapper">
    <div className="section-inner-wrapper">
      <h2>{languagePack.frequentlyAskedQuestionsHeading}</h2>
      <dl className="faq">
        {languagePack.frequentlyAskedQuestions.map((faq) => (
          <Fragment key={faq.question}>
            <dt>{faq.question}</dt>
            <dd>{parseAnnotatedString(faq.answer)}</dd>
          </Fragment>
        ))}
      </dl>
    </div>
  </section>
);

export default FAQ;
