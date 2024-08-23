import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { RiGroupFill, RiMoneyDollarCircleFill } from "react-icons/ri";
import Navbar from "../../Components/Navbar";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { IoIosTime } from "react-icons/io";
import { toast } from "react-toastify";
import { JobDetailProps } from "../../types";
import client from "../../config";
import Footer from "../../Components/Footter";

const JobDetail: React.FC = () => {
  const navigate = useNavigate();
  const { jobId } = useParams<{ jobId: string | any }>();
  const [job, setJob] = useState<JobDetailProps | null>(null);
  const [user, setUser] = useState("");
  const [employee, setEmployee] = useState("");
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await client.get(
          `http://127.0.0.1:8000/jobs/${jobId}/`
        );
        setJob(response.data);
      } catch (err) {}
    };

    fetchJobDetails();
  }, [jobId]);

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
    const getEmployee = async () => {
      try {
        const response = await client.get(
          `http://127.0.0.1:8000/employee/?userId=${user}`
        );

        if (response.data && response.data.length > 0) {
          setEmployee(response.data[0].id);
        } else {
          console.error("Empty response or invalid data structure");
        }
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };
    getEmployee();
  }, [user]);

  if (!job) {
    return null;
  }

  const onApply = async () => {
    if (!file) {
      toast.error("Vui lòng chọn tệp CV trước khi ứng tuyển!");
      return;
    }

    const formData = new FormData();
    formData.append("employeeId", employee);
    formData.append("jobId", jobId);
    formData.append("file", file);

    try {
      await client.post("http://127.0.0.1:8000/upload", formData);
      toast.success("Ứng tuyển công việc thành công!");

      setTimeout(() => {
        navigate("/timvieclam");
      }, 1000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Ứng tuyển công việc thất bại!");
    }
  };

  const onFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const uploadedFile = event.target.files[0];
      setFile(uploadedFile);
    }
  };

  return (
    <section>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">
          Thông tin chi tiết công việc
        </h1>
        <div className="mb-20 border-t-4 border-gray-300 rounded-xl shadow-lg p-8 bg-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 py-10">
            <div className="flex flex-col gap-5 w-full md:w-1/2">
              <p className="text-3xl md:text-4xl uppercase font-bold mb-5 text-center md:text-left text-blue-600">
                {job.name}
              </p>
              <div className="flex flex-wrap md:text-xl text-lg justify-between text-gray-700">
                <div className="flex items-center font-medium mb-5 w-full">
                  <FaLocationDot size={24} className="text-gray-600" />
                  <p className="ml-3">
                    {job.job_address.street}, {job.job_address.district},{" "}
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
                    {job.major.map((item, index) => (
                      <span key={index} className="block">
                        {item.name}
                      </span>
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
          </div>
          <div className="flex flex-col items-center">
            <input
              type="file"
              className="hidden"
              id="file-upload"
              accept="application/pdf"
              onChange={onFileUpload}
            />
            <label
              htmlFor="file-upload"
              className="uppercase text-2xl bg-blue-500 hover:bg-blue-600 text-white py-4 px-8 rounded-lg shadow-lg font-bold transition-transform transform hover:scale-105 duration-300 cursor-pointer"
            >
              {file ? file.name : "Tải CV"}
            </label>
            <button
              className="uppercase text-2xl bg-yellow-500 hover:bg-yellow-600 text-white py-4 px-8 mt-5 rounded-lg shadow-lg font-bold transition-transform transform hover:scale-105 duration-300"
              onClick={onApply}
            >
              Ứng tuyển ngay
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default JobDetail;
