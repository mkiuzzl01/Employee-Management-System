"use client";
import React, { useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

const page = () => {
  const [show, setShow] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.email.value;
    const pass = form.password.value;

    console.log(name, pass);
  };
  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="flex h-svh flex-col items-center justify-center max-w-md mx-auto p-5"
      >
        <div className="relative w-full mb-5">
          <input
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative w-full mb-5">
          <input
            type={show ? "text" : "password"}
            name="password"
            id="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
          <span
            onClick={() => setShow(!show)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 px-2 py-1 rounded-full"
          >
            {show ? (
              <IoEyeOutline></IoEyeOutline>
            ) : (
              <IoEyeOffOutline></IoEyeOffOutline>
            )}
          </span>
        </div>
        <div className="relative z-0 w-full mb-5">
          <button className="btn w-full">Login</button>
        </div>
      </form>
    </div>
  );
};

export default page;
