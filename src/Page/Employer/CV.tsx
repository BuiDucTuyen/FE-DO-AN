import React, { useState, useEffect, useCallback } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { RiGroupFill, RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoIosTime } from "react-icons/io";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import Footer from "../../Components/Footter";
import { JobDetailProps } from "../../types";
import client from "../../config";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
import NavEm from "./Nav";

const CV: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [company, setCompany] = useState("");
  const [job, setJob] = useState("");
  const [listJob, setListJob] = useState<JobDetailProps[]>([]);

  const getUserId = useCallback(async () => {
    try {
      const response = await client.get(`http://127.0.0.1:8000/user/user`);
      setUser(response.data.user.id);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const getCompany = useCallback(async () => {
    if (user) {
      try {
        const response = await client.get(
          `http://127.0.0.1:8000/company/?userId=${user}`
        );
        setCompany(response.data[0].id);
      } catch (err) {
        console.error(err);
      }
    }
  }, [user]);

  const getJobs = useCallback(async () => {
    if (company) {
      try {
        const response = await client.get(
          `http://127.0.0.1:8000/jobs/?companyId=${company}`
        );
        setJob(response.data[0].id);
        setListJob(response.data);
      } catch (err) {
        console.error(err);
      }
    }
  }, [company]);

  useEffect(() => {
    getUserId();
  }, [getUserId]);

  useEffect(() => {
    getCompany();
  }, [getCompany]);

  useEffect(() => {
    getJobs();
  }, [getJobs]);

  return (
    <section>
      <NavEm />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">
          Danh sách công việc
        </h1>
        {listJob.map((job) => (
          <div
            key={job.id}
            className="mb-20 border-t-4 border-gray-300 rounded-xl shadow-lg p-8 bg-white"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 py-10">
              <div className="flex flex-col gap-5 w-full md:w-1/2">
                <p className="text-3xl md:text-4xl uppercase font-bold mb-5 text-center md:text-left text-blue-600">
                  {job.name}
                </p>
                <div className="flex flex-wrap md:text-xl text-lg justify-between text-gray-700">
                  <div className="flex items-center font-medium mb-5 w-full">
                    <FaLocationDot size={24} className="text-gray-600" />
                    <p className="ml-3">
                      {job.job_address.street} - {job.job_address.district} -{" "}
                      {job.job_address.city}
                    </p>
                  </div>
                  <div className="flex items-center font-medium mb-5 w-full">
                    <IoIosTime size={24} className="text-gray-600" />
                    <p className="ml-3">{job.expired_time.split("T")[0]}</p>
                  </div>
                  <div className="flex items-center font-medium mb-5 w-full">
                    <MdWork size={24} className="text-gray-600" />
                    <p className="ml-3">
                      {job.major.map((major) => (
                        <span className="block">{major.name}</span>
                      ))}
                    </p>
                  </div>
                  <div className="flex items-center font-medium mb-5 w-full">
                    <RiGroupFill size={24} className="text-gray-600" />
                    <p className="ml-3">{job.level}</p>
                  </div>
                  <div className="flex items-center font-medium mb-5 w-full">
                    <RiMoneyDollarCircleFill
                      size={24}
                      className="text-gray-600"
                    />
                    <p className="ml-3">
                      {" "}
                      {job.min_salary} $ - {job.max_salary} $
                    </p>
                  </div>
                  <div className="flex items-center font-medium mb-5 w-full">
                    <BiSolidMessageAltDetail
                      size={24}
                      className="text-gray-600"
                    />
                    <p className="ml-3">{job.description}</p>
                  </div>
                </div>
              </div>

              <Link to={`/chitietcv/${job.id}`}>
                <Button
                  className="px-4  bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                  type="primary"
                >
                  Chi tiết
                </Button>
              </Link>
              {/* <Link
                to={`/chitietcv/${job.id}`}
                className="text-blue-600 hover:underline"
              >
                Chi Tiết
              </Link> */}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default CV;
