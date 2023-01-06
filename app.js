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
const getStarWarsPerson = async (id) => {
  try {
    //1
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
    //2
  } catch (e) {
    console.log("ERROR", e);
  }
};

getStarWarsPerson(5);
getStarWarsPerson(10);
