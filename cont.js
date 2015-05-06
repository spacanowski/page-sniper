chrome.runtime.sendMessage({pageCont: document.body.innerHTML}, function(response) {
  console.log(response.farewell);
});