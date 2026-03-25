import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineNotificationsActive } from "react-icons/md";
// import { AiOutlineUser } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlinePayment } from "react-icons/md";
import { MdBookmarkBorder } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PersonalContext } from "../../Context/InformationUser";
const ProLayout = () => {
  const { getPersonalInfo, dataForUser } = useContext(PersonalContext);

  useEffect(() => {
    getPersonalInfo();
  }, []);

  return (
    <>
      <section className="min-h-screen font-cairo relative">
        <div className="p-8 container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
            <div className="h-fit col-span-1 ">
              <div className="rounded-xl p-5 shadow-xl">
                <div className=" py-4">
                  <p className="text-gray-500">مرحباء برجوعك</p>
                  <h3 className="text-2xl">{dataForUser.name}</h3>
                </div>

                <hr className="text-gray-300 " />

                <div className="my-5 flex flex-col gap-y-5">
                  <div className="flex items-center gap-2  flex-row hover:bg-gray-200 rounded-2xl p-1 group">
                    <NavLink
                      to={"/orders"}
                      className={({ isActive }) =>
                        isActive ? "active-Profile" : "nonActive-Profile"
                      }
                    >
                      <MdBookmarkBorder size={30} className="" />
                    </NavLink>

                    <h5 className="font-cairo">الطلبات</h5>
                  </div>

                  <div className="flex items-center gap-2  flex-row hover:bg-gray-200 rounded-2xl p-1 group">
                    <NavLink
                      to={"/location"}
                      className={({ isActive }) =>
                        isActive ? "active-Profile" : "nonActive-Profile"
                      }
                    >
                      <SlLocationPin size={30} />
                    </NavLink>

                    <h5 className="font-cairo">العنواين</h5>
                  </div>

                  <div className="flex items-center gap-2  flex-row hover:bg-gray-200 rounded-2xl p-1 group">
                    <NavLink
                      to={"/payment"}
                      className={({ isActive }) =>
                        isActive ? "active-Profile" : "nonActive-Profile"
                      }
                    >
                      <MdOutlinePayment size={30} />
                    </NavLink>

                    <h5 className="font-cairo">طريقة الدفع</h5>
                  </div>

                  {/* <div className="flex items-center gap-2  flex-row hover:bg-gray-200 rounded-2xl p-1 group">
                    <NavLink
                      to={"/account"}
                      className={({ isActive }) =>
                        isActive ? "active-Profile" : "nonActive-Profile"
                      }
                    >
                      <AiOutlineUser size={30} />
                    </NavLink>

                    <h5 className="font-cairo">حسابي</h5>
                  </div> */}

                  <div className="flex items-center gap-2  flex-row hover:bg-gray-200 rounded-2xl p-1 group">
                    <NavLink
                      to={"/notification"}
                      className={({ isActive }) =>
                        isActive ? "active-Profile" : "nonActive-Profile"
                      }
                    >
                      <MdOutlineNotificationsActive size={30} />
                    </NavLink>

                    <h5 className="font-cairo">إشعارات</h5>
                  </div>

                  <div
                    className="flex items-center gap-2  flex-row hover:bg-gray-200 rounded-2xl p-1 group
                  "
                  >
                    <NavLink
                      to={"/setting"}
                      className={({ isActive }) =>
                        isActive
                          ? "active-Profile"
                          : "nonActive-Profile group-hover"
                      }
                    >
                      <MdOutlineSettings size={30} />
                    </NavLink>

                    <h5 className="font-cairo">إعدادات</h5>
                  </div>

                  <button className="text-main bg-[#F0F4FE] duration-150 cursor-pointer py-3 px-2 rounded-2xl font-semibold hover:bg-[#dee6f9]">
                    تسجيل الخرج
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-3 ">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProLayout;
