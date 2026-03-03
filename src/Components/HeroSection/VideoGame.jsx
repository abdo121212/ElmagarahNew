import { TbTruckDelivery } from "react-icons/tb";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import img1 from "../../assets/VideoGame/image (1).jpg";
import img2 from "../../assets/VideoGame/image (2).jpg";
import img3 from "../../assets/VideoGame/image (3).jpg";
import img4 from "../../assets/VideoGame/image 10.jpg";
import img5 from "../../assets/VideoGame/image.jpg";
import img6 from "../../assets/VideoGame/image.png";

import ra from "../../assets/Arial.jpg";
const VideoGame = () => {
  return (
    <section className="container px-8 mx-auto">
      <div className="w-full flex items-center justify-between  p-5">
        <h5 className="font-bold text-lg text-[#000E39]">ألعاب الفيديو</h5>

        <button className="bg-main text-white px-3 py-2 rounded-2xl  cursor-pointer duration-200 hover:scale-110">
          عرض الكل
        </button>
      </div>
      <div className=" my-5 ">
        <div className="grid xl:grid-cols-6 place-items-center gap-4 grid-cols-2 lg:grid-cols-4">
          <div className="p-4 bg-[#FFFFFF] shadow-xl  hover:scale-105 duration-150 cursor-pointer rounded-2xl flex flex-col  justify-end space-y-4 ">
            <div className="flex items-center justify-between">
              <div className="bg-[#D9D9D9] w-8 h-8 flex items-center justify-center  rounded-full">
                <AiOutlineHeart
                  size={20}
                  className="cursor-pointer duration-200 hover:text-red-400"
                />
              </div>

              <div className="bg-[#CC4446] rounded-xl text-white p-2">
                خصم %15
              </div>
            </div>

            <div className="w-full  flex items-center justify-center">
              <img src={img1} alt="products" className="w-[169px] h-[170px]" />
            </div>
            <p>جوال سامسونج جالكسي اس 24 التراذاكرة تخزين 256GB، لون رمادي</p>
            <div className="flex items-center space-x-1.5 ">
              <h6 className="text-gray-400  line-through ">2500</h6>

              <h6 className="font-extrabold">2000</h6>

              <img className="" src={ra} alt="" />
            </div>

            <div className="flex items-center space-x-1.5">
              <AiFillStar size={20} className="text-[#E6E6E6]" />
              <AiFillStar size={20} className="text-[#FED74B]" />
              <AiFillStar size={20} className="text-[#FED74B]" />
              <AiFillStar size={20} className="text-[#FED74B]" />
              <AiFillStar size={20} className="text-[#FED74B]" />

              <h5>(4)</h5>
            </div>

            <div className="flex space-x-1.5 items-center ">
              <div className="bg-[#E6E6E6] w-8 h-8 rounded-full flex items-center justify-center ">
                <TbTruckDelivery size={20} className="text-main" />
              </div>

              <h5 className="text-[#000E39] ">شحن مجاني</h5>
            </div>
          </div>

          <div className="p-4 bg-[#FFFFFF] shadow-xl  hover:scale-105 duration-150 cursor-pointer rounded-2xl flex flex-col  justify-end space-y-4 ">
            <div className="flex items-center justify-between">
              <div className="bg-[#D9D9D9] w-8 h-8 flex items-center justify-center  rounded-full">
                <AiOutlineHeart
                  size={20}
                  className="cursor-pointer duration-200 hover:text-red-400"
                />
              </div>
            </div>

            <div className="w-full  flex items-center justify-center">
              <img src={img2} alt="products" className="w-[169px] h-[170px]" />
            </div>
            <p>جوال سامسونج جالكسي اس 24 التراذاكرة تخزين 256GB، لون رمادي</p>
            <div className="flex items-center space-x-1.5 ">
              <h6 className="text-gray-400  line-through ">2500</h6>

              <h6 className="font-extrabold">2000</h6>

              <img className="" src={ra} alt="" />
            </div>

            <div className="flex items-center space-x-1.5">
              <AiFillStar size={20} className="text-[#E6E6E6]" />
              <AiFillStar size={20} className="text-[#FED74B]" />
              <AiFillStar size={20} className="text-[#FED74B]" />
              <AiFillStar size={20} className="text-[#FED74B]" />
              <AiFillStar size={20} className="text-[#FED74B]" />

              <h5>(4)</h5>
            </div>

            <div className="flex space-x-1.5 items-center ">
              <div className="bg-[#E6E6E6] w-8 h-8 rounded-full flex items-center justify-center ">
                <TbTruckDelivery size={20} className="text-main" />
              </div>

              <h5 className="text-[#000E39] ">شحن مجاني</h5>
            </div>
          </div>

          <div className="p-4 bg-[#FFFFFF] shadow-xl  hover:scale-105 duration-150 cursor-pointer rounded-2xl flex flex-col  justify-end space-y-4 ">
            <div className="flex items-center justify-between">
              <div className="bg-[#D9D9D9] w-8 h-8 flex items-center justify-center  rounded-full">
                <AiOutlineHeart
                  size={20}
                  className="cursor-pointer duration-200 hover:text-red-400"
                />
              </div>
            </div>

            <div className="w-full  flex items-center justify-center">
              <img src={img3} alt="products" className="w-[169px] h-[170px]" />
            </div>
            <p>جوال سامسونج جالكسي اس 24 التراذاكرة تخزين 256GB، لون رمادي</p>
            <div className="flex items-center space-x-1.5 ">
              <h6 className="text-gray-400  line-through ">2500</h6>

              <h6 className="font-extrabold">2000</h6>

              <img className="" src={ra} alt="" />
            </div>

            <div className="flex items-center space-x-1.5">
              <AiFillStar size={20} className="text-[#E6E6E6]" />
              <AiFillStar size={20} className="text-[#FED74B]" />
              <AiFillStar size={20} className="text-[#FED74B]" />
              <AiFillStar size={20} className="text-[#FED74B]" />
              <AiFillStar size={20} className="text-[#FED74B]" />

              <h5>(4)</h5>
            </div>

            <div className="flex space-x-1.5 items-center ">
              <div className="bg-[#E6E6E6] w-8 h-8 rounded-full flex items-center justify-center ">
                <TbTruckDelivery size={20} className="text-main" />
              </div>

              <h5 className="text-[#000E39] ">شحن مجاني</h5>
            </div>
          </div>

          <div className="p-4 bg-[#FFFFFF] shadow-xl  hover:scale-105 duration-150 cursor-pointer rounded-2xl flex flex-col  justify-end space-y-4 ">
            <div className="flex items-center justify-between">
              <div className="bg-[#D9D9D9] w-8 h-8 flex items-center justify-center  rounded-full">
                <AiOutlineHeart
                  size={20}
                  className="cursor-pointer duration-200 hover:text-red-400"
                />
              </div>
            </div>

            <div className="w-full  flex items-center justify-center">
              <img src={img4} alt="products" className="w-[169px] h-[170px]" />
            </div>
            <p>جوال سامسونج جالكسي اس 24 التراذاكرة تخزين 256GB، لون رمادي</p>
            <div className="flex items-center space-x-1.5 ">
              <h6 className="text-gray-400  line-through ">2500</h6>

              <h6 className="font-extrabold">2000</h6>

              <img className="" src={ra} alt="" />
            </div>

            <div className="flex items-center space-x-1.5">
              <AiFillStar size={20} className="text-[#E6E6E6]" />
              <AiFillStar size={20} className="text-[#FED74B]" />
              <AiFillStar size={20} className="text-[#FED74B]" />
              <AiFillStar size={20} className="text-[#FED74B]" />
              <AiFillStar size={20} className="text-[#FED74B]" />

              <h5>(4)</h5>
            </div>

            <div className="flex space-x-1.5 items-center ">
              <div className="bg-[#E6E6E6] w-8 h-8 rounded-full flex items-center justify-center ">
                <TbTruckDelivery size={20} className="text-main" />
              </div>

              <h5 className="text-[#000E39] ">شحن مجاني</h5>
            </div>
          </div>

          <div className="p-4 bg-[#FFFFFF] shadow-xl  hover:scale-105 duration-150 cursor-pointer rounded-2xl flex flex-col  justify-end space-y-4 ">
            <div className="flex items-center justify-between">
              <div className="bg-[#D9D9D9] w-8 h-8 flex items-center justify-center  rounded-full">
                <AiOutlineHeart
                  size={20}
                  className="cursor-pointer duration-200 hover:text-red-400"
                />
              </div>

              <div className="bg-[#CC4446] rounded-xl text-white p-2">
                خصم %15
              </div>
            </div>

            <div className="w-full  flex items-center justify-center">
              <img src={img5} alt="products" className="w-[169px] h-[170px]" />
            </div>
            <p>جوال سامسونج جالكسي اس 24 التراذاكرة تخزين 256GB، لون رمادي</p>
            <div className="flex items-center space-x-1.5 ">
              <h6 className="text-gray-400  line-through ">2500</h6>

              <h6 className="font-extrabold">2000</h6>

              <img className="" src={ra} alt="" />
            </div>

            <div className="flex items-center space-x-1.5">
              <AiFillStar size={20} className="text-[#E6E6E6]" />
              <AiFillStar size={20} className="text-[#FED74B]" />
              <AiFillStar size={20} className="text-[#FED74B]" />
              <AiFillStar size={20} className="text-[#FED74B]" />
              <AiFillStar size={20} className="text-[#FED74B]" />

              <h5>(4)</h5>
            </div>

            <div className="flex space-x-1.5 items-center ">
              <div className="bg-[#E6E6E6] w-8 h-8 rounded-full flex items-center justify-center ">
                <TbTruckDelivery size={20} className="text-main" />
              </div>

              <h5 className="text-[#000E39] ">شحن مجاني</h5>
            </div>
          </div>

          <div className="p-4 bg-[#FFFFFF] shadow-xl  hover:scale-105 duration-150 cursor-pointer rounded-2xl flex flex-col  justify-end space-y-4 ">
            <div className="flex items-center justify-between">
              <div className="bg-[#D9D9D9] w-8 h-8 flex items-center justify-center  rounded-full">
                <AiOutlineHeart
                  size={20}
                  className="cursor-pointer duration-200 hover:text-red-400"
                />
              </div>
            </div>

            <div className="w-full  flex items-center justify-center">
              <img src={img6} alt="products" className="w-[169px] h-[170px]" />
            </div>
            <p>جوال سامسونج جالكسي اس 24 التراذاكرة تخزين 256GB، لون رمادي</p>
            <div className="flex items-center space-x-1.5 ">
              <h6 className="text-gray-400  line-through ">2500</h6>

              <h6 className="font-extrabold">2000</h6>

              <img className="" src={ra} alt="" />
            </div>

            <div className="flex items-center space-x-1.5">
              <AiFillStar size={20} className="text-[#E6E6E6]" />
              <AiFillStar size={20} className="text-[#FED74B]" />
              <AiFillStar size={20} className="text-[#FED74B]" />
              <AiFillStar size={20} className="text-[#FED74B]" />
              <AiFillStar size={20} className="text-[#FED74B]" />

              <h5>(4)</h5>
            </div>

            <div className="flex space-x-1.5 items-center ">
              <div className="bg-[#E6E6E6] w-8 h-8 rounded-full flex items-center justify-center ">
                <TbTruckDelivery size={20} className="text-main" />
              </div>

              <h5 className="text-[#000E39] ">شحن مجاني</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGame;
