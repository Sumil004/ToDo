// const todoService = require("../services/todoService");

// exports.getTodos = async (req, res) => {
//   try {
//     const todos = await todoService.getAllTodos(req.query.search);
//     res.json(todos);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.getTodoDetails = async (req, res) => {
//   try {
//     const todo = await todoService.getTodoById(req.params.id);
//     res.json(todo);
//   } catch (err) {
//     res.status(404).json({ error: err.message });
//   }
// };

// exports.createTodo = async (req, res) => {
//   try {
//     const created = await todoService.createTodo(req.body);
//     res.status(201).json(created);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// exports.editTodo = async (req, res) => {
//   try {
//     const updated = await todoService.updateTodo(req.params.id, req.body);
//     res.json(updated);
//   } catch (err) {
//     res.status(404).json({ error: err.message });
//   }
// };

// exports.deleteTodo = async (req, res) => {
//   try {
//     const result = await todoService.deleteTodo(req.params.id);
//     res.json(result);
//   } catch (err) {
//     res.status(404).json({ error: err.message });
//   }
// };

const todoService = require("../services/todoService");

exports.getTodos = async (req, res) => {
  try {
    const todos = await todoService.getAllTodos(req.query.search);
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTodoDetails = async (req, res) => {
  try {
    const todo = await todoService.getTodoById(req.params.id);
    res.json(todo);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const { title, description, users } = req.body;

    // ✅ Validate incoming data
    if (
      !title ||
      !description ||
      !Array.isArray(users) ||
      users.length === 0 ||
      users.some((u) => !u.name || !u.email || !u.phone)
    ) {
      return res
        .status(400)
        .json({ error: "All fields are required and must be valid." });
    }

    console.log("Creating todo with:", req.body);

    const created = await todoService.createTodo(req.body);
    res.status(201).json(created);
  } catch (err) {
    console.error("Error in createTodo:", err.message);
    res.status(400).json({ error: err.message });
  }
};

exports.editTodo = async (req, res) => {
  try {
    const updated = await todoService.updateTodo(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const result = await todoService.deleteTodo(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
