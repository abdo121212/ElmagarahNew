import Product from "../../assets/Cart/image.svg";
import { IoMdCloudDone } from "react-icons/io";
import Riyal from "../../assets/Cart/Vector (1).svg";
const Orders = () => {


  
  return (
    <section className="min-h-screen">
      <div className="py-8 max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="col-span-4 ">
            <div className="grid gap-7 place-items-center">
              <div className=" w-full bg-white p-5 rounded-xl shadow-lg">
                <div className="flex md:flex-row flex-col-reverse items-center justify-evenly  gap-10">
                  <img src={Product} alt="products" />

                  <div className="flex flex-col  sm:w-full lg:w-full md:w-1/2 space-y-1.5 ">
                    <p className="font-medium ">
                      ابل ايفون 16 برو ماكس (256 جيجابايت) - اسود تيتانيوم
                    </p>

                    <div className="flex gap-x-3 items-center ">
                      تم توصيل الطلب بنجاح
                      <IoMdCloudDone size={20} className="text-main" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-10  ">
                    <div className="flex flex-col  space-y-5 items-center">
                      <p className="font-medium">الأجمالي</p>
                      <div className="flex items-center justify-center space-x-1 ">
                        <p className="font-semibold text-lg">5150</p>
                        <img src={Riyal} alt="riyal" />
                      </div>
                    </div>

                    <div className="flex flex-col  space-y-5 items-center">
                      <p className="font-medium">العداد</p>
                      <p className="font-semibold text-lg">13</p>
                    </div>

                    <div className="flex flex-col  space-y-5 items-center">
                      <p className="font-medium">السعر</p>
                      <div className="flex items-center justify-center space-x-1 ">
                        <p className="font-semibold text-lg">5150</p>
                        <img src={Riyal} alt="riyal" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 w-1/2">
                    <button className=" text-white bg-second px-3 py-2 rounded-2xl">
                      اطلب مرة أخرى
                    </button>

                    <button className="text-white bg-main px-3 py-2 rounded-2xl">
                      كتابة تعليق
                    </button>
                  </div>
                </div>
              </div>

              <div className=" w-full bg-white p-5 rounded-xl shadow-lg">
                <div className="flex md:flex-row flex-col-reverse items-center justify-evenly  gap-10">


                  <img src={Product} alt="products" />


                         <div className="flex flex-col  sm:w-full lg:w-full md:w-1/2 space-y-1.5 ">
                    <p className="font-medium ">
                      ابل ايفون 16 برو ماكس (256 جيجابايت) - اسود تيتانيوم
                    </p>

                    <div className="flex gap-x-3 items-center ">
                      تم توصيل الطلب بنجاح
                      <IoMdCloudDone size={20} className="text-main" />
                    </div>
                  </div>


                        <div className="flex items-center justify-between gap-10  ">
                    <div className="flex flex-col  space-y-5 items-center">
                      <p className="font-medium">الأجمالي</p>
                      <div className="flex items-center justify-center space-x-1 ">
                        <p className="font-semibold text-lg">5150</p>
                        <img src={Riyal} alt="riyal" />
                      </div>
                    </div>

                    <div className="flex flex-col  space-y-5 items-center">
                      <p className="font-medium">العداد</p>
                      <p className="font-semibold text-lg">1</p>
                    </div>

                    <div className="flex flex-col  space-y-5 items-center">
                      <p className="font-medium">السعر</p>
                      <div className="flex items-center justify-center space-x-1 ">
                        <p className="font-semibold text-lg">5150</p>
                        <img src={Riyal} alt="riyal" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 w-1/2">
                    <button className=" text-white bg-second px-3 py-2 rounded-2xl">
                      اطلب مرة أخرى
                    </button>

                    <button className="text-white bg-main px-3 py-2 rounded-2xl">
                      كتابة تعليق
                    </button>
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

export default Orders;
