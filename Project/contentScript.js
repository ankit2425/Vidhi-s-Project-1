function createOverlayButton() {
  const overlayButton = document.createElement('button');
  overlayButton.innerText = 'Analyze Page';
  overlayButton.id = 'overlayButton';

  overlayButton.addEventListener('click', function() {
    chrome.runtime.sendMessage({ message: 'showDialog' });
  });

  document.body.appendChild(overlayButton);
}

createOverlayButton();