
document.getElementById("analyzeButton").addEventListener("click", function() {
  // Get the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const activeTab = tabs[0];

    // Execute the analysis script on the active tab
    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      function: analyzePage,
      world: "main"
    });
  });
});

// Function to analyze the page content
function analyzePage() {
  // TODO: Implement your analysis logic here
  // Extract content, generate summary, major points, etc.
  // Update the DOM or interact with the user interface

  // Example: Get the title of the page
  const pageTitle = document.title;

  // Example: Log the title to the console
  console.log(pageTitle);
}