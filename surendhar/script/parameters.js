// function max_townums_range(x, y){	
//     if( (x >= 40) && (x <= 60) && (y >= 40 && y <= 60) ){
//     if(x === y){
//     return "Numbers are the same";
//     }else if (x > y){
//     return x;
//     }else{
//     return y;
//     }
//     }else{
//     return "Numbers don't fit in range";
//     }
//     }
    
//     console.log(max_townums_range(45, 60));
//     console.log(max_townums_range(25, 60));
//     console.log(max_townums_range(45, 80));




// function factorial(x) 
// { 

//   if (x === 0)
//  {kook
//     return 1;
//  }
//   return x * factorial(x-1);
         
// }
// console.log(factorial(5));





function analyzeNumber() {
    // Get the input value as a number
    const number = parseFloat(document.getElementById("numberInput").value);

    // Check if the number is positive, negative, or zero
    if (isNaN(number)) {
        document.getElementById("result").innerHTML = "Please enter a valid number.";
    } else if (number > 0) {
        document.getElementById("result").innerHTML = "The number is positive.";
    } else if (number < 0) {
        document.getElementById("result").innerHTML = "The number is negative.";
    } else {
        document.getElementById("result").innerHTML = "The number is zero.";
    }
}
 



// function isPalindrome(str) {
//     // Remove spaces, punctuation, and convert to lowercase
//     const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

//     // Compare the cleaned string with its reverse
//     const reversedStr = cleanedStr.split('').reverse().join('');

//     return cleanedStr === reversedStr;
// }

// function checkPalindrome() {
//     const inputString = document.getElementById("inputString").value;
//     const resultElement = document.getElementById("result");

//     if (isPalindrome(inputString)) {
//         resultElement.innerHTML = `"${inputString}" is a palindrome.`;
//     } else {
//         resultElement.innerHTML = `"${inputString}" is not a palindrome.`;
//     }
// }





