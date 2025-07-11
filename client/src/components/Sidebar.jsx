import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-48 bg-gray-200 min-h-screen p-4">
      <nav className="flex flex-col gap-4">
        <Link to="/todos" className="text-blue-700 hover:underline">
          Dashboard
        </Link>
        <Link to="/" className="text-blue-700 hover:underline">
          Home
        </Link>
      </nav>
    </aside>
  );
}
