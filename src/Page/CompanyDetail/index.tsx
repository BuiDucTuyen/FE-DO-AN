import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { RiGroupFill } from "react-icons/ri";
import Navbar from "../../Components/Navbar";
import { CompanyDetailProps } from "../../types";
import client from "../../config";
import Footer from "../../Components/Footter";

const CompanyDetail: React.FC = () => {
  const { companyId } = useParams<{ companyId: string }>();
  const [company, setCompany] = useState<CompanyDetailProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const response = await client.get(
          `http://127.0.0.1:8000/company/${companyId}/`
        );
        setCompany(response.data);
        setLoading(false);
      } catch (err) {
        setError("Công ty không tồn tại");
        setLoading(false);
      }
    };

    fetchCompanyDetails();
  }, [companyId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!company) {
    return null;
  }

  return (
    <section>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">
          Thông tin chi tiết công ty
        </h1>
        <div className="mb-20 border-t-4 border-gray-300 rounded-xl shadow-lg p-8 bg-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 py-10">
            <div className="flex flex-col gap-5 w-full md:w-1/2">
              <p className="text-3xl md:text-4xl uppercase font-bold mb-5 text-center md:text-left text-blue-600">
                {company.name}
              </p>
              <div className="flex flex-wrap md:text-xl text-lg justify-between text-gray-700">
                <div className="flex items-center font-medium mb-5 w-full">
                  <FaLocationDot size={24} className="text-gray-600" />
                  <p className="ml-3">
                    {company.company_address.street} -{" "}
                    {company.company_address.district} -{" "}
                    {company.company_address.city}
                  </p>
                </div>
                <div className="flex items-center font-medium mb-5 w-full">
                  <MdWork size={24} className="text-gray-600" />
                  <p className="ml-3">
                    {company.major.map((item, index) => (
                      <span key={index} className="block">
                        {item.name}
                      </span>
                    ))}
                  </p>
                </div>
                <div className="flex items-center font-medium mb-5 w-full">
                  <RiGroupFill size={24} className="text-gray-600" />
                  <p className="ml-3">{company.personal_introduction}</p>
                </div>
              </div>
            </div>
          </div>
          <Link className="flex justify-center" to="/timvieclam">
            <button className="uppercase text-2xl bg-yellow-500 hover:bg-yellow-600 text-white py-4 px-8 mb-5 rounded-lg shadow-lg font-bold transition-transform transform hover:scale-105 duration-300">
              ỨNG TUYỂN NGAY
            </button>
          </Link>
        </div>
        <div className="mb-10 border rounded-lg shadow-md md:p-10 p-4 bg-white">
          <h3 className="text-2xl font-semibold mb-4">Thông tin công ty</h3>
          <div className="md:max-w-[70%]">
            <h4 className="text-2xl font-semibold mb-4 border-b-2 border-gray-500">
              Giới thiệu
            </h4>
            <p className="md:text-xl text-lg mb-4">
              {company.personal_introduction}
            </p>
            <h4 className="text-2xl font-semibold mb-4 border-b-2 border-gray-500">
              Địa chỉ văn phòng
            </h4>
            <p className="md:text-xl text-lg mb-4">
              {company.company_address.street} -{" "}
              {company.company_address.district} -{" "}
              {company.company_address.city}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default CompanyDetail;
