const recipe1 = {
    title: 'Mole',
    servings: 2,
    ingredients: ['cinnamon', 'cumin', 'cocoa']
};

const recipe2 = {
    title: 'Curry',
    servings: 3,
    ingredients: ['Curd', 'Besan', 'Salt']
};

const recipe3 = {
    title: 'Pizza',
    servings: 1,
    ingredients: ['Cheeze', 'Bread', 'Sauce']
};

console.log(recipe1.title);
console.log(`Serves: ${recipe1.servings}`);
console.log('Ingredients:');
recipe1.ingredients.forEach(ingredient => console.log(ingredient));

console.log("\n")

console.log(recipe2.title);
console.log(`Serves: ${recipe2.servings}`);
console.log('Ingredients:');
recipe2.ingredients.forEach(ingredient => console.log(ingredient));

console.log("\n")

console.log(recipe3.title);
console.log(`Serves: ${recipe3.servings}`);
console.log('Ingredients:');
recipe3.ingredients.forEach(ingredient => console.log(ingredient));
