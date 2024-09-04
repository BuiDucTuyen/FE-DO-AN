import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../../config";
import { FaLocationDot } from "react-icons/fa6";
import { MdWork, MdContactPhone } from "react-icons/md";
import { RiGroupFill } from "react-icons/ri";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { CVDetail } from "../../types";
import { IoLogoBuffer } from "react-icons/io";
import NavEm from "./Nav";
import Footer from "../../Components/Footter";

const CvDetail: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const [listFiles, setListFiles] = useState<CVDetail[]>([]);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    const getListFile = async () => {
      try {
        const response = await client.get(
          `http://127.0.0.1:8000/get-file?jobId=${jobId}`
        );
        setListFiles(response.data.message);
      } catch (err) {
        console.error(err);
      }
    };
    getListFile();
  }, [jobId]);

  return (
    <section>
      <NavEm />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">
          Danh sách CV
        </h1>
        <h1 className="text-2xl font-semibold mb-6 text-gray-600">
          Có {listFiles.length} CV ứng tuyển.{" "}
          <span
            onClick={() => setShowTable(!showTable)}
            className="text-blue-600 cursor-pointer">
            Thống kê
          </span>
        </h1>

        {showTable && (
          <div className="mt-5 mb-5 overflow-x-auto">
            <h2 className="text-3xl font-bold mb-4 text-gray-700">
              Bảng thống kê CV ứng tuyển
            </h2>
            <table className="min-w-full bg-white shadow-md rounded-lg">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    STT
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Tên ứng viên
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Địa chỉ
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Số điện thoại
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Ngành nghề
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Tuổi
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Trình độ
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Giới thiệu cá nhân
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Liên kết CV
                  </th>
                </tr>
              </thead>
              <tbody>
                {listFiles.map((file, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm">
                      {file.employee.name}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm">
                      {file.employee.employee_address.street} -{" "}
                      {file.employee.employee_address.district} -{" "}
                      {file.employee.employee_address.city}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm">
                      {file.employee.number}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm">
                      {file.employee.major.map((major, idx) => (
                        <span key={idx} className="block">
                          {major.name}
                        </span>
                      ))}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm">
                      {file.employee.age}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm">
                      {file.employee.level}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm">
                      {file.employee.personal_introduction}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm">
                      <a
                        href={file.cv_url.toString()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline">
                        Xem CV
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {listFiles.map((file, index) => (
              <div
                key={index}
                className="border-t-4 border-gray-300 rounded-xl shadow-lg p-8 bg-white">
                <div className="flex flex-col gap-5">
                  <p className="text-3xl md:text-4xl uppercase font-bold mb-5 text-center md:text-left text-blue-600">
                    {file.employee.name}
                  </p>
                  <div className="flex flex-wrap md:text-xl text-lg justify-between text-gray-700">
                    <div className="flex items-center font-medium mb-5 w-full">
                      <FaLocationDot size={24} className="text-gray-600" />
                      <p className="ml-3">
                        {file.employee.employee_address.street} -{" "}
                        {file.employee.employee_address.district} -{" "}
                        {file.employee.employee_address.city}
                      </p>
                    </div>
                    <div className="flex items-center font-medium mb-5 w-full">
                      <MdWork size={24} className="text-gray-600" />
                      <p className="ml-3">
                        {file.employee.major.map((major, idx) => (
                          <span key={idx} className="block">
                            {major.name}
                          </span>
                        ))}
                      </p>
                    </div>
                    <div className="flex items-center font-medium mb-5 w-full">
                      <MdContactPhone size={24} className="text-gray-600" />
                      <p className="ml-3">{file.employee.number}</p>
                    </div>
                    <div className="flex items-center font-medium mb-5 w-full">
                      <RiGroupFill size={24} className="text-gray-600" />
                      <p className="ml-3">{file.employee.age}</p>
                    </div>
                    <div className="flex items-center font-medium mb-5 w-full">
                      <IoLogoBuffer size={24} className="text-gray-600" />
                      <p className="ml-3">{file.employee.level}</p>
                    </div>
                    <div className="flex items-center font-medium mb-5 w-full">
                      <BiSolidMessageAltDetail
                        size={24}
                        className="text-gray-600"
                      />
                      <p className="ml-3">
                        {file.employee.personal_introduction}
                      </p>
                    </div>
                    <div className="flex items-center font-medium mb-5 w-full">
                      <button
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        onClick={() => window.open(`${file.cv_url}`, "_blank")}>
                        Xem CV
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default CvDetail;
