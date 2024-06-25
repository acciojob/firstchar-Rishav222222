function firstChar(text) {
    // Trim the leading and trailing spaces from the string
    text = text.trim();
    
    // Check if the trimmed string is empty
    if (text === "") {
        return "";
    }
    
    // Return the first character of the trimmed string
    return text[0];
}

// Testing the function with various inputs
console.log(firstChar(' Rosa Parks ')); // Output: 'R'
console.log(firstChar(' Hello World ')); // Output: 'H'
console.log(firstChar(' ')); // Output: ''
console.log(firstChar('')); // Output: ''

// Prompt user for input and display the result
const userInput = prompt("Enter text:");
alert(firstChar(userInput));

