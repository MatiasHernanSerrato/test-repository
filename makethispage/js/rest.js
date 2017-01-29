//comment: I wanna know the way to learn quickly this language.
var x = 12;

whoAreYou();
function whoAreYou(){
  var user = prompt("Please enter your name here (Only 5 letters):");
  if (user.length >5){
    alert("ERROR!");
  }else{
  alert(user);
  }
}

function leave(){
  var question = confirm("Do you wanna leave this page?");
  if(question==true){
    alert("Thank you for visiting my page");
  }else{
    alert("Thank you for staying with me");
  }
}
