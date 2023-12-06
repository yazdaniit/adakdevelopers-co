import React from "react";
import img from "../images/Web-developer.svg";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <>
      <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="about">
        <div
          className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
          data-aos="fade-up"
        >
          <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
            <img alt="card img" className="rounded-t float-right" src={img} />
          </div>
          <div
            className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h3 className="text-3xl text-blue-900 font-bold text-right leading-10">
              ما برنامه های کاربردی وب و موبایل با کیفیت بالا را برای سازمان ها،
              موسسات وهمچنین برای اشخاص حقیقی توسعه می دهیم
            </h3>
            <div>
              <p className="my-3 text-xl text-gray-600 font-semibold text-right leading-8">
                تیم ما در توسعه نرم افزار بسیار گسترده است و آماده است تا به
                توسعه برنامه های کاربردی مورد نظر شما کمک کند
              </p>
            </div>

            <div>
              <p className="my-3 text-xl text-gray-600 font-semibold text-right leading-8">
                ما مسئولیت ایجاد راه‌حل‌های نرم‌افزاری سفارشی را بر عهده
                می‌گیریم که به اتوماسیون فرآیندهای کسب‌وکار شما و بهبود کارایی
                کمک می‌کنیم
              </p>
            </div>
            <Link
              to="/contact"
              className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group"
            >
              تماس باما
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
