import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../../Context/AuthContext";
import "react-toastify/dist/ReactToastify.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
    // setTimeout(() => {
    //   navigate("/");
    // }, 1000);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <ToastContainer />
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Đăng nhập Spicy để tiếp tục
        </h2>
        <form onSubmit={onLogin}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-200"
              id="email"
              type="email"
              placeholder="Nhập email của bạn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Mật khẩu
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-200"
              id="password"
              type="password"
              placeholder="Nhập mật khẩu của bạn"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-4 items-center justify-between">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 w-full"
              type="submit"
            >
              Đăng nhập
            </button>
            <span className="text-gray-600">Hoặc</span>
            <Link
              to="/dangki"
              className="text-blue-600 hover:underline transition duration-200"
            >
              Bạn chưa có tài khoản?
            </Link>
            <button
              className="bg-white hover:bg-gray-100 border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline flex items-center justify-center gap-2 transition duration-200"
              type="button"
            >
              <FcGoogle size={24} />
              <span>Đăng nhập với Google</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
