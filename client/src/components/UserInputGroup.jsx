export default function UserInputGroup({ user, index, handleChange }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
      <input
        className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={user.name}
        onChange={(e) => handleChange(e, index, "name")}
        placeholder="Name"
      />
      <input
        className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={user.email}
        onChange={(e) => handleChange(e, index, "email")}
        placeholder="Email"
      />
      <input
        className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={user.phone}
        onChange={(e) => handleChange(e, index, "phone")}
        placeholder="Phone"
      />
    </div>
  );
}
