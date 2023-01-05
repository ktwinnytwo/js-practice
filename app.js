//API: Application programming interface - basically any interface 
//for one piece of software to interact or communicate 
//with another piece of software

/*Usually when someone says API though, theyre referring to a Web API
-http based
-Weather, facebook, twitter, google etc. 
-They expose certain "endpoints" 
-endpoints respond with some information for other pieces
of software to consume
-endpoints allow other software to access information 
from another software 
When requesting info from an API endpoint
- it can give a simple JSON code that you can extract
your information from
- Not all APIs are free
*/


/* Format that APIs use to send data back after a request:
Before:
AJAX
Asynchronous
Javascript
and
XML (kinda looks like HTML)

XML was the most popular language but its barely used today anymore.

Today: (still called AJAX, but it should be AJAJ)
AJAJ
Asynchronous
Javascript
and
JSON - Javascript Object Notation

JSON can be used with other languages as well, not just JS
*/

//THIS IS A STRING OF JSON (NOT AN OBJECT)
const data = `{"ticker":{"base":"BTC","target":"USD","price":"11288.49813464","volume":"91769.69699773","change":"-46.29462447"},"timestamp":1596510482,"success":true,"error":""}`

//If we want to use the JSON in JS, we have a method that
//parses the JSON into a JS object: JSON.parse()

// JSON -> JS object
const parsedData = JSON.parse(data);

/* If I wanted to extract the BTC price out of that JSON string 
one its been parsed */

parsedData.ticker.price


/*JS object -> JSON : say we wanted to send information to an API, we can
turn JS into a JSON string: JSON.stringify(); */

const dog = {
    breed: 'lab',
    color: 'black',
    isAlive: true,
    owner: undefined
}

JSON.stringify(dog);

/*Output: '{"breed":"lab","color":"black","isAlive":true}'  

Note: owner is not there because JSON does not recognize "undefined"
*/

