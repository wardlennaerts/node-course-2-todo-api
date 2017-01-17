const {ObjectID} = require('mongodb');

const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require ('./../server/models/todo');
const {User} = require ('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '587d3d1ae949e30d354b8181'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('587d3d1ae949e30d354b8181').then((todo) => {
  console.log(todo);
});
