const userClass = require("./test");
const user = new userClass();
user.on("Register", () => {
  console.log("User1 Registered Successfully...");
});

user.on("getUser", () => {
  console.log("User fetched successfully..");
});
user.registerUser();
user.getUser();
