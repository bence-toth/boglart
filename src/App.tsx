import { useState } from "react";

import Header from "./Header";
import Banner from "./Banner";
import Programme from "./Programme";
import About from "./About";
import FAQ from "./FAQ";
import Map from "./Map";
import Supporters from "./Supporters";
import Footer from "./Footer";

import "./App.css";

const isProtected = true;

// TODO: Update favicon
// TODO: Add meta description
// TODO: Add social meta
// TODO: Implement language switcher
// TODO: Remove gh-pages "homepage" field from package.json

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
        <Supporters />
        <Footer />
      </main>
    </div>
  );
};

export default App;
