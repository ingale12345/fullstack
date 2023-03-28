const mongoose = require("mongoose");
const config = require("config");

async function demo() {
  try {
    let url = config.get("mongodb_url");
    console.log("Your Environment is " + config.get("NODE_ENV"));
    const res = await mongoose.connect(url);
    console.log("connected to db " + url);
    // createAuthor();
    // createCourse();
    getCourse();
    //getCourses();
    //updateCourse("62fcb97e512f7871a8abacdf");
    //deleteCourse("62fcb97e512f7871a8abacdf");
    closeConnection();
  } catch (error) {
    console.log("Could not connect");
  }
}
demo();
const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, " Name should be grether than 3"],
    maxLength: 15,
  },
  author: mongoose.Schema({
    name: String,
    language: String,
    website: String,
  }),
  tags: [String],
  isPublished: Boolean,
  date: { type: Date, default: Date.now() },
  price: {
    type: Number,
    min: 100,
    max: 3000,
    required: function () {
      return this.isPulished;
    },
  },
});
const Course = mongoose.model("Course", courseSchema);

const course = new Course({
  name: "Full Stack java",
  author: {
    name: "Omkar",
    language: "English",
    website: "https://www.Omkar.com/",
  },
  category: "web",
  price: 400,
  isPublished: true,
});

async function createCourse() {
  try {
    const result = await course.save();
    console.log(result);
    console.log("Object saved in to database");
  } catch (error) {
    const { errors } = error;
    // console.log(errors);
    for (field in errors) {
      console.log(errors[field].message);
    }
  }
}

async function getCourse() {
  const result = await Course.find().populate("author", { _id: 0 });
  console.log(result);
}

function closeConnection() {
  setTimeout(() => {
    mongoose.connection.close();
    console.log("Connection closed Successfully...");
  }, 2000);
}
