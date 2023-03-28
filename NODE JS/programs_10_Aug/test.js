const eventsEmmiter = require("events");
module.exports = class EventTest extends eventsEmmiter {
  registerUser() {
    this.emit("Register");
  }
  getUser() {
    this.emit("getUser");
  }
};
