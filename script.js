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
    console.log ("borderisnotshowing")
  } else {		
    $("#border-blinker").css({border: "0.5px solid black"})	
   borderisshowing = true;
    console.log ("borderisshowing")
  }	
}, 1000)


$("#border-blinker").css({border: "1px solid black"});
//$("#blue-blinker").css({border: "none"});

var textisshowing = false
setInterval(function() {
  if (textisshowing) {
    $("#text-blinker").fadeOut()
    textisshowing = false;
    console.log ("textisnotshowing")
  } else {		
    $("#text-blinker").fadeIn()
    textisshowing = true;
    console.log ("textisshowing")
  }	
}, 500)
