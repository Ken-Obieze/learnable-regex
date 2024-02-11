# Credit Card Validator

## Author
Ejiofor Obieze (B)

This is a simple JavaScript program to validate credit card numbers using regular expressions.

## Usage

1. Clone the repository to your local machine.
	```
		git clone https://github.com/Ken-Obieze/learnable-regex.git
        cd learnable-regex
	```
2. Run the `card_validator.js` file
3. The program will validate some sample credit card number and display the card type (VISA, MASTERCARD, AMEX, DISCOVER, VERVE) or indicate if it's invalid.

## Regular Expressions

Regular expressions are used to validate credit card numbers for the following card types:

- **VISA:** Starts with 4 and is 13 or 16 digits long.
  - Regex: `^4[0-9]{12}(?:[0-9]{3})?$`
    - Explanation: 
      - `^`: Start of the string
      - `4`: Matches the first digit of VISA card numbers
      - `[0-9]{12}`: Matches exactly 12 digits
      - `(?:[0-9]{3})?`: Optionally matches 3 more digits
      - `$`: End of the string

- **MASTERCARD:** Starts with 51, 52, 53, 54, or 55 and is 16 digits long.
  - Regex: `^5[1-5][0-9]{14}$`
    - Explanation:
      - `^`: Start of the string
      - `5`: Matches the first digit of MASTERCARD card numbers
      - `[1-5]`: Matches the second digit (1, 2, 3, 4, or 5)
      - `[0-9]{14}`: Matches exactly 14 digits
      - `$`: End of the string

- **AMEX:** Starts with 34 or 37 and is 15 digits long.
  - Regex: `^3[47][0-9]{13}$`
    - Explanation:
      - `^`: Start of the string
      - `3`: Matches the first digit of AMEX card numbers
      - `[47]`: Matches the second digit (4 or 7)
      - `[0-9]{13}`: Matches exactly 13 digits
      - `$`: End of the string

- **DISCOVER:** Starts with 6011 or 65 and is 16 digits long.
  - Regex: `^6(?:011|5[0-9]{2})[0-9]{12}$`
    - Explanation:
      - `^`: Start of the string
      - `6`: Matches the first digit of DISCOVER card numbers
      - `(?=011)`: Matches if the next 3 digits are 011
      - `|`: OR operator
      - `5[0-9]{2}`: Matches if the next 3 digits start with 5 followed by any two digits
      - `[0-9]{12}`: Matches exactly 12 digits
      - `$`: End of the string

- **VERVE:** Starts with 506(0 or 1), 507(8 or 9), or 65 and is 16 digits long.
  - Regex: `^((506(0|1))|(507(8|9))|(6500)|(6504)|(6505)|(6509)|(6512)|(6521)|(6522))[0-9]{10}$`
    - Explanation:
      - `^`: Start of the string
      - `506(0|1)`: Matches 5060 or 5061
      - `507(8|9)`: Matches 5078 or 5079
      - `(6500)|(6504)|(6505)|(6509)|(6512)|(6521)|(6522)`: Matches 6500, 6504, 6505, 6509, 6512, 6521, or 6522
      - `[0-9]{10}`: Matches exactly 10 digits
      - `$`: End of the string

- **INVALID:** Any other format not matching the above criteria.

## JavaScript Code

The validation logic is implemented in a function.The program runs tests against an already providrd array of card numbers, validates it using regular expressions, and displays the result. Below is the provided array and the output after the validation is carried out.

```javascript
// JavaScript code snippet

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
```

## Output
```bash
  Card Number: 40000114426373, Type: INVALID
  Card Number: 455647829887, Type: INVALID
  Card Number: 501123444444483354, Type: INVALID
  Card Number: 39928377484843, Type: INVALID
  Card Number: 6011054628216702, Type: DISCOVER
  Card Number: 35289012637479, Type: INVALID
  Card Number: 6500247350282417, Type: DISCOVER
  Card Number: 375555512635199, Type: AMEX
  Card Number: 400001126373, Type: INVALID
  Card Number: 5555555555554444, Type: MASTERCARD
  Card Number: 378282246310005, Type: AMEX
  Card Number: 5060990580000217499, Type: INVALID
  Card Number: 4916188092401778, Type: VISA
  Card Number: 5105105105105100, Type: MASTERCARD
  Card Number: 371449635398431, Type: AMEX
  Card Number: 5060990580000217490, Type: INVALID 
```
