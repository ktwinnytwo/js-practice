//Define our variables
const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

//Create a function for the random color (rgb)
const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

/*Create a function that will:
-create a variable to hold the random color
-> If we don't save it in a variable, and just equal the h1 and he body bg
to randomColor(), it will be called twice and each one will be different.
-change the background color to the random color
-update the h1 with the current rgb number */
btn.addEventListener('click', () =>{
    const bgcolor = randomColor();
    document.body.style.backgroundColor = bgcolor;
    h1.innerText = bgcolor;
})

