const choices = ['', 'green', 'red'];
choices.forEach((choice, index) => {
    const suffix = ['st', 'nd', 'rd'][index] || 'th';
    console.log(`My ${index + 1}${suffix} choice is ${choice}.`);
});