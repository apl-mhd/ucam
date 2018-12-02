
console.log("Apel Mahmud");

chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage (message, sender, sendResponse) {
	

	console.log(message);
}


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