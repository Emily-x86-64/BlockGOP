document.addEventListener("DOMContentLoaded", function () {
  const substituteButton = document.getElementById("substituteButton");
  if (substituteButton) {
    substituteButton.addEventListener("click", function () {
      // Send the message to the content script
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { action: "substitute" }, function (response) {
          if (chrome.runtime.lastError) {
            console.error("Chrome runtime error:", chrome.runtime.lastError);
            console.error("Error details:", chrome.runtime.lastError.message);
            console.error("Error object:", chrome.runtime.lastError);
          } else {
            console.log("Message sent successfully:", response);
          }
        });
      });
    });
  } else {
    console.error("Button with ID 'substituteButton' not found.");
  }
});
