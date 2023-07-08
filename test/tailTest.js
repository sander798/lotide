const assertEqual = require("../assertEqual");
const tail = require("../tail");

let unchangedArray = [1, 2, 3, 4];

tail(unchangedArray);

assertEqual(unchangedArray.length, 4);

assertEqual(tail([1, 2, 3, 4])[0], [2, 3, 4][0]);
assertEqual(tail([1, 2, 3, 4])[1], [2, 3, 4][1]);
assertEqual(tail([1, 2, 3, 4])[2], [2, 3, 4][2]);
//assertEqual(tail(["asdasd", "dfgh", "srggh", 4]), ["dfgh", "srggh", 4]);
//assertEqual(tail([4]), []);
//assertEqual(tail([]), []);