module.exports = function (app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      name: {
        type: String,
        required: true,
        minLength: [3, "Name should be greater than 3"],
        maxLength: [50, "Name should be less Than 50"],
      },
      phone: {
        type: String,
        required: true,
        minLength: [7, "phone should be minimum 7 digits"],
        maxLength: [10, "phone should be maximum 10 digits"],
      },
      isGold: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
    }
  );
  return schema;
};
