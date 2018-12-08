

console.log("Orin is <3");

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

  	if (request.greeting == 'good') {

  			fillRadio(0);	
  	}

  	if (request.greeting == 'average') {

  			fillRadio(1);
  		
  	}

  	if (request.greeting == 'baverage') {

  		fillRadio(2);
  	}



  	function fillRadio(n){

  		var x =  document.querySelectorAll('input[type="radio"][name="car"]');
		x[n].checked=true;

		var x =  document.querySelectorAll('input[type="radio"][name="motor"]');
		x[n].checked=true;

		var x =  document.querySelectorAll('input[type="radio"][name="mobile"]');
		x[n].checked=true;
  	}




  	// if (request.greeting == 'best') {
  	// 	console.log('best teacher ever');
  	// }
  	console.log(request.greeting);
    
    // if (request.greeting == "hello")
    //   sendResponse({farewell: "goodbye"});


  });

