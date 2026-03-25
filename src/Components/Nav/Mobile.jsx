import { CgClose } from "react-icons/cg";
import { CgMenuRight } from "react-icons/cg";
import logo from "../../assets/logo.png";
import { BsBagDash } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { CgMenuRightAlt } from "react-icons/cg";
import { useContext, useEffect, useState } from "react";
import logoCol from "../../assets/Group 427319240.svg";
import LinSide from "./LinSide";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { WishListContext } from "../../Context/WishListContext";

const Mobile = () => {
  const { dataCart, getProductFromCart } = useContext(CartContext);
  const { dataFromWishList, getProductFromWishlist } =
    useContext(WishListContext);

  const [menu, setMenu] = useState(false);

  useEffect(() => {
    getProductFromCart();
    getProductFromWishlist();
  }, []);

  return (
    <>
      <div className="bg-main h-[240] max-w-full md:hidden container px-7 py-3  space-y-4">
        {/* left */}
        <div className=" flex items-center justify-between ">
          {/* right */}
          {menu ? (
            <CgMenuRight
              onClick={() => setMenu(!menu)}
              className="cursor-pointer"
              size={30}
            />
          ) : (
            <CgMenuRightAlt
              onClick={() => setMenu(!menu)}
              className="cursor-pointer"
              size={30}
            />
          )}
          {/* center */}
          <img src={logo} alt="logo" width={100} />

          <div className="text-white flex gap-3 items-center justify-center ">
            <Link
              to="/wishlist"
              className="relative p-2.5 bg-gray-100 hover:bg-red-50 text-[#000E39] hover:text-red-500 rounded-xl duration-300 transition-all shadow-sm group"
            >
              <AiOutlineHeart
                size={26}
                className="group-hover:scale-110 duration-300"
              />

              {/* العداد (Badge) */}
              {dataFromWishList?.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white animate-pulse">
                  {dataFromWishList.length}
                </span>
              )}
            </Link>
            <Link
              to="/cart"
              className="relative p-2.5 bg-second/90 hover:bg-second rounded-xl duration-300 transition-all shadow-lg hover:shadow-second/20"
            >
              <BsBagDash size={26} />
              {dataCart?.cart?.cart_items?.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-main animate-bounce">
                  {dataCart?.cart?.cart_items.length}
                </span>
              )}
            </Link>
          </div>
        </div>

        <div className="h-10 bg-white rounded-4xl relative  ">
          <div className=" flex items-center container px-3 w-full h-full ">
            <div className="bg-second w-8 h-8 flex items-center justify-center rounded-full   ">
              <AiOutlineSearch
                size={20}
                className="cursor-pointer hover:scale-125  duration-300 z-10 "
              />
            </div>
            <input
              type="search"
              className="border-none outline-none  absolute top-0 left-0 right-0 bottom-0 rounded-4xl px-3  text-black text-end"
              placeholder="ابحث عن المنتجات"
            />
          </div>
        </div>
      </div>
      {menu && (
        <div className="  lg:hidden z-1000">
          <div className="absolute top-0  left-0 bg-black/20 w-full h-screen overflow-y-scroll">
            <div
              className={` absolute right-0 bg-white  duration-300 ${
                menu ? "w-[70%]" : "w-0"
              } h-fit rounded-tl-2xl`}
            >
              <div className="p-10 flex justify-between items-center">
                <div className="w-[90%] flex items-center justify-center">
                  <img src={logoCol} alt="logo" width={100} />
                </div>
                <CgClose
                  size={30}
                  className="text-main cursor-pointer place-self-start flex-1 hover:scale-125 duration-300 "
                  onClick={() => setMenu(false)}
                />
              </div>

              <div className="p-5">
                <LinSide />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Mobile;
