import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
const Footter = () => {
  return (
    <footer className="relative bg-top bg-[#1c1c1c]  flex w-full items-center justify-center overflow-hidden  px-4 pb-12 pt-12 md:px-10 md:pb-44 md:pt-20 ">
      <div className="absolute h-full w-full brightness-75"></div>
      <div className="z-10 flex w-full max-w-5xl flex-col gap-y-12 font-medium text-white md:flex-row text-left">
        <div></div>
        <dl className="w-full ">
          <dt className="mb-1 border-b-2 border-white/10 pb-2 text-2xl font-semibold md:border-none md:pb-1 md:text-xl">
            Giới thiệu
          </dt>
          <dd className="mb-2 first-of-type:pt-2">
            <a
              className="opacity-75 transition-colors hover:opacity-100"
              href="#timkiem">
              Tìm kiếm
            </a>
          </dd>
          <dd className="mb-2 first-of-type:pt-2">
            <a
              rel="noopener noreferrer"
              className="opacity-75 transition-colors hover:opacity-100"
              href="#chungtoico">
              Chúng tôi có!
            </a>
          </dd>
          <dd className="mb-2 first-of-type:pt-2">
            <a
              rel="noopener noreferrer"
              className="opacity-75 transition-colors hover:opacity-100"
              href="#truyenthong">
              Truyền thông
            </a>
          </dd>
          <dd className="mb-2 first-of-type:pt-2">
            <a
              rel="noopener noreferrer"
              className="opacity-75 transition-colors hover:opacity-100"
              href="#congdong">
              Cộng đồng
            </a>
          </dd>
          <dd className="mb-2 first-of-type:pt-2">
            <a
              rel="noopener noreferrer"
              className="opacity-75 transition-colors hover:opacity-100"
              href="#nguoidung">
              Người dùng phản hồi
            </a>
          </dd>
        </dl>
        <dl className="w-full">
          <dt className="mb-1 border-b-2 border-white/10 pb-2 text-2xl font-semibold md:border-none md:pb-1 md:text-xl">
            Công ty
          </dt>
          <dd className="mb-2 first-of-type:pt-2">
            <a
              className="opacity-75 transition-colors hover:opacity-100"
              href="/Timvieclam">
              Tìm việc làm
            </a>
          </dd>
          <dd className="mb-2 first-of-type:pt-2">
            <a
              className="opacity-75 transition-colors hover:opacity-100"
              href="/Congty">
              Tìm công ty
            </a>
          </dd>
          <dd className="mb-2 first-of-type:pt-2">
            <a
              target="_blank"
              className="opacity-75 transition-colors hover:opacity-100"
              href="/Blog">
              Blog
            </a>
          </dd>
          <dd className="mb-2 first-of-type:pt-2">
            <a
              target="_blank"
              className="opacity-75 transition-colors hover:opacity-100"
              href="/Nhatuyendung">
              Nhà tuyển dụng
            </a>
          </dd>
        </dl>
        <dl className="w-full">
          <dt className="mb-1 border-b-2 border-white/10 pb-2 text-2xl font-semibold md:border-none md:pb-1 md:text-xl">
            Liên hệ
          </dt>
          <dd className="mb-2 first-of-type:pt-2 flex flex-col gap-5">
            <div className="flex gap-3 items-center">
              <MdLocationPin /> Hà Nội
            </div>
            <div className="flex gap-3 items-center">
              <FaPhone /> 0343224751
            </div>
            <div className="flex gap-3 items-center">
              <IoIosMail /> buiductuyengl1072002@gmail.com
            </div>
          </dd>
        </dl>

        <div className="w-full md:min-w-[360px]">
          <img src="./svg/logo.svg" alt="" />
          <p className="mt-4 opacity-75">
            Giúp người dùng có những trải nghiệm tốt nhất cùng Spicy. Hãy phản
            hồi lại những thắc mắc và thiếu xót lại với chúng tôi để có những
            đánh giá 1 cách chi tiết nhất. Xin cảm ơn !
          </p>
          <div className="mt-4 flex items-center justify-between gap-6 md:justify-start">
            <p className="text-sm opacity-75">
              © <span>2024</span> Spicy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footter;
