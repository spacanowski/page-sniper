chrome.runtime.sendMessage({pageCont: document.documentElement.innerHTML}, function(response) {
  console.log(response.farewell);
});