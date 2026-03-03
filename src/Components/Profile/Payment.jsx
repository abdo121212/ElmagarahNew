import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import paymentMada from "../../assets/Payment method/Group.svg";
import STC from "../../assets/Payment method/Group (1).svg";
import Visa from "../../assets/Payment method/Vector.svg";
import AddPayment from "./AddPayment";
import { useState } from "react";

const Payment = () => {
  const [openPay, setOpenPay] = useState(false);

  return (
    <>
      <div className="grid">
        <div className=" w-full  p-5 flex items-center justify-center flex-col  space-y-10">
          <div className="flex md:flex-row flex-col-reverse items-center justify-between w-full  rounded-xl shadow-xl space-y-4  p-5">
            <div className="flex items-center gap-2 font-cairo max-lg:flex-col-reverse      ">
              <img src={paymentMada} alt="products" />

              <p>بطاقة مدى (Debit) تنتهي بـ 4923 </p>
            </div>

            <h2>فهد العتيبي</h2>

            <h2>تاريخ الانتهاء : 12/27</h2>

            <RiDeleteBin6Line size={30} className="text-red-600" />
          </div>

          <div className="flex md:flex-row flex-col-reverse items-center justify-between w-full  rounded-2xl shadow-xl space-y-4  p-5">
            <div className="flex items-center gap-2 font-cairo max-lg:flex-col-reverse      ">
              <img src={STC} alt="products" />
              <p>بطاقة مدى (Debit) تنتهي بـ 4923 </p>
            </div>

            <h2>فهد العتيبي</h2>

            <h2>تاريخ الانتهاء : 12/27</h2>

            <RiDeleteBin6Line size={30} className="text-red-600" />
          </div>

          <div className="flex md:flex-row flex-col-reverse items-center justify-between w-full  rounded-2xl shadow-xl space-y-4  p-5">
            <div className="flex items-center gap-2 font-cairo max-lg:flex-col-reverse      ">
              <img src={STC} alt="products" />
              <p>بطاقة مدى (Debit) تنتهي بـ 4923 </p>
            </div>

            <h2>فهد العتيبي</h2>

            <h2>تاريخ الانتهاء : 12/27</h2>

            <RiDeleteBin6Line size={30} className="text-red-600" />
          </div>

          <div
            onClick={() => setOpenPay(!openPay)}
            className="flex md:flex-row flex-col-reverse items-center  w-full  hover:bg-gray-200  duration-150  cursor-pointer rounded-2xl shadow-xl space-x-4   p-5"
          >
            <AiOutlinePlus size={30} className="text-gray-500" />

            <h1>اضافة بطاقة جديدة</h1>
          </div>
        </div>

        {openPay && <AddPayment setOpenPay={setOpenPay} openPay={openPay} />}
      </div>
    </>
  );
};

export default Payment;
