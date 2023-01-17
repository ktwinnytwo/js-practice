# js-practice
different exercises
This file contains different practice exercises in each branch

---HTTP Headers---

    An additional way of passing information with a request and a response
    kind of like meta data, add-on details to your requests
    The response might come with headers as well
    some APIs require custom headers (example: Dad Jokes API)
    It wont send you a JSON response unless you specify it in the header 
    Example: Accepted "accept" headers: text/html : HTML response (default response) application/JSON : JSON response text/plain : plain text response No way to pass this header in the URL itself. Must be through AJAX

in the hopscotch parameters: key: accept / value: application/json

-- HTTP VERBS --

Different types Get - generally used when trying to get or receive information Post - generally used when trying to send or "post" data somewhere Put Fetch Head Delete

-- HTTP Status Codes --

Status codes: a code that comes back in response to an HTTP method: Successful responses - something within the 200s is usually good Redirection responses - 300s Client error responses - 400s (user side like a 404) Server error responses - 500s (server side - host server) Informational responses - 100s

---Prototypes---

Something about proto: simple accessor property on Object. prototype consisting of a getter and setter function.

Ex: Arrays do not have a method attached to them called .length or .push() if you look at their properties. Instead all of these methods are attached to the prototype, and they all call the same prototype instead of having to attach all those methods individually to each array.

One Prototype object can be attached to multiple things

---Object Oriented Programming---

Example: say you create a class for Color. If you create a new color class:

const logoColor = new Color('emerald', [46,204,113])

Now you have access to the methods in the Color class. It contains methods to let you do the following:

    calculate the opposite color
    calculate the hex code for the color
    give you a slightly lighter version of your color
    give you a slightyl darker version of your color

Now everytime you create a new class of Color, all of them will have access to the methods in that class.


--- THIS KEYWORD EXPLAINED ---
	/* THIS EXPLANATION IN THIS SITUATION:

	The point of destructuring r, g, b is to make sure that if you update 
	the .r, .g, .b properties of a color object, the output of the .rgb method will change accordingly.

	Suppose you don't destructure, and you create a color object like so:

	const firstColor = makeColor(35, 255, 150)

	If you don't destructure, the string literal `rgb(${r}, ${g}, {b})` 
	will be evaluated only once when you first create the object, and 
	the resulting string will be 'hard coded' as the output of the object's .rgb method.

	So, whenever you call firstColor.rgb() , you will get the string 
	"rgb(35, 255, 150)", no matter what the current values
	are of firstColor.r, firstColor.g, or firstColor.b.

	For example, suppose you later decide to change the value of firstColor.r as 
	Colt does at 7:22 like so:

	firstColor.r = 255

	You will still get "rgb(35, 255, 150)" if you call firstColor.rgb(). 
	You will get 35 instead of 255 because that's the value that you entered 
	when you first created the object.

	Of course, you can manually update the .rgb method to match the properties 
	in question, but the point of destructuring is that you don't have to update 
	the method every time you update firstColor.r, firstColor.g, or firstColor.b. 
	The output will automatically change as soon as you update the properties, 
	because the .rgb method is now looking at those properties.*/

	/*Explanation 2:

	So, if we don't destructure the values from the this keyword (that points to the object we created) 
	to get the direct object properties, it would try to read it from the makeColor function parameters.

	However, we want to use the this keyword to make sure that it always loads the current 
	object values when we call the .rgb() method on the object. You can test it with this code, 
	for example:

		function makeColor(r, g, b) {
			const color = {}
			color.r = r
			color.g = g
			color.b = b
			color.rgb = function () {
				const {r, g, b} = this; // try commenting/uncommenting this and see 
				how the output is different
				return `rgb(${r}), (${g}), (${b})`
			}
			return color
		}
		 
		const test = makeColor(100, 100, 100);
		console.log(test.rgb());
		test.r = 200;
		console.log(test.rgb());

	So, if we load the properties from the object (with the this keyword) it will load the 
	current values, while otherwise, it would just load the initially passed in arguments 
	to the makeColor function. Try commenting and uncommenting the line commented above to 
	analyze the difference in the output. 
	*/
