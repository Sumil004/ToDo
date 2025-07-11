const Todo = require("../models/Todo");

exports.getAllTodos = async (search) => {
  if (search) {
    return await Todo.find({ title: { $regex: search, $options: "i" } });
  }
  return await Todo.find();
};

exports.getTodoById = async (id) => {
  const todo = await Todo.findById(id);
  if (!todo) throw new Error("Todo not found");
  return todo;
};

exports.createTodo = async (data) => {
  const newTodo = new Todo(data);
  return await newTodo.save();
};

exports.updateTodo = async (id, data) => {
  const updated = await Todo.findByIdAndUpdate(id, data, { new: true });
  if (!updated) throw new Error("Todo not found for update");
  return updated;
};

exports.deleteTodo = async (id) => {
  const deleted = await Todo.findByIdAndDelete(id);
  if (!deleted) throw new Error("Todo not found for deletion");
  return { message: "Deleted successfully" };
};
