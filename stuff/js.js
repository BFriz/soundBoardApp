$(document).ready(function(){

$('#buttons').on("click", function(){
  // console.log("itworks!")
  var mySound = soundManager.createSound({
  url: 'audiofiles/chinese.mp3'
  // mySound.play();
});
  mySound.play();
})



})