chrome.scripting
  .registerContentScripts([{
    id: "block-script",
    js: ["scripts/block.js"],
    persistAcrossSessions: false,
    matches: ["*://cuvar.dev/*"],
    runAt: "document_start",
  }])
  .then(() => console.log("registration complete"))
  .catch((err) => console.warn("unexpected error", err))