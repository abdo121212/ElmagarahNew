import { BiMessageAltDetail } from "react-icons/bi";

import { BiMessageAltEdit } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import Location from "../../assets/Contact/ChatGPT_Image_Dec_10__2025__03_44_55_PM-removebg-preview.png";
import email from "../../assets/Contact/ChatGPT_Image_Dec_10__2025__03_54_51_PM-removebg-preview.png";

const ContactUs = () => {
  return (
    <section className="px-8 container mx-auto min-h-screen w-full font-cairo">
      <div className="w-full h-full flex items-center justify-center mt-10">
        <div className="bg-white rounded-2xl shadow-2xl w-[890px] p-4">
          <h1 className="text-center font-cairo text-2xl">
            نحن مستعدون دائمًا لمساعدتك
          </h1>

          <h3 className="text-center my-5 font-cairo text-lg">
            قم بتواصل معنا من خلال ملاء الاستمارة التالية او من خلال البريد او
            الهاتف
          </h3>

          <div className="space-y-3">
            {/* name */}
            <div className="w-full space-y-2">
              <div className="flex w-full  items-center space-x-2 ">

                <AiOutlineUser size={20} className="text-[#000E39]" />
                <p className="text-[#000E39] ">الاسم بالكامل </p>

              </div>

              <input
                className="w-full rounded-2xl px-5 py-2  border text-[#A8A6A7] outline-none"
                type="text"
                placeholder="اكتب اسمك هنا"
              />
            </div>

            {/* email */}
            <div className="w-full space-y-2">
              <div className="flex w-full  items-center space-x-2 ">

                <MdOutlineMailOutline size={20} className="text-[#000E39]" />
                <p className="text-[#000E39]">البريد الإلكتروني</p>

              </div>

              <input
                className="w-full rounded-2xl px-5 py-2  border outline-none text-[#A8A6A7]"
                type="text"
                placeholder="اكتب بريدك الإلكتروني"
              />
            </div>

            {/* number */}
            <div className="w-full space-y-2">
              <div className="flex w-full  items-center space-x-2 ">

                <BiPhoneCall size={20} className="text-[#000E39]" />

                <p className="text-[#000E39]">رقم الجوال</p>

              </div>

              <input
                className="w-full rounded-2xl px-5 py-2  border text-[#A8A6A7] outline-none"
                type="text"
                placeholder="اكتب رقم جوالك هنا"
              />
            </div>

            {/* message */}
            <div className="w-full space-y-2">
              <div className="flex w-full  items-center space-x-2 ">

                <BiMessageAltEdit size={20} className="text-[#000E39]" />

                <p className="text-[#000E39]">موضع الرسالة</p>

              </div>

              <input
                className="w-full rounded-2xl px-5 py-2  border text-[#A8A6A7] outline-none"
                type="text"
                placeholder="اكتب هنا موضع الرسالة"
              />
            </div>

            {/* main message */}
            <div className="w-full space-y-2">
              <div className="flex w-full  items-center space-x-2 ">

                <BiMessageAltDetail size={20} className="text-[#000E39]" />

                <p className="text-[#000E39]">الرسالة</p>

              </div>

              <textarea
                className="w-full rounded-2xl px-5 py-2  border text-[#A8A6A7] outline-none"
                type="text"
                placeholder="اكتب رسالتك هنا"
              />
            </div>

            {/* button */}

            <button className="text-white bg-main  py-2 rounded-2xl font-normal cursor-pointer w-full">
              ارسال
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h1 className="text-center font-cairo text-3xl ">
          او تواصل معنا من خلال الطرق التالية
        </h1>

        <div className="flex lg:flex-row flex-col items-center justify-center  p-30 gap-10">
          <div className="flex items-center  flex-col justify-center p-8 rounded-2xl space-y-2.5 bg-white shadow-md flex-2">
            <img src={email} width={150} alt="done" className="object-cover " />
            <h1 className="text-2xl font-cairo">البريد الإلكتروني </h1>
            <p className="font-cairo  text-lg text-gray-500 text-center">
              info@Almagarahofficial.com
            </p>
          </div>

          <div className="flex items-center  flex-col justify-center p-8 rounded-2xl space-y-2.5 bg-white shadow-md flex-2  ">
            <img
              src={Location}
              width={150}
              alt="Location"
              className="object-cover "
            />
            <h1 className="text-2xl font-cairo">
              عنوان المكتب الرئيسي في الرياض
            </h1>
            <p className="font-cairo  text-lg text-gray-500 text-center">
              21 Al Takhassusi St, Al Muruj District, Riyadh 12363
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
