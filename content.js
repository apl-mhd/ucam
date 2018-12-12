

console.log("Orin <3");

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

  	if (request.greeting == 'good') {

  			fillRadio(0);	
  	}

  	if (request.greeting == 'average') {

  			fillRadio(2);
  		
  	}

  	if (request.greeting == 'baverage') {

  		fillRadio(4);
  	}



  	function fillRadio(m){

  		var x =  document.querySelectorAll('input[type="radio"]');


         //x[n].checked=true;


          console.log(x.length);


      for (i = m; i < x.length;) {     
        
          console.log(i);
          x[i].checked=true;
          i +=5;

        
    }

  	}




  	// if (request.greeting == 'best') {
  	// 	console.log('best teacher ever');
  	// }
  	console.log(request.greeting);
    
    // if (request.greeting == "hello")
    //   sendResponse({farewell: "goodbye"});


  });

