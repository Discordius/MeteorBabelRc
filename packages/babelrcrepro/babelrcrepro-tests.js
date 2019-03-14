// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by babelrcrepro.js.
import { name as packageName } from "meteor/babelrcrepro";

// Write your tests here!
// Here is an example.
Tinytest.add('babelrcrepro - example', function (test) {
  test.equal(packageName, "babelrcrepro");
});
