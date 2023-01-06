/*

Fetch API

Better than using XHR
-Newer(ish) way of making requests via JS
-Supports promises
-Not supported in IE (surprise surprise)

Fetch returns a promise
*/


/*Syntax: 
fetch(url) 
.then((res) => {
  //if its resolved
  return res.json()
})
.catch((e) => {
  //if it fails
})

res.json() -> allows us to parse the information 
(only used with the fetch response object) but this method returns a promise
so we need another .then() in order to get the data from it.

You can do res.json().then(() => {  //code }), or you can return res.json()
  and do the .then on a separate line after (like below). It looks cleaner.
*/

fetch("https://swapi.dev/api/people/1/")
  .then((res) => {
    console.log("RESOLVED!", res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log("ERROR!", e);
  });


// 1. fetch("https://swapi.dev/api/people/1/")
//    1. .then((res) => {
//     console.log("RESOLVED!", res);
//     2. return res.json();
//   })
//   2. .then((data) => {
//    3. console.log(data);
//     4. return fetch("https://swapi.dev/api/people/2/");
//   })
//   4. .then((res2) => {
//     console.log("SECOND REQUEST RESOLVED!!!");
//    5. return res.json();
//   })
//   5. .then((data2) => {
//     6. console.log(data2);
//   })
//   7. .catch((e) => {
//    7. console.log("ERROR!", e);
//   });

// These above requests can be done independently, the way they are written
//now has them depending on each other. This can be resolved through an
//async function

const loadStarWarsPeople = async () => {
  try {
    //1. get the first fetch and save that return in the variable res
    const res = await fetch("https://swapi.dev/api/people/1/");
    //2. parse the response gotten from the fetch and save it in the variable data
    const data = await res.json();
    //3. console.log the data that we received after we parsed the response
    console.log(data);
    //4. Save the response from the 2nd fetch request in the variable res2
    const res2 = await fetch("https://swapi.dev/api/people/2/");
    //5. parse the response gotten from the 2nd fetch and save it in the variable data2
    const data2 = await res2.json();
    //6. console.log the data2 that we received after we parsed the response
    console.log(data2);
    //7. Catch any errors and log it
  } catch (e) {
    console.log("ERROR!!!", e);
  }
};

loadStarWarsPeople();
