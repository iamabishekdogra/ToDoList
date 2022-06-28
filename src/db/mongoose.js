const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");

// const me = new User({
//   name: "   Abhishek  ",
//   email: "abhisekdogra993@gmail.com   ",
// });
//
// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });

// const task = new Task({
//   description: "  Eat lunch",
// });
//
// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
