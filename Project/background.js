chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === 'showSummary') {
    // Implement your logic to show the summary dialog
    // For demonstration purposes, let's just display an alert
    alert('Showing summary!');
  } else if (request.message === 'showPoints') {
    // Implement your logic to show the major points dialog
    // For demonstration purposes, let's just display an alert
    alert('Showing major points!');
  }
});