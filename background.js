console.log("background lol");


function lol(){
	console.log('lol')
}

lol();

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked () {

	console.log("background scripts running");
   
}



