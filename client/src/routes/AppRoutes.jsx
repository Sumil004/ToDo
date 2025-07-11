// src/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import TodoDashboard from "../pages/TodoDashboard";
import TodoDetails from "../pages/TodoDetails";

// Temporarily disable authentication check
const PrivateRoute = ({ children }) => {
  // const { user } = useAuth();
  // return user ? children : <Navigate to="/login" />;
  return children; // Allow access without authentication for testing
};

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected routes */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/todos"
        element={
          <PrivateRoute>
            <TodoDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/todos/:id"
        element={
          <PrivateRoute>
            <TodoDetails />
          </PrivateRoute>
        }
      />

      {/* Catch-all fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
