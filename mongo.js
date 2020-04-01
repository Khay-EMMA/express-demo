const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("connected to database"))
  .catch(err => console.log("error connecting to database", err));

const courseSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  name: String,
  tags: [[String]],
  author: String,
  isPublished: Boolean,
  price: Number
});

const Course = mongoose.model("Course", courseSchema);
const getCourse = async () => {
  const courses = await Course.find({ tags: "backend", isPublished: true })
    .sort({ name: 1 })
    .select({ name: 1, author: 1 });

  console.log(courses);
};
getCourse();