import { MdDone } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

import star from "../../assets/Preview/Group 4487.svg";
import logo from "../../assets/Preview/Group.svg";
import male from "../../assets/Preview/Ellipse 10 (1).svg";
import female from "../../assets/Preview/Ellipse 10.svg";

import banner from "../../assets/Preview/image.svg";
const Preview = () => {
  return (
    <section className="mb-20">
      <div className="shadow-2xl rounded-2xl  w-full p-10">
        <div>
          <div className="flex  py-4 gap-10 flex-col lg:flex-row">
            {/* right  */}
            <div className="flex-1 flex flex-col space-y-10">
              <div
                className="
            "
              >
                <h4 className="text-main font-bold text-xl">
                  تقييمات ومراجعات المنتج
                </h4>

                <div className="py-5">
                  <p className="font-black text-xl">4.1</p>

                  <div className="flex gap-1 items-center my-2 ">
                    <AiFillStar size={20} className="text-amber-400" />
                    <AiFillStar size={20} className="text-amber-400" />
                    <AiFillStar size={20} className="text-amber-400" />
                    <AiFillStar size={20} className="text-amber-400" />
                    <AiFillStar size={20} className="text-gray-400" />
                  </div>

                  <div className="w-full flex items-center gap-1">
                    <p>5</p>
                    <AiFillStar className="text-[#38AC04]" />
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#38AC04] transition-all duration-300"
                        style={{ width: "70%" }}
                      ></div>
                    </div>

                    <p>70%</p>
                  </div>

                  <div className="w-full flex items-center gap-1">
                    <p>4</p>
                    <AiFillStar className="text-[#8EB61F]" />
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#8EB61F] transition-all duration-300"
                        style={{ width: "50%" }}
                      ></div>
                    </div>

                    <p>50%</p>
                  </div>

                  <div className="w-full flex items-center gap-1">
                    <p>3</p>
                    <AiFillStar className="text-[#FED74B]" />
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#FED74B] transition-all duration-300"
                        style={{ width: "30%" }}
                      ></div>
                    </div>

                    <p>30%</p>
                  </div>

                  <div className="w-full flex items-center gap-1">
                    <p>2</p>
                    <AiFillStar className="text-[#CC4446]" />
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#CC4446] transition-all duration-300"
                        style={{ width: "10%" }}
                      ></div>
                    </div>

                    <p>10%</p>
                  </div>

                  <div className="w-full flex items-center gap-1">
                    <p>1</p>
                    <AiFillStar className="text-[#F36C31]" />
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#F36C31] transition-all duration-300"
                        style={{ width: "5%" }}
                      ></div>
                    </div>

                    <p>5%</p>
                  </div>
                </div>

                <div className="my-8 flex-col flex gap-20 ">
                  <div className="flex gap-4 items-center justify-center">
                    <div className="bg-second w-10 h-10 rounded-full flex items-center justify-center">
                      <img src={logo} alt="logo" />{" "}
                    </div>

                    <div className="space-y-1">
                      <h5
                        className=" font-bold text-xl 
"
                      >
                        من أين تأتي التقييمات؟
                      </h5>

                      <p className="">
                        تقييماتنا من عملاء مجرة دوت كوم الذين اشتروا المنتج
                        وأرسلوا تقييمًا
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center justify-center">
                    <div className="bg-second w-10 h-10 rounded-full flex items-center justify-center">
                      <img src={star} alt="star" />
                    </div>

                    <div className="space-y-1">
                      <h5
                        className=" font-bold text-xl 
"
                      >
                        من أين تأتي التقييمات؟
                      </h5>

                      <p className="">
                        تقييماتنا من عملاء مجرة دوت كوم الذين اشتروا المنتج
                        وأرسلوا تقييمًا
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* left  */}

            <div className="flex-2 flex flex-col space-y-10">
              <div>
                <h4 className="text-main font-bold text-xl">605 Reviews</h4>

                <div className="my-5 space-y-4">
                  <div className="flex   gap-4">
                    <img src={male} alt="" />

                    <div className="flex flex-col gap-2">
                      <h4 className="text-main font-bold">أمل عبد الرحمن</h4>

                      <p className="text-gray-500">25 Jun. 2025</p>
                    </div>

                    <div className="flex   gap-2  ">
                      <div className="w-5 h-5 bg-main flex items-center justify-center rounded-full">
                        <MdDone className="text-white" />
                      </div>

                      <p className="text-gray-500">عملية شراء تم التحقق منها</p>
                    </div>
                  </div>

                  <p>
                    صراحة أعجبني الجوال مرّة! شكله أنيق وتصميمه يفتح النفس. مريح
                    بالاستخدام وكل احتياجاتي يغطّيها تمام. أنصح فيه وبقوة
                  </p>

                  <div className="flex items-center gap-1">
                    <AiFillStar className="text-amber-300" size={20} />

                    <p className="text-gray-400">(4.0)</p>
                  </div>

                  <img src={banner} alt="" />
                </div>

                <div className="my-5 space-y-4">
                  <div className="flex   gap-4">
                    <img src={female} alt="" />

                    <div className="flex flex-col gap-2">
                      <h4 className="text-main font-bold">Hossam Ragab</h4>

                      <p className="text-gray-500">25 Jun. 2025</p>
                    </div>

                    <div className="flex   gap-2  ">
                      <div className="w-5 h-5 bg-main flex items-center justify-center rounded-full">
                        <MdDone className="text-white" />
                      </div>

                      <p className="text-gray-500">عملية شراء تم التحقق منها</p>
                    </div>
                  </div>

                  <p>
                    الجوال فعلاً خطير! شكله جذاب ولمسته فخمة، واستخدامه سلس
                    مرّه. وفّر لي كل اللي أحتاجه بدون تعب. أنصح فيه وبكل ثقة
                  </p>

                  <div className="flex items-center gap-1">
                    <AiFillStar className="text-amber-300" size={20} />

                    <p className="text-gray-400">(4.0)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preview;
