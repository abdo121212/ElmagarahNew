import { BsGenderFemale } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaBirthdayCake } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { PersonalContext } from "../../Context/InformationUser";
import EditPersonal from "./EditPersonal";
// import axios from "axios";
// import { useAuth } from "../../Context/AuthContext";
const MyAccount = () => {
  // const { token } = useAuth();

  const { getPersonalInfo } = useContext(PersonalContext);
  // const [loadingBut, setLoadingBut] = useState(false);

  const [showModulePass, setShowModulePass] = useState(false);
  const [formData, setFormData] = useState(null);
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    date_of_birth: "",
    old_password: "",
  };

  const onSubmit = (values) => {
    setFormData(values);
    setShowModulePass(true);
  };

  const { getFieldProps, isValid, dirty } = useFormik({
    initialValues,
    onSubmit,
  });

  // async function updateProfile(values) {
  //   try {
  //     setLoadingBut(true);
  //     const { status } = await axios.put(
  //       "https://api.sakank.net/api/profile/personal-information/edit",
  //       values,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     if (status == 200) {
  //       toast.success("personal information updated successfully", {
  //         position: "bottom-left",
  //       });

  //       loadingBut(false);
  //     }
  //   } catch (error) {
  //     toast.error(error.response.data.message, { position: "bottom-left" });
  //     setLoadingBut(false);

  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    getPersonalInfo();
  });
  return (
    <form>
      <div className="w-full h-full flex items-center justify-center  ">
        <div className="h-fit w-5xl bg-white rounded-2xl shadow-xl">
          <div className="p-10 flex  flex-col max-md:flex-col">
            <div className="flex items-center justify-between   w-full">
              <p className="font-semibold text-lg  w-full  text-[#000E39]">
                معلومات الملف الشخصي
              </p>
            </div>

            {/* left and right */}
            <div className="flex  my-5 w-full gap-5 flex-col md:flex-row">
              {/* left */}
              <div className="flex-1  space-y-4">
                <div className="w-full flex flex-col  gap-2">
                  <div className="flex items-center  gap-1 ">
                    <AiOutlineUser size={30} className="text-black/70" />{" "}
                    <label className=" ">الاسم الكامل</label>
                  </div>
                  <input
                    type="text"
                    className="py-2 px-3 rounded-2xl outline-none border border-gray-200 "
                    placeholder="اكتب اسمك هنا "
                    name="name"
                    {...getFieldProps("name")}
                    id="name"
                  />
                </div>

                <div className="w-full flex flex-col  gap-2">
                  <div className="flex items-center  gap-1 ">
                    <HiOutlineMail className="text-black/70" size={25} />{" "}
                    <label className=" ">البريد إلكتروني</label>
                  </div>
                  <input
                    type="text"
                    className="py-2 px-3 rounded-2xl outline-none border border-gray-200 "
                    placeholder="اكتب بريدك إلكتروني"
                    name="email"
                    {...getFieldProps("email")}
                    id="email"
                  />
                </div>

                <div className="w-full flex flex-col  gap-2">
                  <div className="flex items-center  gap-1 ">
                    <FaBirthdayCake size={30} className="text-black/70" />{" "}
                    <label className=" ">تاريخ الميلاد</label>
                  </div>
                  <input
                    type="date"
                    className="py-2 px-3 rounded-2xl outline-none border border-gray-200  text-cetner"
                    placeholder="2000-01-20"
                    name="date_of_birth"
                    {...getFieldProps("date_of_birth")}
                    id="date_of_birth"
                  />
                </div>
              </div>

              {/* right */}

              <div className="flex-1  space-y-4">
                <div className="w-full flex flex-col  gap-2">
                  <div className="flex items-center  gap-1 ">
                    <BiPhoneCall size={30} className="text-black/70" />{" "}
                    <label className=" ">رقم الجوال</label>
                  </div>

                  <input
                    type="text"
                    className="py-2 px-3 rounded-2xl outline-none border border-gray-200 "
                    placeholder="اكتب رقم الجوال هنا "
                    name="phone"
                    {...getFieldProps("phone")}
                    id="phone"
                  />
                </div>

                <div className="w-full flex flex-col  gap-2">
                  <div className="flex items-center  gap-1 ">
                    <RiLockPasswordFill className="text-black/70" size={25} />{" "}
                    <label className=" ">الرقم السري</label>
                  </div>
                  <input
                    type="text"
                    className="py-2 px-3 rounded-2xl outline-none border border-gray-200 "
                    placeholder="*******"
                    name="password"
                    {...getFieldProps("password")}
                    id="password"
                  />
                </div>

                <div className="w-full flex flex-col  gap-2">
                  <div className="flex items-center  gap-1 ">
                    <BsGenderFemale size={30} className="text-black/70" />{" "}
                    <label className=" ">الجنس</label>
                  </div>
                  <select
                    className="w-full border rounded-2xl py-1 border-gray-200 px-3"
                    {...getFieldProps("gender")}
                  >
                    <option value="">اختر النوع</option>
                    <option value="male">ذكر</option>
                    <option value="female">أنثى</option>
                  </select>
                </div>
              </div>
            </div>

            <div className=" flex items-center justify-center gap-3.5">
              <button
                disabled={!isValid || !dirty}
                className="bg-main text-white w-1/2 flex items-center justify-center py-2 rounded-2xl gap-2 disabled:bg-gray-400
    disabled:text-gray-200
    disabled:cursor-not-allowed
    disabled:hover:bg-gray-400"
              >
                {" "}
                تحديث الملف
              </button>
            </div>
          </div>
        </div>

        {showModulePass && (
          <>
            <EditPersonal
              setShowModulePass={setShowModulePass}
              formData={formData}
            />
          </>
        )}
      </div>
    </form>
  );
};

export default MyAccount;
