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
  // A function to generate a random color.
  var letters = "0123456789ABCDEF"; // The characters that can be used in a color.
  var color = "#"; // The start of the color string.
  for (var i = 0; i < 6; i++) {
    // A loop to generate 6 characters for the color.
    color += letters[Math.floor(Math.random() * 16)]; // Adds a random character from the letters string to the color.
  }
  return color; // Returns the generated color.
}
