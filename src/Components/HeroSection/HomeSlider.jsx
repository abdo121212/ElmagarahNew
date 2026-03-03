import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/Slider/Group 427319424.jpg";
import img2 from "../../assets/Slider/Group 162913.jpg";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const HomeSlider = () => {
  return (
    <div className="container  max-md:p-5 px-8 py-3 mx-auto max-md:opacity-0">
      <Swiper
        spaceBetween={50}
        navigation={true}
        autoplay={{
          delay: 5000, // 5 seconds
          disableOnInteraction: false,
        }}
        modules={[Scrollbar, A11y, Autoplay]}
        className=""
      >
        <SwiperSlide>
          <div className="" >
            <img
              src={img1}
              alt="slider"
              className=" relative z-0 rounded-t-xl object-contain w-full sm:w-[600px] md:w-[900px]  lg:w-[1200px] xl:w-[1800px]"
            />
            <img
              src={img2}
              alt="slider"
              className="  z-0 object-contain w-full sm:w-[600px] md:w-[900px] lg:w-[1200px] xl:w-[1800px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <img
              src={img1}
              alt="slider"
              className="rounded-t-xl   w-full sm:w-[600px] md:w-[900px] lg:w-[1200px] xl:w-[1800px]"
            />
            <img
              src={img2}
              alt="slider"
              className=" object-contain w-full sm:w-[600px] md:w-[900px] lg:w-[1200px] xl:w-[1800px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <img
              src={img1}
              alt="slider"
              className="rounded-t-xl object-contain w-full sm:w-[600px] md:w-[900px] lg:w-[1200px] xl:w-[1800px]"
            />
            <img
              src={img2}
              alt="slider"
              className=" object-contain w-full sm:w-[600px] md:w-[900px] lg:w-[1200px] xl:w-[1800px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <img
              src={img1}
              alt="slider"
              className="rounded-t-xl object-contain w-full sm:w-[600px] md:w-[900px] lg:w-[1200px] xl:w-[1800px]"
            />
            <img
              src={img2}
              alt="slider"
              className=" object-contain w-full sm:w-[600px] md:w-[900px] lg:w-[1200px] xl:w-[1800px]"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
