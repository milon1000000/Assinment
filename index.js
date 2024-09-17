// 1. Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.

function calculateDifference(num1,num2){
    return num1-num2;

} 
let result=calculateDifference(100,50);
console.log(result);


// 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

function isOdd(number){
    if(number%2!==0){
        return true;

    }else{
        return false;
    }
}
let Odd=isOdd(9);
console.log(Odd);


// 3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array.

function findMin(arr){
    return Math.min(...arr);
}
var num12=[11,22,10,20,2,30];
console.log(findMin(num12));





// 4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(arr){
    return arr.filter(function(num){
        return num%2===0;
    });
} 

let numbers=[11,22,33,44,55,66,77,88,2];
let res=filterEvenNumbers(numbers);
console.log(res);


// 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

function sortArrayDescending(){
    let point=[11,22,1,33,444,555,666,1000];
     return point.sort(function(a,b){
        return b-a;
    })
} 

let So=sortArrayDescending();
console.log(So);


// 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.


function LowercaseFirstLetter(str){
    return str[0].toLowerCase() +str.slice(1);
}


console.log(LowercaseFirstLetter("HELLO JAVASCRIPT"));




// 7) Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.

function countVowels(str){
    return [...str].filter(char=>"aeiouAEIOU".includes(char)).length;
}
console.log(countVowels("THIS IS MY COUNTRY "));


// 8.  Write a function named findAverage that takes an array of numbers and returns the average of all elements.

function findAverage(arr){
    return arr.length=== 0?0:arr.reduce((a,b)=>a+b)/arr.length
}

let numberss=[10,2,78,909,44,65,23];
console.log(findAverage(numberss))














