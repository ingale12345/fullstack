const _ = require("underscore");
let test = _.pick(
  { name: "Prajwal", age: 23, address: "karegaon" },
  "name",
  "age"
);
console.log(test);

let omit = _.omit(
  { name: "Prajwal", age: 23, address: "karegaon" },
  "name",
  "age"
);
console.log(omit);
