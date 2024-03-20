import React, { useState } from "react";
import { RxEyeNone } from "react-icons/rx";
import { RxEyeClosed } from "react-icons/rx";
import { toast } from "react-toastify";
import { login, signUp } from "../api";
import { useDispatch } from "react-redux";

const Auth = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isFormEmpty, setIsFormEmpty] = useState("");
  const [formData, setIsFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleAuth = () => {
    setIsLogin(!isLogin);
  };

  const handlePasswordShow = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIsFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return setIsFormEmpty("Please fill out all fields.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return setIsFormEmpty("Email Is Not Valid");
    }

    if (formData.password.length < 8) {
      return setIsFormEmpty("Password Must Be Greater Then 8 Alphabats");
    }

    //api's calls: work will be done soon
    if (!isLogin) {
      dispatch(login(formData));
    } else {
      dispatch(signUp(formData));
    }

    if (true) toast.success("Welcome !");
    ///
    setIsFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <section className=" flex justify-center items-center des:justify-start gap-8 des:gap-[8rem] ">
      <div className="flex justify-center flex-col w-[32%]">
        <div className="flex flex-col gap-4 ">
          <h2 className="text-[26px] tab:text-[36px] tracking-wide	leading-4 font-600">
            {isLogin ? "Create an account" : "Log in to Exclusive"}
          </h2>

          <p className="text-[14px] tab:text-[16px] leading-4 py-4">
            Enter your details below
          </p>
        </div>

        <div className="my-8">
          <form
            action=""
            className="flex flex-col gap-8"
            onSubmit={handleFormSubmit}
          >
            {isLogin && (
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="border-b-2  border-lightGray  focus:outline-none py-3 "
              />
            )}

            <input
              type="emial"
              name="email"
              required
              placeholder="Email or Phone No"
              value={formData.email}
              onChange={handleChange}
              className="border-b-2  border-lightGray  focus:outline-none py-3  "
            />

            <div className="flex items-center w-full">
              <input
                type={!isShowPassword ? "password" : "text"}
                name="password"
                required
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="border-b-2  border-lightGray  focus:outline-none py-3 w-full"
              />
              {!isShowPassword ? (
                <RxEyeNone onClick={handlePasswordShow} />
              ) : (
                <RxEyeClosed onClick={handlePasswordShow} />
              )}
            </div>

            <button
              type="submit"
              className="text-[12px] tab:text-[16px] p-4  bg-[#db4444] tab:p-4  capitalize rounded text-white tab"
            >
              {isLogin ? "Create Account" : "Login"}
            </button>

            <strong>{isFormEmpty}</strong>
          </form>

          <div className="flex justify-center items-center gap-4">
            {isLogin ? (
              <p className="py-8 text-black opacity-60">
                Already have account?{" "}
              </p>
            ) : (
              <p className="py-8 text-[#db4444] ">Forget Password?</p>
            )}

            <button
              className="border-b-2 border-slate-400	text-gray-500"
              onClick={handleAuth}
            >
              {isLogin ? "Login" : "signup"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
