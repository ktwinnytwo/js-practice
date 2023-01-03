// ===============
// YIKES!!!!!!!!!!!
// ===============
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


/* without the "doNext" it will just change to one color and thats it. 
It would be the same as timeouts without the nesting. The doNext
is basically the nesting part */

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        //This line checks to see if there even is a doNext that was defined
        //If not, then it does nothing
        doNext && doNext();
    }, delay)
}

// STILL A LOT OF NESTING!!!
delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000)
            })
        })
    })
});

//Realistic situation for this nesting dependency:

// searchMoviesAPI('amadeus', () => {
//     saveToMyDB(movies, () => {
//         //if it works, run this:
//     }, () => {
//         //if it doesn't work, run this:
//     })
// }, () => {
//     //if API is down, or request failed
// })

/*
Working with data from a movies database:
Search the database for any movie with the word amadeus. 
This function will accept a callback, which will be executed whenever
it is done searching through the movies.
Once it's done searching, we want it to send the list of movies 
to your own database.
So there is another function "saveToMyDB".
In many situations you'll have a callback that runs if its a success
and another callback that runs if it fails
 */
