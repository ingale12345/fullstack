let user;
const p = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve(1), 2000);
  if (user) {
    setTimeout(() => resolve(1), 2000);
  } else {
    setTimeout(() => reject({ message: "something error" }), 2000);
  }
});

p.then((response) => {
  console.log(response);
}).catch((error) => {
  console.log(error.message);
});
