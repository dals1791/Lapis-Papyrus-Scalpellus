//Creates an object for player.
let playerChoice = {
    choice: null,
  };
  //Creates an object for computer
  let compChoice = {
    choice: null,
  };
  //Creates array for each of the three game options to choose from.
  const gameOptions = ['Lapis', 'Papyrus', 'Scalpellus'];
  
  
  //functions to play game based on button clicked
  
  function playGameLapis(){
    playerChoice.choice= gameOptions[0];
    console.log(playerChoice.choice);
    compareChoices();
  }
  function playGamePapyrus(){
    playerChoice.choice= gameOptions[1];
    console.log(playerChoice.choice);
    compareChoices();
  }
  function playGameScalpellus(){
    playerChoice.choice= gameOptions[2];
    console.log(playerChoice.choice);
    compareChoices();
  }
  //Event to start game once button is clicked. 
  document.querySelector('#lapis').addEventListener('click', playGameLapis);
  document.querySelector('#papyrus').addEventListener('click', playGamePapyrus);
  document.querySelector('#scalpellus').addEventListener('click', playGameScalpellus);
  
  
   
  //Creates function for computer choice:
  
  function computerChooses(){
    let randomNum = Math.floor(Math.random() *3);
    //replaces computers 'choice' with the game option based on the random number. 0=Lapis;1=Papyrus;2=Scalpellus
    compChoice.choice = gameOptions[randomNum];
  }
  
  
  
  //Creates function to compare player to computer choices
  function compareChoices (){
    computerChooses();
    
    if (compChoice.choice===playerChoice.choice){
      displayResult("It's a tie, play again!");
     }
    else if (compChoice.choice ===gameOptions[0] && playerChoice.choice===gameOptions[2]){
        displayResult("The player loses! The computer chose "+compChoice.choice+" and the player chose "+playerChoice.choice+".")
      }
    else if (compChoice.choice ===gameOptions[1] && playerChoice.choice===gameOptions[0]){
        displayResult("The player loses! The computer chose "+compChoice.choice+" and the player chose "+playerChoice.choice+".")
      }
    else if (compChoice.choice ===gameOptions[2] && playerChoice.choice===gameOptions[1]){
    displayResult("The player loses! The computer chose "+compChoice.choice+" and the player chose "+playerChoice.choice+".")
    } 
    else{
    displayResult("The player Wins! The computer chose "+compChoice.choice+" and the player chose "+playerChoice.choice+".")
  }
  }
  
  //Creates new element on page to display result.
  function displayResult (x){  
    const result = document.createElement('h3');
    result.innerText = x;
    result.setAttribute("id", "result");
    result.setAttribute("style","color: red;");
    document.body.appendChild(result);
  }