require("../src/db/mongoose");
const { remove } = require("../src/models/task");
const Task = require("../src/models/task");

// Task.findByIdAndRemove("624e49b86bd77410a03e5c15", { completed: false })
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("624e4a986bd77410a03e5c19", false)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
