import { Link } from "react-router-dom";
import useFetchTodoList from "../hooks/useFetchTodoList";
import TodoCard from "../components/TodoCard";

export default function TodoDashboard() {
  const { data: todos, isFetching, errorMessage, refetch } = useFetchTodoList();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Todos</h2>
        <div className="flex gap-2">
          <button
            onClick={refetch}
            className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-violet-600 hover:to-blue-500 text-white px-4 py-2 rounded"
            disabled={isFetching}
          >
            {isFetching ? "Loading..." : "Refresh"}
          </button>
          <Link to="/todos/new">
            <button className="bg-gradient-to-r from-lime-400 to-green-600 hover:from-purple-500 hover:to-pink-500 text-white px-4 py-2 rounded">
              Create New Todo
            </button>
          </Link>
        </div>
      </div>

      {isFetching ? (
        <p>Loading...</p>
      ) : errorMessage ? (
        <p className="text-red-500">Error: {errorMessage}</p>
      ) : Array.isArray(todos) ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {todos.map((todo) => (
            <TodoCard key={todo._id} todo={todo} />
          ))}
        </div>
      ) : (
        <p className="text-red-500">
          Invalid data format received from server.
        </p>
      )}
    </div>
  );
}
