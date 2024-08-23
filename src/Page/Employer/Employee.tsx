import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import Footer from "../../Components/Footter";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import client from "../../config";
import Navbar from "../../Components/Navbar";

const Employee = () => {
  const navigate = useNavigate();
  const [street, setStreet] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [intro, setIntro] = useState("");
  const [level, setLevel] = useState("");
  const [major, setMajor] = useState("");
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

    const employeeData = {
      employee_address: addressData,
      major: [{ name: major }],
      name,
      number: Number(number),
      gender,
      age: Number(age),
      personal_introduction: intro,
      level,
      user,
    };
    try {
      await client.post("http://127.0.0.1:8000/employee/", employeeData);
      toast.success("Tạo công việc thành công!");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Tạo công việc thất bại!");
    }
  };
  return (
    <section>
      <div className=" mx-auto">
        <ToastContainer />

        <Navbar />

        <h2 className="text-center text-xl uppercase font-semibold mt-5 mb-5">
          Tạo thông tin cá nhân
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
                  Ngành
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
                  Họ và tên
                </label>
                <input
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              {/* <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="number"
                >
                  Số điện thoại
                </label>
                <div className="flex gap-2">
                  <input
                    id="number"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                  <input
                    id="maxsalary"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Max"
                    value={maxsalary}
                    onChange={(e) => setMaxsalary(e.target.value)}
                  />
                </div>
              </div> */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="number"
                >
                  Số điện thoại:
                </label>
                <input
                  id="number"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="gender"
                >
                  Giới tính:
                </label>
                <select
                  id="gender"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Chọn giới tính</option>
                  <option value="F">Nữ</option>
                  <option value="M">Nam</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="age"
                >
                  Tuổi
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
                  Mô tả bản thân:
                </label>
                <input
                  id="intro"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={intro}
                  onChange={(e) => setIntro(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="level"
                >
                  Cấp độ:
                </label>
                <select
                  id="level"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                >
                  <option value="">Chọn cấp độ</option>
                  <option value="IN">INTERN</option>
                  <option value="FR">FRESHER</option>
                  <option value="JR">JUNIOR</option>
                  <option value="MD">MIDDLE</option>
                  <option value="SR">SENIOR</option>
                  <option value="MG">MANAGER</option>
                  {/* <option value="CH">CH</option> */}
                </select>
              </div>

              <div className="flex items-center justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Tạo thông tin
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

export default Employee;
