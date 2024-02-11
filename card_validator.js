#!/usr/bin/env node

// Function to validate card number using regular expression
function validateCardNumber(card_num) {
    // Regular expressions for card numbers
    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const mastercardRegex = /^5[1-5][0-9]{14}$/;
    const amexRegex = /^3[47][0-9]{13}$/;
    const verveRegex = /^((506(0|1))|(507(8|9))|(6500)|(6504)|(6505)|(6509)|(6512)|(6521)|(6522))[0-9]{10}$/;

    if (visaRegex.test(card_num)) {
        return "VISA";
    } else if (mastercardRegex.test(card_num)) {
        return "MASTERCARD";
    } else if (amexRegex.test(card_num)) {
        return "AMEX";
    } else if (verveRegex.test(card_num)) {
        return "VERVE";
    } else {
        return "INVALID";
    }
}

    // code for extracting card number
    let card_num;

    // Condition to check for invalid inputs
    do {
	// npm install prompt-sync
  	// to install prompt module
  	const prompt = require('prompt-sync')();
        card_num = prompt("Input card number: ");
    } while (!/^\d+$/.test(card_num)); // Ensures input contains only digits

    let result = validateCardNumber(card_num);
    console.log(result);
