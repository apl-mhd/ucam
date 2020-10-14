

console.log("Orin <3");

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

  var x =  document.querySelectorAll('select[name="ctl00$MainContainer$ddlExpectedGrade"]')[0].options;
  x[1].selected=true;



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

  		/* var x =  document.querySelectorAll('input[type="radio"]');
          //console.log(x.length);
      for (i = m; i < x.length;) {     
        
          //console.log(i);
          x[i].checked=true;
		  i +=5; */

		  //NEW CODE @pavstar619
		  //Theory course i<17
		  //Lab course i<14?? (Haven't tested yet)
		  var i;
		  var x=1;
		  for(i = 1; i<17;i++){
			  document.getElementById('ctl00_MainContainer_rbtTheory'+x+'_'+m).checked = true;
			  x++;
		  }

        
    

  	}

  	// if (request.greeting == 'best') {
  	// 	console.log('best teacher ever');
  	// }
  	//console.log(request.greeting);
    
    // if (request.greeting == "hello")
    //   sendResponse({farewell: "goodbye"});


  });

