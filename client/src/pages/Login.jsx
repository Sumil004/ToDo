import { useState } from "react";
import API from "../services/APIService";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });

      const token = res?.data?.data?.token;

      if (!token) {
        alert("Token not received from server");
        return;
      }

      console.log("Saving token:", token);
      login(token); // This will save token in localStorage via AuthContext
    } catch (err) {
      console.error("Login error:", err);
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-md bg-white/70 p-10 rounded-2xl shadow-xl w-full max-w-md border border-white/30"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center drop-shadow-sm">
          Welcome Back !
        </h2>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          required
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full mb-6 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          required
        />

        <button
          type="submit"
          className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-md"
        >
          Login
        </button>

        <p className="text-sm text-center mt-5 text-gray-700">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-blue-600 hover:underline font-medium"
          >
            Register
          </a>
        </p>
      </form>
    </div>
  );
}
