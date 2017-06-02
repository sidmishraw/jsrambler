/**
 * main.js
 *
 * The driver code for testing rambler
 *
 * Created by sidmishraw on 6/2/17.
 */
"use strict";

((function () {

	const rambler = require("./rambler.js");

	rambler.bulbasaur.test("hey", 36);
	rambler.bulbasaur.test("8", 2);
	rambler.bulbasaur.test("duck your head", 16);

	console.log("charset for base 12 = ", rambler.bulbasaur.charSet(12));

	console.log(rambler.bulbasaur.convertToBase("bulbasaur", 2));
})());