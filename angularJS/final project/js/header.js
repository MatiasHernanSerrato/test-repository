/* USING JQUERY
$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()>0){
      $('header').addClass('header2');
    }else{
      $('header').removeClass('header2');
    }
  });
}); */

function Scroll(){
  var changeStyle = document.getElementById("head").classList;
  var yPosition = window.pageYOffset;
  if(yPosition>0){
    changeStyle.add('header2');
  }else{
    changeStyle.remove('header2');
  }
};
window.addEventListener("scroll",Scroll);

/*
var f = function() {
function eventHandler(event){
    console.log(event.type);
    console.log(event.keyCode);
    console.log(string.fromCharCode(event.keyCode));
}
var textAreaElement = document.getElementsByTagName("textarea")[0];
textAreaElement.addEventListener('keypress',eventHandler,false);
textAreaElement.addEventListener("keydown",eventHandler,false);
textAreaElement.addEventListener("keyup",eventHandler,false);
};
window.addEventListener('load',f,false);
*/
