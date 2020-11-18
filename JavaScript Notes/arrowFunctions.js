//we need to talk about this before going ahead with Arrays

function Submit() {
    console.log(addNumbers(12,90));
}

//different ways to define a method

//passing paramters in the arrow functions
addNumbers = (a,b) => "addition is : " + (a + b);

//dropping the curly braces for the method
//addNumbers = () => "addition is : " + (12 + 24);


//using arrow functions for the first time
// addNumbers = () => {
//     return "addition is : " + (12 + 24);
// }

// assigning function to something
// let addNumbers = function () {
//     return "addition is : " + (12 + 24);
// }

//without any arrow function
// function addNumbers() {
//     return "addition is : " + (12 + 24);
// }