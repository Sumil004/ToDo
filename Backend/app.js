const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const responseInterceptor = require("./middlewares/responseInterceptor");

const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");

const app = express();
// const swaggerDoc = YAML.load("./swagger/swagger.yaml");

// Middleware
app.use(cors());
app.use(express.json());
app.use(responseInterceptor);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

module.exports = app;
