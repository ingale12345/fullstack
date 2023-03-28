module.exports = function (app) {
  const mongooseClient = app.get("mongooseClient");
  const genreSchema = require("./genreSchema");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      title: {
        type: String,
        required: true,
        minLength: [5, "length of Title Should be greater than 5"],
        maxLength: [50, "title length should less than 50"],
      },
      genre: {
        type: genreSchema(app),
        required: true,
      },
      dailyRentalRate: {
        type: Number,
        required: true,
        min: [5, "Daily Rental Rate Should be greater than 5"],
        max: [255, "Dalily Rantal Rate Should be less than 255"],
      },
      numberInStock: {
        type: Number,
        required: true,
        min: [1, "Number In Stock Should be greater than 1 ok?"],
        max: [255, "Number In Stock Should be less than 255"],
      },
      liked: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    {
      timestamps: true,
    }
  );
  return schema;
};
