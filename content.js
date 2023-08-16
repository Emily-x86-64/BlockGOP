chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'replace') {
    replaceGOPWithRepublican();
  }
});

function replaceGOPWithRepublican() {
  var elements = document.getElementsByTagName('*');
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    for (var j = 0; j < element.childNodes.length; j++) {
      var node = element.childNodes[j];
      if (node.nodeType === 3) { // Text node
        var text = node.nodeValue;
        var replacedText = text.replace(/\bgop\b/gi, 'republican');
        if (replacedText !== text) {
          element.replaceChild(document.createTextNode(replacedText), node);
        }
      }
    }
  }
}
