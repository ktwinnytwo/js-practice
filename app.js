/* Prototypes are template objects.

Ex: Arrays do not have a method attached to them called .length or .push() 
if you look at their properties. Instead all of these methods are attached
to the prototype, and they all call the same prototype instead of having to
attach all those methods individually to each array.

We can also add our own methods to __proto__ objects. 

We can also overwrite an already existing method like .push but not a good idea

string is also a prototype (which is where indexOf and toUppercase come from)


PROTOTYPE vs __proto__

__proto__ is just the reference to the actual prototype object.
In order to have access to the prototype object, arrays/strings/etc. must 
reference __proto__ 
*/	 



//String.prototype is a "template object" for every single string.
//We could go crazy and add our own method called yell...
String.prototype.yell = function() {
	return `OMG!!! ${this.toUpperCase()}!!!!! AGHGHGHG!`;
};

'bees'.yell(); //"OMG!!! BEES!!!!! AGHGHGHG!"

//We can overwrite an existing Array method like pop (not a good idea):
Array.prototype.pop = function() {
	return 'SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!';
};
const nums = [ 6, 7, 8, 9 ];
nums.pop(); // "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!"
