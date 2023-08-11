document.getElementById("substituteButton").addEventListener("click", function(){
    chrome.storage.sync.get(["replacement", "withText"], function(data) {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "subtitute", config: data });
        });
    });
});