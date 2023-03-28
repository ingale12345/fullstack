module.exports = function (app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      name: {
        type: String,
        minLength: [3, "value of Genre should be greater than 5"],
        maxLength: [20, "value of Genre should be less than 50"],
      },
    },
    {
      timestamps: true,
    }
  );
  return schema;
};
