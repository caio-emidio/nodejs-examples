var arr1 = new Array();
var arr2 = [];

Array.isArray(arr1);
Array.isArray(arr2);
Array.isArray({});

var myData = ['a','b','c']; 

myData.push(1); // add at the end 
console.log(myData); // prints [1] 

myData.push(2); // add at the end 
console.log(myData); // prints [1,2] 


myData.unshift(0); // add to the top 
console.log(myData); // prints [0,1,2] 

// Arrays are zero index based: 
console.log(myData[0]); // prints 0 

//example for inside a array
console.log(`Printing a for: ${myData}`)
for (var i = 0; i < myData.length; i++) {
    console.log(myData[i]);
}

// To delete use splice
myData.splice(2, 1); //(index, quantity)
console.log(`after delete-splice a for: ${myData}`)

// or pop, remove the last
myData.pop();
console.log(`after delete-pop for: ${myData}`)

