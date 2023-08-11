document.getElementById("saveButton").addEventListener("click", function() {
    const replacement = document.getElementById("replacement").value;
    const withText = document.getElementById("with").value;
    chrome.storage.sync.set({ replacement, withText }, function() {
        alert("Configuration Saved!");
    });
});