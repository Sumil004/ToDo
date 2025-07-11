// const authService = require("../services/authService");

// exports.register = async (req, res) => {
//   try {
//     const result = await authService.registerUser(req.body);
//     res.status(201).json(result);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// exports.login = async (req, res) => {
//   try {
//     const result = await authService.loginUser(req.body);
//     res.json(result);
//   } catch (err) {
//     res.status(401).json({ error: err.message });
//   }
// };

// controllers/authController.js
const authService = require("../services/authService");

exports.register = async (req, res) => {
  try {
    const result = await authService.registerUser(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const result = await authService.loginUser(req.body);
    console.log("[LOGIN] Token sent:", result); // ✅ debug output
    res.status(200).json(result); // ✅ returns { token: "..." }
  } catch (err) {
    console.error("[LOGIN ERROR]:", err.message);
    res.status(401).json({ error: err.message });
  }
};
