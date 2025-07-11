// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const users = []; // Replace with DB logic in real apps

// exports.registerUser = async ({ email, password }) => {
//   const userExists = users.find((u) => u.email === email);
//   if (userExists) {
//     throw new Error("User already exists");
//   }

//   const hashedPassword = await bcrypt.hash(password, 10);
//   const newUser = { email, password: hashedPassword };
//   users.push(newUser);
//   return { message: "User registered successfully" };
// };

// exports.loginUser = async ({ email, password }) => {
//   const user = users.find((u) => u.email === email);
//   if (!user) throw new Error("User not found");

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) throw new Error("Invalid credentials");

//   const token = jwt.sign({ email }, process.env.JWT_SECRET, {
//     expiresIn: "1h",
//   });
//   return {
//     token,
//   };
// };

// services/authService.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const users = []; // In-memory DB (resets on server restart)

exports.registerUser = async ({ email, password }) => {
  const userExists = users.find((u) => u.email === email);
  if (userExists) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { email, password: hashedPassword };
  users.push(newUser);

  return { message: "User registered successfully" };
};

exports.loginUser = async ({ email, password }) => {
  const user = users.find((u) => u.email === email);
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return { token };
};
