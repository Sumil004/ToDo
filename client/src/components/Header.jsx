import useAuth from "../hooks/useAuth";
import useTheme from "../hooks/useTheme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { logout } = useAuth();

  return (
    <header className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-4 shadow-md transition-colors duration-300">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">
        Todo App
      </h1>
      <div className="flex gap-4">
        <button
          onClick={toggleTheme}
          className="px-4  py-2 bg-gradient-to-r from-blue-400 to-indigo-600 hover:from-purple-500 hover:to-sky-500 text-white rounded  transition-colors duration-20 flex items-center gap-2"
        >
          {theme === "light" ? (
            <>
              <span>🌙</span>
              Dark Mode
            </>
          ) : (
            <>
              <span>☀️</span>
              Light Mode
            </>
          )}
        </button>
        <button
          onClick={logout}
          className="px-4 py-2 bg-gradient-to-r from-red-400 to-orange-600 hover:from-red-600 hover:to-yellow-500 text-white rounded  transition-colors duration-200"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
