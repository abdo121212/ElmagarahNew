import { BsCash } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";
import { SiContactlesspayment } from "react-icons/si";
import { IoIosAdd } from "react-icons/io";

const ChoosePay = () => {
  return (
    <div className="my-8 font-cairo  bg-white shadow-2xl p-2 rounded-2xl">
      <div className="text-end flex  items-center space-x-2 py-5">
        <SiContactlesspayment size={30} />
        <h4 className="font-extrabold  text-2xl">اختر طريقة الدفع</h4>'
      </div>

      <div className="flex w-full gap-2.5 max-md:flex-col bg-white ">
        <label className="flex w-full  flex-col  space-y-5 px-4 py-3 border shadow border-gray-200  rounded-xl cursor-pointer hover:bg-gray-50 duration-200">
          <input
            type="radio"
            name="payment"
            value="updates"
            className="w-5 h-5 accent-blue-600"
          />

          <div className="flex flex-col items-center justify-center text-main">
            <BsCash size={40} />

            <h4 className="text-2xl">الدفع عند الاستلام</h4>
          </div>
        </label>
        <label className="flex w-full  flex-col  space-y-5 px-4 py-3 border shadow border-gray-200  rounded-xl cursor-pointer hover:bg-gray-50 duration-200">
          <input
            type="radio"
            name="payment"
            value="updates"
            className="w-5 h-5 accent-blue-600"
          />

          <div className="flex flex-col items-center justify-center text-main">
            <MdOutlinePayment size={40} />

            <h4 className="text-2xl">بطاقة خصم أو بطاقة ائتمان</h4>
          </div>
        </label>
      </div>

      <div className="w-full flex items-center justify-center my-4">
        <button className="flex bg-second text-white  rounded-2xl items-center justify-center py-2 px-3 space-x-1">
          <h4 className="text-lg   font-medium">اضافة بطاقة جديدة</h4>

          <IoIosAdd size={30} />
        </button>
      </div>
    </div>
  );
};

export default ChoosePay;
