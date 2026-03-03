import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { CgFacebook } from "react-icons/cg";
import { FaSearchPlus } from "react-icons/fa";
import img from "../assets/Footer/Group 7.svg";
import img2 from "../assets/Footer/Group.svg";
// import img3 from "../assets/Footer/path16.svg";
import imgp1 from "../assets/Footer/Pay/Group (1).svg";
import imgp2 from "../assets/Footer/Pay/Group 427319273.svg";
import imgp3 from "../assets/Footer/Pay/Group.svg";
import imgp4 from "../assets/Footer/Pay/LOGOS.svg";
import imgp5 from "../assets/Footer/Pay/Vector.svg";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      //
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bg-[#000E39] text-white rounded-t-3xl relative">
      {showButton && (
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer
              bg-[#44CC98] text-white p-3 rounded-3xl flex items-center justify-center space-x-2"
        >
          <p className="text-lg">رجوع للأعلى</p>

          <MdKeyboardDoubleArrowUp size={20} />
        </div>
      )}

      <div className=" text-white rounded-t-2xl ">
        <div className="container px-8 mx-auto ">
          <div className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 gap-y-10 gap-x-4 ">
              <div className="flex items-end flex-col justify-end space-y-4">
                <img src={img} alt="logo" width={150} />
                <h3 className="font-normal  text-gray-200 text-end w-[200px]">
                  مرحبًا بك في مجرة دوت كوم – وجهتك الأولى للتسوق الإلكتروني في
                  السعودية
                </h3>
              </div>

              <div className="flex flex-col justify-end items-end space-y-4">
                <h4 className="text-2xl font-extrabold">روابط مفيدة</h4>

                <ul className="flex flex-col space-y-3 items-end">
                  <li className="text-gray-200 text-sm duration-200 hover:text-gray-50 cursor-pointer hover:scale-105 ">
                    الأجهزة الكهربائية
                  </li>
                  <li className="text-gray-200 text-sm duration-200 hover:text-gray-50 cursor-pointer hover:scale-105">
                    الجوالات
                  </li>
                  <li className="text-gray-200 text-sm duration-200 hover:text-gray-50 cursor-pointer hover:scale-105">
                    أجهزة الكمبيوتر
                  </li>
                  <li className="text-gray-200 text-sm duration-200 hover:text-gray-50 cursor-pointer hover:scale-105">
                    الصحة والجمال
                  </li>
                </ul>
              </div>

              <div className="flex flex-col justify-end items-end space-y-4">
                <h4 className="text-2xl font-extrabold">من نحن</h4>

                <ul className="flex flex-col space-y-3 items-end">
                  <li className="text-gray-200 text-sm duration-200 hover:text-gray-50 cursor-pointer hover:scale-105 ">
                    نبذة عنا
                  </li>
                  <li className="text-gray-200 text-sm duration-200 hover:text-gray-50 cursor-pointer hover:scale-105">
                    سياسة الخصوصية
                  </li>
                  <li className="text-gray-200 text-sm duration-200 hover:text-gray-50 cursor-pointer hover:scale-105">
                    أجهزة الكمبيوتر
                  </li>
                  <li className="text-gray-200 text-sm duration-200 hover:text-gray-50 cursor-pointer hover:scale-105">
                    تواصل معنا
                  </li>
                </ul>
              </div>

              <div className="flex flex-col justify-end items-end space-y-4">
                <h4 className="text-2xl font-extrabold">تحتاج مساعد؟</h4>

                <ul className="flex flex-col space-y-3 items-end">
                  <li className="text-gray-200 text-sm duration-200 hover:text-gray-50 cursor-pointer hover:scale-105 ">
                    سياسات وأسعار الشحن
                  </li>
                  <li className="text-gray-200 text-sm duration-200 hover:text-gray-50 cursor-pointer hover:scale-105">
                    عروض التقسيط
                  </li>
                  <li className="text-gray-200 text-sm duration-200 hover:text-gray-50 cursor-pointer hover:scale-105">
                    أسئلة شائعة
                  </li>
                  <li className="text-gray-200 text-sm duration-200 hover:text-gray-50 cursor-pointer hover:scale-105">
                    بما نحن متميزين
                  </li>
                </ul>
              </div>

              <div className="flex flex-col  space-y-5">
                <h4 className="text-end">اشترك ليوصلك كل جديد!</h4>
                <div className="h-10 bg-white rounded-4xl relative  ">
                  <div className=" flex items-center container px-3 w-full h-full ">
                    <div className="bg-[#000E39] w-8 h-8 flex items-center justify-center rounded-full   ">
                      <FaSearchPlus
                        size={20}
                        className="cursor-pointer hover:scale-125  duration-300 z-10 "
                      />
                    </div>
                    <input
                      type="search"
                      className="border-none outline-none  absolute top-0 left-0 right-0 bottom-0 rounded-4xl px-3  text-black text-end"
                      placeholder="البريد الالكتروني"
                    />
                  </div>
                </div>

                <div className="text-end  flex flex-col space-y-4">
                  <h2>تابعونا على</h2>

                  <div className="flex  items-center justify-end space-x-3.5">
                    <CgFacebook size={20} />

                    <FiTwitter size={20} />

                    <FaLinkedinIn size={20} />

                    <BsInstagram size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-8 mx-auto">
        <hr className="text-[#7996ee]" />

        <div className="p-5 flex  items-center justify-between  flex-col lg:flex-row ">
          <div className="flex items-center space-x-3 ">
            <img src={img2} alt="payGoogle" />
            {/* <img src={img3} alt="AppStore" /> */}

            <h3 className="">حمل التطبيق الأن</h3>
          </div>

          <h2 className="text-xl text-center">
            © 2025 - المجرة دوت كوم - جميع الحقوق محفوظة
          </h2>

          <div className="flex gap-3  items-center justify-center">
            <img src={imgp1} alt="" />
            <img src={imgp2} alt="" />
            <img src={imgp3} alt="" />
            <img src={imgp4} alt="" />
            <img src={imgp5} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
