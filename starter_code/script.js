var userPoint = 0;
var aiPoint = 0;
 
var computerChoice = Math.random();
// This function returns the selection of the computer
function getAISelection() {
    //TODO: randomly choose between 'rock', 'paper', or 'scissors'
    var get = Math.random () *3;
  
  var ai=Math.floor (get + 1);
 if(ai == 1 ) {
    
    return "rock";
    
  }  else if (ai== 2){
    
   return "paper";  
  } else {
    
    return "scissors";
  
  }
    return ai;
    
    //TODO: randomly choose between 'rock', 'paper', or 'scissors'
}



// This function picks the winner
function pickWinner(userValue, aiValue)

{
    
    
  if ( userValue == "rock" && aiValue == "paper") { return "ai";}
  if ( userValue == "rock" && aiValue == "rock") { return "draw";}
  if ( userValue == "rock" && aiValue == "scissors") { return "user";}
  
  if ( userValue == "paper" && aiValue == "scissors") { return "user";}
  if ( userValue == "paper" && aiValue == "paper") { return "draw";}
  if ( userValue == "paper" && aiValue == "rock") { return "ai";}
  
  if ( userValue == "scissors" && aiValue == "rock") { return "ai";}
  if ( userValue == "scissors" && aiValue == "scissors") { return "draw";}
  if ( userValue == "scissors" && aiValue == "paper") { return "user";}
    //TODO: pick the correct winner: user or ai
    //TODO: Add one point for the winner
}



// This function sets the scoreboard with the correct points
function setScore() {
$("#userPoint").text(userPoint);
$('#aiPoint').text(aiPoint);

}


// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue);

    if ( 'user' === winner ) {
        userPoint++;
    
        $('#message').delay(50).text('You have won!, Click a box to play again'+" The computer chose "+ aiValue +".");
    } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again'+ " The computer chose "+ aiValue +".");
         
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again'+" The computer chose " + aiValue +".");
        aiPoint++;
    }
}

// This function runs on page load
$(document).ready(function(){
    
$('.token').click( function(e) {
    
    evaluate(e);
    setScore();
    
})


});
