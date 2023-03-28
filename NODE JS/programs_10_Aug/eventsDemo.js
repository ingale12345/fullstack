const Logger = require("./loggerDemo");

console.log(Logger);
const obj = new Logger();

obj.on("userAdd", () => {
  console.log("User Added...");
});
obj.on("FetchedUser", () => {
  console.log("User Fetched...");
});

obj.addUser();
obj.fetchUser();
