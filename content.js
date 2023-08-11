chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "substitue") {
        const config = request.config;
        if (config.replacement && config.withText) {
            const elements = document.getElementsByTagName("*");
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                for(let j = 0; j < element.childNodes.length; j++) {
                    const node = element.childNodes[j];
                    if (node.nodeType === Node.TEXT_NODE) {
                        const text = node.nodeValue;
                        const newText = text.replace(new RegExp(config.replacement, "gi"), config.withText);
                        node.nodeValue = newText;
                    }
                }
            }
        }
    }
});