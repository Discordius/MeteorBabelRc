# MeteorBabelRc
Reproduction of Meteor .babelrc problems in packages

To reproduce just run `meteor run` in the main package directory, which should throw a syntax error because of the use of the optional chaining syntax, even though there is a `.babelrc` present in the package directory, and the package has the `ecmascript` dependency. 
