import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setFormData([e.target.name, e.target.value]);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-screen flex items-center justify-center  bg-white px-4">
      <div className="w-full max-w-md bg-white border border-black shadow-xl rounded-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold  text-dark">Welcome Back</h1>
          <p className="text-dark text-sm mt-2">Please login to your account</p>
        </div>

        <form onSubmit={handleOnSubmit} className="space-y-6">
          <div>
            <label className="block text-black font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleOnChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="john@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-black font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleOnChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none mb-4"
              placeholder="••••••••"
              required
            />
          </div>
          <Link to={"/main"}>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold rounded-lg hover:opacity-90 transition"
            >
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
