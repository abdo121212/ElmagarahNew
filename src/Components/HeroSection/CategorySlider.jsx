import img1 from "../../assets/SliderHome/Frame 1000001301.jpg";
import img2 from "../../assets/SliderHome/Frame 1000001302.jpg";
import img3 from "../../assets/SliderHome/Frame 1000001303.jpg";
import img4 from "../../assets/SliderHome/Frame 1000001304.jpg";
import img5 from "../../assets/SliderHome/Frame 1000001305.jpg";
import img6 from "../../assets/SliderHome/Frame 1000001306.jpg";
import img7 from "../../assets/SliderHome/Frame 1000001307.jpg";
import img8 from "../../assets/SliderHome/Frame 1000001308.jpg";
import img9 from "../../assets/SliderHome/Frame 1000001309.jpg";
import img10 from "../../assets/SliderHome/Frame 1000001310.jpg";

const CategorySlider = () => {
  return (
    <>
      <div className="container max-md:p-5 p-8 mx-auto mt-1 ">
        <div className="grid place-items-center grid-cols-2 gap-x-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-10 ">
          <img src={img1} alt="image slider" className="w-1/2 lg:w-3/4 xl:w-full" />
          <img src={img2} alt="image slider" className="w-1/2 lg:w-3/4 xl:w-full" />
          <img src={img3} alt="image slider" className="w-1/2 lg:w-3/4 xl:w-full" />
          <img src={img4} alt="image slider" className="w-1/2 lg:w-3/4 xl:w-full" />
          <img src={img5} alt="image slider" className="w-1/2 lg:w-3/4 xl:w-full" />
          <img src={img6} alt="image slider" className="w-1/2 lg:w-3/4 xl:w-full" />
          <img src={img7} alt="image slider" className="w-1/2 lg:w-3/4 xl:w-full" />
          <img src={img8} alt="image slider" className="w-1/2 lg:w-3/4 xl:w-full" />

          <img src={img9} alt="image slider" className="w-1/2 lg:w-3/4 xl:w-full" />
          <img src={img10} alt="image slider" className="w-1/2 lg:w-3/4 xl:w-full" />
        </div>
      </div>
    </>
  );
};

export default CategorySlider;
