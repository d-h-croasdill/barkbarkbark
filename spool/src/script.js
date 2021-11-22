// this is the bit of js that automatically scrolls the contents of the passage-container div to the bottom.

// window.setInterval(function() {
//     var elem = document.getElementById('passage-container');
//     elem.scrollTop = elem.scrollHeight;
//   }, 5000);

var textBoxNum = 0;
var newLen = 0;

var snd = new Audio("src/pickupCoin.wav");

function playSFX(){
  newLen = $("div.dialog").length;
  if(newLen != textBoxNum){
    textBoxNum = newLen;
    snd.play();
  }
}

setInterval(playSFX, 500);
