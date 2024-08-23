import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavEm from "./Nav";
import Footer from "../../Components/Footter";
import { ToastContainer, toast } from "react-toastify";
import client from "../../config";

const Info = () => {
  const [street, setStreet] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const [personal_introduction, setPersonal_introduction] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const getUserId = async () => {
      try {
        const response = await client.get(`http://127.0.0.1:8000/user/user`);
        setUser(response.data.user.id);
      } catch (err) {}
    };

    getUserId();
  }, []);

  const onRegisterCompany = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const addressData = {
      street,
      district,
      city,
      zipcode: Number(zipcode),
    };

    const companyData = {
      company_address: addressData,
      major: [{ name: major }],
      name,
      age: Number(age),
      personal_introduction,
      user,
    };
    try {
      await client.post("http://127.0.0.1:8000/company/", companyData);
      toast.success("Tạo công ty thành công!");

      setTimeout(() => {
        navigate("/nhatuyendung/congviec");
      }, 1000);
    } catch (error) {
      toast.error("Tạo công ty thất bại!");

      console.error("Error:", error);
      // Handle error
    }
  };

  return (
    <section>
      <ToastContainer />

      <NavEm />

      <div className="container mx-auto">
        <h2 className="text-center text-xl uppercase font-semibold mt-5 mb-5">
          Đăng ký thông tin công ty
        </h2>
        <div className="flex justify-center items-center h-auto mt-5 mb-5">
          <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            <form
              onSubmit={onRegisterCompany}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="street"
                >
                  Đường:
                </label>
                <input
                  id="street"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="district"
                >
                  Quận:
                </label>
                <input
                  id="district"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="city"
                >
                  Thành phố:
                </label>
                <input
                  id="city"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="zipcode"
                >
                  Mã vùng:
                </label>
                <input
                  id="zipcode"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="major"
                >
                  Ngành:
                </label>
                <input
                  id="major"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={major}
                  onChange={(e) => setMajor(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Tên công ty
                </label>
                <input
                  id="companyName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="age"
                >
                  Số năm thành lập:
                </label>
                <input
                  id="age"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="intro"
                >
                  Giới thiệu về công ty:
                </label>
                <input
                  id="description"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={personal_introduction}
                  onChange={(e) => setPersonal_introduction(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Đăng ký
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Info;
