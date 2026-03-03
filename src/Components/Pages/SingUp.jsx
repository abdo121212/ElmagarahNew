import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { Helmet } from "react-helmet-async";
import backGround from "../../assets/Registration/couple-running-street-with-shopping-bags 1.svg";
import logo from "../../assets/Registration/Group 427319241.svg";
import regi from "../../assets/Registration/Group 4438.svg";
import google from "../../assets/Registration/search 1.svg";
import facebook from "../../assets/Registration/Vector.svg";

import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { BeatLoader } from "react-spinners";
import { useState } from "react";
const SingUp = () => {
  const [loadingBut, setLoadingBut] = useState(false);

  const passwordRe = /^[a-zA-Z0-9!@#$%^&*]{6,20}$/;
  const emailRe = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      setLoadingBut(true);
      const { data } = await axios.post(
        "https://api.sakank.net/api/register",
        values
      );

      if (data.message === "Registration successful") {
        toast.success("Register successful! Redirecting to login page...", {
          position: "bottom-left",
        });

        setTimeout(() => {
          navigate("/SingIn");
        }, 1000);

        console.log(data);
      }
    } catch (error) {
      toast.error(error.response.data.message, { position: "bottom-left" });

      setLoadingBut(false);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required(" Name is required.")
      .min(3, "Minimum 3 characters.")
      .max(20, "Maximum 20 characters."),
    email: Yup.string()
      .required("Email is required.")
      .matches(emailRe, "Invalid email address."),
    password: Yup.string()
      .required("Password is required.")
      .matches(passwordRe, "* Invalid password format."),
    password_confirmation: Yup.string()
      .required("* Please confirm your password.")
      .oneOf([Yup.ref("password")], "* Passwords must match."),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const { errors, getFieldProps, handleSubmit, touched  , dirty , isValid} = useFormik({
    onSubmit,
    validationSchema,
    initialValues,
  });

  console.log("errors", errors);

  return (
    <>
      <Helmet>
        <html lang="ar" />
        <title>Sign Up | My Website</title>
        <meta name="description" content="Registration to your account" />
      </Helmet>
      <section
        className="w-full screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backGround})` }}
      >
        <div className="container px-8 mx-auto py-8 select-none">
          <div className="flex items-center ">
            <div className="w-[487px]   bg-white rounded-2xl">
              <div className="p-5">
                <form onSubmit={handleSubmit}>
                  <div className="flex items-center justify-center flex-col space-y-3">
                    <img src={logo} alt="logo" width={150} />

                    {/* name */}
                    <div className="w-full space-y-1">
                      <div className="flex w-full  items-center space-x-2 ">
                        <AiOutlineUser size={20} className="text-[#000E39]" />
                        <p className="text-[#000E39]">الاسم بالكامل</p>
                      </div>

                      <div>
                        <input
                          className={`w-full rounded-2xl px-5 py-2  border text-[#A8A6A7] ${
                            touched.name && errors.name
                              ? "border-red-500"
                              : touched.name && !errors.name
                              ? "border-green-500"
                              : "border-gray-300"
                          }`}
                          type="text"
                          placeholder="اكتب اسمك هنا"
                          {...getFieldProps("name")}
                          name="name"
                        />

                        {touched.name && errors.name ? (
                          <div className="text-red-600 text-center">
                            {errors.name}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    {/* email */}
                    <div className="w-full space-y-1">
                      <div className="flex w-full  items-center space-x-2 ">
                        <HiOutlineMail size={20} className="text-[#000E39]" />
                        <p className="text-[#000E39]">البريد الإلكتروني </p>
                      </div>

                      <div>
                        {" "}
                        <input
                          className={`w-full rounded-2xl px-5 py-2  border text-[#A8A6A7]  ${
                            touched.email && errors.email
                              ? "border-red-500"
                              : touched.email && !errors.email
                              ? "border-green-500"
                              : "border-gray-300"
                          }`}
                          name="email"
                          placeholder="اكتب بريدك الإلكتروني"
                          type="email"
                          {...getFieldProps("email")}
                        />
                        {touched.email && errors.email ? (
                          <div className="text-red-600 text-center">
                            {errors.email}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    {/* Password */}
                    <div className="w-full space-y-1">
                      <div className="flex w-full  items-center space-x-2 ">
                        <RiLockPasswordLine
                          size={20}
                          className="text-[#000E39]"
                        />

                        <p className="text-[#000E39]">كلمة السر</p>
                      </div>
                      <div>
                        <input
                          className={`w-full rounded-2xl px-5 py-2  border text-[#A8A6A7] ${
                            touched.password && errors.password
                              ? "border-red-500"
                              : touched.password && !errors.password
                              ? "border-green-500"
                              : "border-gray-300"
                          }`}
                          type="password"
                          {...getFieldProps("password")}
                          name="password"
                          placeholder="اكتب بريدك الإلكتروني"
                        />
                        {touched.password && errors.password ? (
                          <div className="text-red-600 text-center">
                            {errors.password}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    {/* Confirm Pass */}
                    <div className="w-full space-y-1">
                      <div className="flex w-full  items-center space-x-2 ">
                        <RiLockPasswordLine
                          size={20}
                          className="text-[#000E39]"
                        />
                        <p className="text-[#000E39]">تاكيد كلمة السر</p>
                      </div>

                      <div>
                        <input
                          className={`w-full rounded-2xl px-5 py-2  border text-[#A8A6A7] ${
                            touched.password_confirmation &&
                            errors.password_confirmation
                              ? "border-red-500"
                              : touched.password_confirmation &&
                                !errors.password_confirmation
                              ? "border-green-500"
                              : "border-gray-300"
                          }`}
                          type="password"
                          {...getFieldProps("password_confirmation")}
                          placeholder="اضف كلمة السر"
                        />

                        {touched.password_confirmation &&
                        errors.password_confirmation ? (
                          <div className="text-red-600 text-center">
                            {errors.password_confirmation}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    {/* button */}

                    <button
                      disabled={!isValid || !dirty}
                      type="submit"
                      className="text-white bg-main w-full py-2 rounded-2xl font-normal cursor-pointer flex items-center justify-center 
    disabled:bg-gray-400
    disabled:text-gray-200
    disabled:cursor-not-allowed
    disabled:hover:bg-gray-400"
                    >
                      {loadingBut ? <BeatLoader color="#ffff" /> : "انشاء حساب"}
                    </button>
                    <ToastContainer />
                    {/* ??? */}
                    <div className="flex  space-x-1">
                      <Link
                        to={"/SingIn"}
                        className="text-main underline cursor-pointer"
                      >
                        تسجيل الدخول
                      </Link>

                      <p>لديك حساب بالفعل! </p>
                    </div>

                    <img src={regi} alt="Registration With email" />

                    <div className=" flex items-center justify-center space-y-2.5 flex-col w-full ">
                      <div className="border  w-full rounded-2xl cursor-pointer text-[#A8A6A7] py-2 flex items-center justify-center space-x-2">
                        <p>التسجيل من خلال جوجل</p>

                        <img src={google} alt="logo for google" />
                      </div>

                      <div className="border  w-full rounded-2xl cursor-pointer text-[#A8A6A7] py-2 flex items-center justify-center space-x-2">
                        <p>التسجيل من خلال فيس بوك</p>

                        <img src={facebook} alt="logo for google" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingUp;
