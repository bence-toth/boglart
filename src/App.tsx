import { useState, useEffect, useMemo } from "react";
import { Helmet } from "react-helmet";

import CookieConsent from "./CookieConsent";
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

const isProtected = false;

// TODO: Update favicon
// TODO: Remove gh-pages "homepage" field from package.json
// TODO: Remove password protection

const App = () => {
  // Redirect from http to https
  useEffect(() => {
    if (window.location.protocol === "http:") {
      window.location.href = window.location.href.replace(
        "http://",
        "https://"
      );
    }
  }, []);

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
      <Helmet>
        <meta name="description" content={languagePack.meta.description} />
        <meta name="keywords" content={languagePack.meta.keywords} />
        <meta property="og:title" content="Boglart" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={languagePack.meta.url} />
        {/* TODO: Add meta images (Hungarian + English) */}
        {/* <meta
          property="og:image"
          content="https://ia.media-imdb.com/images/rock.jpg"
        /> */}
      </Helmet>
      <CookieConsent languagePack={languagePack} />
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
