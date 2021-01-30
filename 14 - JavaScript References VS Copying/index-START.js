// start with strings, numbers and booleans
// let age = 100;
// let age2 = age;
// console.log(age, age2);
// age = 200;
// console.log(age, age2);
//
// let name = 'Dani';
// let name2 = name;
// console.log(name, name2);
// name = 'danielle';
// console.log(name, name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;

console.log(players, team);
// You might think we can just do something like this: if you update an array it will always reference back
team[3] = 'Lux';
console.log(players, team);

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const team2 = players.slice();

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'heee hawww';
console.log(team4);

const team5 = Array.from(players);
// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

console.log(person);

// and think we make a copy:
// const captain = person;
// captain.number = 99;
// this changes the age

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99});
console.log(cap2);

// We will hopefully soon see the object ...spread
// const cap3 = {...person}; not in Javascript yet

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const dani = {
  name: 'Dani',
  age: 40,
  social: {
    facebook: 'danicoleman',
    instagram: '@djcoleman21'
  }
};

// console.clear();
console.log(dani);

//make a copy
const dev = Object.assign({}, dani); //this only goes one level deep (name, age) need to do a function to get into the social level (clone deep)
dev.name = 'Danielle';
console.log(dev)

// poor mans deep clone:
// const dev2 = JSON.parse(JSON.stringify(dani));
// console.log(dev2)
