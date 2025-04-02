function cashRegister(cart) {
    let total = 0;
    for (const price of Object.values(cart)) {
        total += parseFloat(price);
    }
    return total.toFixed(2);
}
const cartForParty = { banana: "1.25", handkerchief: ".99", Tshirt: "25.01" };
console.log(cashRegister(cartForParty)); // Output: 60.55