
function senData () {
  		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "best"}, function(response) {
    console.log("send success");
  });
});
  	}


document.addEventListener('DOMContentLoaded', function () {
  //document.querySelector('button').addEventListener('click', senData);

  /*Good*/

  document.querySelector('#good').addEventListener('click',function(){
  	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  	chrome.tabs.sendMessage(tabs[0].id, {greeting: "good"}, function(response) {
    console.log("send success");
  		});
	});
  	
  });

  /*Average*/
  document.querySelector('#average').addEventListener('click',function(){
  	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  	chrome.tabs.sendMessage(tabs[0].id, {greeting: "average"}, function(response) {
    console.log("send success");
  		});
	});
  	
  });

  /*Bellow Average*/
  document.querySelector('#baverage').addEventListener('click',function(){
  	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  	chrome.tabs.sendMessage(tabs[0].id, {greeting: "baverage"}, function(response) {
    console.log("send success");
  		});
	});
  	
  });


  
}); /* DOMContentLoaded */




