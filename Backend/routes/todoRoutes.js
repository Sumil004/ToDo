const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const validate = require("../middlewares/validationMiddleware");
const { todoValidation, idValidation } = require("../utils/validators");
const controller = require("../controllers/todoController");

router.get("/", controller.getTodos); // Temporarily removed auth
router.get("/:id", controller.getTodoDetails); // Temporarily removed auth
router.post("/", todoValidation, validate, controller.createTodo); // Temporarily removed auth
router.put(
  "/:id",
  idValidation.concat(todoValidation),
  validate,
  controller.editTodo
); // Temporarily removed auth
router.delete("/:id", controller.deleteTodo); // Temporarily removed auth

module.exports = router;
