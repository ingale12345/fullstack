let obj = {
  id: 10,
  name: "prajwal",
  address: "pune",
};
//console.log(process.env);
console.log(process.env.NODE_ENV);
console.log(obj); //5
// let obj2 = obj;

// obj.id = 11;

// console.log(obj);

setTimeout(() => {
  obj.id = 11;
  console.log(obj);
}, 8000);
