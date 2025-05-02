'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //Method for array destructuring
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Destructuring arrays
const arr = [2, 3, 4];

const [a, b, c] = arr;
console.log(a, b, c);

const [firstItem, secondItem] = restaurant.categories;
console.log(firstItem, secondItem);

// Skipping array value
const [first, , second] = restaurant.categories;
console.log(first, second);

// Swapping/switching values
const [secondary, primary] = [first, second];
console.log(primary, secondary);

//Destructuring returned value from a function
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// Nested array
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;

const [x, , [y, z]] = nested;

console.log(i, j);
console.log(x, y, z);

// Default Value

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
