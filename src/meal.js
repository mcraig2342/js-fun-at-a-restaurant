function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`;
}

function createMenuItem(name, price, type) {
var menuItem = {
    name: name,
    price: price,
    type: type,
  };
  return menuItem;
}

function addIngredients(newIngredient, ingredients) {
  for (var i = 0; i < ingredients.length; i++) {
    if (newIngredient === ingredients[i]) {
      return ingredients;
    }
  }
    ingredients.push(newIngredient);
    return ingredients;
  }

function formatPrice(initialPrice){
    return "$" + initialPrice;
  }

function decreasePrice(price) {
var decreasedPrice = price * .9;
return decreasedPrice;
}

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  }
return recipe;
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
