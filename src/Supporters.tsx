import { supporters } from "./constants";

import "./Supporters.css";

// TODO: Translate
// TODO: Create structure

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

const Supporters = () => (
  <section className="section-wrapper">
    <h2>Támogatóink</h2>
    <nav className="supporters">
      <ul>
        {supporters.slice(0, 3).map((supporter, supporterIndex) => (
          <Supporter key={supporterIndex} supporter={supporter} />
        ))}
      </ul>
      <ul>
        {supporters.slice(3).map((supporter, supporterIndex) => (
          <Supporter key={supporterIndex} supporter={supporter} />
        ))}
      </ul>
    </nav>
  </section>
);

export default Supporters;
