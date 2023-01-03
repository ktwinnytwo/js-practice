
/* A Promise is an object representing the eventual success or failure
of an asynchronous operation.

A promise is a returned object to which you attach callbacks, instead
of passing callbacks into a function*/

// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

/*** CALLBACK VERSION ***/

// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log("IT WORKED!!!!")
//         console.log(response)
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log("IT WORKED AGAIN!!!!")
//                 console.log(response)
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log("IT WORKED AGAIN (3rd req)!!!!")
//                         console.log(response)
//                     },
//                     function (err) {
//                         console.log("ERROR (3rd req)!!!", err)
//                     })
//             },
//             function (err) {
//                 console.log("ERROR (2nd req)!!!", err)
//             })
//     }, function (err) {
//         console.log("ERROR!!!", err)
//     })

// makeRequest(() => {
//     //success
//     makeRequest(() => {
//         //success
//         makeRequest(() => {
//             //success
//         }, () => {
//             //fail
//         })
//     }, () => {
//         //fail
//     })
// }, () => {
//     //fail
// })



/*** PROMISE VERSION ***/
/*  .then is for what happens if its a success
    .catch is for what happens if it fails*/

/* fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(() => {
        console.log("IT WORKED!!!!!! (page1)")
        fakeRequestPromise('yelp.com/api/coffee/page2')
        .then(() => { 
            console.log("IT WORKED!!!!!! (page2)")
            fakeRequestPromise('yelp.com/api/coffee/page3')
            .then(() => {
                console.log("IT WORKED!!!!!! (page3)")
            })
            .catch(() => {
                console.log("OH NO, ERROR!!! (page3)")
            })
        })
        .catch(() => {
            console.log("OH NO, ERROR!!! (page2)")  
        })
    })
    .catch(() => {
        console.log("OH NO, ERROR!!! (page1)")
    }) */


// THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
/* The data and error parameters are coming from the function itself
for what happens if its a success or failure*/
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log("IT WORKED!!!!!! (page1)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    //This .then is being called on the returned promise from the previous promise
    .then((data) => {
        console.log("IT WORKED!!!!!! (page2)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data)=> {
        console.log("IT WORKED!!!!!! (page3)")
        console.log(data)
    })
    //If at any point any of the above promises fails, it falls through and
    //this .catch will go through
    .catch((error) => {
        console.log('oh no, a request failed')
        console.log(error)
    })