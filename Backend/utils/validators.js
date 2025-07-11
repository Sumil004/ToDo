const { body, param } = require("express-validator");

exports.todoValidation = [
  body("title").notEmpty(),
  body("description").notEmpty(),
  body("users").isArray({ min: 1, max: 4 }),
  body("users.*.name").notEmpty(),
  body("users.*.email").isEmail(),
  body("users.*.phone").matches(/^[6-9]\d{9}$/),
];

exports.idValidation = [param("id").isMongoId()];
