/* Factory functions create a unique copy of the methods/functions each time
its used for a new variable. Constructor functions allow for prototypes, which
means there is no unique copy, they all use the same one from the same prototype.

if you took the factory functions: rgb1.hex === rgb2.hex this would be false
because they are not referencing the same function.

In a constructor function, it would be true because they're referencing the same
function from the same prototype
*/

// This is a Constructor Function...
function Color(r, g, b) {
	//by itself, in all of these, 'this' refers to the window object,
	//but with the NEW keyword, 'this' will reference the 
	//object that was created with the NEW keyword
	this.r = r;
	this.g = g;
	this.b = b;
}

//If you call it on its own like a regular function...
Color(35, 60, 190); //undefined
//It returns undefined. Seems useless!

// *****************
// THE NEW OPERATOR!
// *****************

// 1. Creates a blank, plain JavaScript object;
// 2. Links (sets the constructor of) this object to another object;
// 3. Passes the newly created object from Step 1 as the this context;
// 4. Returns this if the function doesn't return its own object.

//Now we can add methods to the prototype object, and they are created OUTSIDE
//of the constructor function:
Color.prototype.rgb = function() {
	const { r, g, b } = this;
	return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function() {
	const { r, g, b } = this;
	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function(a = 1.0) {
	const { r, g, b } = this;
	return `rgba(${r}, ${g}, ${b}, ${a})`;
};
//all of these methods will appear on the __proto__ reference 
//each time a 'new' object is created

const color1 = new Color(40, 255, 60);
color1.hex();
const color2 = new Color(0, 0, 0);
color2.hex();
