const eventsEmmiter = require("events");
module.exports = class LoggerDemo extends eventsEmmiter {
  addUser() {
    this.emit("userAdd");
  }
  fetchUser() {
    this.emit("FetchedUser");
  }
};
