console.log("Hey there!");

// array methods

//The pop() method removes the last element from an array:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();     
console.log(fruits);

//The push() method adds a new element to an array (at the end):


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");   
console.log(fruits);

//The push() method returns the new array length:


var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.push("Kiwi"); 
console.log(x);


//The shift() method removes the first array element and "shifts" all other elements to a lower index.


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();  
console.log(fruits);


//The shift() method returns the string that was "shifted out":

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.shift(); 
console.log(x);

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon")
console.log(fruits);

//Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0]; 
console.log(fruits);

//The splice() method can be used to add new items to an array:


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

//String methods

//The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
console.log(pos);

//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
console.log(pos);

//The search() method searches a string for a specified value and returns the position of the match:

var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
console.log(pos);


//slice() extracts a part of a string and returns the extracted part in a new string.

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
console.log(res);

//The difference is that substring() cannot accept negative indexes.

var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);
console.log(res);

//he difference is that the second parameter specifies the length of the extracted part.

var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);
console.log(res);

//The trim() method removes whitespace from both sides of a string:

var str = "       Hello World!        ";
alert(str.trim());