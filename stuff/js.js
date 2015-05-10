$(document).ready(function(){

$('.one').on("click", function(){
  var mySound = soundManager.createSound({
  url: 'http://springfieldfiles.com/sounds/ralph/sleep.mp3'
});
  mySound.play();

})
$('.two').on("click", function(){
  var mySound = soundManager.createSound({
  url: 'http://www.moviewavs.com/0053148414/MP3S/TV_Shows/Simpsons/ralphfinger.mp3'
  
});
  mySound.play();

})
$('.three').on("click", function(){
  var mySound = soundManager.createSound({
  url: 'http://springfieldfiles.com/sounds/ralph/glue.mp3'

});
  mySound.play();

})
$('.four').on("click", function(){
  var mySound = soundManager.createSound({
  url: 'http://www.moviewavs.com/0053148414/MP3S/TV_Shows/Simpsons/resturnt.mp3'

});
  mySound.play();

})
$('.five').on("click", function(){
  var mySound = soundManager.createSound({
  url: 'http://springfieldfiles.com/sounds/ralph/failengl.mp3'

});
  mySound.play();

})
$('.six').on("click", function(){
  var mySound = soundManager.createSound({
  url: 'http://springfieldfiles.com/sounds/ralph/ruberpants.mp3'

});
  mySound.play();

})
$('.seven').on("click", function(){
  var mySound = soundManager.createSound({
  url: 'http://springfieldfiles.com/sounds/ralph/boy.mp3'

});
  mySound.play();

})
$('.eight').on("click", function(){
  var mySound = soundManager.createSound({
  url: 'http://springfieldfiles.com/sounds/ralph/area.mp3'

});
  mySound.play();

})
$('.nine').on("click", function(){
  var mySound = soundManager.createSound({
  url: 'http://springfieldfiles.com/sounds/ralph/walk.mp3'
});
  // mySound.play();

})
$('.start').on("click", function(){
  var mySound = soundManager.createSound({
  // mySound.setVolume(75);
  url: 'stuff/CB.mp3'

});
  mySound.play();

})


})