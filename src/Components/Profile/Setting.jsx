import { useState } from "react";
import DeleteAccount from "./DeleteAccount";

const Setting = () => {
  const [sure, setSure] = useState(false);
  return (
    <div className="grid">
      <div className=" w-full  p-5 flex items-center justify-center flex-col  space-y-10">




        <div className="flex md:flex-row flex-col-reverse items-center justify-between w-full  rounded-2xl shadow-xl gap-5  p-5">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer relative" />
            <div
              className="w-11 h-6 bg-gray-300 rounded-full peer  absolute
    peer-checked:bg-main
    after:content-[''] after:absolute after:top-0.5 after:left-0.5
    after:bg-white after:border after:rounded-full after:h-5 after:w-5
    after:transition-all 
    peer-checked:after:translate-x-full"
            ></div>
          </label>

          <div className="flex items-end justify-end flex-col">
            <h5 className="font-cairo ">صوت الإشعارات</h5>

            <p className="text-gray-500">هل تريد تشغيل صوت الإشعارات؟</p>
          </div>
        </div>

        <div className="flex md:flex-row flex-col-reverse items-center justify-between w-full  rounded-2xl shadow-xl gap-5  p-5">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer relative" />
            <div
              className="w-11 h-6 bg-gray-300 rounded-full peer  absolute
    peer-checked:bg-main
    after:content-[''] after:absolute after:top-0.5 after:left-0.5
    after:bg-white after:border after:rounded-full after:h-5 after:w-5
    after:transition-all 
    peer-checked:after:translate-x-full"
            ></div>
          </label>

          <div className="flex items-end justify-end flex-col">
            <h5 className="font-cairo ">الإشعارات عند توفر منتج مفضل</h5>

            <p className="text-gray-500">
              سوف يتم ارسال اشعار لك عند توفر منتج انت تفضله{" "}
            </p>
          </div>
        </div>

        <div className="flex md:flex-row flex-col-reverse items-center justify-between w-full  rounded-2xl shadow-xl gap-5  p-5">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer relative" />
            <div
              className="w-11 h-6 bg-gray-300 rounded-full peer  absolute
    peer-checked:bg-main
    after:content-[''] after:absolute after:top-0.5 after:left-0.5
    after:bg-white after:border after:rounded-full after:h-5 after:w-5
    after:transition-all 
    peer-checked:after:translate-x-full"
            ></div>
          </label>

          <div className="flex items-end justify-end flex-col">
            <h5 className="font-cairo ">
              الإشعارات بالعروض الخاصة / الكوبونات
            </h5>

            <p className="text-gray-500">
              سوف يتم ارسال اشعار لك عند توفر عرض خاص او خصم كبير{" "}
            </p>
          </div>
        </div>

        {/* deleted */}

        <div className="flex md:flex-row flex-col-reverse items-center justify-between w-full  rounded-2xl shadow-xl gap-5  p-5">
 

          <div className="flex  flex-col">
            <h5 className="font-cairo ">
              الإشعارات بالعروض الخاصة / الكوبونات
            </h5>

            <p className="text-gray-500">
              سوف يتم ارسال اشعار لك عند توفر عرض خاص او خصم كبير{" "}
            </p>
          </div>


                   <button
            onClick={() => setSure(!sure)}
            className="bg-main text-white px-6 rounded-2xl py-1 cursor-pointer"
          >
            حذف
          </button>
        </div>
      </div>

      {sure && <DeleteAccount setSure={setSure} sure={sure} />}
    </div>
  );
};

export default Setting;
