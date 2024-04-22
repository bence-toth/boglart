import { useState } from "react";

import Header from "./Header";
import Banner from "./Banner";
import Programme from "./Programme";
import About from "./About";
import FAQ from "./FAQ";
import Map from "./Map";
import Footer from "./Footer";

import "./App.css";

const isProtected = true;

const App = () => {
  const [password, setPassword] = useState("");

  if (isProtected && password !== "koszikoszi") {
    return (
      <input
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
    );
  }

  return (
    <div>
      <Header />
      <main>
        <Banner />
        <Programme />
        <About />
        <FAQ />
        <Map />
        <section className="section-wrapper">
          <h2>Támogatóink</h2>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default App;
