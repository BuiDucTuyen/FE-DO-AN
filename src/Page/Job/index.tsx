import React, { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";
import { JobProps } from "../../types";
import client from "../../config";
import Footer from "../../Components/Footter";

const Job: React.FC = () => {
  const [jobs, setJobs] = useState<JobProps[]>([]);
  const [search, setSearch] = useState<string>("");
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await client.get("http://127.0.0.1:8000/jobs/");
        setJobs(response.data);
        setVisible(true);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchJobs();
  }, []);

  const onSearch = async () => {
    try {
      const response = await client.get(
        `http://127.0.0.1:8000/jobs/?keyword=${search}`
      );
      setJobs(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section>
      <Navbar />
      <div className="container mx-auto mb-48">
        <h1 className="text-xl mt-5 md:text-2xl font-semibold ml-4">
          Tin tuyển dụng, việc làm nhanh 24h tại Việt Nam
        </h1>

        <div className="my-5">
          <input
            type="text"
            placeholder="Tìm kiếm việc làm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
          <button
            onClick={onSearch}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Tìm kiếm
          </button>
        </div>
        {!visible ? (
          <div className="text-2xl font-bold mb-2">
            Bạn phải đăng nhập trước!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="border border-gray-300 rounded-lg shadow-lg p-6 bg-white"
              >
                <h2 className="text-2xl font-bold mb-2">
                  <Link
                    to={`/chitetvieclam/${job.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {job.name}
                  </Link>
                </h2>
                <p className="text-gray-700 mb-2">
                  <FaLocationDot className="inline-block mr-2" />
                  {job.job_address.street}, {job.job_address.district},{" "}
                  {job.job_address.city}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Ngành:</strong>{" "}
                  {job.major.map((item, index) => (
                    <span key={index} className="inline-block mr-2">
                      {item.name}
                    </span>
                  ))}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Cấp độ:</strong> {job.level}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Lương:</strong> {job.min_salary} $ - {job.max_salary}{" "}
                  $
                </p>
                <Link
                  to={`/chitetvieclam/${job.id}`}
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

export default Job;
