// Function to validate card number using regular expression
function validateCardNumber(card_num) {
    // Regular expressions for card numbers
    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const mastercardRegex = /^5[1-5][0-9]{14}$/;
    const amexRegex = /^3[47][0-9]{13}$/;
    const discoverRegex = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
    const verveRegex = /^((506(0|1))|(507(8|9))|(6500)|(6504)|(6505)|(6509)|(6512)|(6521)|(6522))[0-9]{10}$/;

    if (visaRegex.test(card_num)) {
        return "VISA";
    } else if (mastercardRegex.test(card_num)) {
        return "MASTERCARD";
    } else if (amexRegex.test(card_num)) {
        return "AMEX";
    } else if (verveRegex.test(card_num)) {
        return "VERVE";
    } else if (discoverRegex.test(card_num)) {
        return "DISCOVER";
    } else {
        return "INVALID";
    }
}

// Array of specific card numbers for testing
const card_numbers = [
    "40000114426373",
    "455647829887",
    "501123444444483354",
    "39928377484843",
    "6011054628216702",
    "35289012637479",
    "6500247350282417",
    "375555512635199",
    "400001126373",
    "5555555555554444",
    "378282246310005",
    "5060990580000217499",
    "4916188092401778",
    "5105105105105100",
    "371449635398431",
    "5060990580000217490"
];

// Test specific card numbers
for (const card_num of card_numbers) {
    console.log(`Card Number: ${card_num}, Type: ${validateCardNumber(card_num)}`);
}
