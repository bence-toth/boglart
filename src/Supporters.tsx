import type { LanguagePack } from "./languagePack";

import "./Supporters.css";

interface SupporterProps {
  supporter: {
    url: string;
    logo: string;
    name: string;
  };
}

const Supporter = ({ supporter }: SupporterProps) => (
  <li>
    <a href={supporter.url} target="_blank" rel="noreferrer">
      <img src={supporter.logo} alt={supporter.name} />
    </a>
  </li>
);

// TODO: Gobe should go to the top on mobile
interface SupportersProps {
  languagePack: LanguagePack;
}

const Supporters = ({ languagePack }: SupportersProps) => (
  <section className="section-wrapper">
    <h2>{languagePack.supportersHeading}</h2>
    <nav className="supporters">
      <ul>
        {languagePack.supporters
          .slice(0, 3)
          .map((supporter, supporterIndex) => (
            <Supporter key={supporterIndex} supporter={supporter} />
          ))}
      </ul>
      <ul>
        {languagePack.supporters.slice(3).map((supporter, supporterIndex) => (
          <Supporter key={supporterIndex} supporter={supporter} />
        ))}
      </ul>
    </nav>
  </section>
);

export default Supporters;
