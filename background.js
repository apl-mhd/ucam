console.log("background lol");


function lol(){
	console.log('lol')
}



chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked (tab) {

	console.log(tab.url);
	chrome.tabs.sendMessage(tab.id, "orko");
   
}



