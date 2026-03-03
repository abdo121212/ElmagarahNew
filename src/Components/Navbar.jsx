import { SlLogout } from "react-icons/sl";
import { SlLocationPin } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineSearch, AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { BsBagDash } from "react-icons/bs";
import logo from "../assets/logo.png";
import Links from "./Nav/Links";
import Mobile from "./Nav/Mobile";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { useContext, useEffect, useState } from "react";
import { WishListContext } from "../Context/WishListContext";
import { useAuth } from "../Context/AuthContext";
import { PersonalContext } from "../Context/InformationUser";
import axios from "axios";

const Navbar = () => {
  const { token, clearToken } = useAuth();
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [searchResults, setSearchResults] = useState([]); // لحفظ النتائج من الباك اند
  const [isLoading, setIsLoading] = useState(false);
  const [isApiError, setIsApiError] = useState(false); // حالة لمعرفة هل حدث خطأ شبكة

  const getSearchData = async (query) => {
    if (!query) {
      setSearchResults([]);
      setIsApiError(false);
      return;
    }

    setIsLoading(true);
    setIsApiError(false);
    try {
      const { data } = await axios.post(
        `https://api.sakank.net/api/products-search`,
        {
          searchTerm: query,
        },
      );

      setSearchResults(data.data);
    } catch (error) {
      setIsApiError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const { dataCart, getProductFromCart } = useContext(CartContext);
  const { dataFromWishList, getProductFromWishlist } =
    useContext(WishListContext);
  const { getPersonalInfo, dataForUser } = useContext(PersonalContext);

  useEffect(() => {
    if (token) {
      getPersonalInfo();
      getProductFromWishlist();
      getProductFromCart();
    }
  }, []);

  useEffect(() => {
    // لا تبحث إذا كان النص أقل من حرفين لتوفير موارد السيرفر والـ Render
    if (searchQuery.length < 2) {
      setSearchResults([]);
      return;
    }
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        getSearchData(searchQuery);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  return (
    <nav className="text-white font-cairo" dir="rtl">
      <div className="bg-main max-md:hidden min-h-[142px] w-full flex flex-col justify-between py-4 shadow-lg">
        {/* Upper Part: Search & User Actions */}
        <div className="container mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="shrink-0 hover:opacity-90 duration-300">
            <img
              src={logo}
              alt="sakank logo"
              className="w-[110px] object-contain"
            />
          </Link>

          {/* Location */}
          <div className="hidden xl:flex items-center gap-2 cursor-pointer hover:text-second duration-300">
            <SlLocationPin size={22} className="text-second" />
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-300 leading-tight">
                التوصيل إلى
              </span>
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold whitespace-nowrap">
                  الرياض ؟
                </span>
                <IoIosArrowDown size={14} />
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="grow max-w-[700px] relative">
            <div className="relative group">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                className="w-full h-[52px] rounded-full px-6 pr-6 pl-14 text-black outline-none border-2 border-transparent bg-white focus:border-second/50 transition-all duration-300 shadow-inner"
                placeholder="ابحث عن منتج، براند، أو فئة..."
              />
              <div className="absolute left-2 top-1/2 -translate-y-1/2 bg-second w-10 h-10 flex items-center justify-center rounded-full shadow-md cursor-pointer hover:scale-105 active:scale-95 duration-200">
                <AiOutlineSearch size={22} className="text-white" />
              </div>
            </div>

            {/* --- قائمة نتائج البحث --- */}
            {isFocused && searchQuery.length > 0 && (
              <div className="absolute top-[110%] left-0 w-full bg-white rounded-2xl shadow-[0px_20px_50px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden z-[999] transition-all duration-300">
                {/* Header القائمة */}
                <div className="p-3 bg-gray-50/50 flex justify-between items-center border-b border-gray-100">
                  <span className="text-xs font-bold text-gray-400">
                    نتائج البحث عن:{" "}
                    <span className="text-second">"{searchQuery}"</span>
                  </span>
                  {isApiError && (
                    <span className="text-[10px] text-red-500 font-bold">
                      (وضع تجريبي)
                    </span>
                  )}
                  <span className="text-[10px] bg-second/10 text-second px-2 py-0.5 rounded-full">
                    {searchResults.length} منتج
                  </span>
                </div>

                <div className="max-h-[350px] overflow-y-auto custom-scrollbar">
                  {isLoading ? (
                    <div className="text-center p-6 text-gray-500 text-sm">
                      جاري البحث...
                    </div>
                  ) : searchResults.length > 0 ? (
                    searchResults.map((item) => (
                      <Link
                        to={`/productDetails/${item.slug}`}
                        key={item.slug} // استخدمنا slug بدلاً من id
                        className="group/item flex items-center justify-between p-3 hover:bg-blue-50/40 cursor-pointer transition-all duration-200 border-b border-gray-50 last:border-0"
                      >
                        <div className="flex items-center gap-4">
                          {/* صورة المنتج - البيانات الحقيقية لا تحتوي على صورة رابط مباشر */}
                          <div className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-2xl shadow-sm group-hover/item:scale-110 duration-300 transition-transform">
                            {item.image || "📦"}
                          </div>

                          <div className="flex flex-col">
                            <h4 className="font-bold text-gray-800 text-sm group-hover/item:text-second duration-200">
                              {item.name}
                            </h4>
                            <span className="text-[11px] text-gray-400 bg-gray-100 w-fit px-2 rounded-md mt-1">
                              {item.category || "منتج"}
                            </span>
                          </div>
                        </div>

                        <div className="text-left flex flex-col items-end">
                          <span className="text-second font-extrabold text-sm tracking-tighter">
                            {item.base_price} ر.س
                          </span>
                          <div className="flex items-center gap-1 mt-1">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-[10px] text-gray-400 font-medium">
                              متوفر
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="text-center p-6 text-gray-500 text-sm">
                      لا توجد نتائج مطابقة.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-6">
            {token ? (
              <div className="flex items-center gap-2 hover:text-second duration-300 group">
                <div className="flex flex-col text-right hidden lg:flex">
                  <span className="text-[10px] text-gray-300">مرحباً بك</span>
                  <span className="text-sm font-bold">{dataForUser.name}</span>
                </div>
              </div>
            ) : (
              <Link
                to="/Singin"
                className="flex items-center gap-2 hover:text-second duration-300 group"
              >
                <div className="flex flex-col text-right hidden lg:flex">
                  <span className="text-[10px] text-gray-300">مرحباً بك</span>
                  <span className="text-sm font-bold">تسجيل الدخول</span>
                </div>
                <div className="bg-white/10 p-2.5 rounded-xl group-hover:bg-white/20 duration-300">
                  <AiOutlineUser size={24} />
                </div>
              </Link>
            )}

            <div className="h-10 w-px bg-white/20 hidden lg:block"></div>

            {/* Wishlist & Cart */}
            <div className="flex items-center gap-4">
              <Link
                to="/wishlist"
                className="relative p-2.5 bg-gray-100 hover:bg-red-50 text-[#000E39] hover:text-red-500 rounded-xl duration-300 transition-all shadow-sm group"
              >
                <AiOutlineHeart
                  size={26}
                  className="group-hover:scale-110 duration-300"
                />
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white animate-pulse">
                  {dataFromWishList?.length || 0}
                </span>
              </Link>

              <Link
                to="/cart"
                className="relative p-2.5 bg-second/90 hover:bg-second rounded-xl duration-300 transition-all shadow-lg hover:shadow-second/20"
              >
                <BsBagDash size={26} />
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-main animate-bounce">
                  {dataCart?.cart?.cart_items?.length || 0}
                </span>
              </Link>

              {token && (
                <Link
                  onClick={() => {
                    clearToken();
                  }}
                  to="/Singin"
                  className="bg-white/10 p-2.5 rounded-xl hover:bg-red-400 duration-300"
                >
                  <SlLogout size={24} />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Lower Part: Navigation Links */}
        <div className="mt-4 border-t border-white/5 pt-2">
          <Links />
        </div>
      </div>
      <Mobile />
    </nav>
  );
};

export default Navbar;
