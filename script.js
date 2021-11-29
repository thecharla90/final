var int1 = Math.floor(Math.random() * 10) + 1;
var int2 = Math.floor(Math.random() * 10) + 1;
document.getElementById('question').innerHTML = int1 + " " + "+" + " " + int2;
var answer = int1 + int2;
var score=0;
function quiz() {
{
var uanswer = document.getElementById('answer').value;
      if (uanswer == answer) {
          alert("Correct");
          score=(score)+1;
          document.getElementById('score').innerHTML =score     ;
          document.getElementById("question").style.fontSize = "2.0em";
      } else {
          alert("OOPS Try Again!")
          score= (score)-5;
          document.getElementById('score').innerHTML =score   ;
      }
  }
}

var score=0;
var int1 = Math.floor(Math.random() * 10) + 1
var int2 = Math.floor(Math.random() * 10) + 1
var answer = int1 + int2;
document.getElementById('question').innerHTML = int1 + " " + "+" + " " + int2;


function quiz() {
  

  var user_answer = document.getElementById('answer').value;

   if (user_answer == answer) {
          alert("Correct");
          score=(score)+1;
          document.getElementById('score').innerHTML =score     
      } else {
          alert("OOPS Try Again!")
          score= (score)-5;
          document.getElementById('score').innerHTML =score   ;
      }
  
   // you need to reset the int1, int2, and answer by generating new numbers
   int1 = Math.floor(Math.random() * 10) + 1;
   int2 = Math.floor(Math.random() * 10) + 1;
   answer = int1 + int2
   document.getElementById('question').innerHTML = int1 + " " + "+" + " " + int2;
  
}