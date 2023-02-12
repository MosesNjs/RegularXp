"use strict"
const prompt = require("prompt-sync")({sigint: true})

// This Regular Expression matches for a valid Mastercard number. Mastercard numbers start with a 51-55 and have a total of 16 digits.  

const RegEx = /^5[1-5]\d{14}$/

// This Function prompts for a Mastercard number and begins validation. 

const validate = (cardNo) => {
    cardNo = parseFloat(prompt('Please input your 16 digit MasterCard number: '))   
    // Validates number provided using the Regex test method. Returns a success message and card number  if valid, else starts afresh. 
  
    let test = RegEx.test(cardNo)

    if (test){
        console.log('Card validation successful!');
    } else {
        console.log('Invalid Card number. Please input a valid Card number or contact your service provider for assistance: ');
        validate();
            
        }
    return cardNo
}

// Used to output the details of the regEx match using the exec method 
let regexDetails = validate()
console.log(RegEx.exec(regexDetails));


/* RegEx Description: 
const RegEx = /^5[1-5]\d{14}$/
^ and $ are used at the start and end respectively to ensure that the match starts and ends the string. 
5[1-5] checks for the first 2 digits of a Mastercard that start with 51-55. 
\d{14} tells compiler that we're looking for 14 digits.
*/