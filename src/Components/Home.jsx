import { Helmet } from "react-helmet-async";
import Banner from "./HeroSection/Banner";
import CategorySlider from "./HeroSection/CategorySlider";
// import Feature from "./HeroSection/Feature";
import HomeSlider from "./HeroSection/HomeSlider";
// import LapDevices from "./HeroSection/LapDevices";
import Offers from "./HeroSection/Offers";
// import Screens from "./HeroSection/Screens";
// import TwoBanner from "./HeroSection/TwoBanner";
// import VideoGame from "./HeroSection/VideoGame";
// import { PersonalContext } from "../Context/InformationUser";

const Home = () => {
  // const data = useContext(PersonalContext);

  // console.log(data);


  return (
    <main className="font-cairo select-none ">
      <Helmet>
        <title>Home page</title>
        <meta
          name="description"
          content="Discover top brands available at Freshcart. Shop from leading brands in various categories."
        />
        <meta
          name="keywords"
          content="Brands, Freshcart, Shopping, Top Brands, Online Store"
        />
        <meta property="og:title" content="Brands - Freshcart" />
        <meta
          property="og:description"
          content="Explore a diverse selection of brands at Freshcart and find the best deals on products from your favorite brands."
        />
      </Helmet>

      <HomeSlider />
      <CategorySlider />
      <Banner />
      <Offers />
      {/* <VideoGame /> */}
      {/* <Feature /> */}
      {/* <LapDevices /> */}
      {/* <TwoBanner /> */}
      {/* <Screens /> */}
    </main>
  );
};

export default Home;
