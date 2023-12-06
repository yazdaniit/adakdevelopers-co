import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { useDocTitle } from "../components/CustomHook";
import axios from "axios";
import emailjs from "emailjs-com";
import Notiflix from "notiflix";
import { Link } from "react-router-dom";

const DemoProduct = (props) => {
  useDocTitle("AdakDevelopers");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [demoProducts, setDemoProducts] = useState([]);
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    errors.products = [];
    if (checked) {
      setDemoProducts([...demoProducts, value]);
    } else {
      setDemoProducts(demoProducts.filter((e) => e !== value));
    }
  };
  const clearErrors = () => {
    setErrors([]);
  };

  const clearInput = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  function sendEmail(e) {
    e.preventDefault();
    document.getElementById("submitBtn").disabled = true;
    document.getElementById("submitBtn").innerHTML = "Loading...";
    let fData = new FormData();
    fData.append("first_name", firstName);
    fData.append("last_name", lastName);
    fData.append("email", email);
    fData.append("phone_number", phone);
    fData.append("message", message);
    fData.append("products", demoProducts);

    emailjs
      .sendForm(
        "service_9g0zo97",
        "template_xspiffm",
        e.target,
        "Zr5A_ReppnGutiChA"
      )
      .then(
        (result) => {
          console.log(result.text);
          Notiflix.Report.success(
            "پیام شما ارسال شد",
            '"با تشکر از ارسال پیام، ما به زودی با شما تماس خواهیم گرفت."'
          );
        },
        (error) => {
          console.log(error.text);
          Notiflix.Report.failure(
            "خطایی رخ داد",
            "لطفاً دوباره پیام را ارسال کنید."
          );
        }
      );

    axios({
      method: "post",
      url: process.env.REACT_APP_DEMO_REQUEST_API,
      data: fData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(function (response) {
        document.getElementById("submitBtn").disabled = false;
        document.getElementById("submitBtn").innerHTML = "موفق";
        clearInput();
        //handle success
        Notiflix.Report.success("Success", response.data.message, "Okay");
      })
      .catch(function (error) {
        document.getElementById("submitBtn").disabled = false;
        document.getElementById("submitBtn").innerHTML = "ارسال مجدد";
        //handle error
        const { response } = error;
        if (response.status === 500) {
          Notiflix.Report.failure(
            "An error occurred",
            response.data.message,
            "Okay"
          );
        }
        if (response.data.errors !== null) {
          setErrors(response.data.errors);
        }
      });
  }
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
        <div
          className="container mx-auto my-8 px-4 lg:px-20"
          data-aos="zoom-in"
        >
          <form onSubmit={sendEmail} id="demoProductForm">
            <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <div className="flex">
                <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">
                  محصولات
                </h1>
              </div>
              <div className="flex items-center my-4">
                <input
                  id="checkbox-1"
                  aria-describedby="checkbox-1"
                  type="checkbox"
                  className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded mx-1"
                  value="business_management_system"
                  onChange={handleChange}
                />
                <label
                  htmlFor="checkbox-1"
                  className="ml-3 text-lg font-medium text-gray-900"
                >
                  سیستم مدیریت کسب و کار
                </label>
              </div>
              <div className="flex items-center my-4">
                <input
                  id="checkbox-1"
                  aria-describedby="checkbox-1"
                  type="checkbox"
                  className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded mx-1"
                  value="school_management_portal"
                  onChange={handleChange}
                />
                <label
                  htmlFor="checkbox-1"
                  className="ml-3 text-lg font-medium text-gray-900"
                >
                  پورتال مدیریت مدرسه
                </label>
              </div>
              <div className="flex items-center my-4">
                <input
                  id="checkbox-1"
                  aria-describedby="checkbox-1"
                  type="checkbox"
                  className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded mx-1"
                  value="payroll_management_system"
                  onChange={handleChange}
                />
                <label
                  htmlFor="checkbox-1"
                  className="ml-3 text-lg font-medium text-gray-900"
                >
                  سیستم مدیریت حقوق و دستمزد
                </label>
              </div>
              <div className="flex items-center my-4">
                <input
                  id="checkbox-1"
                  aria-describedby="checkbox-1"
                  type="checkbox"
                  className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded mx-1"
                  value="event_management_system"
                  onChange={handleChange}
                />
                <label
                  htmlFor="checkbox-1"
                  className="ml-3 text-lg font-medium text-gray-900"
                >
                  سیستم مدیریت رویداد
                </label>
              </div>
              {errors && (
                <p className="text-red-500 text-sm">{errors.products}</p>
              )}

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <div>
                  <input
                    name="first_name"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="نام*"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">{errors.first_name}</p>
                  )}
                </div>

                <div>
                  <input
                    name="last_name"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="نام خانوادگی*"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">{errors.last_name}</p>
                  )}
                </div>

                <div>
                  <input
                    name="email"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="ایمیل*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    name="phone_number"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number"
                    placeholder="موبایل*"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">
                      {errors.phone_number}
                    </p>
                  )}
                </div>
              </div>
              <div className="my-4">
                <textarea
                  name="message"
                  placeholder="متن پیام*"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyUp={clearErrors}
                ></textarea>
                {errors && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              <div className="my-2 w-1/2 lg:w-2/4">
                <button
                  type="submit"
                  id="submitBtn"
                  className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                                    focus:outline-none focus:shadow-outline"
                >
                  ارسال پیام
                </button>
              </div>
            </div>
          </form>
          <div className="w-full  lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-blue-900 rounded-2xl">
            <div className="flex flex-col text-white">
              <div className="flex my-4 w-2/3 lg:w-3/4">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">آدرس</h2>
                  <p className="text-gray-400">استان هرمزگان ، جزیره قشم</p>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2" />
                </div>

                <div className="flex flex-col">
                  <h2 className="text-2xl">تماس</h2>
                  <p className="text-gray-400">09150064036</p>

                  <div className="mt-5">
                    <h2 className="text-2xl">ایمیل</h2>
                    <p className="text-gray-400">tyazdaniit@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="mx-auto text-center mt-2">
                  <ul className="flex justify-center mb-4 md:mb-0">
                    <li>
                      <Link
                        to=""
                        className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out mx-3"
                        aria-label="telegram"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="40"
                          height="40"
                          viewBox="0 0 48 48"
                        >
                          <circle
                            cx="24"
                            cy="24"
                            r="21"
                            fill="#74cccf"
                          ></circle>
                          <path
                            fill="none"
                            stroke="#010101"
                            stroke-miterlimit="10"
                            d="M45.051,24c0,3.826-1.069,7.415-2.857,10.504 c-1.844,3.187-4.305,6.189-7.492,8.033c-3.089,1.787-6.877,2.871-10.702,2.871c-3.826,0-7.567-1.165-10.656-2.952 c-3.187-1.844-5.847-4.677-7.69-7.864C3.867,31.503,3.378,27.826,3.378,24c0-3.826,0.68-7.393,2.467-10.482 c1.844-3.187,4.366-6.038,7.553-7.882C16.487,3.849,20.174,3.188,24,3.188c3.826,0,7.371,0.906,10.46,2.694 c3.187,1.844,5.545,4.627,7.389,7.814C43.636,16.785,45.051,20.174,45.051,24z"
                          ></path>
                          <path
                            fill="#d6e5e5"
                            d="M17.689,26.814c0.492,1.906,1.089,3.785,1.785,5.626c0.151,0.399,0.366,0.85,0.782,0.946	c0.367,0.084,0.725-0.152,1.02-0.386c0.846-0.672,1.616-1.439,2.292-2.282c1.123,0.936,2.304,1.808,3.427,2.744	c0.437,0.364,0.884,0.734,1.414,0.94c0.53,0.205,1.168,0.22,1.635-0.104c0.321-0.222,0.525-0.574,0.692-0.927	c0.364-0.765,0.633-1.572,0.833-2.395c0.8-3.306,0.851-6.256,2.324-9.936c0.473-1.182,0.572-2.491,0.653-3.76	c0.048-0.748-0.541-1.378-1.289-1.408c-0.89-0.036-1.761,0.193-2.619,0.451c-6.127,1.842-11.582,4.246-17.015,6.668	c-0.505,0.225-1.044,0.413-1.436,0.803c-0.221,0.22-0.397,0.518-0.365,0.828c0.058,0.568,0.716,0.837,1.268,0.98	C14.627,26,16.133,26.517,17.689,26.814z"
                          ></path>
                          <polygon
                            fill="#bcbcbc"
                            points="20.843,28.309 20.539,33.213 23.569,30.717"
                          ></polygon>
                          <path
                            fill="none"
                            stroke="#010101"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            d="M20.721,28.01	c1.109,1.117,2.262,2.191,3.455,3.219"
                          ></path>
                          <polygon
                            fill="#bcbcbc"
                            points="18.264,26.388 29.64,18.955 30.146,19.41 21.197,27.652 20.792,28.916 20.135,33.163 17.758,27.197"
                          ></polygon>
                          <path
                            fill="none"
                            stroke="#010101"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            d="M17.689,26.814	c0.492,1.906,1.089,3.785,1.785,5.626c0.151,0.399,0.366,0.85,0.782,0.946c0.367,0.084,0.725-0.152,1.02-0.386	c0.846-0.672,1.616-1.439,2.292-2.282c1.123,0.936,2.304,1.808,3.427,2.744c0.437,0.364,0.884,0.734,1.414,0.94	c0.53,0.205,1.168,0.22,1.635-0.104c0.321-0.222,0.525-0.574,0.692-0.927c0.364-0.765,0.633-1.572,0.833-2.395	c0.8-3.306,0.851-6.256,2.324-9.936c0.473-1.182,0.572-2.491,0.653-3.76c0.048-0.748-0.541-1.378-1.289-1.408	c-0.89-0.036-1.761,0.193-2.619,0.451c-6.127,1.842-11.582,4.246-17.015,6.668c-0.505,0.225-1.044,0.413-1.436,0.803	c-0.221,0.22-0.397,0.518-0.365,0.828c0.058,0.568,0.716,0.837,1.268,0.98C14.627,26,16.133,26.517,17.689,26.814z"
                          ></path>
                          <path
                            fill="none"
                            stroke="#010101"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            d="M17.689,26.814	c3.357-2.222,6.437-4.187,9.794-6.409c0.695-0.46,2.562-1.753,2.87-1.262c0.411,0.654-6.383,5.935-9.624,8.879	c-0.164,1.727-0.287,3.459-0.37,5.192"
                          ></path>
                        </svg>
                      </Link>
                    </li>
                    <li className="ml-4">
                      <Link
                        to=""
                        className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out mx-3"
                        aria-label="whatsapp"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="40"
                          height="40"
                          viewBox="0 0 100 100"
                        >
                          <path
                            fill="#fff"
                            d="M50,16c-18.778,0-34,15.222-34,34c0,6.112,1.621,11.843,4.444,16.799l-4.407,15.933 c-0.207,0.749,0.481,1.438,1.23,1.23l15.933-4.407C38.157,82.379,43.888,84,50,84c18.778,0,34-15.222,34-34 C84,31.222,68.778,16,50,16z"
                          ></path>
                          <path
                            fill="#60be92"
                            d="M50,22c-15.464,0-28,12.536-28,28c0,6.122,1.97,11.78,5.303,16.388L24.89,75.11l8.723-2.413 C38.221,76.03,43.879,78,50,78c15.464,0,28-12.536,28-28C78,34.536,65.464,22,50,22z"
                          ></path>
                          <path
                            fill="#fff"
                            d="M41.896,35.949c-0.608-1.375-1.25-1.402-1.832-1.422c-0.475-0.02-1.016-0.02-1.558-0.02 c-0.535,0-1.417,0.203-2.159,1.029c-0.749,0.819-2.848,2.81-2.848,6.86c0,4.043,2.915,7.957,3.316,8.505 c0.408,0.542,5.622,9.115,13.871,12.413c6.859,2.736,8.256,2.194,9.74,2.059c1.491-0.142,4.807-1.991,5.482-3.914 c0.675-1.916,0.675-3.562,0.475-3.907c-0.201-0.345-0.742-0.549-1.558-0.962c-0.809-0.413-4.8-2.397-5.549-2.675 c-0.742-0.271-1.284-0.406-1.825,0.413c-0.541,0.819-2.099,2.675-2.574,3.223c-0.475,0.549-0.943,0.616-1.758,0.21 c-0.809-0.413-3.423-1.28-6.525-4.083c-2.413-2.18-4.044-4.869-4.519-5.695c-0.475-0.819-0.053-1.266,0.354-1.679 c0.368-0.366,0.816-0.962,1.223-1.442c0.401-0.481,0.535-0.819,0.809-1.368c0.267-0.549,0.134-1.029-0.067-1.442 C44.196,41.637,42.618,37.574,41.896,35.949z"
                          ></path>
                          <path
                            fill="#1f212b"
                            d="M16.991,85.001c-0.521,0-1.021-0.204-1.404-0.588c-0.517-0.516-0.708-1.244-0.514-1.947l4.298-15.536 C16.51,61.764,15,55.919,15,50c0-19.299,15.701-35,35-35s35,15.701,35,35S69.299,85,50,85c-5.919,0-11.764-1.51-16.93-4.371 l-15.536,4.298C17.354,84.977,17.171,85.001,16.991,85.001z M33.201,78.556c0.172,0,0.343,0.044,0.495,0.131 C38.649,81.509,44.287,83,50,83c18.196,0,33-14.804,33-33S68.196,17,50,17S17,31.804,17,50c0,5.713,1.491,11.351,4.313,16.304 c0.132,0.231,0.166,0.505,0.095,0.762l-4.407,15.934l15.934-4.407C33.022,78.567,33.112,78.556,33.201,78.556z"
                          ></path>
                          <path
                            fill="#1f212b"
                            d="M58.768,66.008c-1.412,0-3.61-0.373-8.266-2.229c-4.988-1.994-9.93-6.371-13.913-12.323 c-0.086-0.127-0.143-0.214-0.173-0.254C35.371,49.774,33,46.133,33,42.396c0-4.002,1.984-6.13,2.832-7.039l0.146-0.158 c0.966-1.076,2.09-1.192,2.528-1.192c0.55,0,1.098,0,1.579,0.021c0.772,0.027,1.587,0.183,2.268,1.72 c0.428,0.963,1.14,2.741,1.712,4.169c0.363,0.906,0.706,1.762,0.781,1.917c0.21,0.434,0.445,1.101,0.066,1.879l-0.123,0.251 c-0.21,0.43-0.376,0.77-0.752,1.219c-0.135,0.159-0.271,0.328-0.409,0.497c-0.285,0.352-0.58,0.716-0.846,0.979 c-0.4,0.406-0.553,0.592-0.273,1.074c0.568,0.989,2.134,3.509,4.421,5.574c2.528,2.285,4.687,3.237,5.847,3.748 c0.238,0.104,0.43,0.19,0.57,0.262c0.681,0.34,0.873,0.231,1.153-0.092c0.496-0.574,2.02-2.393,2.534-3.172 c0.792-1.2,1.768-0.842,2.413-0.607c0.818,0.303,4.97,2.375,5.605,2.699l0.442,0.219c0.628,0.307,1.082,0.528,1.32,0.937 c0.326,0.563,0.229,2.436-0.436,4.325c-0.773,2.2-4.343,4.097-5.906,4.246c-0.141,0.013-0.278,0.028-0.42,0.046 C59.676,65.96,59.271,66.008,58.768,66.008z M38.536,35.006c-0.251,0-1.067,0.029-1.816,0.863l-0.156,0.169 C35.731,36.931,34,38.788,34,42.396c0,3.442,2.236,6.867,3.197,8.181c0.053,0.07,0.122,0.172,0.223,0.322 c3.872,5.787,8.65,10.031,13.453,11.951c6.078,2.424,7.734,2.229,9.064,2.073c0.15-0.019,0.297-0.035,0.444-0.049 c1.292-0.123,4.45-1.859,5.056-3.582c0.624-1.772,0.615-3.244,0.507-3.504c-0.078-0.132-0.452-0.315-0.887-0.526l-0.457-0.227 c-0.944-0.482-4.804-2.396-5.497-2.652c-0.721-0.262-0.908-0.272-1.234,0.22c-0.584,0.885-2.234,2.839-2.612,3.275 c-0.808,0.933-1.687,0.667-2.359,0.33c-0.133-0.067-0.308-0.144-0.523-0.239c-1.125-0.496-3.466-1.527-6.113-3.921 c-2.394-2.162-4.026-4.788-4.617-5.816c-0.672-1.16,0.046-1.889,0.431-2.279c0.239-0.238,0.509-0.572,0.778-0.904 c0.142-0.175,0.283-0.35,0.42-0.511c0.296-0.354,0.425-0.617,0.619-1.015l0.125-0.254c0.147-0.302,0.127-0.594-0.07-1.001 c-0.086-0.178-0.35-0.834-0.809-1.98c-0.569-1.421-1.278-3.189-1.698-4.136V36.15c-0.484-1.093-0.885-1.106-1.393-1.124 C39.583,35.006,39.061,35.006,38.536,35.006z"
                          ></path>
                          <path
                            fill="#1f212b"
                            d="M50,78c-5.697,0-11.175-1.704-15.858-4.931l-9.118,2.522c-0.176,0.05-0.36-0.001-0.487-0.128 s-0.177-0.313-0.128-0.487l2.521-9.117C23.704,61.176,22,55.698,22,50c0-15.439,12.561-28,28-28c2.574,0,5.144,0.357,7.636,1.063 c0.266,0.075,0.421,0.352,0.346,0.617s-0.355,0.42-0.617,0.346C54.96,23.345,52.482,23,50,23c-14.888,0-27,12.112-27,27 c0,5.57,1.688,10.923,4.884,15.479c0.086,0.122,0.112,0.276,0.072,0.421l-2.35,8.493l8.494-2.35 c0.143-0.042,0.298-0.013,0.421,0.072C39.078,75.312,44.431,77,50,77c14.888,0,27-12.112,27-27c0-7.181-2.789-13.941-7.854-19.036 c-0.194-0.196-0.194-0.513,0.002-0.707s0.513-0.194,0.707,0.002C75.107,35.543,78,42.554,78,50C78,65.439,65.439,78,50,78z"
                          ></path>
                          <path
                            fill="#1f212b"
                            d="M63.5 26.545c-.084 0-.168-.021-.246-.064-.963-.545-1.954-1.028-2.945-1.438-.255-.105-.376-.397-.271-.653.104-.254.398-.378.653-.271 1.028.426 2.057.928 3.055 1.491.24.136.325.441.189.682C63.844 26.453 63.674 26.545 63.5 26.545zM67.5 29.286c-.112 0-.225-.037-.318-.114-.619-.512-1.28-1.007-1.964-1.474-.228-.156-.286-.467-.131-.695.156-.228.468-.284.695-.131.708.483 1.394.998 2.036 1.528.213.176.243.491.067.704C67.787 29.225 67.644 29.286 67.5 29.286z"
                          ></path>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                        aria-label="email"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="40"
                          height="40"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#1e88e5"
                            d="M34,42H14c-4.411,0-8-3.589-8-8V14c0-4.411,3.589-8,8-8h20c4.411,0,8,3.589,8,8v20 C42,38.411,38.411,42,34,42z"
                          ></path>
                          <path
                            fill="#fff"
                            d="M35.926,17.488L29.414,24l6.511,6.511C35.969,30.347,36,30.178,36,30V18 C36,17.822,35.969,17.653,35.926,17.488z M26.688,23.899l7.824-7.825C34.347,16.031,34.178,16,34,16H14 c-0.178,0-0.347,0.031-0.512,0.074l7.824,7.825C22.795,25.38,25.205,25.38,26.688,23.899z M24,27.009 c-1.44,0-2.873-0.542-3.99-1.605l-6.522,6.522C13.653,31.969,13.822,32,14,32h20c0.178,0,0.347-0.031,0.512-0.074l-6.522-6.522 C26.873,26.467,25.44,27.009,24,27.009z M12.074,17.488C12.031,17.653,12,17.822,12,18v12c0,0.178,0.031,0.347,0.074,0.512 L18.586,24L12.074,17.488z"
                          ></path>
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DemoProduct;
