function createRestaurant(name) {
  restaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  }
return restaurant;
}

function addMenuItem(restaurantType, newItem) {
  var menuType = newItem.type;
  if (menuType === "lunch") {
    for (var i = 0; i < restaurant.menus.lunch.length; i++) {
      if (newItem === restaurant.menus.lunch[i]) {
        return restaurant
      }
    }
    restaurant.menus.lunch.push(newItem);
  } else if (menuType === "breakfast") {
    for (var i = 0; i < restaurant.menus.breakfast.length; i++) {
      if (newItem === restaurant.menus.breakfast[i]) {
        return restaurant
      }
    }
    restaurant.menus.breakfast.push(newItem);
  } else {
    for (var i = 0; i < restaurant.menus.dinner.length; i++) {
      if (newItem === restaurant.menus.dinner[i]) {
        return restaurant
      }
    }
    restaurant.menus.dinner.push(newItem);
    }
    return restaurant
}

function removeMenuItem(restaurantType, item, menuType) {
  if (menuType === "breakfast"){
    for (var i = 0; i < restaurant.menus.breakfast.length; i++) {
      if (item === restaurant.menus.breakfast[i].name) {
        restaurant.menus.breakfast.splice(i, 1);
        return `No one is eating our ${item} - it has been removed from the ${menuType} menu!`
      }
    }
    return `Sorry, we don't sell ${item}, try adding a new recipe!`
  } else if (menuType === "lunch"){
    for (var i = 0; i < restaurant.menus.lunch.length; i++) {
      if (item === restaurant.menus.lunch[i].name) {
        restaurant.menus.lunch.splice(i, 1);
        return `No one is eating our ${item} - it has been removed from the ${menuType} menu!`
      }
    }
    return `Sorry, we don't sell ${item}, try adding a new recipe!`
  } else {
    for (var i = 0; i < restaurant.menus.dinner.length; i++) {
      if (item === restaurant.menus.dinner[i].name) {
        restaurant.menus.dinner.splice(i, 1);
        return `No one is eating our ${item} - it has been removed from the ${menuType} menu!`
      }
    }
    return `Sorry, we don't sell ${item}, try adding a new recipe!`
  }
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
