import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to the Todo App
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Manage your tasks and stay organized with our simple and efficient
          todo application.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/todos">
            <button className="bg-gradient-to-r from-blue-400 to-indigo-600 hover:from-purple-500 hover:to-sky-500 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              View Todos
            </button>
          </Link>
          <Link to="/todos/new">
            <button className="bg-gradient-to-r from-lime-400 to-green-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Create New Todo
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
