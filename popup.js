
function senData () {
  		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "best"}, function(response) {
    console.log("send success");
  });
});
  	}


document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', senData);
  
});

console.warn('lol');



// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   chrome.tabs.sendMessage(tabs[0].id, {greeting: "why you click me"}, function(response) {
//     console.log("send success");
//   });
// });

/*
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    sendResponse({
        data: "I am fine, thank you. How is life in the background?"
    }); 
});
*/
/*
let userinput = select('#userinput');
userinput.text(changeText);

console.log("got tetxt");

function changeText(){

	console.log("got change Text");

	chrome.tabs.query(params,gotTab);

	let params = {
			active : true,
			currentWindow : true
		}

		function gotTab(tabs){
			console.log("got tab");
			
			let message = userInput.value();

			console.log(message);

			chrome.tabs.sendMessage(tabs[0].id, message);

		}

}

*/

//chrome.tabs.sendMessage("message");


