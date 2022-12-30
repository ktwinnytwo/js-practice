
const input = document.querySelector('input');

/*Change event only triggers when you type something, and leave or unfocus
the input. You have to type something differente each time, and leave the input*/
// input.addEventListener('change', function(e){
//     console.log('egeg');
// })


const h1 = document.querySelector('h1');
/*input event occurs everytime something is changed. Backspace, space, letters, 
symbols, pasting etc. But not using arrow keys to move through it.*/
input.addEventListener('input', function(e){
    console.log('input event occurred');
    
})



