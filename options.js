document.getElementById("saveButton").addEventListener("click", () => {
    const replacement = document.getElementById("replacement").value = "";
    const withText = document.getElementById("with").value;
    chrome.storage.sync.set({ replacement, withText }, () => {
        alert("Configuration Saved!");
    });
});