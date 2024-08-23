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
        {listFiles.map((file, index) => (
          <div
            key={index}
            className="mb-20 border-t-4 border-gray-300 rounded-xl shadow-lg p-8 bg-white"
          >
            <div className="flex flex-col gap-5 w-full md:w-1/2">
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
                {/* <div className="flex items-center font-medium mb-5 w-full">
                  <RiGroupFill size={24} className="text-gray-600" />
                  <p className="ml-3">{file.employee.gender}</p>
                </div> */}
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
                  <p className="ml-3">{file.employee.personal_introduction}</p>
                </div>
                <div className="flex items-center font-medium mb-5 w-full">
                  <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    onClick={() => window.open(`${file.cv_url}`, "_blank")}
                  >
                    Xem CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default CvDetail;
