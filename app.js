/* When creating a promise: it requires a function with 
2 parameters (a resolve and a reject parameter and both are usually functions) */

// new Promise((resolve, reject) => {
//     //resolve / reject functions
// }) 

//const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.floor(Math.random()*5) + 1;
//         setTimeout(() => {
//             if(rand < 3) {
//                 //whatever is passed into these () for resolve and reject,
//                 //you can use these in .then and .catch
//                 resolve(`here is your data`);
//             } else {
//                 reject(`your data got lost`);
//             }
//         }, 2000)
//     })
// }

// fakeRequest('google.com')
//     .then((data) => {
//         console.log(data);
//         console.log('request finished')
        
//     })
//     .catch((data) => {
//         console.log(data);
//         console.log('failed')
//     })


/* Color change with timeout using PROMISES */
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        const rand = Math.floor(Math.random()*10) + 1;
        setTimeout(() => {
            if(rand > 5) {
                document.body.style.backgroundColor = color;
                resolve(`Color changed to ${color}`);   
            } else {
                reject(`Could not change to ${color}`);
            }
           
        }, delay)
    })
}

/* with no console.logs or reject branching, it's very clean */
    // delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))

delayedColorChange('red', 2000)
    .then((response) => {
        console.log(response)
        console.log('color changed successfully')
        return delayedColorChange('green', 2000)
    })
    .then((response) => {
        console.log(response)
        console.log('color changed successfully')
        return delayedColorChange('yellow', 2000)
    })
    .then((response) => {
        console.log(response)
        console.log('color changed successfully')
        return delayedColorChange('orange', 2000)
    })
    .then((response) => {
        console.log(response)
        console.log('color changed successfully, final color')
    })
    .catch((response) => {
        console.log(response)
        console.log('color change failed')
    })


/* Color change with timeout WITHOUT Promises */

// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }

// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000, () => {
//                     delayedColorChange('indigo', 1000, () => {
//                         delayedColorChange('violet', 1000, () => {

//                         })
//                     })
//                 })
//             })
//         })
//     })
// });





