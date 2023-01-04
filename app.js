/* Async functions - a newer and cleaner syntax for working with async code.
Syntax "makeup" for promises 
same thing behind the scenes, but just making it look cleaner*/


//2 pieces: async and await

/* ASYNC
- Async functions always return a promise
- If the function returns a value, the promise will be resolved with that value
- If the function throws an exception, the promise will be rejected
*/

async function hello() {
    return 'Hey guys';
}
hello();
//promise {<resolved> : "Hey guys"} 
//there was no promise explicitly stated in the hello function, but async automatically
//returns a promise

async function uhOh() {
    throw new Error('Oh no');
}
uhOh(); 
//Promise {<rejected>: "Oh no"}


const sing = async () => {
    throw "OH NO, PROBLEM!"
    return 'LA LA LA LA'
} 

sing()
    .then(data => {
        console.log("PROMISE RESOLVED WITH:", data)
    })
    .catch(err => {
        console.log("OH NO, PROMISE REJECTED!")
        console.log(err)
    })




const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'corgifeetarecute') return 'WELCOME!'
    throw 'Invalid Password'
}

login('todd', 'corgifeetarecute')
    .then(msg => {
        console.log("LOGGED IN!")
        console.log(msg)
    })
    .catch(err => {
        console.log("ERROR!")
        console.log(err)
    })

 //---------------------------------------------------------------------


/* AWAIT
- Await keyword is most typically used inside of functions declared with async.
- Await will PAUSE the execution of the function, waiting for a promise to be resolved
*/

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))


/*** How the delayed color change looks with AYSNC ***/

async function rainbow() {
    await delayedColorChange('red', 1000)
        //Waits for the promise to be resolved aka waits for the red to appear
    await delayedColorChange('orange', 1000)
        //Waits for the promise to be resolved aka waits for the orange to appear
    await delayedColorChange('yellow', 1000)
        //Waits for the promise to be resolved aka waits for the yellow to appear
    await delayedColorChange('green', 1000)
        //Waits for the promise to be resolved aka waits for the green to appear
    await delayedColorChange('blue', 1000)
        //Waits for the promise to be resolved aka waits for the blue to appear
    return "ALL DONE!"
}

// rainbow().then(() => console.log("END OF RAINBOW!"))

async function printRainbow() {
    await rainbow(); // waits for the entire rainbow function to resolve and then it prints End of rainbow
    console.log("END OF RAINBOW!")
}
printRainbow();


 //---------------------------------------------------------------------
 //Await and Async : Dont have to use .then with its functions and .catch

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 2000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

//Using try and catch: Try when a promise is resolved, Catch when there is an error

async function makeTwoRequests() {
    try {
        //common practice to save the returned value from a promise into a variable
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    } catch (e) {
        console.log("CAUGHT AN ERROR!")
        console.log("error is:", e)
    }

}
