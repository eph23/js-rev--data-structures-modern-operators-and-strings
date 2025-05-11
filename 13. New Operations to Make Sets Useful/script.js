'use strict';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection: ', commonFoods);

console.log([...commonFoods]);

const unionFoods = italianFoods.union(mexicanFoods);
console.log('Union: ', unionFoods);
console.log([...unionFoods]);

const unionFoods2 = new Set([...italianFoods, ...mexicanFoods]);
console.log(unionFoods2);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Unique Italian', uniqueItalianFoods);

const uniqueMexican = mexicanFoods.difference(italianFoods);
console.log('Unique Mexican:', uniqueMexican);

const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexicanFoods);

console.log(italianFoods.isDisjointFrom(italianFoods));
