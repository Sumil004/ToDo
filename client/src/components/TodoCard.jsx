import { Link } from "react-router-dom";

export default function TodoCard({ todo }) {
  return (
    <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{todo.title}</h3>
      <p className="text-sm text-gray-600 mb-3">{todo.description}</p>
      <Link to={`/todos/${todo._id}`}>
        <button className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-violet-600 hover:to-blue-500 text-white px-4 py-2 rounded">
          View / Edit
        </button>
      </Link>
    </div>
  );
}
