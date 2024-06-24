import { useState, useCallback } from "react";

import type { LanguagePack } from "./languagePack";

import "./CookieConsent.css";

interface CookieConsentProps {
  languagePack: LanguagePack;
}

interface GTag {
  (
    command: "consent",
    action: "update",
    options: {
      ad_storage: "granted";
      ad_user_data: "granted";
      ad_personalization: "granted";
      analytics_storage: "granted";
    }
  ): void;
}

declare const gtag: GTag;

const grantConsent = () => {
  gtag("consent", "update", {
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
    analytics_storage: "granted",
  });
};

const CookieConsent = ({ languagePack }: CookieConsentProps) => {
  const [isAccepted, setIsAccepted] = useState(
    localStorage.getItem("cookieAccepted") === "true"
  );

  const onAccept = useCallback(() => {
    localStorage.setItem("cookieAccepted", "true");
    setIsAccepted(true);
  }, []);

  if (isAccepted) {
    grantConsent();
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
