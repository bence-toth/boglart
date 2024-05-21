import type { LanguagePack } from "./languagePack";

interface AboutProps {
  languagePack: LanguagePack;
}

const About = ({ languagePack }: AboutProps) => (
  <section className="section-wrapper dark">
    <div className="section-inner-wrapper">
      <h2>{languagePack.aboutHeading}</h2>
      <p>{languagePack.aboutText}</p>
    </div>
  </section>
);

export default About;
