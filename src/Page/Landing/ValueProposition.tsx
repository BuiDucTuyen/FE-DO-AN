import React from "react";

const ValueProposition = () => {
  return (
    <section
      id="congdong"
      className="w-full gap-10 px-4 py-5 bg-stone-100 flex flex-col"
    >
      <h1 className="text-4xl text-center">
        THAM GIA CỘNG ĐỘNG 1.000.000+ ỨNG VIÊN TÀI NĂNG
      </h1>
      <div className="flex flex-col md:flex-row gap-5 items-center">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="max-w-[70%] max-h-[80%] w-full"
            src="../img/istockphoto-1356386941-612x612.jpg"
            alt="Value Proposition"
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex flex-col text-left gap-7">
            <div>
              <h2 className="text-3xl font-bold">
                KHÁM PHÁ NGHỀ NGHIỆP MƠ ƯỚC
              </h2>
              <p className="text-lg">
                Khám phá nghề nghiệp mơ ước và ứng tuyển hàng ngàn việc làm nổi
                bật nhất hiện nay!
              </p>
            </div>
            <hr className="border-t-2 border-yellow-500"></hr>
            <div>
              <h2 className="text-3xl font-bold">
                PHÁT TRIỂN KỸ NĂNG CHUYÊN MÔN
              </h2>
              <p className="text-lg">Phát triển kỹ năng chuyên môn</p>
            </div>
            <hr className="border-t-2 border-yellow-500"></hr>
            <div>
              <h2 className="text-3xl font-bold">CƠ HỘI VIỆC LÀM TOÀN CẦU</h2>
              <p className="text-lg">
                Đừng bỏ lỡ cơ hội kết nối với các công ty trên toàn cầu và nắm
                bắt cơ hội việc làm mới nhất
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
