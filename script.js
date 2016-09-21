var backgroundIsBlue = false
setInterval(function() {
  if (backgroundIsBlue) {
    $("#blue-blinker").css({background: "white"});
    backgroundIsBlue = false;
  } else {		
    $("#blue-blinker").css({background: "lightblue"});	
    backgroundIsBlue = true;
  }	
}, 500)


var borderisshowing = false
setInterval(function() {
  if (borderisshowing) {
    $("#border-blinker").css({border: "0px solid black"});
    borderisshowing = false;
  } else {		
    $("#border-blinker").css({border: "3px solid black"});	
   borderisshowing = true;
  }	
}, 500)


$("#border-blinker").css({border: "1px solid black"});
//$("#blue-blinker").css({border: "none"});
