import img1 from "../../assets/TwoBanner/Home (1).svg";
import img2 from "../../assets/TwoBanner/Home.svg";
const TwoBanner = () => {
  return (
    <section className="container px-8 mx-auto my-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
      </div>
    </section>
  );
};

export default TwoBanner;
