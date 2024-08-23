import React, { useCallback, useEffect, useState } from "react";
import { Menu, Button, Drawer } from "antd";
import { LogoutOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../../Context/AuthContext";
import client from "../../config";

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { user, logout } = useAuth();
  const [userId, setUserId] = useState("");
  const [employee, setEmployee] = useState("");

  const getUserId = useCallback(async () => {
    try {
      const response = await client.get(`http://127.0.0.1:8000/user/user`);
      setUserId(response.data.user.id);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const getEmployee = useCallback(async () => {
    if (userId) {
      try {
        const response = await client.get(
          `http://127.0.0.1:8000/employee/?userId=${userId}`
        );
        setEmployee(response.data[0].id);
      } catch (err) {
        console.error(err);
      }
    }
  }, [userId]);

  useEffect(() => {
    getUserId();
  }, [getUserId]);

  useEffect(() => {
    getEmployee();
  }, [getEmployee]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onLogout = async () => {
    logout();
  };

  return (
    <nav className="text-black bg-white px-3 font-bold border border-gray-300">
      <ToastContainer />

      <div className="container mx-auto flex justify-between items-center ">
        <div className="flex justify-center items-center space-x-10">
          <a href="/" className="text-white font-bold text-xl">
            <img
              src="../img/logo.png"
              alt="logo"
              style={{ width: "100px", height: "80px" }}
            />
          </a>
          <div className="hidden md:flex space-x-10">
            <a href="/timvieclam" className=" hover:text-gray-300">
              TÌM VIỆC LÀM
            </a>
            <a href="/congty" className=" hover:text-gray-300">
              TÌM CÔNG TY
            </a>
            <a href="/blog" className=" hover:text-gray-300">
              BLOG
            </a>
          </div>
        </div>

        <div className="flex space-x-4 px-2 md:hidden">
          <Button type="primary" onClick={showDrawer}>
            Menu
          </Button>
        </div>

        <div className="md:flex space-x-4 px-2 hidden ">
          {!user && (
            <>
              <a href="/nhatuyendung" className=" hover:text-gray-300">
                <Button
                  className="text-black font-bold"
                  type="primary"
                  icon={<TeamOutlined />}>
                  NHÀ TUYỂN DỤNG
                </Button>
              </a>
              <a href="/dangnhap" className=" hover:text-gray-300">
                <Button
                  className="text-black font-bold"
                  type="primary"
                  icon={<UserOutlined />}>
                  ĐĂNG NHẬP
                </Button>
              </a>
              <a href="/dangki" className=" hover:text-gray-300">
                <Button
                  className="text-black font-bold"
                  type="primary"
                  icon={<UserOutlined />}>
                  ĐĂNG KÝ
                </Button>
              </a>
            </>
          )}
          {user && (
            <>
              {!employee && (
                <a href="/nguoilaodong" className=" hover:text-gray-300">
                  <Button
                    className="text-black font-bold"
                    type="primary"
                    icon={<UserOutlined />}>
                    TẠO THÔNG TIN CÁ NHÂN
                  </Button>
                </a>
              )}
              <Button
                className="text-black font-bold"
                type="primary"
                icon={<LogoutOutlined />}
                onClick={onLogout}>
                ĐĂNG XUẤT
              </Button>
            </>
          )}
        </div>

        <div className="md:hidden ">
          <button className="" onClick={showDrawer}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      <Drawer
        className="font-bold"
        title="Spicy"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}>
        <Menu mode="inline">
          <Menu.Item key="1">
            <Link to="/timvieclam">TÌM VIỆC LÀM</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/congty">TÌM CÔNG TY</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/blog">BLOG</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Button
              className="text-black font-bold"
              type="primary"
              icon={<TeamOutlined />}>
              NHÀ TUYỂN DỤNG
            </Button>
          </Menu.Item>
          {!user && (
            <>
              <Menu.Item key="5">
                <Button
                  className="text-black font-bold"
                  type="primary"
                  icon={<UserOutlined />}>
                  TẠO THÔNG TIN CÁ NHÂN
                </Button>
              </Menu.Item>
              <Menu.Item key="6">
                <Button
                  className="text-black font-bold"
                  type="primary"
                  icon={<TeamOutlined />}>
                  ĐĂNG NHẬP
                </Button>
              </Menu.Item>
              <Menu.Item key="7">
                <Button
                  className="text-black font-bold"
                  type="primary"
                  icon={<UserOutlined />}>
                  ĐĂNG KÝ
                </Button>
              </Menu.Item>
            </>
          )}

          {user && (
            <Menu.Item key="8">
              <Button
                className="text-black font-bold"
                type="primary"
                icon={<LogoutOutlined />}
                onClick={onLogout}>
                ĐĂNG XUẤT
              </Button>
            </Menu.Item>
          )}
        </Menu>
      </Drawer>
    </nav>
  );
};

export default Navbar;
