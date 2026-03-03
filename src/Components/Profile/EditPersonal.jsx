import { CgMathPlus } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { BiHome } from "react-icons/bi";
import { toast } from "react-toastify";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { BeatLoader } from "react-spinners";
import { AddressContext } from "../../Context/AddressContext";
import { RiLockPasswordFill } from "react-icons/ri";
const EditPersonal = ({ setShowModulePass }) => {
  const { token } = useAuth();

  const [loadingBut, setLoadingBut] = useState(false);

  const initialValues = {
    name: "",
    phone: "",
    city_id: "",
    region_id: "",
    building_number: "",
    zip_code: "",
  };

  const onSubmit = (values) => {
    addNewAddress(values);
  };

  const { handleSubmit, isValid, dirty } = useFormik({
    initialValues,
    onSubmit,
  });

  async function addNewAddress(values) {
    try {
      setLoadingBut(true);
      const { status } = await axios.post(
        "https://api.sakank.net/api/profile/add-address",
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (status == 201) {
        toast.success("address added successfully", {
          position: "bottom-left",
        });

        loadingBut(false);
      }
    } catch (error) {
      toast.error(error.response.data.message, { position: "bottom-left" });
      setLoadingBut(false);

      console.log(error);
    }
  }

  return (
    <>
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
                  onClick={() => {
                    setShowModulePass(false);
                  }}
                  className="bg-[#A3A3A3] w-10 h-10 rounded-full  flex items-center justify-center cursor-pointer"
                >
                  <CgClose
                    size={20}
                    className="text-white hover:text-red-400 duration-300 "
                  />
                </div>
              </div>

              <div className="flex  my-5 w-full gap-5 flex-col md:flex-row">
                <div className="flex-1  space-y-4">
                  <div className="w-full flex flex-col  gap-2">
                    <div className="flex items-center  gap-1 ">
                      <RiLockPasswordFill size={30} className="text-black/70" />{" "}
                      <label className="">الرقم السري </label>
                    </div>
                    <div>
                      {" "}
                      <input
                        type="password"
                        className="py-2 px-3 rounded-2xl outline-none border border-gray-200  w-full"
                        placeholder="ادخل الرقم السري"
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
                      <p>تحديث الملف الشخصي</p>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditPersonal;
