import React, { useCallback, useEffect, useState } from "react";
import CategoriesList from "./CareerItem";
import PressFeatures from "./PressFeatures";
import User from "./User";
import ValueProposition from "./ValueProposition";
import Search from "./Search";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footter";
import { useNavigate } from "react-router-dom";
import client from "../../config";

const Landing = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [company, setCompany] = useState<string>("");

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

  useEffect(() => {
    getUserId();
  }, [getUserId]);

  useEffect(() => {
    getCompany();
  }, [getCompany]);

  useEffect(() => {
    if (company) {
      navigate("/nhatuyendung");
    }
  }, [company, navigate]);
  return (
    <section>
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-4 py-10 w-full gap-10">
        <div className="p-4 flex flex-col gap-[80px]">
          <Search />
          <CategoriesList />
          <ValueProposition />
          <PressFeatures />
          <User />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Landing;
