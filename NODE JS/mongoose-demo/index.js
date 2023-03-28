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
const authorSchema = new mongoose.Schema({
  name: String,
  language: String,
  website: String,
});
const Author = mongoose.model("author", authorSchema);
async function createAuthor() {
  const author = new Author({
    name: "Shubham",
    language: "Marathi",
    website: "www.shubham.com",
  });
  await author.save();
}
/* {
  "_id": {
    "$oid": "62fcb97e512f7871a8abacdf"
  },
  "name": "MERN STACK COURSE",
  "tags": [
    "Servlet",
    "jsp"
  ],
  "isPublished": true,
  "date": {
    "$date": {
      "$numberLong": "1660729726098"
    }
  },
  "price": 500,
  "__v": 0
}*/

async function updateCourse(id) {
  /*const result = await Course.findByIdAndUpdate(
    id,
    { $set: { name: "MERN STACK COURSE(Mudik trainer)" } },
    { new: true }
  );
  //{new :true } returns the updated document
  console.log(result);
*/
  //update using updateOne Function
  /*
  const result = await Course.updateOne(
    { name: "MERN STACK COURSE(Mudik trainer)" },
    { $set: { name: "MERN STACK COURSE" } }
  );
  */
  let course = await Course.findById(id);
  if (!course) return;
  course.name = "MERN STACK COURSE";
  console.log(await course.save());
}
async function deleteCourse(id) {
  const course = await Course.findByIdAndDelete(id);
  console.log(course);
}
const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, " Name should be grether than 3"],
    maxLength: 15,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "author",
  },
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
  author: "63070ad9f1f7b72e0e350eb7",
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
async function getCourses() {
  const courses = await Course.find({ name: "JAVA DEVELOPER" });
  const courses1 = await Course.find({ name: "JAVA DEVELOPER" })
    .limit(1)
    .skip(1);
  console.log(courses);
  console.log(courses1);
  const sortedCourses = await Course.find({}).sort({ date: -1 });
  console.log(sortedCourses);
  const sortedCoursesCount = await Course.find({}).sort({ date: -1 }).count();
  console.log(sortedCoursesCount);
  //project + sort
  const project = await Course.find({}, { name: 1, _id: 0 }).sort({ date: -1 });
  console.log("Projection");
  console.log(project);
  //projection2 + sort
  const project1 = await Course.find(
    {},
    { name: 1, tags: 1, _id: 0, price: 1 }
  ).sort({
    date: -1,
  });
  console.log("Projection1");
  console.log(project1);
  // or operator
  const OrOperation = await Course.find(
    { $or: [{ price: { $lte: 500 } }] },
    { name: 1, _id: 0, price: 1 }
  );

  console.log("Or Operation\n", OrOperation);
  //aggregation
  const aggregate = await Course.aggregate([
    { $group: { _id: "$name", Avarage_price: { $avg: "$price" } } },
  ]);
  console.log(aggregate);
  //   mongoose.connection.close();
}

function closeConnection() {
  setTimeout(() => {
    mongoose.connection.close();
    console.log("Connection closed Successfully...");
  }, 2000);
}
