document.addEventListener('DOMContentLoaded', function() {
  var replaceButton = document.getElementById('replaceButton');

  replaceButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'replace'});
    });
  });
});
