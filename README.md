# The Rambler and PokePoke

A friday fun project. 

## Rambler
It "**rambles**" the string passed in.

Rambles is just my word for converting the string based on a particular base.

      Minimum base = 2
      Maximum base = 36

Usage:

```javascript
const rambler = require("./rambler.js");
        
// The namespace is bulbasaur
// you need to use `bulbasaur` to access the module's
// functions
rambler.bulbasaur.test("hey", 36);              // output: HEY

rambler.bulbasaur.test("8", 2);                 // output: 1000

rambler.bulbasaur.test("duck your head", 16);   // output: D1EC1422181E1B11EAD

console.log("charset for base 12 = ", rambler.bulbasaur.charSet(12));
// output: charset for base 12 =  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B' ]

console.log(rambler.bulbasaur.convertToBase("bulbasaur", 2));
// output: 10111111010101101110101110010101111011011
```

### Methods of bulbasaur:
* `rambler.bulbasaur.charSet( base )` : **base** is an integral number.

* `rambler.bulbasaur.convertToBase(inputString, base)` : **inputString** is 
the input string and **base** is an integral number, the base you want the 
string to be rambled into. It returns the rambled string.

* `rambler.bulbasaur.test(inputString, base)` : prints the rambled string to 
the console. Just a test method.

Please refer to the [main.js](./main.js) for a better example.

###### JS version: ES5

## PokePoke

It **pokemonizes** the input string.
The names are fetched from the [pokeapi](http://pokeapi.co/).

This uses NodeJS for fetching data from the API server.

Please use it with caution since the API server often crashes.

Usage:
```javascript
const pokepoke = require("./pokepoke");

// call the callback function after making the pokemonname string
// with the console.log in it.
pokepoke.pokepoke.pokemonize("Hey there, get here!", function (data) {

    console.log("Pokemonized String = " + data);
});
```
```
// output:
Pokemonized String = Koffing^(*_*)^Cottonee^(*_*)^Clefairy^(*_*)^Floette^(*_*)^Golem^(*_*)^Mewtwo^(*_*)^Groudon^(*_*)^Pidgey^(*_*)^Grovyle^(*_*)^Mienfoo^(*_*)^Krookodile^(*_*)^Golbat^(*_*)^Klefki^(*_*)^Weepinbell^(*_*)^Buizel^(*_*)^Mr-mime^(*_*)^Cranidos
```
###### JS version: ES5
###### NodeJS: v7.10.0
