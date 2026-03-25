import { BiPlus } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { AddressContext } from "../../Context/AddressContext";
import AddAddress from "../Profile/AddAddress";
import EditAddress from "../Profile/EditAddress";

const Address = ({ selectedAddress, setSelectedAddress }) => {
  const [address, setAddress] = useState(false);
  const [updateAddress, setUpdateAddress] = useState(false);

  const { personalAddress, getAddress } = useContext(AddressContext);

  useEffect(() => {
    getAddress();
  }, []);

  return (
    <section className="my-10 bg-white rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-6 border-b pb-4">
        <h4 className="font-extrabold text-2xl font-cairo text-[#000E39]">
          عنوان الشحن
        </h4>
      </div>

      <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-1">
        {/* لو فيه عناوين */}
        {personalAddress.length > 0 &&
          personalAddress.map(({ id, city, area, street, building_number }) => (
            <div key={id} className="flex w-full gap-2.5 max-md:flex-col">
              {/* 2. إضافة التنسيق الشرطي عند الاختيار */}
              <label
                className={`flex w-full flex-col space-y-5 px-4 py-3 border shadow rounded-xl cursor-pointer hover:bg-gray-50 duration-200 transition-all ${
                  selectedAddress === id
                    ? "border-main ring-2 ring-main/10 bg-main/5"
                    : "border-gray-200"
                }`}
              >
                <input
                  type="radio"
                  name="address"
                  // 3. ربط القيمة بـ ID العنوان
                  value={id}
                  checked={selectedAddress === id}
                  // 4. تحديث الحالة في ملف الـ Cart عند التغيير
                  onChange={() => setSelectedAddress(id)}
                  className="w-5 h-5 accent-main"
                />

                <div className="flex flex-col space-y-2.5">
                  <h4 className="font-bold text-xl text-[#000E39]">
                    {city?.name || "العنوان"}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {city?.name}، {area}، شارع {street}، مبنى {building_number}
                  </p>
                </div>
              </label>
            </div>
          ))}

        {/* لو مفيش عناوين */}
        {personalAddress.length === 0 && (
          <div className="col-span-3 flex flex-col items-center justify-center py-10 border border-dashed rounded-xl text-gray-400">
            <p className="font-cairo text-lg">لا يوجد عنوان حالياً</p>
            <p className="text-sm">يرجى إضافة عنوان جديد للمتابعة</p>
          </div>
        )}

        {/* زر اضافة عنوان */}
        <div
          onClick={() => setAddress(true)}
          className="flex flex-col items-center justify-center space-y-2 px-4 py-6 border border-dashed border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 hover:border-main text-gray-400 hover:text-main duration-200"
        >
          <BiPlus size={40} />
          <p className="font-cairo font-bold">اضافة عنوان جديد</p>
        </div>
      </div>

      {address && <AddAddress address={address} setAddress={setAddress} />}

      {updateAddress && (
        <EditAddress
          updateAddress={updateAddress}
          setUpdateAddress={setUpdateAddress}
        />
      )}
    </section>
  );
};

export default Address;
