
console.log("Apel Mahmud");

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

  	// if (request.greeting == 'best') {
  	// 	console.log('best teacher ever');
  	// }
  	console.log(request.greeting);
    
    // if (request.greeting == "hello")
    //   sendResponse({farewell: "goodbye"});


  });

