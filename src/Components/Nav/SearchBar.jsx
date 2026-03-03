import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";

const SearchBar = () => {
  console.log("Search Bar Rendered"); // ستلاحظ أن هذا فقط ما سيطبع عند الكتابة

  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isApiError, setIsApiError] = useState(false);

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

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) getSearchData(searchQuery);
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  return (
    <div className="flex-grow max-w-[700px] relative">
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
        <div className="absolute left-2 top-1/2 -translate-y-1/2 bg-second w-10 h-10 flex items-center justify-center rounded-full shadow-md cursor-pointer">
          <AiOutlineSearch size={22} className="text-white" />
        </div>
      </div>

      {/* --- قائمة نتائج البحث --- */}
      {isFocused && searchQuery.length > 0 && (
        <div className="absolute top-[110%] left-0 w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-[999]">
          {/* ... كود عرض النتائج (displayResults.map) كما هو عندك ... */}
          <div className="max-h-[350px] overflow-y-auto">
            {isLoading ? (
              <div className="p-4 text-black">جاري البحث...</div>
            ) : (
              searchResults.map((item) => (
                <div
                  key={item.slug}
                  className="p-3 text-black border-b hover:bg-gray-50"
                >
                  {item.name}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
