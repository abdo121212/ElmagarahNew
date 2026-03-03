import { RiLockPasswordLine } from "react-icons/ri";

import { CgClose } from "react-icons/cg";

const DeleteAccount = ({ setSure, sure }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-600 w-full">
      <div className="w-full h-full flex items-center justify-center  ">
        <div className=" w-5xl bg-white rounded-2xl">
          <div className="p-10 flex gap-5  flex-col max-md:flex-col">
            <div className="flex items-center justify-between  ">
              <p className="font-semibold md:text-lg text-sm  text-[#000E39]">
                يرجى إدخال الرقم السري الحالي لتاكيد حذف الحساب
              </p>

              <div
                onClick={() => setSure(!sure)}
                className="bg-[#A3A3A3] w-10 h-10 rounded-full  flex items-center justify-center cursor-pointer"
              >
                <CgClose
                  size={20}
                  className="text-white hover:text-red-400 duration-300 "
                />
              </div>
            </div>

            <div className="w-full flex   gap-2">
              <div className="w-full space-y-2">
                <div className="flex items-center  gap-1 ">
                  <RiLockPasswordLine size={20} />

                  <label >رقم البطاقة السري</label>
                </div>
                <input
                  type="password"
                  className="py-2 px-3 w-full rounded-2xl outline-none border border-gray-200 "
                  placeholder="********"
                />
              </div>
            </div>

            <button className="bg-main text-white cursor-pointer flex items-center justify-center py-2 rounded-2xl gap-2 ">
              حذف
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
