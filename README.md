# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sanderevans/lotide`

**Require it:**

`const _ = require('@sanderevans/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the first element of an array.
* `tail(array)`: Returns everything but the first element of an array.
* `middle(array)`: Returns the middle element(s) of an array.
* `assertArraysEqual(array1, array2)`: Print whether two arrays are equal.
* `assertEqual(val1, val2)`: Print whether two primitives are equal
* `assertObjectsEqual(object1, object2)`: Print whether two objects are equal.
* `countLetters(string)`: Returns an object counting the occurrances of each character in a string excluding spaces.
* `countOnly(allItems, itemsToCount)`: Returns an object listing the occurances of specified elements in an array.
* `eqArrays(array1, array2)`: Returns whether two arrays are equal recursively.
* `eqObjects(object1, object2)`: Returns whether two objects are deeply equal.
* `findKey(object, callback)`: Returns the object key which fulfills the callback filter.
* `findKeyByValue(sourceObject, keyValue)`: Returns the object key which matches a value.
* `flatten(array)`: Returns an array with all elements of the given 2D array and their contents placed into a single one-dimensional array.
* `letterPositions(string)`: Returns an object listing all indexes of each character in a string.
* `map(array, callback)`: Executes a callback function for each element of an array.
* `takeUntil(array, callback)`: Returns an array containing each element of an array before the first element which fulfills a callback filter.
* `without(sourceArray, itemsToRemove)`: Returns an array with all instances of the requested elements removed.