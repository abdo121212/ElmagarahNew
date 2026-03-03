import { AiFillStar } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsBagDash } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "react-image-gallery/styles/css/image-gallery.css";
import riayl from "../assets/Arial.jpg";
import img1 from "../assets/Feature/Group 427319338.svg";
import img2 from "../assets/Feature/Group 427319339.svg";
import img3 from "../assets/Feature/Group 427319340.svg";
import ReactImageGallery from "react-image-gallery";
import MoreDetails from "./Pages/MoreDetails";
import Preview from "./Pages/Preview";
// import Offers from "./HeroSection/Offers";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "./Pages/Loading";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";

const ProductDetails = () => {
  async function productDetails() {
    const { data } = await axios.get(
      `https://api.sakank.net/api/product-details/${slug}`,
    );
    return data;
  }

  const { slug } = useParams();
  const [count, setCount] = useState(1);
  const { addProductToCart } = useContext(CartContext);

  const { data, isLoading } = useQuery({
    queryKey: ["product-details", slug],
    queryFn: () => productDetails(),
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <Loading />;

  const { brand, name, description, base_price, variants, images } = data.data;

  const { id } = variants[0];

  const handelAddToCart = {
    variant_id: id,
    quantity: count,
  };

  const imageSide = [
    {
      original: `https://api.sakank.net/storage/${images[0].file_path}`,
      thumbnail: `https://api.sakank.net/storage/${images[0].file_path}`,
    },
    {
      original: `https://api.sakank.net/storage/${images[0].file_path}`,
      thumbnail: `https://api.sakank.net/storage/${images[0].file_path}`,
    },
  ];

  return (
    <section className="container lg:px-10 px-5 mx-auto min-h-screen mt-10 font-cairo select-none">
      <div className="grid grid-cols-1 xl:grid-cols-4 min-h-screen gap-4">
        <div className="md:col-span-3">
          <div className="image-product flex items-start md:flex-row flex-col p-10 gap-6 col-span-12 md:col-span-4 rounded-2xl shadow-lg">
            <div className="flex-1">
              <ReactImageGallery
                items={imageSide}
                autoPlay={true}
                thumbnailPosition={"left"}
                showPlayButton={false}
                showNav={false}
                useBrowserFullscreen={false}
                showFullscreenButton={window.innerWidth > 700}
              />
            </div>

            <div className="flex-1 space-y-6">
              <p>
                الماركة:
                <span className="text-second mr-1">{brand.name}</span>
              </p>
              <h3 className="text-xl">{name}</h3>
              <div className="flex items-center gap-1.5">
                <AiFillStar className="text-amber-300" />
                <p className="text-gray-500">4.5 (125 تقيم)</p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center flex-row gap-2">
                  <img src={riayl} alt="logo of price" />
                  <p className="font-bold text-main text-2xl">{base_price}</p>
                  <p className="text-2xl line-through text-gray-400">2500</p>
                </div>
                <p>الأسعار تشمل ضريبة القيمة المضافة</p>
              </div>

              {/* Quantity */}
              <div className="flex flex-col gap-2">
                <p>العدد</p>
                <div className="flex gap-2 w-20 p-2 rounded-2xl border-gray-400 border-2 h-7 justify-between items-center">
                  <AiOutlinePlus
                    onClick={() => setCount(count + 1)}
                    className="cursor-pointer"
                  />
                  <p>{count}</p>
                  <AiOutlineMinus
                    onClick={() => setCount((prev) => Math.max(1, prev - 1))}
                    className="cursor-pointer"
                  />
                </div>
              </div>

              {/* Add to Cart */}
              <div className="w-full gap-3.5 flex items-center justify-center">
                <button className="bg-main text-white rounded-2xl py-2 w-1/2">
                  شراء
                </button>

                <button className="bg-main text-white rounded-2xl py-2 w-1/2">
                  <div
                    onClick={() => {
                      addProductToCart(handelAddToCart);
                    }}
                    className="flex items-center justify-center gap-2"
                  >
                    <p>أضف إلى سلتك</p>
                    <BsBagDash />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-1 rounded-2xl shadow-lg p-5 h-fit flex flex-col">
          <div className="flex flex-col space-y-[37px]">
            <div className="flex items-center gap-2">
              <img
                src={
                  images && images.length > 0
                    ? `https://api.sakank.net/storage/${images[0].file_path}`
                    : img1
                }
                alt=""
                width={80}
              />
              <div className="flex flex-col gap-2">
                <h1 className="font-bold">شحن مجاني</h1>
                <p className="text-gray-600">
                  جاهز للتوصيل في 07 أبريل إذا أكملت طلبك خلال هذا اليوم
                </p>
              </div>
            </div>
            <hr className="text-gray-200" />
            <div className="flex items-center gap-2">
              <img src={img2} alt="" width={80} />
              <div className="flex flex-col gap-2">
                <h1 className="font-bold">سياسة الارجاع</h1>
                <p className="text-gray-600">
                  يمكنك إرجاع المنتج مجاناً خلال 14 يوم من تاريخ الاستلام
                </p>
              </div>
            </div>
            <hr className="text-gray-200" />
            <div className="flex items-center gap-2">
              <img src={img3} alt="" width={80} />
              <div className="flex flex-col gap-2">
                <h1 className="font-bold">الضمان</h1>
                <p className="text-gray-600">1 Year Manufacturer Warranty</p>
              </div>
            </div>
            <hr className="text-gray-200" />
            <div className="flex items-center gap-2">
              <div className="bg-blue-100 h-14 w-14 rounded-full flex items-center justify-center">
                <AiOutlineUser size={30} className="text-main" />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-bold">البائع</h1>
                <p className="text-gray-600">Hossam Ragab Ali</p>
                <div className="flex flex-col">
                  <h3>تقيم البائع</h3>
                  <div className="flex gap-1 items-center">
                    <AiFillStar size={20} className="text-amber-400" />
                    <AiFillStar size={20} className="text-amber-400" />
                    <AiFillStar size={20} className="text-amber-400" />
                    <AiFillStar size={20} className="text-amber-400" />
                    <AiFillStar size={20} className="text-gray-400" />
                    <p>(4)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MoreDetails description={description} />
      <Preview />
      {/* <div className="mb-20">
        <Offers />
      </div> */}
    </section>
  );
};

export default ProductDetails;
