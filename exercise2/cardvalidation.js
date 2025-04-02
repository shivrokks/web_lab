function validateCreditCard(cardNumber) {
    cardNumber = cardNumber.replace(/-/g, '');
    if (cardNumber.length !== 16 || isNaN(cardNumber)) return false;
    if (new Set(cardNumber).size === 1) return false; 
    if (parseInt(cardNumber[15]) % 2 !== 0) return false;
    const sum = cardNumber.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    return sum > 16;
}
console.log(validateCreditCard('9999-9999-8888-0000')); 