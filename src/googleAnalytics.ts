// TODO: Replace with actual GA code

declare global {
  interface Window {
    GoogleAnalyticsObject?: string;
    ga?: (...args: any[]) => void;
  }
}

const loadGoogleAnalytics = () => {
  (function (i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r;
    /* @ts-ignore */
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    (i[r] =
      /* @ts-ignore */
      i[r] ||
      function () {
        /* @ts-ignore */
        (i[r].q = i[r].q || []).push(arguments);
        // eslint-disable-next-line no-sequences
      }),
      /* @ts-ignore */
      (i[r].l = 1 * new Date());
    /* @ts-ignore */
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions, no-sequences
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    /* @ts-ignore */
    a.async = 1;
    /* @ts-ignore */
    a.src = g;
    /* @ts-ignore */
    m.parentNode.insertBefore(a, m);
  })(
    window,
    document,
    "script",
    "https://www.google-analytics.com/analytics.js",
    "ga"
  );

  /* @ts-ignore */
  ga("create", "UA-XXXXX-Y", "auto");
  /* @ts-ignore */
  ga("send", "pageview");
};

export { loadGoogleAnalytics };
