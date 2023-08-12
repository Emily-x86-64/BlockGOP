// This is the content script that runs on every webpage
const regexGOP = /\bGOP\b/gi; // This regex matches all forms of the word "GOP" (case-insensitive, whole word)
const replacement = "Republican"; // The word to replace "GOP" with

function replaceTextOnPage() {
  // Find all text nodes on the page
  const textNodes = document.evaluate(
    "//text()",
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null
  );

  for (let i = 0; i < textNodes.snapshotLength; i++) {
    const node = textNodes.snapshotItem(i);
    node.nodeValue = node.nodeValue.replace(regexGOP, replacement);
  }
}

// Run the function when the page is loaded or updated
replaceTextOnPage();

// Run the function again if the page content changes (AJAX, SPA, etc.)
const observer = new MutationObserver(replaceTextOnPage);
observer.observe(document, { subtree: true, childList: true });
