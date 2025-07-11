import { useState } from "react";
import API from "../services/APIService";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", { email, password });
      alert("Registered successfully! Please login.");
      navigate("/login");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
  
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-teal-100 to-cyan-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-md bg-white/70 p-10 rounded-2xl shadow-xl w-full max-w-md border border-white/30"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center drop-shadow-sm">
          Create Your Account
        </h2>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
          required
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full mb-6 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
          required
        />

        <button
          type="submit"
          className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-green-500 to-teal-500 hover:from-teal-500 hover:to-green-500 transition-all duration-300 shadow-md"
        >
          Register
        </button>

        <p className="text-sm text-center mt-5 text-gray-700">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
