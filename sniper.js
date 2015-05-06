var initialHtml,
	relodeInterval;

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
	if (typeof initialHtml === "undefined")
		initialHtml = message.pageCont;
	else if (initialHtml !== message.pageCont) {
	  	chrome.tabs.executeScript(null, {
	    	code: 'document.body.style.backgroundColor="red"'
	    });
	    chrome.tabs.query({'active': true}, function(tab) {
		  	chrome.tabs.executeScript(tab[0].id, {
		    	code: 'alert("Rejestracja")'
		    });
		 });
	    if (typeof relodeInterval !== "undefined")
			clearInterval(relodeInterval);
	}
});

chrome.tabs.query({'url': 'http://2015.confitura.pl/'}, function(tab) {
	relodeInterval = setInterval(function() {
		  	chrome.tabs.executeScript(tab[0].id, {
		    	code: 'window.location.reload()'
		    });
	}, 10000);
});