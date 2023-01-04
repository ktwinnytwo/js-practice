// Task 2: Create a guessing game.

// User story: User can enter a number
// User story: The system picks a random number from 1 to 6
// User story: If users number is equal to a random number, give user 2 points
// User story: If the users number is different from the random number by 1,
// give the user 1 point, otherwise, give the user 0 points.
// User story: User can decide to play the game as long as they want to


//Setup the function with the Promise
const enterNumber = () => {
    return new Promise((resolve, reject) => {
        //Ask the user for a number
        const userNumber = Number(window.prompt("Enter a number 1-6"));
        //Make a random number
        const randNumber = Math.floor(Math.random() * 6) +1;
        //If the user enters a value that is not a number, run reject with an error
        if (isNaN(userNumber)) {
            reject(new Error("Wrong Input Type")); 
          }
            // If the user's number matches the random number, return 2 points
            if(userNumber === randNumber) {
            resolve({
                points: 2,
                randNumber,
            })
            //If the user's number is different by 1
          } else if(Math.abs(userNumber - randNumber === 1)) {
            resolve({
                points: 1,
                randNumber,
            });
          } else {
            //Return 0 points otherwise
            resolve({
                points: 0,
                randNumber,
            });
          }
     
    })
}


//Ask user if they would like to continue:
//You dont need to have a reject everytime you have a Promise
    const continueGame = () => {
         return new Promise((resolve) => {
            if(window.confirm("Do you want to continue?")) {
                resolve(true);
            } else {
                resolve(false);
            }
        })
    }


//function for the guessing part with .then and .catch
// const handleGuess = () => { 
//     enterNumber() //This returns a Promise
//     .then((result) => {
//         // When resolve is run, we get the points and the random number 
//         alert(`Dice: ${result.randNumber}: you got ${result.points} points`)

//         // Let's ask the user if they want to continue the game
//         continueGame().then((result) => {
//             if(result) {
//                 handleGuess(); //if yes, we run handleGuess again
//             } else {
//                 alert("Game ends"); //if no, we show an alert
//             }
//         })

//     })
//     .catch((error) => alert(error));
// }


//Function for the guessing part with ASYNC and AWAIT
const handleGuess = async () => {
    try {
    // Instead of the then method, we can get the result directly by just putting await before the promise
      const result = await enterNumber(); 
  
      alert(`Dice: ${result.randNumber}: you got ${result.points} points`);
  
      const isContinuing = await continueGame();
  
      if (isContinuing) {
        handleGuess();
      } else {
        alert("Game ends");
      }
      // Instead of catch method, we can use the try, catch syntax
    } catch (error) { alert(error); }
  };

  /* You can see that we created an async function by putting async before the brackets. 
     Then in the async function:

     Instead of the then method, we can get the results directly just by putting await before the promise
     Instead of the catch method, we can use the try, catch syntax*/
  handleGuess();