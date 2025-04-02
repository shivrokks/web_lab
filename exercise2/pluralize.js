function pluralize(noun,number) {
    const irregularNouns = {
        sheep: 'sheep',
        goose: 'geese',
        deer: 'deer',
        fish: 'fish'
    };

    let pluralNoun;

    if (irregularNouns[noun]) {
        pluralNoun = irregularNouns[noun];
    } else {
        pluralNoun = noun + (number === 1 ? '' : 's');
    }

    return `${number} ${pluralNoun}`;
}


console.log("cat :" + pluralize('cat',2));     
console.log("dog : "+ pluralize('dog',1));      
console.log("sheep : "+pluralize('sheep',3));    
console.log("goose : " + pluralize('goose',2));    
console.log("deer : " + pluralize('deer',7));    
console.log("fish : " +pluralize('fish',1));     