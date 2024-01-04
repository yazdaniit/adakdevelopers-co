import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavLinks = () => {
  return (
    <>
      <a
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900 "
        href="https://yazdaniit.github.io/under-construction.github.io/"
      >
        صفحه درحال توسعه
      </a>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        to="/#"
      >
        صفحه نخست
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        to="/#services"
      >
        خدمات
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        to="/#clients"
      >
        مشتری ها
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        to="/#portfolio"
      >
        محصولات
      </HashLink>
      <Link
        className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
        smooth
        to="/contact"
      >
        تماس باما
      </Link>
    </>
  );
};

export default NavLinks;
