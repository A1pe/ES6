const fs = require("fs");

/*
console.log("A");
let result = fs.readFileSync("syntax/sample.txt", "utf8");
// it has return value
console.log(result);
console.log("C");
*/

console.log("A");
fs.readFile("syntax/sample.txt", "utf8", (err, result) => {
  console.log(result);
});
// it haven't return value
console.log("C");
