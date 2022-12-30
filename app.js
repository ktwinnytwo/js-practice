/* Goal: When a button or h1 is clicked, give it a 
random bg color and a random text color*/

//select all the buttons
const buttons = document.querySelectorAll('button');

//select all the h1s
const h1s = document.querySelectorAll('h1');

/*create a generic colorize function:
- this will change the background and font color of anything because
we're using the keyword "this".
- Cannot use arrow function here
*/
function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}
/*NOTE: the "this" keyword will refer to whatever the target of 
the event is. So if it's a button being clicked, the button is "this"*/


//loop through all the buttons and add an event listener on click
for(let button of buttons) {
    button.addEventListener('click', colorize);
}

//loop through all the h1s and add an event listener on click
for(let h1 of h1s) {
    h1.addEventListener('click', colorize);  
}

//function for random color
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}
