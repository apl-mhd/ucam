
console.log("Apel Mahmud");

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

  	console.log(request.greeting);
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });



/*
chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage (request, sender, sendResponse) {
	

	console.log(request);
}

/*


/*
console.log("apel mahmud");

var para = document.getElementsByTagName('h4');

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
	console.log(message.txt);
	if (message.txt === "hello"){
		document.write('a');
	}
}

*/