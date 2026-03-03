import { CgMathPlus } from "react-icons/cg";

import Pay1 from "../../assets/Payment method/Group (1).svg";
import Pay2 from "../../assets/Payment method/Vector.svg";
import Pay3 from "../../assets/Payment method/Group.svg";
import { CgClose } from "react-icons/cg";
import { BiHome } from "react-icons/bi";
const AddPayment = ({ openPay, setOpenPay }) => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-600 w-full">
        <div className="w-full h-full flex items-center justify-center  ">
          <div className="h-[500px] w-5xl bg-white rounded-2xl">
            <div className="p-10 flex  flex-col max-md:flex-col">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-main">
                  <BiHome size={35} />

                  <p className="font-semibold text-lg "> اضافة بطاقة جديدة</p>
                </div>

                <div
                  onClick={() => setOpenPay(!openPay)}
                  className="bg-[#A3A3A3] w-10 h-10 rounded-full  flex items-center justify-center cursor-pointer"
                >
                  <CgClose
                    size={20}
                    className="text-white hover:text-red-400 duration-300 "
                  />
                </div>
              </div>

              {/* left and right */}
              <div className="flex  my-5 w-full gap-5">
                {/* right */}

                <div className="flex-1  space-y-4">
                  <div className="w-full flex flex-col  gap-2">
                    <div className="flex items-center justify-between gap-1 ">
                      <label>رقم البطاقة</label>

                      <div className="flex items-center space-x-1.5">
                        <img src={Pay3} alt="Payment" width={50} />

                        <img src={Pay1} alt="Payment" width={50} />
                        <img src={Pay2} alt="Payment" width={50} />
                      </div>
                    </div>
                    <input
                      type="text"
                      className="py-2 px-3 rounded-2xl outline-none border border-gray-200 "
                      placeholder="0000 00000 0000 0000 000"
                    />
                  </div>

                  <div className="w-full flex flex-col  gap-2">
                    <div className="flex items-center  gap-1 ">
                      <label>اسم صاجب البطاقة</label>
                    </div>
                    <input
                      type="text"
                      className="py-2 px-3 rounded-2xl outline-none border border-gray-200 "
                      placeholder="اكتب الاسم هنا..."
                    />
                  </div>

                  <div className="w-full flex   gap-2">
                    <div className="w-full">
                      <div className="flex items-center gap-1 ">
                        <label>رقم البطاقة السري</label>
                      </div>
                      <input
                        type="text"
                        className="py-2 px-3 w-full rounded-2xl outline-none border border-gray-200"
                        placeholder="000"
                      />
                    </div>

                    <div className="w-full">
                      <div className="flex items-center gap-1 ">
                        <label className="text-end ">
                          تاريخ انتهاء البطاقة
                        </label>
                      </div>
                      <input
                        type="text"
                        className="py-2 px-3 rounded-2xl w-full outline-none border border-gray-200"
                        placeholder="00/00"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className=" flex items-center justify-center gap-3.5">
                <button className="bg-main text-white w-full  flex items-center justify-center py-2 rounded-2xl gap-2 ">
                  <p>اضافة بطاقة</p>

                  <CgMathPlus size={30} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPayment;
