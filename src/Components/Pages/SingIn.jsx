import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import backGround from "../../assets/Registration/124 1.svg";
import logo from "../../assets/Registration/Group 427319241.svg";
import regi from "../../assets/Registration/Group 4438.svg";
import google from "../../assets/Registration/search 1.svg";
import facebook from "../../assets/Registration/Vector.svg";
import { Link, useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";
import { string } from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { BeatLoader } from "react-spinners";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
const SingIn = () => {
  const { saveToken } = useAuth();
  const [loadingBut, setLoadingBut] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    sendDataToLogin(values);
  };

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: string().email().required(),
    password: string().required().min(6),
  });

  const { errors, getFieldProps, touched, handleSubmit, isValid, dirty } =
    useFormik({
      initialValues,
      onSubmit,
      validationSchema,
    });

  async function sendDataToLogin(values) {
  const loadingClose = toast.loading("جاري تسجيل الدخول... يرجى الانتظار", {
  position: "bottom-left",
});

    try {
      setLoadingBut(true);
      const { data, status } = await axios.post(
        "https://api.sakank.net/api/login",
        values,
      );

      if (status == 200) {
     toast.success("تم تسجيل الدخول بنجاح! جاري التحويل إلى الصفحة الرئيسية...", {
  position: "bottom-left",
});

        saveToken(data.token);

        setTimeout(() => {
          navigate("/");
        }, 300);
      }
    } catch (error) {
      toast.error(error.response.data.message, { position: "bottom-left" });
      setLoadingBut(false);

      console.log(error);
    } finally {
      toast.dismiss(loadingClose);
    }
  }
  return (
    <>
      <Helmet>
        <title>Sign In | My Website</title>
        <meta name="description" content="Login to your account" />
      </Helmet>
      <section
        className="w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backGround})` }}
      >
        <div className="container px-8 mx-auto py-8 select-none">
          <div className="flex items-center justify-start">
            <form onSubmit={handleSubmit}>
              <div className="w-[487px]   bg-white rounded-2xl">
                <div className="p-5">
                  <div className="flex items-center justify-center flex-col space-y-5">
                    <img src={logo} alt="logo" width={150} />

                    {/* email */}
                    <div className="w-full space-y-2">
                      <div className="flex w-full  items-center space-x-2 ">
                        <MdOutlineMailOutline
                          size={20}
                          className="text-[#000E39]"
                        />
                        <p className="text-[#000E39]">البريد الإلكتروني</p>
                      </div>

                      <div>
                        <input
                          className={` w-full rounded-2xl px-5 py-2  outline-none border-2  ${
                            touched.email && errors.email
                              ? "border-red-500"
                              : touched.email && !errors.email
                                ? "border-green-500"
                                : "border-gray-300"
                          } `}
                          type="email"
                          placeholder="اكتب بريدك الإلكتروني"
                          name="email"
                          {...getFieldProps("email")}
                          id="email"
                        />
                        {touched.email && errors.email ? (
                          <div className="text-red-600 text-center">
                            {errors.email}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    {/* Password */}
                    <div className="w-full space-y-2">
                      <div className="flex w-full  items-center space-x-2 ">
                        <RiLockPasswordLine
                          size={20}
                          className="text-[#000E39]"
                        />
                        <p className="text-[#000E39]">كلمة السر</p>
                      </div>

                      <div>
                        <input
                          className={`w-full rounded-2xl px-5 py-2 border-2  ${
                            touched.password && errors.password
                              ? "border-red-600"
                              : touched.password && !errors.password
                                ? "border-green-500"
                                : "border-gray-300"
                          } `}
                          type="password"
                          placeholder="اضف كلمة السر"
                          name="password"
                          id="password"
                          {...getFieldProps("password")}
                        />
                        {touched.password && errors.password ? (
                          <div className="text-red-600 text-center">
                            {errors.password}
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
                      {loadingBut ? (
                        <BeatLoader color="white" size={20} />
                      ) : (
                        "تسجيل الدخول إلي حسابي"
                      )}
                    </button>

                    <Link
                      to={"/"}
                      className="text-white bg-main w-full py-2 rounded-2xl font-normal cursor-pointer flex items-center justify-center 
     "
                    >
                      الدخول كضيف
                    </Link>

                    {/* ??? */}
                    <div className="flex  space-x-1">
                      <Link
                        to={"/singup"}
                        className="text-main underline cursor-pointer"
                      >
                        انشاء حساب
                      </Link>

                      <p>ليس لديك حساب؟</p>
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

                        <ToastContainer />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingIn;
