var backgroundIsBlue = false
setInterval(function() {
  if (backgroundIsBlue) {
    $("#blue-blinker").css({background: "white"});
    backgroundIsBlue = false;
  } else {		
    $("#blue-blinker").css({background: "blue"});	
    backgroundIsBlue = true;
  }	
}, 500)


var borderblinker = false
setInterval(function() {
  if (borderisshowing) {
    $("#border-blinker").css({background: "white"});
    backgroundisshowing = false;
  } else {		
    $("#border-blinker").css({background: "blue"});	
    backgroundIsBlue = true;
  }	
}, 500)


$("#border-blinker").css({border: "1px solid black"});
//$("#blue-blinker").css({border: "none"});
