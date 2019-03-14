// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See babelrcrepro-tests.js for an example of importing.
export const name = 'babelrcrepro';

const a = {b: "asda"}
console.log("Optional Chaining Test: ", a?.b, a?.c)