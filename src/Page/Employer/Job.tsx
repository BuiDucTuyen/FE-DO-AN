import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import NavEm from "./Nav";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import client from "../../config";
import Footer from "../../Components/Footter";

const Info = () => {
  const navigate = useNavigate();
  const [street, setStreet] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [name, setName] = useState("");
  const [minsalary, setMinsalary] = useState("");
  const [maxsalary, setMaxsalary] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("");
  const [major, setMajor] = useState("");
  const [expired_time, setExpired_time] = useState("");
  const [company, setCompany] = useState("");
  const [user, setUser] = useState("");

  const dateInputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setExpired_time(e.target.value);
  };

  useEffect(() => {
    const getUserId = async () => {
      try {
        const response = await client.get(`http://127.0.0.1:8000/user/user`);
        setUser(response.data.user.id);
      } catch (err) {}
    };

    getUserId();
  }, []);

  useEffect(() => {
    const getCompany = async () => {
      const respone = await client.get(
        `http://127.0.0.1:8000/company/?userId=${user}`
      );
      setCompany(respone.data[0].id);
    };

    getCompany();
  }, [user]);

  const onRegisterCompany = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const addressData = {
      street,
      district,
      city,
      zipcode: Number(zipcode),
    };

    const jobData = {
      job_address: addressData,
      major: [{ name: major }],
      name,
      expired_time: `${expired_time}T04:36:47`,
      min_salary: Number(minsalary),
      max_salary: Number(maxsalary),
      description,
      level,
      company,
    };
    try {
      await client.post("http://127.0.0.1:8000/jobs/", jobData);
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

        <NavEm />

        <h2 className="text-center text-xl uppercase font-semibold mt-5 mb-5">
          Tạo việc làm
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
                  Tên công ty
                </label>
                <input
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="minsalary"
                >
                  Lương:
                </label>
                <div className="flex gap-2">
                  <input
                    id="minsalary"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Min"
                    value={minsalary}
                    onChange={(e) => setMinsalary(e.target.value)}
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
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="description"
                >
                  Mô tả công việc:
                </label>
                <input
                  id="description"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                  <option value="IN">IN</option>
                  <option value="FR">FR</option>
                  <option value="JR">JR</option>
                  <option value="MD">MD</option>
                  <option value="SR">SR</option>
                  <option value="MG">MG</option>
                  <option value="advanced">CH</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="expired_time"
                >
                  Thời gian hết hạn
                </label>
                <input type="date" onChange={handleChange} ref={dateInputRef} />
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
