/**
 *
 * pokepoke.js
 * Pokemonizes the string you enter. Uses NodeJS.
 *
 * To be used with NodeJS. Won't work in browser.
 *
 * Created by sidmishraw on 6/2/17.
 */

"use strict";

const http = require("http");

((function (exports) {

	"use strict";

	exports.__BASE_URL__ = "http://pokeapi.co/api/v2/";
	exports.__API_URL__ = "pokemon/";

	/**
	 * Pokemonizes the string by rambling it and then using the pokemondb to
	 * get the pokemon names for the pokemonIds
	 *
	 * @param inputString - The input string the needs to be pokemonized
	 *
	 * @param callbackFunction - The function containing the set of logic
	 * needed to be executed after making the pokemonNameString
	 */
	exports.pokemonize = function (inputString, callbackFunction) {

		http.get(exports.__BASE_URL__ + exports.__API_URL__, function (response) {

			var rawData = "";

			response.on("data", function (chunk) {

				rawData += chunk;
			});

			response.on("end", function () {

				var parsedObject = JSON.parse(rawData);

				var totalPokemonCount = parsedObject["count"];

				if (totalPokemonCount === null ||
					totalPokemonCount === undefined ||
					!String(totalPokemonCount).match(/[0-9]+/i)) {

					// default
					totalPokemonCount = 151;
				}

				// will split the string into an array of chars
				var splittedChars = inputString.split("");

				// filter out whitespaces
				splittedChars = splittedChars.filter(function (char) {

					return char.match(/\s+/) === null ? true : false;
				});

				// pokemon name strings
				var pokeNameString = [];
				var totalCount = splittedChars.length;

				splittedChars.forEach(function (char) {

					// console.log("Random pokemon = " + parseInt(Math.random() * 1000));

					// generate a randomPokemonId all the time
					var randomPokemonId
						= (parseInt(Math.random() * 1000) % totalPokemonCount) + 1;

					// fetch the pokemonname
					http.get(exports.__BASE_URL__ +
						exports.__API_URL__ +
						randomPokemonId.toString() + "/", function (response) {

						var rawData = "";

						response.on("data", function (chunk) {

							rawData += chunk;
						});

						response.on("end", function () {

							var parsedData = JSON.parse(rawData);
							var pokeName = parsedData["name"];

							// console.log(pokeName);

							pokeName = (pokeName[0].toUpperCase() + pokeName.slice(1));

							pokeNameString.push(pokeName);

							if (pokeNameString.length === totalCount) {

								// console.log(pokeNameString.join("^(*_*)^"));
								callbackFunction(pokeNameString.join("^(*_*)^"));
							}
						});
					});
				});
			});
		});
	};

})(this.pokepoke = {}));

// test
// this.pokepoke.pokemonize("sidmishraw", function (data) {
// 	console.log(data);
// });

// export the pokepoke to be used by the world
module.exports.pokepoke = this.pokepoke;