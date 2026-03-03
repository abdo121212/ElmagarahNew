import { IoIosAdd } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";

const Address = () => {
  return (
    <div className="my-8 font-cairo  bg-white shadow-2xl p-2 rounded-2xl w-full">
      <div className="flex  items-center space-x-2 py-5 w-full">
        <HiOutlineHome size={30} />

        <h4 className="font-extrabold text-2xl ">عنوان الشحن</h4>
      </div>

      <div className="flex w-full gap-2.5 max-md:flex-col bg-white ">
        <label className="flex w-full  flex-col  space-y-5 px-4 py-3 border shadow border-gray-200  rounded-xl cursor-pointer hover:bg-gray-50 duration-200">
          <input
            type="radio"
            name="address"
            value="updates"
            className="w-5 h-5 accent-blue-600 "
          />

          <div className="flex  flex-col  space-y-2.5">
            <h4 className="font-bold text-xl">الرياض - حي الندى</h4>

            <p className="text-md ">
              شقة 402، برج الفيحاء، طريق الكورنيش، حي الحمراء، جدة 23212،
              المملكة العربية السعودية
            </p>
          </div>

          <div
            className="flex  w-full gap-5
          "
          >
            <button className="flex bg-[#000E39] text-white w-full rounded-2xl items-center justify-center py-2 px-3 space-x-3">
              <h4 className="text-lg   font-medium">حذف العنوان</h4>
              <MdOutlineDelete size={30} />
            </button>

            <button className="flex bg-main text-white w-full rounded-2xl items-center justify-center py-2 px-3 space-x-3">
              <h4 className="text-lg   font-medium">تعديل العنوان</h4>
              <FiEdit size={30} />
            </button>
          </div>
        </label>

        <label className="flex w-full  flex-col  space-y-5 px-4 py-3 border shadow border-gray-200  rounded-xl cursor-pointer hover:bg-gray-50 duration-200">
          <input
            type="radio"
            name="address"
            value="updates"
            className="w-5 h-5 accent-blue-600"
          />

          <div className="flex  flex-col  space-y-2.5">
            <h4 className="font-bold text-xl">الرياض - حي الندى</h4>

            <p className="text-md ">
              شقة 402، برج الفيحاء، طريق الكورنيش، حي الحمراء، جدة 23212،
              المملكة العربية السعودية
            </p>
          </div>

          <div
            className="flex  w-full gap-5
          "
          >
            <button className="flex bg-[#000E39] text-white w-full rounded-2xl items-center justify-center py-2 px-3 space-x-3">
              <h4 className="text-lg   font-medium">حذف العنوان</h4>

              <MdOutlineDelete size={30} />
            </button>

            <button className="flex bg-main text-white w-full rounded-2xl items-center justify-center py-2 px-3 space-x-3">
              <h4 className="text-lg   font-medium">تعديل العنوان</h4>
              <FiEdit size={30} />
            </button>
          </div>
        </label>
      </div>

      <div className="w-full flex items-center justify-center my-4">
        <button className="flex bg-second text-white  rounded-2xl items-center justify-center py-2 px-3 space-x-1">
          <h4 className="text-lg   font-medium">اضافة عنوان جديد</h4>

          <IoIosAdd size={30} />
        </button>
      </div>
    </div>
  );
};

export default Address;
