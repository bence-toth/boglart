import { useState, useEffect, useMemo } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

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

  const languagePack = useMemo(() => (isEnglish ? en : hu), [isEnglish]);

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <meta name="description" content={languagePack.meta.description} />
          <meta name="keywords" content={languagePack.meta.keywords} />
        </Helmet>
      </HelmetProvider>
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
