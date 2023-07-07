// let x = 4;

// x = 9
// x = x + 5;
// console.log(x)

// Declear a Function
// function functionName(){
//     console.log("this is a function!");
//     alert('A function ');
// }

// functionName();

let a = 5;
let b = 10;


function add(a,b){ // Parameter
    let result = a+b;
    if(a>b){
        return a;
    } else {
        return b
    };
    return a+b;
}

//Function Expression:
let sub = function(a,b){
    return a-b;
}

// function mul(a,b){
//     return a * b;
// }
// Arrow Function 

let mul = (a,b)=>{
    return a * b;
}



// let ok = 'OK!';
// ok
let sum = add(); //25
console.log('After 1st execution'); //After 1st execution
let sum2 = add(6, 9);
console.log('After 2nd execution');



console.log (sum,sum2);
console.log (sum+sum2);



// add(a,b);// Argument

// add(5,7);

// Rice = Rice

// Function Parameter

// Function Argument

