import { useState, useEffect, useMemo } from "react";

import Header from "./Header";
import Banner from "./Banner";
import Programme from "./Programme";
import About from "./About";
import FAQ from "./FAQ";
import Map from "./Map";
import Supporters from "./Supporters";
import Footer from "./Footer";
import { hu, en } from "./languagePack";

import "./App.css";

const isProtected = true;

// TODO: Update favicon
// TODO: Add meta description, title etc. in index.html
// TODO: Add social meta https://css-tricks.com/essential-meta-tags-social-media/
// TODO: Remove gh-pages "homepage" field from package.json
// TODO: Remove password protection

const App = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const languageParam = queryParams.get("language");
    setIsEnglish(languageParam === "en");
  }, []);

  const [password, setPassword] = useState("");

  const languagePack = useMemo(() => (isEnglish ? en : hu), [isEnglish]);

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
      <Header languagePack={languagePack} isEnglish={isEnglish} />
      <main>
        <Banner languagePack={languagePack} />
        <Programme languagePack={languagePack} />
        <About languagePack={languagePack} />
        <FAQ languagePack={languagePack} />
        <Map languagePack={languagePack} />
        <Supporters languagePack={languagePack} />
        <Footer languagePack={languagePack} />
      </main>
    </div>
  );
};

export default App;
