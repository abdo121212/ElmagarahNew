import { AiOutlineFileDone } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

const Notification = () => {
  return (
    <div className="grid">
      <div className=" w-full  p-5 flex items-center justify-center flex-col  space-y-10">
        <div className="flex md:flex-row flex-col items-center justify-between w-full  rounded-2xl shadow-xl gap-5  p-5">
          <div className="flex items-center justify-center  space-x-2">
            <div className="w-10 h-10 flex items-center justify-center bg-[#F0F4FE] rounded-full">
              <AiOutlineUser size={30} />
            </div>

            <div className="flex flex-col">
              <h5 className="font-cairo ">تحديث الملف الشخصي</h5>

              <p className="text-gray-500">لقد قمت بتحديث ملفك الشخصي للتو</p>
            </div>
          </div>

          <h4>16/04/2025 - 11:16 AM</h4>
        </div>

        <div className="flex md:flex-row flex-col items-center justify-between w-full  rounded-2xl shadow-xl gap-5  p-5">
          <div className="flex items-center justify-center  space-x-2">
            <div className="w-10 h-10 flex items-center justify-center bg-[#F0F4FE] rounded-full">
              <AiOutlineFileDone size={30} />
            </div>
            <div className="flex flex-col">
              <h5 className="font-cairo ">تحديث الملف الشخصي</h5>

              <p className="text-gray-500">لقد قمت بتحديث ملفك الشخصي للتو</p>
            </div>
          </div>

          <h4>8/01/2025 - 1:16 AM</h4>
        </div>
      </div>
    </div>
  );
};

export default Notification;
