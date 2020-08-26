// Constants
const generateBtn = document.querySelector("#generate");

// Functions

/**
 * writes a generated password to the #password
 */
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

const lowercase = "abcdefghijklmnopqrstuvwxyz"

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const numeric = "0123456789"

const special = "!@#$%^&*()"
// console.log(uppercase[4])


/**
 * generate a password based on certain criteria
 */
function generatePassword() {

  // prompt for password criteria 
  // Collect data from user
  let userLength = prompt("Choose amount of characters between 8 to 128")
  // validate user responses 
  let userLowercase = confirm("Do you want lowercase characters?")
  let userUppercase = confirm("Do you want uppercase characters?")
  let userNumeric = confirm("Do you want numeric characters?")
  let userSpecial = confirm("Do you want special characters?")
  // console.log(userLength, userLowercase)

  // Criteria: 8 to 128 characters

  // Type of characters: lowercase, uppercase, numeric, and/or special characters

  // Once confirmations are completed: input validated based on user type selected
  // Once all prompts are answered, then a password is generated that matches selected criteria
  // display as an alert
  // What's our start data? A string? - How does a string pick one character within a string?
  // We want the collection of data 

  // letters function?: create lowercase and uppercase properties within letters function. 

  // Password is currently blank! We need to make a better one
  let password = "";
  let passwordSelections = "";

  // Once all inputs have received. Generate an output for amount of characters user chose. 
  // Based on users character choice, randomize the string of data for that given character/variable. 
  // 
  
  userLength = parseInt(userLength)

  

  if (userLowercase === true) {

    passwordSelections = passwordSelections + lowercase

  }

  if (userUppercase === true) {

    passwordSelections = passwordSelections + uppercase

  }

  if (userNumeric === true) {

    passwordSelections = passwordSelections + numeric

  }

  if (userSpecial === true) {

    passwordSelections = passwordSelections + special

  }

  if (userLength >= 8 && userLength <= 128) {
    
    for (let i = 0; i < userLength; i++){
      let randomCharacter = passwordSelections[Math.floor(Math.random() * passwordSelections.length)];
      password = password + randomCharacter
    }
  }
  
  
  
  // Code out for loop up until the desired character limit is reached, which is stored in the 'userLength' variable. 
  return password;



}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

