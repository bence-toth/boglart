const measurementId = "G-0525PM0DD3";

let isGoogleAnalyticsInitialized = false;

export const loadGoogleAnalytics = () => {
  if (isGoogleAnalyticsInitialized) {
    return;
  }

  // Create the script element for the gtag.js library
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize the dataLayer and gtag function
  /* @ts-ignore */
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    /* @ts-ignore */
    window.dataLayer.push(args);
  }

  // Push the initial configuration to the dataLayer
  gtag("js", new Date());
  gtag("config", measurementId);

  isGoogleAnalyticsInitialized = true;
};
