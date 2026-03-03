import { BiPlus } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import { AddressContext } from "../../Context/AddressContext";
import EditAddress from "./EditAddress";
import AddAddress from "./AddAddress";

const Location = () => {
  const [address, setAddress] = useState(false);
  const [updateAddress, setUpdateAddress] = useState(false);
  const [address_id, setAddress_id] = useState();
  const { personalAddress, getAddress, deleteAddress } =
    useContext(AddressContext);

  useEffect(() => {
    getAddress();
  }, [personalAddress]);

  return (
    <section className="my-10">
      <div className="grid grid-cols-3 gap-2 max-lg:grid-cols-1">
        {personalAddress.length > 0 ? (
          <>
            {personalAddress.map(({ id, city, building_number }) => (
              <div
                key={id}
                className="flex w-full  flex-col  space-y-5 px-4 py-3 border shadow border-gray-200  rounded-xl cursor-pointer hover:bg-gray-50 duration-200"
              >
                <div className="flex  flex-col space-y-2.5">
                  <h4 className="font-bold">{city.name}</h4>

                  <p className="text-md ">{building_number}</p>
                </div>

                <div
                  className="flex  w-full gap-5
          "
                >
                  <button
                    onClick={() => {
                      deleteAddress(id);
                    }}
                    className="flex bg-[#000E39] text-white w-full rounded-2xl items-center justify-center py-2 px-3 space-x-3"
                  >
                    <h4 className="font-cairo">حذف العنوان</h4>

                    <MdOutlineDelete size={20} />
                  </button>

                  <button
                    onClick={() => {
                      setUpdateAddress(!updateAddress);
                      setAddress_id(id);
                    }}
                    className="flex bg-main text-white w-full rounded-2xl items-center justify-center py-2 px-3 space-x-3"
                  >
                    <h4 className="font-cairo">تعديل العنوان</h4>

                    <FiEdit size={20} />
                  </button>
                </div>
              </div>
            ))}
          </>
        ) : (
          ""
        )}

        <div
          onClick={() => setAddress(!address)}
          className=" flex flex-col items-center justify-center  space-y-2 px-4 py-3 border shadow border-gray-200  rounded-xl cursor-pointer hover:bg-gray-50 duration-200"
        >
          <BiPlus size={40} className="text-gray-400" />

          <p className="font-cairo">اضافة عنوان جديد</p>
        </div>
      </div>

      {address && <AddAddress address={address} setAddress={setAddress} />}
      {updateAddress && (
        <EditAddress
          updateAddress={updateAddress}
          setUpdateAddress={setUpdateAddress}
          address_id={address_id}
        />
      )}
    </section>
  );
};

export default Location;
