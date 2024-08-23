import React from "react";

const User = () => {
  return (
    <section id="nguoidung" className="w-full gap-10 px-4 py-4 md:px-10 md:py-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-[inherit]">
        <h1 className="text-[40px] text-center">NGƯỜI DÙNG PHẢN HỒI </h1>
        <div className="flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row">
          <div className="flex w-full  flex-col gap-4 rounded-3xl p-6 md:p-8 lg:max-w-md lglg:rotate-3 border-purple-950 bg-purple-300 text-purple-950">
            <div className="flex items-center gap-4 border-inherit text-inherit">
              <div className='relative border-inherit transition after:absolute after:-top-10 after:hidden after:w-max after:rounded-lg after:bg-zinc-700 after:px-3 after:py-1 after:font-bold after:text-white after:opacity-0 after:transition-opacity hover:after:opacity-100 md:after:block md:hover:scale-110 lg:after:left-1/2 lg:after:-translate-x-1/2 after:content-["NguyenQuocKhanh_has_cool_hats_🎩"]'>
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-[3px] border-inherit">
                  <img
                    className="absolute h-full w-full left-0 top-0 right-0 bottom-0 bg-transparent"
                    alt="Nguyễn Quốc Khánh"
                    src="./img/chandung1.jpg"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-inherit">
                  Nguyễn Quốc Khánh
                </h3>
                <h4 className="text-xl font-medium text-left opacity-80">
                  IT engineer
                </h4>
              </div>
            </div>
            <p className='relative text-xl font-medium opacity-80 before:absolute before:-left-2  before:content-["“"] after:content-["”"]'>
              Spicy giúp tôi dễ dàng tìm kiếm công việc phù hợp của mình vào
              đúng thời điểm.
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="flex w-full rotate-0 flex-col gap-4 rounded-3xl p-6 md:p-8 lg:max-w-md border-pink-950 bg-pink-300 text-pink-950 lg:-rotate-3">
            <div className="flex items-c  enter gap-4 border-inherit text-inherit">
              <div className='relative border-inherit transition after:absolute after:-top-10 after:hidden after:w-max after:rounded-lg after:bg-zinc-700 after:px-3 after:py-1 after:font-bold after:text-white after:opacity-0 after:transition-opacity hover:after:opacity-100 md:after:block md:hover:scale-110 lg:after:left-1/2 lg:after:-translate-x-1/2 after:content-["PhuongTuongAnh_has_a_super_cute_dog_🐶"]'>
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-[3px] border-inherit">
                  <img
                    className="absolute h-full w-full left-0 top-0 right-0 bottom-0 bg-transparent"
                    alt="Phương Tường Anh"
                    src="./img/chandung2.jpg"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-inherit">
                  Phương Tường Anh
                </h3>
                <h4 className="text-xl font-medium text-left opacity-80">
                  Designer
                </h4>
              </div>
            </div>
            <p className='relative text-xl font-medium opacity-80 before:absolute before:-left-2  before:content-["“"] after:content-["”"]'>
              Chúng tôi yêu thích cách Spicy giúp việc chia sẻ thông tin cập
              nhật với người dùng dễ dàng như thế nào!
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="flex w-full rotate-0 flex-col gap-4 rounded-3xl p-6 md:p-8 lg:max-w-md border-amber-950 bg-amber-200 text-amber-950 lg:-rotate-3">
            <div className="flex items-center gap-4 border-inherit text-inherit">
              <div className='relative border-inherit transition after:absolute after:-top-10 after:hidden after:w-max after:rounded-lg after:bg-zinc-700 after:px-3 after:py-1 after:font-bold after:text-white after:opacity-0 after:transition-opacity hover:after:opacity-100 md:after:block md:hover:scale-110 lg:after:left-1/2 lg:after:-translate-x-1/2 after:content-["Thaothanh_is_awesomeee_😄"]'>
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-[3px] border-inherit">
                  <img
                    className="absolute h-full w-full left-0 top-0 right-0 bottom-0 bg-transparent"
                    alt="Nguyễn Thị Thảo Thanh"
                    src="./img/chandung3.jpg"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-inherit">
                  Nguyễn Thị Thảo Thanh
                </h3>
                <h4 className="text-xl font-medium text-inherit opacity-80">
                  Translator
                </h4>
              </div>
            </div>
            <p className='relative text-xl font-medium opacity-80 before:absolute before:-left-2  before:content-["“"] after:content-["”"]'>
              Spicy rất đơn giản và dễ sử dụng. Nó làm cho sản phẩm của chúng
              tôi cập nhật dễ dàng.
            </p>
          </div>

          {/* Testimonial 4 */}
          <div className="flex w-full rotate-0 flex-col gap-4 rounded-3xl p-6 md:p-8 lg:max-w-md border-indigo-950 bg-indigo-300 text-indigo-950 lg:rotate-3">
            <div className="flex items-center gap-4 border-inherit text-inherit">
              <div className='relative border-inherit transition after:absolute after:-top-10 after:hidden after:w-max after:rounded-lg after:bg-zinc-700 after:px-3 after:py-1 after:font-bold after:text-white after:opacity-0 after:transition-opacity hover:after:opacity-100 md:after:block md:hover:scale-110 lg:after:left-1/2 lg:after:-translate-x-1/2 after:content-["TienHung_is_the_chillest_guy_🧊"]'>
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-[3px] border-inherit">
                  <img
                    className="absolute h-full w-full left-0 top-0 right-0 bottom-0 bg-transparent"
                    alt="Bùi Tiến Hùng"
                    src="./img/chandung4.jpg"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-inherit">
                  Bùi Tiến Hùng
                </h3>
                <h4 className="text-xl font-medium text-left opacity-80">
                  Designer
                </h4>
              </div>
            </div>
            <p className='relative text-xl font-medium opacity-80 before:absolute before:-left-2  before:content-["“"] after:content-["”"]'>
              Tôi đã xem xét 12 công cụ khác nhau và không có công cụ nào cung
              cấp những gì Spicy làm cho chúng tôi.
            </p>
          </div>

          {/* Testimonial 5 */}
          <div className="flex w-full rotate-0 flex-col gap-4 rounded-3xl p-6 md:p-8 lg:max-w-md border-fuchsia-950 bg-fuchsia-300 text-fuchsia-950 lg:-rotate-3">
            <div className="flex items-center gap-4 border-inherit text-inherit">
              <div className='relative border-inherit transition after:absolute after:-top-10 after:hidden after:w-max after:rounded-lg after:bg-zinc-700 after:px-3 after:py-1 after:font-bold after:text-white after:opacity-0 after:transition-opacity hover:after:opacity-100 md:after:block md:hover:scale-110 lg:after:left-1/2 lg:after:-translate-x-1/2 after:content-["NgocCuong_is_a_fantabulous_photographer_📸"]'>
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-[3px] border-inherit">
                  <img
                    className="absolute h-full w-full left-0 top-0 right-0 bottom-0 bg-transparent"
                    alt="Phạm Ngọc Cường"
                    src="./img/chandung5.jpg"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-inherit">
                  Phạm Ngọc Cường
                </h3>
                <h4 className="text-xl font-medium text-left opacity-80">
                  CEO
                </h4>
              </div>
            </div>
            <p className='relative text-xl font-medium opacity-80 before:absolute before:-left-2  before:content-["“"] after:content-["”"]'>
              Spicy mang lại trải nghiệm người dùng một cách tuyệt vời, giúp
              chúng tôi tìm được những nhân sự giỏi và nhiệt huyết!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default User;
