function fixStart(str) {
    const firstChar = str[0];
    const restOfString = str.slice(1).replace(new RegExp(firstChar, 'g'), '*');
    return firstChar + restOfString;
}
console.log(fixStart('hello hi')); 