// Template for Number Guessing Game

function guessingGame() {
    // Generate a random number between 1 and 10
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let userGuess = prompt("Guess a number between 1 and 10");
  
    try {
      // Convert userGuess to a number and validate it
      userGuess = parseInt(userGuess, 10);
  
      if (isNaN(userGuess)) {
        throw new Error("Invalid input. Please enter a valid number.");
      }
  
      if (userGuess < 1 || userGuess > 10) {
        throw new Error("Out of range! Please choose a number between 1 and 10.");
      }
  
      // Provide feedback on the guess
      if (userGuess === randomNumber) {
        console.log("🎉 Congratulations! You guessed the correct number.");
      } else {
        console.log(`😞 Sorry, the correct number was ${randomNumber}. Better luck next time!`);
      }
    } catch (error) {
      // Display the error message in a user-friendly way
      console.error(`🚨 Error: ${error.message}`);
    }
  }
  
// Start the game
guessingGame();  



