/**
 * rambler.js
 *
 * The rambler
 *
 * the module object is called `bulbasaur`
 *
 * Created by sidmishraw on 6/2/17.
 */
"use strict";

((function (exports) {
	"use strict";

	/**
	 * Gives the charset for the current base
	 *
	 * @param base - a number which is used to compute the scrambled digits
	 *
	 * @return charset - The array of the character positions representing the
	 * characters allowed for the particular digit.
	 */
	exports.charSet = function (base) {

		switch (base) {

			case 2: {

				return [0, 1];
			}

			case 3: {

				return [0, 1, 2];
			}

			case 4: {

				return [0, 1, 2, 3];
			}

			case 5: {

				return [0, 1, 2, 3, 4];
			}

			case 6: {

				return [0, 1, 2, 3, 4, 5];
			}

			case 7: {

				return [0, 1, 2, 3, 4, 5, 6];
			}

			case 8: {

				return [0, 1, 2, 3, 4, 5, 6, 7];
			}

			case 9: {

				return [0, 1, 2, 3, 4, 5, 6, 7, 8];
			}

			case 10: {

				return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
			}

			case 11: {

				return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A"];
			}

			case 12: {

				return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B"];
			}

			case 13: {

				return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C"];
			}

			case 14: {

				return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D"];
			}

			case 15: {

				return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E"];
			}

			case 16: {

				return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
			}

			case 17: {

				return [0,
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					"A",
					"B",
					"C",
					"D",
					"E",
					"F",
					"G"];
			}

			case 18: {

				return [0,
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					"A",
					"B",
					"C",
					"D",
					"E",
					"F",
					"G",
					"H"];
			}

			case 19: {

				return [0,
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					"A",
					"B",
					"C",
					"D",
					"E",
					"F",
					"G",
					"H",
					"I"];
			}

			case 20: {

				return [0,
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					"A",
					"B",
					"C",
					"D",
					"E",
					"F",
					"G",
					"H",
					"I",
					"J"];
			}

			case 21: {

				return [0,
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					"A",
					"B",
					"C",
					"D",
					"E",
					"F",
					"G",
					"H",
					"I",
					"J",
					"K"];
			}

			case 22: {

				return [0,
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					"A",
					"B",
					"C",
					"D",
					"E",
					"F",
					"G",
					"H",
					"I",
					"J",
					"K",
					"L"];
			}

			case 23: {

				return [0,
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					"A",
					"B",
					"C",
					"D",
					"E",
					"F",
					"G",
					"H",
					"I",
					"J",
					"K",
					"L",
					"M"];
			}

			case 24: {

				return [0,
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					"A",
					"B",
					"C",
					"D",
					"E",
					"F",
					"G",
					"H",
					"I",
					"J",
					"K",
					"L",
					"M",
					"N"];
			}

			case 25: {

				return [0,
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					"A",
					"B",
					"C",
					"D",
					"E",
					"F",
					"G",
					"H",
					"I",
					"J",
					"K",
					"L",
					"M",
					"N",
					"O"];
			}

			case 26: {

				return [0,
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					"A",
					"B",
					"C",
					"D",
					"E",
					"F",
					"G",
					"H",
					"I",
					"J",
					"K",
					"L",
					"M",
					"N",
					"O",
					"P"];
			}

			case 27: {

				return [0,
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					"A",
					"B",
					"C",
					"D",
					"E",
					"F",
					"G",
					"H",
					"I",
					"J",
					"K",
					"L",
					"M",
					"N",
					"O",
					"P",
					"Q"];
			}

			case 28: {

				return [0,
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					"A",
					"B",
					"C",
					"D",
					"E",
					"F",
					"G",
					"H",
					"I",
					"J",
					"K",
					"L",
					"M",
					"N",
					"O",
					"P",
					"Q",
					"R"];
			}

			case 29: {

				return [0,
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					"A",
					"B",
					"C",
					"D",
					"E",
					"F",
					"G",
					"H",
					"I",
					"J",
					"K",
					"L",
					"M",
					"N",
					"O",
					"P",
					"Q",
					"R",
					"S"];
			}

			case 30: {

				return [0,
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					"A",
					"B",
					"C",
					"D",
					"E",
					"F",
					"G",
					"H",
					"I",
					"J",
					"K",
					"L",
					"M",
					"N",
					"O",
					"P",
					"Q",
					"R",
					"S",
					"T"];
			}

			case 31: {

				return [0,
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					"A",
					"B",
					"C",
					"D",
					"E",
					"F",
					"G",
					"H",
					"I",
					"J",
					"K",
					"L",
					"M",
					"N",
					"O",
					"P",
					"Q",
					"R",
					"S",
					"T",
					"U"];
			}

			case 32: {

				return [0,
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					"A",
					"B",
					"C",
					"D",
					"E",
					"F",
					"G",
					"H",
					"I",
					"J",
					"K",
					"L",
					"M",
					"N",
					"O",
					"P",
					"Q",
					"R",
					"S",
					"T",
					"U",
					"V"];
			}

			case 33: {

				return [0,
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					"A",
					"B",
					"C",
					"D",
					"E",
					"F",
					"G",
					"H",
					"I",
					"J",
					"K",
					"L",
					"M",
					"N",
					"O",
					"P",
					"Q",
					"R",
					"S",
					"T",
					"U",
					"V",
					"W"];
			}

			case 34: {

				return [0,
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					"A",
					"B",
					"C",
					"D",
					"E",
					"F",
					"G",
					"H",
					"I",
					"J",
					"K",
					"L",
					"M",
					"N",
					"O",
					"P",
					"Q",
					"R",
					"S",
					"T",
					"U",
					"V",
					"W",
					"X"];
			}

			case 35: {

				return [0,
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					"A",
					"B",
					"C",
					"D",
					"E",
					"F",
					"G",
					"H",
					"I",
					"J",
					"K",
					"L",
					"M",
					"N",
					"O",
					"P",
					"Q",
					"R",
					"S",
					"T",
					"U",
					"V",
					"W",
					"X",
					"Y"];
			}

			case 36: {

				return [0,
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					"A",
					"B",
					"C",
					"D",
					"E",
					"F",
					"G",
					"H",
					"I",
					"J",
					"K",
					"L",
					"M",
					"N",
					"O",
					"P",
					"Q",
					"R",
					"S",
					"T",
					"U",
					"V",
					"W",
					"X",
					"Y",
					"Z"];
			}
		}
	};

	/**
	 * Converts the string entered into the corresponding base
	 *
	 * @param myString - The string to be converted
	 * @param base - The base to be converted into
	 *
	 * @return the converted string in the given base
	 */
	exports.convertToBase = function (myString, base) {

		// max supported base is 36 and min is 2
		if (base > 36) {

			base = 36;
		} else if (base < 2) {

			base = 2;
		}

		var charSet = exports.charSet(base);

		// the charset that contains all the characters
		var fullCharSet = exports.charSet(36);

		// convert every character in the string to uppercase
		var standardizedString = String(myString).toUpperCase();

		// if it only numbers
		// regular base conversion algorithm
		if (standardizedString.match(/[0-9]+/i)) {

			var inputNumber = parseInt(standardizedString);

			var rambled = (function convertBase(nbr, base) {

				if (nbr === 0) {

					return 0;
				}

				var numbers = [];
				/**
				 * Example - 3 in base 2
				 * 2 |3 | 1
				 * 2 |1 | 1
				 * 2 |0 | 0
				 */
				while (nbr != 0) {

					numbers.unshift(nbr % base);
					nbr = parseInt(nbr / base);
				}

				numbers = numbers.map(function (x) {

					return charSet[x];
				});

				return numbers.join("");
			})(inputNumber, base);

			return String(rambled);
		} else {

			// get the characters of the string
			var chars = standardizedString.split("");

			// remove the no alpha-numeric strings from the chars
			chars.filter(function (x) {

				if (x.match(/[0-9A-Za-z]/i)) {

					return true;
				} else {

					return false;
				}
			});

			var mappedChars = [];

			// map the chars to their respective indices for the base
			chars.map(function (char) {

				// never equate with NaN
				// NaN comparisions are dangerous
				if (char.match(/[0-9]+/i)) {

					char = Number(char);
				} else {

					char = String(char);
				}

				var charIndex = fullCharSet.indexOf(char);

				/**
				 * Actual convertion logic
				 */
				var rambled = (function convertBase(nbr, base) {

					if (nbr === 0) {

						return 0;
					}

					var numbers = [];
					/**
					 * Example - 3 in base 2
					 * 2 |3 | 1
					 * 2 |1 | 1
					 * 2 |0 | 0
					 */
					while (nbr != 0) {

						numbers.unshift(nbr % base);
						nbr = parseInt(nbr / base);
					}

					numbers = numbers.map(function (x) {

						return charSet[x];
					});

					return numbers.join("");
				})(charIndex, base);

				mappedChars.push(rambled);
			});

			return mappedChars.join("");
		}
	};
})(this.bulbasaur = {}));

/**
 * Test function for the module's function, prints to the console
 *
 * @param string - the input string
 * @param base - the base you want the message in
 */
this.bulbasaur.test = function (string, base) {

	console.log(this.convertToBase(string, base));
}

module.exports.bulbasaur = this.bulbasaur;

// this.bulbasaur.test("16", 2);