import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full px-6 py-10 md:px-12 md:py-8 relative">
      <div className="container mx-auto relative z-10 flex flex-wrap justify-between text-white">
        <div className="mb-8 w-full md:w-auto">
          <h2 className="mb-4 text-2xl font-semibold">Giới thiệu</h2>
          <ul className="space-y-2">
            <li>
              <a
                className="hover:text-yellow-500 transition-colors"
                href="#timkiem"
              >
                Tìm kiếm
              </a>
            </li>
            <li>
              <a
                className="hover:text-yellow-500 transition-colors"
                href="#chungtoico"
              >
                Chúng tôi có!
              </a>
            </li>
            <li>
              <a
                className="hover:text-yellow-500 transition-colors"
                href="#truyenthong"
              >
                Truyền thông
              </a>
            </li>
            <li>
              <a
                className="hover:text-yellow-500 transition-colors"
                href="#congdong"
              >
                Cộng đồng
              </a>
            </li>
            <li>
              <a
                className="hover:text-yellow-500 transition-colors"
                href="#nguoidung"
              >
                Người dùng phản hồi
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-8 w-full md:w-auto">
          <h2 className="mb-4 text-2xl font-semibold">Công ty</h2>
          <ul className="space-y-2">
            <li>
              <a
                className="hover:text-yellow-500 transition-colors"
                href="/timvieclam"
              >
                Tìm việc làm
              </a>
            </li>
            <li>
              <a
                className="hover:text-yellow-500 transition-colors"
                href="/congty"
              >
                Tìm công ty
              </a>
            </li>
            <li>
              <a
                className="hover:text-yellow-500 transition-colors"
                href="/blog"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="hover:text-yellow-500 transition-colors"
                href="/nhatuyendung"
              >
                Nhà tuyển dụng
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-8 w-full md:w-auto">
          <h2 className="mb-4 text-2xl font-semibold">Liên hệ</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <MdLocationPin className="text-yellow-500" />
              <span>Hà Nội</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-yellow-500" />
              <span>0773284657</span>
            </li>
            <li className="flex items-center gap-2">
              <IoIosMail className="text-yellow-500" />
              <span>vuongtuan@gmail.com</span>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-auto md:ml-auto">
          <img src="./svg/logo.svg" alt="Logo" className="mb-4" />
          <p className="opacity-75">
            Giúp người dùng có những trải nghiệm tốt nhất cùng Spicy. Hãy phản
            hồi lại những thắc mắc và thiếu xót lại với chúng tôi để có những
            đánh giá 1 cách chi tiết nhất. Xin cảm ơn!
          </p>
          <p className="mt-4 text-sm opacity-75">© 2024 Spicy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
