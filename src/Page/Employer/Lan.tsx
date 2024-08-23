import React from "react";
import NavEm from "./Nav";
import Footer from "../../Components/Footter";

const logos = [
  "./svg/aha.svg",
  "./svg/aha.svg",
  "./svg/aha.svg",
  "./svg/aha.svg",
  "./svg/aha.svg",
  "./svg/aha.svg",
  "./svg/aha.svg",
  "./svg/aha.svg",
  "./svg/aha.svg",
  "./svg/aha.svg",
];
const Lan: React.FC = () => {
  return (
    <section>
      <NavEm />
      <div className="max-w-[1440px] flex flex-col gap-[100px] mx-auto px-4 py-10 w-full ">
        <nav className="flex flex-col items-center justify-center gap-5">
          <h1 className="md:text-[54px] text-[30px] font-bold text-center">
            Tuyển Dụng Hiệu Quả <br />
            Chi Phí Tối Ưu
          </h1>
          <div className="flex flex-col md:flex-row gap-10 md:items-center">
            <div className="max-w-[350px] flex flex-col gap-5">
              <div className="text-2xl">
                <p className="font-bold">Dịch vụ chuyên nghiệp</p>
                <p>Đáp ứng mọi nhu cầu tuyển dụng</p>
              </div>
              <div className="text-2xl">
                <p className="font-bold">Tuyển dụng nhanh chóng</p>
                <p>Giảm 50% thời gian tuyển dụng trung bình</p>
              </div>
              <div className="text-2xl">
                <p className="font-bold">Nguồn ứng viên đa dạng</p>
                <p>Các vị trí từ trung cấp đến cấp cao trong mọi lĩnh vực</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="./img/Bg-TuyenDung.png"
                alt=""
                className="max-w-full md:max-w-[400px]"
              />
            </div>
          </div>
        </nav>

        <nav className="w-full bg-Bg1 gap-10  px-4 py-5 text-white flex flex-col">
          <h1 className="text-[40px]  text-center text-yellow-200 font-bold">
            THAM GIA CỘNG ĐỘNG 1.000.000+ ỨNG VIÊN TÀI NĂNG
          </h1>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                className="  w-full"
                src="./img/bg.webp"
                alt="Value Proposition"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-col text-left gap-7">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-yellow-200">
                    +6 triệu
                  </h2>
                  <p className="text-2xl">Nhân tài khắp Đông Nam Á</p>
                </div>
                <hr className="border-t-2 border-yellow-500"></hr>
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-yellow-200">
                    +60,000
                  </h2>
                  <p className="text-2xl">Doanh nghiệp đã tin tưởng</p>
                </div>
                <hr className="border-t-2 border-yellow-500"></hr>
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-yellow-200">+5,000</h2>
                  <p className="text-2xl">Vị trí tuyển dụng thành công</p>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav>
          <h1 className="md:text-[50px] text-[30px] font-bold text-center mb-[30px] text-blue-800">
            Hệ Sinh Thái Nhân Tài Dẫn Đầu Khu Vực
          </h1>
          <p className="md:text-[30px] text-[18px] font-bold text-center mb-[50px]">
            Chúng tôi được hỗ trợ bởi những nhà đầu tư hàng đầu khu vực
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-gray-200 p-5 border rounded-xl"
              >
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="w-full max-w-[100px] max-h-[120px]"
                />
              </div>
            ))}
          </div>
        </nav>
      </div>
      <Footer />
    </section>
  );
};

export default Lan;
