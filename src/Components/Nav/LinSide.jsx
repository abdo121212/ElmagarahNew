import { MdLanguage } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import img1 from "../../assets/Sidebar/418.jpg";
import img2 from "../../assets/Sidebar/7 2.jpg";
import img3 from "../../assets/Sidebar/71WkqFssobL._AC_SL1500_ 2.jpg";
import img4 from "../../assets/Sidebar/8 8.jpg";
import img5 from "../../assets/Sidebar/cute-brown-teddy-bear-with-bow-around-neck-sit-white-background 1.jpg";
import img6 from "../../assets/Sidebar/Group 427319289.jpg";
import img7 from "../../assets/Sidebar/Group 427319615.jpg";
import img8 from "../../assets/Sidebar/image (1).jpg";
import img9 from "../../assets/Sidebar/image 42.jpg";
import img10 from "../../assets/Sidebar/image.jpg";

const LinSide = () => {



  


  return (
    <>
      <div className="flex   flex-col space-y-5  text-main z-1000">
        <div className="w-full hover:scale-105 duration-200 cursor-pointer ">
          <img src={img1} alt="main" className="w-full" />
        </div>

        <div className="bg-[#F0F4FE] rounded-xl flex items-center justify-between p-5 full hover:scale-105 duration-200 cursor-pointer ">
          <img src={img2} alt="img2" />

          <h4 className="font-medium text-lg">الاثاث المنزليه</h4>
        </div>

        <div className="bg-[#F0F4FE] rounded-xl flex items-center justify-between p-5 full hover:scale-105 duration-200 cursor-pointer ">
          <img src={img3} alt="img2" />

          <h4 className="font-medium text-lg">الجوالات</h4>
        </div>

        <div className="bg-[#F0F4FE] rounded-xl flex items-center justify-between p-5 full hover:scale-105 duration-200 cursor-pointer ">
          <img src={img4} alt="img2" />

          <h4 className="font-medium text-lg">معدات رياضية</h4>
        </div>

        <div className="bg-[#F0F4FE] rounded-xl flex items-center justify-between p-5 full hover:scale-105 duration-200 cursor-pointer ">
          <img src={img5} alt="img2" />

          <h4 className="font-medium text-lg">ألعاب الأطفال</h4>
        </div>

        <div className="bg-[#F0F4FE] rounded-xl flex items-center justify-between p-5 full hover:scale-105 duration-200 cursor-pointer ">
          <img src={img6} alt="img2" />

          <h4 className="font-medium text-lg">الصحة والجمال</h4>
        </div>

        <div className="bg-[#F0F4FE] rounded-xl flex items-center justify-between p-5 full hover:scale-105 duration-200 cursor-pointer ">
          <img src={img7} alt="img2" />

          <h4 className="font-medium text-lg">الأجهزة الكهربائية</h4>
        </div>

        <div className="bg-[#F0F4FE] rounded-xl flex items-center justify-between p-5 full hover:scale-105 duration-200 cursor-pointer ">
          <img src={img8} alt="img2" />

          <h4 className="font-medium text-lg">الشاشات</h4>
        </div>

        <div className="bg-[#F0F4FE] rounded-xl flex items-center justify-between p-5 full hover:scale-105 duration-200 cursor-pointer ">
          <img src={img9} alt="img2" />

          <h4 className="font-medium text-lg">الصحة والتغذية</h4>
        </div>

        <div className="bg-[#F0F4FE] rounded-xl flex items-center justify-between p-5 full hover:scale-105 duration-200 cursor-pointer ">
          <img src={img10} alt="img2" />

          <h4 className="font-medium text-lg">أجهزة الكمبيوتر</h4>
        </div>

        <div className="bg-[#F0F4FE] rounded-2xl flex items-center p-5 space-x-3 justify-center hover:scale-105 duration-200 cursor-pointer">
          <BiUser size={20} />
          <h5 className="font-medium">تسجيل الدخول</h5>
        </div>

        <div className="flex items-center justify-center space-x-3 cursor-pointer">
          <MdLanguage size={20} />
          <h5>English</h5>
        </div>
      </div>
    </>
  );
};

export default LinSide;
