import React, { useCallback, useEffect, useState } from "react";
import { Menu, Button, Drawer } from "antd";
import {
  SolutionOutlined,
  ContainerOutlined,
  UnorderedListOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../../Context/AuthContext";
import client from "../../config";

const NavEm: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { user, logout } = useAuth();
  const [userId, setUserId] = useState("");
  const [company, setCompany] = useState("");

  const getUserId = useCallback(async () => {
    try {
      const response = await client.get(`http://127.0.0.1:8000/user/user`);
      setUserId(response.data.user.id);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const getCompany = useCallback(async () => {
    if (userId) {
      try {
        const response = await client.get(
          `http://127.0.0.1:8000/company/?userId=${userId}`
        );
        setCompany(response.data[0].id);
      } catch (err) {
        console.error(err);
      }
    }
  }, [userId]);

  useEffect(() => {
    getUserId();
  }, [getUserId]);

  useEffect(() => {
    getCompany();
  }, [getCompany]);

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
          <a href="/nhatuyendung" className="text-white font-bold text-xl">
            <img
              src="../img/logo.png"
              alt=""
              style={{ width: "100px", height: "80px" }}
            />
          </a>
          <div className="hidden md:flex space-x-10">
            <a href="/" className=" hover:text-gray-300">
              TÌM VIỆC LÀM
            </a>
            {/* <a href="/congty" className=" hover:text-gray-300">
              FAQ
            </a> */}
            <a href="/blog" target="_blank" className=" hover:text-gray-300">
              BLOG
            </a>
          </div>
        </div>

        <div className="flex space-x-4 px-2 md:hidden">
          <Button type="primary" onClick={showDrawer}>
            Menu
          </Button>
        </div>
        {user && (
          <div className=" space-x-4 px-2 hidden md:block">
            <Link to="/danhsachcv">
              <Button
                className="text-black font-bold"
                type="primary"
                icon={<ContainerOutlined />}>
                DANH SÁCH CÔNG VIỆC
              </Button>
            </Link>
            {!company && (
              <Link to="/nhatuyendung/thongtin">
                <Button
                  className="text-black font-bold"
                  type="primary"
                  icon={<UnorderedListOutlined />}>
                  TẠO NHÀ TUYỂN DỤNG
                </Button>
              </Link>
            )}
            <Link to="/nhatuyendung/congviec">
              <Button
                className="text-black font-bold"
                type="primary"
                icon={<SolutionOutlined />}>
                TẠO CÔNG VIỆC
              </Button>
            </Link>
            <Button
              className="text-black font-bold"
              type="primary"
              icon={<LogoutOutlined />}
              onClick={onLogout}>
              ĐĂNG XUẤT
            </Button>
          </div>
        )}

        {!user && (
          <div className=" space-x-4 px-2 hidden md:block">
            <Link to="/dangnhap-nhatuyendung">
              <Button
                className="text-black font-bold"
                type="primary"
                icon={<UserOutlined />}>
                ĐĂNG NHẬP
              </Button>
            </Link>
            <Link to="/dangki-nhatuyendung">
              <Button
                className="text-black font-bold"
                type="primary"
                icon={<UserOutlined />}>
                ĐĂNG KÝ
              </Button>
            </Link>
          </div>
        )}

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
            <Link to="/">TÌM VIỆC LÀM</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/blog">BLOG</Link>
          </Menu.Item>
          {!user && (
            <>
              <Menu.Item key="4">
                <Link to="/dangnhap-nhatuyendung">
                  <Button
                    className="text-black font-bold"
                    type="primary"
                    icon={<UserOutlined />}>
                    ĐĂNG NHẬP
                  </Button>
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/dangki-nhatuyendung">
                  <Button
                    className="text-black font-bold"
                    type="primary"
                    icon={<UserOutlined />}>
                    ĐĂNG KÝ
                  </Button>
                </Link>
              </Menu.Item>
            </>
          )}

          {user && (
            <>
              <Menu.Item key="3">
                <Link to="/danhsachcv">
                  <Button
                    className="text-black font-bold"
                    type="primary"
                    icon={<ContainerOutlined />}>
                    DANH SÁCH CÔNG VIỆC
                  </Button>
                </Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/danhsachcv">
                  <Button
                    className="text-black font-bold"
                    type="primary"
                    icon={<ContainerOutlined />}>
                    DANH SÁCH CÔNG VIỆC
                  </Button>
                </Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to="/nhatuyendung/thongtin">
                  <Button
                    className="text-black font-bold"
                    type="primary"
                    icon={<UnorderedListOutlined />}>
                    TẠO NHÀ TUYỂN DỤNG
                  </Button>
                </Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Button
                  className="text-black font-bold"
                  type="primary"
                  icon={<LogoutOutlined />}
                  onClick={onLogout}>
                  ĐĂNG XUẤT
                </Button>
              </Menu.Item>
            </>
          )}
        </Menu>
      </Drawer>
    </nav>
  );
};

export default NavEm;
