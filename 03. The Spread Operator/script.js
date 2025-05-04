'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  //Method for array destructuring
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //Method for object destructuring
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  //Method for spread operator
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
};

// The spread operator
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

// Adding Elements While Copying
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenu = [...restaurant.mainMenu];

// Join/merge two arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Spreading a String into Characters
const str = 'Ephraim';
const letters = [...str];
console.log(letters);

// Spread in Function Arguments
/* const ingredients = [
  prompt(`Lets make pasta! Ingredient 1?`),
  prompt(`Ingredient 2?`),
  prompt(`Ingredient 3?`),
];
console.log(ingredients); 
restaurant.orderPasta(...ingredients);
*/

// Spread with Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
