chrome.runtime.onInstalled.addListener(() => {
  chrome.scripting
    .registerContentScripts([{
      id: "block-script",
      js: ["scripts/block.js"],
      css: ["styles/block.css"],
      matches: ["https://cuvar.dev/"],
      persistAcrossSessions: false,
      runAt: "document_start",
    }])
    .then(() => console.log("registration complete"))
    .catch((err) => console.warn("unexpected error", err))
});

chrome.action.onClicked.addListener((tab) => {
  startBlocking(tab.id);
});

function startBlocking(tabId) {
  chrome.scripting.insertCSS({
    files: ["styles/block.css"],
    target: { tabId: tabId },
  }).then(() => console.log("script injected"))
    .catch((err) => console.warn("unexpected error", err));

  chrome.scripting
    .executeScript({
      target: { tabId: tabId },
      files: ["scripts/block.js"],
    })
    .then(() => console.log("script injected"))
    .catch((err) => console.warn("unexpected error", err));
}