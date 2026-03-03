import { BiLeftArrowAlt } from "react-icons/bi";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Pages/Loading";
import { useState } from "react";
import { Link } from "react-router-dom";

/* =========================
   Sub Menu Component
========================= */
const SubMenu = ({ items }) => {
  const [activeSub, setActiveSub] = useState(null);

  const handleMouseEnter = (sub, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const spaceRight = window.innerWidth - rect.right;

    setActiveSub({
      ...sub,
      openLeft: spaceRight < 250,
    });
  };

  return (
    <div className="min-w-[220px] ">
      {items?.map((sub) => {
        const hasChildren = sub.sub_categories?.length > 0;

        return (
          <div
            key={sub.id}
            className="relative group"
            onMouseEnter={(e) => hasChildren && handleMouseEnter(sub, e)}
            onMouseLeave={() => setActiveSub(null)}
          >
            {hasChildren ? (
              <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 transition-all duration-200  cursor-pointer">
                <span className="text-sm font-medium">{sub.name}</span>
                <BiLeftArrowAlt className="text-gray-500 group-hover:translate-x-1 transition-all" />
              </div>
            ) : (
              <Link
                to={`/category/${sub.slug}`}
                className="block px-4 py-2 text-sm hover:bg-gray-100 transition-all duration-200"
              >
                {sub.name}
              </Link>
            )}

            {/* Nested Dropdown */}
            {hasChildren && activeSub?.id === sub.id && (
              <div
                className={`absolute top-0 bg-white shadow-2xl rounded-xl z-50 border border-gray-100 
                ${activeSub.openLeft ? "right-full " : "left-full "}
                `}
              >
                <SubMenu items={sub.sub_categories} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

/* =========================
   Main Links Component
========================= */
const Links = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  async function getProducts() {
    const { data } = await axios.get("https://api.sakank.net/api/home-page");
    return data;
  }

  const { data, isLoading } = useQuery({
    queryKey: ["home-page"],
    queryFn: getProducts,
    select: (data) => data.categories,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <Loading />;

  return (
    <ul className="flex items-center space-x-5 max-xl:hidden text-sm justify-around relative">
      {data?.map((item) => (
        <li
          key={item.id}
          className="relative px-6 cursor-pointer"
          onMouseEnter={() => setActiveCategory(item)}
          onMouseLeave={() => setActiveCategory(null)}
        >
          <span className="hover:scale-105 duration-300 inline-block font-semibold">
            {item.name}
          </span>

          {/* First Dropdown */}
          {activeCategory?.id === item.id && (
            <div className="absolute top-full right-0 mt-1 bg-white text-black shadow-2xl rounded-2xl z-50 border border-gray-100">
              <SubMenu items={item.sub_categories} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Links;
