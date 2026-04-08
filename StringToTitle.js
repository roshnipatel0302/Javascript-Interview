//Convert String to Title Case
function titleCase(str) {
    if (str.length === 0) {
        return ''; // Return an empty string if the input is empty
    }
    if (str.length === 1) {
        return str.toUpperCase(); // If the string has only one character, return it in uppercase
    }
    if (str.length > 1) {   
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
    }
}

//how it will be calculated for titleCase("hello world"):
// str.toLowerCase() converts "hello world" to "hello world" (no change since it's already lowercase)
// .split(' ') splits the string into an array of words: ["hello", "world"]
// .map(function(word) { ... }) iterates over each word in the array:
//   For "hello":
//     word[0] is "h", word[0].toUpperCase() is "H"
//     word.replace("h", "H") returns "Hello"
//   For "world":
//     word[0] is "w", word[0].toUpperCase() is "W"
//     word.replace("w", "W") returns "World"   

// The .map() function returns a new array: ["Hello", "World"]
// .join(' ') joins the array back into a string: "Hello World"
console.log(titleCase("hello world")); // Output: "Hello World"


// Method 2: Using a for loop
function titleCase(str) {
  let titleCased = ''; // Initialize an empty string to build the title-cased result
  let capitalizeNext = true; // Flag to indicate whether the next character should be capitalized   
    for (let i = 0; i < str.length; i++) { // Loop through each character in the input string
    if (str[i] === ' ') { // If the current character is a space
      titleCased += ' ';
        capitalizeNext = true; // Set the flag to capitalize the next character
    } else if (capitalizeNext) { // If the flag is set to capitalize the next character
      titleCased += str[i].toUpperCase();
        capitalizeNext = false; // Reset the flag after capitalizing
    } else {
      titleCased += str[i].toLowerCase(); // Otherwise, add the character in lowercase
    }   
    }
    return titleCased; // Return the final title-cased string
}

//how it will be calculated for titleCase("hello world"):
// Initialize titleCased = '', capitalizeNext = true
// i = 0: str[0] is 'h', capitalizeNext is true, titleCased becomes 'H', capitalizeNext becomes false
// i = 1: str[1] is 'e', capitalizeNext is false, titleCased becomes 'He'
// i = 2: str[2] is 'l', capitalizeNext is false, titleCased becomes 'Hel'
// i = 3: str[3] is 'l', capitalizeNext is false, titleCased becomes 'Hell'
// i = 4: str[4] is 'o', capitalizeNext is false, titleCased becomes 'Hello'
// i = 5: str[5] is ' ', titleCased becomes 'Hello ', capitalizeNext becomes true
// i = 6: str[6] is 'w', capitalizeNext is true, titleCased becomes 'Hello W', capitalizeNext becomes false
// i = 7: str[7] is 'o', capitalizeNext is false, titleCased becomes 'Hello Wo'
// i = 8: str[8] is 'r', capitalizeNext is false, titleCased becomes 'Hello Wor'    
// i = 9: str[9] is 'l', capitalizeNext is false, titleCased becomes 'Hello Worl'
// i = 10: str[10] is 'd', capitalizeNext is false, titleCased becomes 'Hello World'
console.log(titleCase("hello world")); // Output: "Hello World"