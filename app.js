/*
AXIOS: A library for making HTTP requests
Allows us to avoid the parsing step in Fetch.

Axios needs to be imported into our code before we can use it.
https://github.com/axios/axios#installing -> docs

We take the jsDelivr CDN and put that script in our html
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

*/


/*  Using Axios:
we do a .get request with the url:
axious
  .get(url)
  .then(() =>{
    //no parsing necessary
  })
  .catch(() => {

  })
*/

// .THEN METHOD:

// axios
//   1. .get("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("RESPONSE: ", res);
//   })
//   2. .catch((e) => {
//     console.log("ERROR! ", e);
//   });


//ASYNC/AWAIT METHOD:
//If you're looking for a specific person, then you put he id within
//the parameter
// const getStarWarsPerson = async (id) => {
//   try {
//     //1
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log(res.data);
//     //2
//   } catch (e) {
//     console.log("ERROR", e);
//   }
// };

// getStarWarsPerson(5);
// getStarWarsPerson(10);


/**** HEADERS WITH AXIOS *****/
//Challenge: Add each new joke to the page inside the ul

const jokeList = document.querySelector('#jokes');
const button = document.querySelector('button');
const getDadJoke = async() => {
  //const res = await axios.get('https://icanhazdadjoke.com/');
  //console.log(res); <-- this returns html if you look in the data key
  //if we want JSON for this particular API we have to include a header:
  const config = { headers: {Accept: 'application/json'}} //this wording is something found in the docs of the API
  const res = await axios.get('https://icanhazdadjoke.com/', config);
  //we could include the header directly after the url, but it looks kinda messy
  console.log(res); //this returns JSON in the data key

  //Extract the joke out of the data, and return it so we can save it in a variable
  //when we call it in the next function
  return res.data.joke;
}

//function for adding a new joke
const addNewJoke = () => {
  //Call the API request function
  const jokeText = getDadJoke()
  //Create an li
  const newLi = document.createElement('LI');
  //appending the text from the API call to the li
  newLi.append(res.data.joke)
  //append that li to the ul
  jokeList.append(newLi);
}

//add event listener to the button
button.addEventListener('click', )
