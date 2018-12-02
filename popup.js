
/*
function setup () 
{
	let userInput = select('#userInput');

	userInput.text(newText);

	function newText(){

		let params = {

			active : true,
			currentWindow : true
		}

		chrome.tabs.query(params,gotTab);

		function gotTab(tabs){

			console.log(tabs);

		let message = userInput.value();
		let msg = {
			txt : "hello"
		} 

		chrome.tabs.sendMessage(tabs[0].id,msg);
	}


	}
}