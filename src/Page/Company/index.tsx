import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import { FaLocationDot } from "react-icons/fa6";
import { CompanyProps } from "../../types";
import client from "../../config";
import Footer from "../../Components/Footter";

const Company: React.FC = () => {
  const [companies, setCompanies] = useState<CompanyProps[]>([]);
  const [searchNation, setSearchNation] = useState<string>("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const getCompany = async () => {
      try {
        const res = await client.get("http://127.0.0.1:8000/company/");
        setCompanies(res.data);
        setVisible(true);
      } catch (error) {
        console.error("An error occurred while fetching company data:", error);
      }
    };

    getCompany();
  }, []);

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchNation.toLowerCase())
  );

  return (
    <section>
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-48">
        <h1 className="text-xl mt-5 md:text-2xl font-semibold my-5">
          Thông tin công ty tuyển dụng
        </h1>
        {/* <div className="my-5">
          <input
            type="text"
            placeholder="Tìm kiếm công ty / Ha Noi - Viet Nam"
            value={searchNation}
            onChange={(e) => setSearchNation(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
        </div> */}
        {!visible ? (
          <div className="text-2xl font-bold mb-2">
            Bạn phải đăng nhập trước!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company) => (
              <div
                key={company.id}
                className="border border-gray-300 rounded-lg shadow-lg p-6 bg-white"
              >
                <h2 className="text-2xl font-bold mb-4">
                  <Link
                    to={`/chitietcongty/${company.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {company.name}
                  </Link>
                </h2>
                <p className="text-gray-700 mb-2">
                  <FaLocationDot className="inline-block mr-2" />
                  {company.company_address.street} -{" "}
                  {company.company_address.district} -{" "}
                  {company.company_address.city}
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Ngành:</strong>{" "}
                  {company.major.map((item, index) => (
                    <span key={index} className="inline-block mr-2">
                      {item.name}
                    </span>
                  ))}
                </p>
                <Link
                  to={`/chitietcongty/${company.id}`}
                  className="text-blue-600 hover:underline"
                >
                  Chi Tiết
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default Company;
