import { useState, useCallback, useEffect } from "react";

import { loadGoogleAnalytics } from "./googleAnalytics";

import type { LanguagePack } from "./languagePack";

import "./CookieConsent.css";

interface CookieConsentProps {
  languagePack: LanguagePack;
}

const CookieConsent = ({ languagePack }: CookieConsentProps) => {
  const [isAccepted, setIsAccepted] = useState(
    localStorage.getItem("cookieAccepted") === "true"
  );

  const onAccept = useCallback(() => {
    localStorage.setItem("cookieAccepted", "true");
    setIsAccepted(true);
  }, []);

  useEffect(() => {
    if (isAccepted) {
      loadGoogleAnalytics();
    }
  }, [isAccepted]);

  if (isAccepted) {
    return null;
  }

  return (
    <div className="cookie-consent">
      <p>{languagePack.cookieConsent.text}</p>
      <button onClick={onAccept}>{languagePack.cookieConsent.button}</button>
    </div>
  );
};

export default CookieConsent;
