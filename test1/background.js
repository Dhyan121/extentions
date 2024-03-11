chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // This event is fired when a tab is updated.
  if (changeInfo.status == "complete") {
    // Checks if the tab has finished loading.
    setInterval(function () {
      // Sets an interval to execute the function every 5 seconds.
      chrome.tabs.executeScript({
        // Injects JavaScript code into a page.
        code:
          'document.body.style.backgroundColor = "' + getRandomColor() + '";', // The code to be injected. This changes the background color of the body of the webpage.
      });
    }, 5000); // The interval is set to 5 seconds.
  }
});

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    return color;
  }
}
