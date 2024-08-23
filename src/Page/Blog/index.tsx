import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footter";

const Blog = () => {
  return (
    <section>
      <Navbar />

      <nav className="container mx-auto">
        <div className="flex  items-center justify-center md:justify-start">
          <img
            src="../img/logo.png"
            alt=""
            style={{ width: "150px", height: "100px" }}
            className="mb-3 md:mb-0 mr-0 md:mr-5"
          />
          <h1 className="text-[16px] md:text-xl font-bold uppercase text-center">
            bí quyết thành công của bạn
          </h1>
        </div>

        <div className="">
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 mb-3 md:mb-5">
            <h1 className="uppercase text-2xl font-bold text-center ">blog</h1>
            <h1 className="uppercase text-[16px] md:text-xl font-bold border bg-red-400 text-white px-3 py-1 rounded-3xl">
              bí quyết thành công của bạn từ spicy
            </h1>
          </div>

          <div className="flex justify-center items-center p-4">
            <div className=" flex flex-col gap-5 w-full p-2 md:max-w-[70%]">
              <div className=" flex  flex-col gap-2 items-center justify-center">
                <img
                  className="max-w-[800px] w-full max-h-[400px] "
                  src="./img/blog1.jpg"
                  alt=""
                />
                <span className="text-[20px]">Huy Kieu - 20/03/2024</span>
              </div>

              <div className="md:p-4 p-1 flex flex-col gap-2">
                <h2 className=" text-xl md:text-3xl font-bold ">
                  KPI Và OKR Khác Nhau Như Thế Nào? Tìm Hiểu Thuật Ngữ Quen
                  Thuộc Trong Công Việc{" "}
                </h2>
                <h3 className="font-bold text-xl md:text-2xl">1. KPI là gì?</h3>
                <div className="flex flex-col text-[18px] md:text-[20px] gap-3 md:gap-2">
                  {" "}
                  <p>
                    KPI là viết tắt từ cụm Key Performance Indicators, được hiểu
                    là một chỉ số hiệu suất nhằm đánh giá mức độ thành công của
                    tổ chức hoặc các hoạt động cụ thể.
                  </p>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <img className="max-h-[500px]" src="./img/KPI.jpg" alt="" />
                    <p>KPI là chỉ số đánh giá hiệu suất của mục tiêu.</p>
                  </div>
                  <p>
                    KPI có thể được áp dụng cho các dự án, chương trình, sản
                    phẩm, v.v. Chúng có thể đo lường sự thành công của bất cứ
                    điều gì từ mục tiêu bán hàng đến các số liệu truyền thông.
                  </p>
                  <span>Một vài ví dụ về KPI có thể kể đến như: </span>
                  <ul className="ml-5 flex flex-col gap-2">
                    <li>
                      <span className="font-bold">1.</span> Ngành Bán lẻ: Doanh
                      thu bán hàng, số lượng hàng bán ra, v.v.
                    </li>
                    <li>
                      <span className="font-bold">2.</span> Phòng nhân sự: Số
                      lượng ứng viên ứng tuyển, số ứng viên đồng ý nhận việc,
                      v.v.
                    </li>
                    <li>
                      <span className="font-bold">3.</span> Phòng marketing: Số
                      lượng data cần thu được, số lượng bài viết cần đăng, v.v.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:p-4 flex flex-col gap-2">
                <h2 className="font-bold text-xl md:text-2xl">2. OKR là gì?</h2>
                <div className="flex flex-col text-[18px] md:text-[20px] gap-3 md:gap-2 p-1">
                  <p>
                    {" "}
                    OKR được viết tắt từ Objective and Key Results, được hiểu là
                    thước đo mục tiêu phác thảo của công ty và nhóm cùng với kết
                    quả chính có thể đo lường để xác định kết quả của từng mục
                    tiêu.
                  </p>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <img className="max-h-[500px]" src="./img/ORK.jpg" alt="" />
                    <p>OKR là mục tiêu lớn bao gồm KPI.</p>
                  </div>
                  <p>
                    OKR thể hiện các mục tiêu tích cực và xác định các bước để
                    đạt được những mục tiêu này. Thông thường, chúng được thiết
                    lập theo từng quý hoặc theo kế hoạch hàng năm.
                  </p>
                  <span>Ví dụ về thiết lập OKR cho bộ phận HR: </span>
                  <ul className="ml-5 flex flex-col gap-2">
                    <li>
                      <span className="font-bold">1.</span> Objective: Tạo mới
                      và cải thiện chính sách PTO (Paid Time Of)
                    </li>
                    <li>
                      <span className="font-bold">2.</span> Key result 1: Tuyển
                      dụng một trợ lý ảo cho nhu cầu của admin
                    </li>
                    <li>
                      <span className="font-bold">3.</span> Key result 2: Đánh
                      giá 5 giải pháp để theo dõi nghỉ phép
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:p-4 flex flex-col gap-2">
                <h3 className="font-bold text-xl md:text-2xl">
                  3. Lưu ý khi xác lập KPI và OKR
                </h3>
                <div className="flex flex-col text-[18px] md:text-[20px] gap-3 md:gap-2 p-1">
                  <p>
                    {" "}
                    Khi xác lập KPI và OKR bạn cần lưu gì? Dưới đây là một vài
                    điểm mà bạn cần chú ý khi thiết lập hai cách đo lường mục
                    tiêu này.
                  </p>

                  <ul className="ml-5 flex flex-col gap-2">
                    <li>
                      <span className="font-bold">1.</span> Trước khi xây dựng
                      các chỉ tiêu KPI, quan trọng phải xác định mục tiêu rõ
                      ràng và cụ thể. Điều này bao gồm việc phân tích kết quả
                      thực tiễn của doanh nghiệp, như doanh thu quý trước, để
                      sắp xếp nguồn lực một cách hợp lý cho việc xây dựng KPI.
                    </li>
                    <li>
                      <span className="font-bold">2.</span> Việc đánh giá hiệu
                      suất làm việc của nhân viên, bộ phận, phòng ban cần được
                      thực hiện một cách công bằng và khách quan. Điều này làm
                      hài lòng nhân viên và khích lệ họ cống hiến hết mình cho
                      doanh nghiệp.
                    </li>
                    <li>
                      <span className="font-bold">3.</span> Tránh việc xây dựng
                      OKR dựa trên mong muốn cá nhân của nhà quản lý, thay vào
                      đó, nên tham khảo đề xuất từ các bộ phận, phòng ban trong
                      tổ chức để tạo ra các mục tiêu hợp lý.
                    </li>
                    <li>
                      <span className="font-bold">3.</span> Một hệ thống OKR
                      hiệu quả thường bao gồm cấp độ từ nhân viên, trưởng nhóm
                      đến nhà quản lý, tạo ra một mục tiêu chung và sự kết nối
                      giữa các cấp bậc.
                    </li>
                    <li>
                      <span className="font-bold">3.</span> KPI và OKR nên được
                      áp dụng đồng thời tại doanh nghiệp, dù chúng có sự khác
                      nhau nhưng có thể tương hỗ lẫn nhau hiệu quả.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:p-4 flex flex-col gap-2 mb-5">
                <h3 className="font-bold text-xl md:text-2xl">Tạm kết</h3>
                <div className="flex flex-col text-[18px] md:text-[20px] gap-3 md:gap-2 p-1">
                  <p>
                    {" "}
                    Trên đây là những chia sẻ về hai phương pháp thiết lập và đo
                    lường mục tiêu <span className="font-bold">
                      KPI và OKR
                    </span>{" "}
                    mà Glints muốn gửi đến bạn. Hy vọng rằng, bài viết đã cung
                    cấp đến bạn nhiều thông tin hữu ích và làm rõ sự khác biệt
                    giữa hai cách tiếp cận này.
                  </p>
                  <p>
                    Nếu bạn có thêm bất kỳ câu hỏi nào, đừng ngần ngại để lại
                    bình luận để Glints hỗ trợ giải đáp chi tiết nhé.{" "}
                  </p>
                  <p className="text-right italic">
                    Bài viết có hữu ích đối với bạn?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Footer />
    </section>
  );
};

export default Blog;
