// start with strings, numbers and booleans
// let age = 100;
// let age2 = age;
// console.log(age, age2)

// age = 200;
// console.log(age, age2)

// let myName = 'steve';
// let myName2 = myName;
// console.log(myName, myName2);

// myName = 'Mike';
// console.log(myName, myName2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
// and we want to make a copy of it.
const teams = players;
teams[4] = 'Steve';
console.log(teams);
console.log(players); //team is just a reference to the players
//array.Changes made to team will also be reflected in players
// You might think we can just do something like this:
// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. 
//They both point to the same array!
// So, how do we fix this? We take a copy instead!
// one way
const team = players.slice();
// or create a new array and concat the old one in
const team1 = [].concat(players);
// or use the new ES6 Spread
const team2 = [...players];
team2[5] = 'Muchendu'
//another way
const team3 = Array.from(players)
console.log(`This is team3 ${team3}`)
// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:
const captain = person;


// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2)
// We will hopefully soon see the object ...spread
const cap3 = { ...person }
console.log(cap3)
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const steve = {
    name: 'Steve', 
    age: 201,
    social: {
        twitter: '@steve',
        facebook: 'steve.developer'
    }
}
console.clear()
console.log(steve)

const dev = Object.assign({}, steve)
dev.name = 'Max'
console.clear()
console.log(dev)

dev.social.twitter = '@max';
console.clear()
console.log(dev.social)
console.log(steve.social) // also updates the steve object

//a way to copy and change the contents of an object inside an object

var dev1 = JSON.parse(JSON.stringify(steve));
dev1.social.twitter = '@kim';
console.log(dev1)
console.log(steve)