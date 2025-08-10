chrome.webNavigation.onCommitted.addListener((details) => {
  // prevent script from running when other frames load
  if (details.frameId === 0) {
    chrome.tabs.query(
      { active: true, lastFocusedWindow: true },
      (tabs) => {
        if (tabs.length === 0) return;

        let url = tabs[0].url;

        let parsedUrl = url
          .replace("https://", "")
          .replace("http://", "")
          .replace("www.", "");

        let domain = parsedUrl.split("/")[0].split("?")[0];

        if (!domain) return;

        if (domain === "linkedin.com") {
          runLinkedinScript(tabs[0].id);
        }
      }
    );
  }
});

function runLinkedinScript(tabId) {
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    files: ["linkedin.js"],
  });
}
