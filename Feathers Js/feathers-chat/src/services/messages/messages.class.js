const { Service } = require("feathers-mongoose");

exports.Messages = class Messages extends Service {
  create(data, params) {
    data.demo = "Nitin";
    return super.create(data, params);
  }
};
