





    
        //list variables
    
        
        var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");         
       
        var wins = 0;

        var losses = 0;

        var guessesLeft = 9;
        
        var guessesSoFar = [];        
        
        var guess = [];    
    
        
        
        
    
        //start game with random computerGuess
        var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
            
    
        
        
            
         // When the user presses a key, it will run the following function...
         document.onkeypress = function(event) {
            var userGuess = event.key;
                guess.push(userGuess);
                document.getElementById("guessesSooFar").innerHTML = "guesses so far " + guess;

            if(userGuess === computerGuess){
                wins++;                
                document.getElementById('wins').innerHTML = "Wins: " + wins;
            }else{
                guessesLeft--;
                document.getElementById('guessesLeft').innerHTML = "Guesses left: " + guesses;
            }           
            
            if(guessesLeft === 0){
                losses++               
                document.getElementById('losses').innerHTML = "losses: " + losses;
                
            
       
            }     
            
            
            
        
        } 
    
        
    
// win +1 if user guess and computer choice match before 10 guesses


// lose +1 if user guess and computer choice do not match in 10 guesses

// guesses left -1 if guess and choice do not match

// guesses so far record letters guessed until matched to choice



        
    
        //lert("User guess: " + userGuess);
      
        //alert("Computer choices: " + computerChoices); 
    
    
/* Clear/Reset the text field */    
function clearFields() {
    //reset guess value
    guessInput.value = "";
    //reset counter variable to 0
    counter = 0;
    //reset the text of status output back to the default text in the HTML
    statusOutput.value = "You have yet to guess anything.";
    //set randomNumber to be a new random number
    randomNumber = Math.floor(Math.random() * 100) + 1;
    //added to put function out of call stack
    return false;
  }








    
    //loop win  +1 when user guess matches computer choice 
   // var wins = 1;
   // while (wins < 11) {
       // document.getElementById("demo").innerHTML += wins + "<br>";
      //  wins++;
   // }
    
    //loop losses +1 when user guess doesn't match computer choice after 10 attempts 
  //  var losses = 1;
  //  while (losse < 11) {
    //   document.getElementById("demo").innerHTML += losse + "<br>";
//   losse++;
   
    //loop user guesses left -1 from 10 attepmts, each time guess and choice do not match, then reset to 0
    //var guesses_left = 10;
   // while (guesses_left > 0) {
       // document.getElementById("demo").innerHTML += guesses_left - "<br>";
      //  guesses_left--;
   // }
    
    //loop guesses so far +1 to 10 total until a match between user guess and computer choice, then reset to 0
   // var guesses_so_far = 1;
   // while (guesses_so_far < 11) {
   //     document.getElementById("demo").innerHTML += guesses_so_far + "<br>";
//   guesses_so_far++;
   // }
    
     //   }     
         
