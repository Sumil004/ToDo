import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetchTodoDetails from "../hooks/useFetchTodoDetails";
import API from "../services/APIService";
import UserInputGroup from "../components/UserInputGroup";

export default function TodoDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: todoData } = useFetchTodoDetails();
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    users: [{ name: "", phone: "", email: "" }],
  });

  useEffect(() => {
    if (todoData) setTodo(todoData);
  }, [todoData]);

  const handleChange = (e, index, field) => {
    if (index !== null) {
      const updatedUsers = [...todo.users];
      updatedUsers[index][field] = e.target.value;
      setTodo({ ...todo, users: updatedUsers });
    } else {
      setTodo({ ...todo, [field]: e.target.value });
    }
  };

  const handleAddUser = () => {
    if (todo.users.length < 4)
      setTodo({
        ...todo,
        users: [...todo.users, { name: "", phone: "", email: "" }],
      });
  };

  const handleSave = async () => {
    if (!todo.title || !todo.description || todo.users.length === 0)
      return alert("Validation failed");

    const validUsers = todo.users.filter(
      (u) => u.name?.trim() && u.phone?.trim() && u.email?.trim()
    );

    if (validUsers.length === 0)
      return alert("At least one complete user is required");

    const payload = {
      title: todo.title.trim(),
      description: todo.description.trim(),
      users: validUsers,
    };

    console.log("Submitting todo:", JSON.stringify(payload, null, 2));

    try {
      if (id === "new") {
        await API.post("/todos", payload);
      } else {
        await API.put(`/todos/${id}`, payload);
      }
      navigate("/todos");
    } catch (err) {
      console.error("Save error:", err.response?.data || err.message);
      console.error("Full error response:", err.response);

      // Handle wrapped response format from backend interceptor
      let errorMessage = "Save failed";
      if (err.response?.data) {
        const responseData = err.response.data;
        console.error("Response data:", responseData);

        if (responseData.data && responseData.data.error) {
          // If error is an array (validation errors), extract the messages
          if (Array.isArray(responseData.data.error)) {
            errorMessage = responseData.data.error.map((e) => e.msg).join(", ");
          } else {
            errorMessage = responseData.data.error;
          }
        } else if (responseData.error) {
          errorMessage = responseData.error;
        }
      }

      alert(errorMessage);
    }
  };

  const handleDelete = async () => {
    try {
      await API.delete(`/todos/${id}`);
      navigate("/todos");
    } catch (error) {
      console.error("Delete error:", error.response?.data || error.message);
      alert("Delete failed");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        {id === "new" ? "Create" : "Edit"} Todo
      </h2>
      <input
        value={todo.title}
        onChange={(e) => handleChange(e, null, "title")}
        placeholder="Title"
        className="w-full mb-4 px-4 py-2 border rounded"
      />
      <textarea
        value={todo.description}
        onChange={(e) => handleChange(e, null, "description")}
        placeholder="Description"
        className="w-full mb-4 px-4 py-2 border rounded"
      />
      <h4 className="text-lg font-semibold mb-2">Users</h4>
      {todo.users.map((user, idx) => (
        <UserInputGroup
          key={idx}
          user={user}
          index={idx}
          handleChange={handleChange}
        />
      ))}
      <div className="flex gap-4 mt-4">
        <button
          onClick={handleAddUser}
          className="bg-gradient-to-r from-sky-500 to-blue-500 hover:from-blue-600 hover:to-sky-500 text-white px-4 py-2 rounded"
        >
          Add User
        </button>
        <button
          onClick={handleSave}
          className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-violet-600 hover:to-blue-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
        {id !== "new" && (
          <button
            onClick={handleDelete}
            className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-yellow-500 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}
