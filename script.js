var backgroundIsBlue = false
setInterval(function() {
  if (backgroundIsBlue) {
    $("#blue-blinker").css({background: "white"});
    backgroundIsBlue = false;
  } else {		
    $("#blue-blinker").css({background: "skyblue"});	
    backgroundIsBlue = true;
  }	
}, 500)


var borderisshowing = false
setInterval(function() {
  if (borderisshowing) {
    $("#border-blinker").css({border: "0px solid black"});
    borderisshowing = false;
  } else {		
    $("#border-blinker").css({border: "0.5px solid black"});	
   borderisshowing = true;
  }	
}, 500)


$("#border-blinker").css({border: "1px solid black"});
//$("#blue-blinker").css({border: "none"});

var textisshowing = false
setInterval(function() {
  if (textisshowing) {
    $("#text-blinker").css({text: "white"});
    textisshowing = false;
  } else {		
    $("#text-blinker").css({text: "1px solid black"});	
    textisshowing = true;
  }	
}, 500)
