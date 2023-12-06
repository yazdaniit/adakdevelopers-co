import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      <div className="my-4 py-4" id="portfolio">
        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
          محصولات
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-8"></div>
        </div>

        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                  سیستم مدیریت کسب و کار
                </h4>
                <p className="text-base font-medium leading-5 h-auto md:h-48">
                  سیستم مدیریت کسب و کار ما قوی و به راحتی مقیاس پذیر است سیستمی
                  که عملیات تجاری را ساده می کند، افزایش می یابد کارایی، و در
                  نهایت باعث رشد و سودآوری برای شغلت. با ویژگی هایی مانند مدیریت
                  کارکنان، کنترل مالی، و بسیاری از ماژول های دیگر برای مدیریت
                  موثر تمام جنبه های یک کسب و کار تمام داده ها در فضای ابری
                  ذخیره می شوند به این ترتیب از همه دستگاه ها و از هر دستگاهی به
                  راحتی قابل دسترسی است محل
                </p>
                <div className="flex justify-center my-4">
                  <Link
                    to="/get-demo"
                    className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                  >
                    سفارش محصول
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                  پورتال مدیریت مدرسه
                </h4>
                <p className="text-base font-medium leading-5 h-auto md:h-48">
                  پرتال جامع مدیریت مدرسه ما تنها پورتال است راه حل مورد نیاز
                  برای هر موسسه مدیریت مدرسه پورتال (SMP) ابزاری است که می تواند
                  به موسسات آموزشی کمک کند از همه نوع، وظایف اداری خود را به
                  صورت خودکار مدیریت می کنند فرآیندها و ساده کردن ارتباطات بین
                  معلمان، دانش آموزان، والدین و مدیران نرم افزار می تواند باشد
                  برای مدیریت تمام جنبه های عملیات مدرسه از جمله ثبت نام دانش
                  آموزان، حضور، نمرات، برنامه ها و موارد دیگر
                </p>
                <div className="flex justify-center my-4">
                  <Link
                    to="/get-demo"
                    className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                  >
                    سفارش محصول
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                  سیستم مدیریت حقوق
                </h4>
                <p className="text-base font-medium leading-5 h-auto md:h-48">
                  سیستم مدیریت حقوق و دستمزد فرآیند را خودکار می کند پرداخت های
                  کارکنان برای مشاغل و سازمان های اندازه های متفاوت. این کمک می
                  کند تا مطمئن شوید که کارمندان شما دریافت می کنند پرداخت دقیق و
                  به موقع و در عین حال کاهش زمان و تلاش لازم برای مدیریت دستی
                  حقوق و دستمزد با این سیستم در جای خود، از مزایایی مانند:
                  افزایش دقت در پرداخت های کارکنان همچنین می تواند در یک موجود
                  ادغام شود سیستم مدیریت از طریق APIهای با ساختار مناسب
                </p>
                <div className="flex justify-center my-4">
                  <Link
                    to="/get-demo"
                    className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                  >
                    سفارش محصول
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                  سیستم مدیریت رویداد
                </h4>
                <p className="text-base font-medium leading-5 h-auto md:h-48">
                  سیستم مدیریت رویداد ما به مدیریت انواع مختلف کمک می کند
                  رویدادها، اعم از عروسی، تدفین یا هر نوع رویداد. با منویی که به
                  راحتی قابل تنظیم است، می توانید کاربر خود را تعریف کنید تجربه
                  کنید و رویداد خود را کاملاً قابل تنظیم کنید و بیاد ماندنی. با
                  موارد استفاده از قبل برای تعداد زیادی ثبت شده است از رویدادها،
                  ما می توانیم به شما اطمینان دهیم که یک مدیریت رویداد بدون
                  استرس سکو
                </p>
                <div className="flex justify-center my-4">
                  <Link
                    to="/get-demo"
                    className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                  >
                    سفارش محصول
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
