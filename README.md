# js-practice
different exercises
This file contains different practice exercises in each branch



HTTP Headers

- An additional way of passing information with a request and a response
- kind of like meta data, add-on details to your requests
- The response might come with headers as well
- some APIs require custom headers (example: Dad Jokes API)
- It wont send you a JSON response unless you specify it in the header
Example: 
Accepted "accept" headers:
text/html :  HTML response (default response)
application/JSON :  JSON response
text/plain : plain text response
No way to pass this header in the URL itself. Must be through AJAX

in the hopscotch parameters: key: accept / value: application/json


Prototypes

Something about __proto__: simple accessor property on Object. 
prototype consisting of a getter and setter function.

Ex: Arrays do not have a method attached to them called .length or .push() 
if you look at their properties. Instead all of these methods are attached
to the prototype, and they all call the same prototype instead of having to
attach all those methods individually to each array.

One Prototype object can be attached to multiple things 


---Object Oriented Programming---

Example:
say you create a class for Color.
If you create a new color class:

const logoColor = new Color('emerald', [46,204,113])

Now you have access to the methods in the Color class.
It contains methods to let you do the following:
 - calculate the opposite color
 - calculate the hex code for the color
 - give you a slightly lighter version of your color
 - give you a slightyl darker version of your color

 Now everytime you create a new class of Color, all of them will have
 access to the methods in that class.

