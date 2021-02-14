export default function getTradingViewRatings(symbols) {
  const scriptsObj = {};
  for (let i = 0; i < symbols.length; i++) {
    let obj = {
      interval: "1W",
      width: "100%",
      isTransparent: true,
      height: "100%",
      symbol: symbols[i],
      showIntervalTabs: true,
      locale: "en",
      colorTheme: "light",
    };

    const settings = JSON.stringify(obj);
    // we need to create a new element so that we can  add it to the document
    const script = document.createElement("script");
    script.async = true;
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
    script.innerHTML = settings; // setting innerHTML to json

    scriptsObj[symbols[i]] = script;
  }
  return scriptsObj;
} //  // .summary-72Hk5lHE - .speedometerSignal-pyzN--tL span  in order to access
