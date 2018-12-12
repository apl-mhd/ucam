

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



  	function fillRadio(n){

  		var x =  document.querySelectorAll('input[type="radio"][name="ctl00$MainContainer$rbtTheory1"]');
		x[n].checked=true;
		var x =  document.querySelectorAll('input[type="radio"][name="ctl00$MainContainer$rbtTheory2"]');
		x[n].checked=true;
		var x =  document.querySelectorAll('input[type="radio"][name="ctl00$MainContainer$rbtTheory3"]');
		x[n].checked=true;
    var x =  document.querySelectorAll('input[type="radio"][name="ctl00$MainContainer$rbtTheory4"]');
    x[n].checked=true;
    var x =  document.querySelectorAll('input[type="radio"][name="ctl00$MainContainer$rbtTheory5"]');
    x[n].checked=true;
    var x =  document.querySelectorAll('input[type="radio"][name="ctl00$MainContainer$rbtTheory6"]');
    x[n].checked=true;
    var x =  document.querySelectorAll('input[type="radio"][name="ctl00$MainContainer$rbtTheory7"]');
    x[n].checked=true;

    var x =  document.querySelectorAll('input[type="radio"][name="ctl00$MainContainer$rbtTheory8"]');
    x[n].checked=true;
    var x =  document.querySelectorAll('input[type="radio"][name="ctl00$MainContainer$rbtTheory9"]');
    x[n].checked=true;
    var x =  document.querySelectorAll('input[type="radio"][name="ctl00$MainContainer$rbtTheory10"]');
    x[n].checked=true;
    var x =  document.querySelectorAll('input[type="radio"][name="ctl00$MainContainer$rbtTheory11"]');
    x[n].checked=true;
    var x =  document.querySelectorAll('input[type="radio"][name="ctl00$MainContainer$rbtTheory12"]');
    x[n].checked=true;
    var x =  document.querySelectorAll('input[type="radio"][name="ctl00$MainContainer$rbtTheory13"]');
    x[n].checked=true;
    var x =  document.querySelectorAll('input[type="radio"][name="ctl00$MainContainer$rbtTheory14"]');
    x[n].checked=true;
    var x =  document.querySelectorAll('input[type="radio"][name="ctl00$MainContainer$rbtTheory15"]');
    x[n].checked=true;
    var x =  document.querySelectorAll('input[type="radio"][name="ctl00$MainContainer$rbtTheory16"]');
    x[n].checked=true;


  	}




  	// if (request.greeting == 'best') {
  	// 	console.log('best teacher ever');
  	// }
  	console.log(request.greeting);
    
    // if (request.greeting == "hello")
    //   sendResponse({farewell: "goodbye"});


  });

