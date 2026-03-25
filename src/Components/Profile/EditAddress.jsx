import { CgMathPlus } from "react-icons/cg";
import { MdLocationPin } from "react-icons/md";
import { CgPassword } from "react-icons/cg";
import { GrMapLocation } from "react-icons/gr";
import { BiPhoneCall } from "react-icons/bi";
import { BiHomeAlt } from "react-icons/bi";
import { MdAccountBalance } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { BiHome } from "react-icons/bi";
import { toast } from "react-toastify";
import axios from "axios";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { BeatLoader } from "react-spinners";
import { AddressContext } from "../../Context/AddressContext";
const EditAddress = ({ updateAddress, setUpdateAddress, address_id }) => {
  const {
    getAddressById,
    searchAddress,
    getCities,
    cities,
    getRegion,
    region,
  } = useContext(AddressContext);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const { token } = useAuth();

  const [loadingBut, setLoadingBut] = useState(false);

  const initialValues = {
    address_id,
    name: "",
    phone: "",
    city_id: "",
    region_id: "",
    building_number: "",
    zip_code: "",
  };

  const onSubmit = (values) => {
    EditAddress(values);
  };

  const { getFieldProps, handleSubmit, isValid, dirty, setFieldValue } =
    useFormik({
      initialValues,
      onSubmit,
    });

  async function EditAddress(values) {
    try {
      setLoadingBut(true);
      const { status } = await axios.put(
        "https://api.sakank.net/api/profile/edit-address",
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (status == 200) {
        toast.success("address updated successfully", {
          position: "bottom-left",
        });

        setUpdateAddress(false);
        loadingBut(false);
      }
    } catch (error) {
      toast.error(error.response.data.message, { position: "bottom-left" });
      setLoadingBut(false);

      console.log(error);
    }
  }

  useEffect(() => {
    getAddressById(address_id);
  }, [searchAddress]);

  useEffect(() => {
    getCities();
  }, []);

  useEffect(() => {
    getRegion(selectedCity);
  }, [selectedCity]);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-600 w-full">
      <div className="w-full h-full flex items-center justify-center  ">
        <form
          onSubmit={handleSubmit}
          className="h-fit w-5xl bg-white rounded-2xl"
        >
          <div className="p-10 flex  flex-col">
            <div className="flex items-center justify-between  ">
              <div className="flex items-center space-x-2 text-main">
                <BiHome size={35} />
                <p className="font-semibold text-lg "> تعديل عنوان الشحن </p>
              </div>
              <div
                onClick={() => updateAddress(!updateAddress)}
                className="bg-[#A3A3A3] w-10 h-10 rounded-full  flex items-center justify-center cursor-pointer"
              >
                <CgClose
                  size={20}
                  className="text-white hover:text-red-400 duration-300 "
                />
              </div>
            </div>

            {/* left and right */}
            <div className="flex  my-5 w-full gap-5 flex-col md:flex-row">
              {/* left */}
              <div className="flex-1  space-y-4">
                <div className="w-full flex flex-col  gap-2">
                  <div className="flex items-center  gap-1 ">
                    <AiOutlineUser size={30} className="text-black/70" />{" "}
                    <label className="">الاسم الكامل</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="py-2 px-3 rounded-2xl outline-none border border-gray-200  w-full"
                      placeholder="اكتب اسمك هنا "
                      name="name"
                      {...getFieldProps("name")}
                      id="name"
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col  gap-2">
                  <div className="flex items-center  gap-1 ">
                    <MdAccountBalance className="text-black/70" size={25} />{" "}
                    <label className="">المدينة</label>
                  </div>
                  <div>
                    <select
                      value={selectedCity}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        setSelectedCity(value);
                        setFieldValue("city_id", value); // ✅ يتبعت للـ API
                        setFieldValue("region_id", ""); // تصفير الحي
                      }}
                      className="w-full border rounded-2xl py-1 border-gray-200 px-3"
                    >
                      <option value="">اختر المدينه</option>
                      {cities.map(({ id, name }) => (
                        <option key={id} value={id}>
                          {name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="w-full flex flex-col  gap-2">
                  <div className="flex items-center  gap-1 ">
                    <BiHomeAlt size={30} className="text-black/70" />{" "}
                    <label className="">عنوان الشارع</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="py-2 px-3 rounded-2xl outline-none border border-gray-200 w-full "
                      placeholder="اكتب رقم المبنى الخاص بك "
                      name="building_number"
                      id="building_number"
                      {...getFieldProps("building_number")}
                    />
                  </div>
                </div>
              </div>

              {/* right */}

              <div className="flex-1  space-y-4">
                <div className="w-full flex flex-col  gap-2">
                  <div className="flex items-center  gap-1 ">
                    <BiPhoneCall size={30} className="text-black/70" />{" "}
                    <label className="">رقم الجوال</label>
                  </div>
                  <div>
                    <input
                      type="number"
                      className="py-2 px-3 rounded-2xl outline-none border border-gray-200 w-full"
                      placeholder="اكتب رقم الجوال هنا "
                      name="phone"
                      id="phone"
                      {...getFieldProps("phone")}
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col  gap-2">
                  <div className="flex items-center  gap-1 ">
                    <GrMapLocation className="text-black/70" size={25} />{" "}
                    <label className="">الحي / المنطقة </label>
                  </div>
                  <div>
                    <select
                      value={selectedRegion}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        setSelectedRegion(value);
                        setFieldValue("region_id", value); // ✅
                      }}
                      className="w-full border rounded-2xl py-1 border-gray-200 px-3"
                    >
                      <option value="">اختر الحي</option>
                      {region.map(({ id, name }) => (
                        <option key={id} value={id}>
                          {name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="w-full flex flex-col  gap-2">
                  <div className="flex items-center  gap-1 ">
                    <CgPassword size={30} className="text-black/70" />{" "}
                    <label className="">الرمز البريدي ( اختياري )</label>
                  </div>
                  <div>
                    {" "}
                    <input
                      type="text"
                      className="py-2 px-3 rounded-2xl outline-none border border-gray-200  w-full"
                      placeholder="ادخل الرمز البريدي لمنطقتك"
                      name="zip_code"
                      id="zip_code"
                      {...getFieldProps("zip_code")}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex items-center justify-center gap-3.5">
              <button
                disabled={!isValid || !dirty}
                type="submit"
                className="bg-main text-white w-1/2  flex items-center justify-center py-2 rounded-2xl gap-2 disabled:bg-gray-400
    disabled:text-gray-200
    disabled:cursor-not-allowed
    disabled:hover:bg-gray-400"
              >
                {loadingBut ? (
                  <BeatLoader color="white" className="py-2" />
                ) : (
                  <>
                    <p>اضافة العنوان</p>

                    <CgMathPlus size={30} className="text-white" />
                  </>
                )}
              </button>
              <button className="bg-second text-white w-1/2 flex items-center justify-center py-2 rounded-2xl gap-2 ">
                <p>تحديد الموقع على الخريطة</p>

                <MdLocationPin size={30} className="text-white" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAddress;
