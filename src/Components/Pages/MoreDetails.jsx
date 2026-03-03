import React, { memo } from "react";

const MoreDetails = memo(({ description }) => {
  console.log("MoreDetails");

  return (
    <section className="mb-20">
      <div className="shadow-2xl rounded-2xl w-full p-10">
        <div>
          <h1 className="py-4 text-main font-bold text-2xl">
            نظرة عامة على المنتج
          </h1>

          <hr className="text-gray-300" />

          <div className="flex py-4 gap-10 flex-col lg:flex-row">
            {/* right  */}
            <div className="flex-1 flex flex-col space-y-10">
              <div>
                <h3 className="text-2xl py-2">الميزات الأساسية</h3>
                <p
                  className="font-medium text-gray-700"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>

              <div>
                <h3 className="text-2xl py-2">نظرة عامة</h3>
                <p className="font-medium text-gray-700">
                  Apple Intelligence protects your privacy at every step. With
                  on-device processing and Private Cloud Compute, no one but you
                  can access your data — not even Apple. The new Passwords app
                  makes it even easier to access account passwords, passkeys,
                  Wi-Fi passwords, two-factor authentication codes and more. It
                  stores them securely and syncs across your devices with
                  end-to-end encryption. You can also control which contacts to
                  share with an app, rather than giving it access to all your
                  contacts. You can choose to share more contacts over time.
                </p>
              </div>
            </div>

            {/* left  */}
            <div className="flex-1 flex flex-col space-y-10">
              <div>
                <h3 className="text-2xl py-2">المواصفات</h3>

                <div className="w-full flex flex-col">
                  <div className="w-full bg-[#F0F4FE] p-2 flex items-center rounded-2xl">
                    <h5 className="text-main flex-1">
                      نوع الذاكرة القابلة للزيادة
                    </h5>
                    <p className="flex-1">بدون ذاكرة قابلة للزيادة</p>
                  </div>

                  <div className="w-full p-2 flex items-center rounded-2xl">
                    <h5 className="text-main flex-1">دقة الكاميرا الثانوية</h5>
                    <p className="flex-1">12 MP</p>
                  </div>

                  <div className="w-full bg-[#F0F4FE] p-2 flex items-center rounded-2xl">
                    <h5 className="text-main flex-1">نوع الشحن</h5>
                    <p className="flex-1">نوع C</p>
                  </div>

                  <div className="w-full p-2 flex items-center rounded-2xl">
                    <h5 className="text-main flex-1">عدد شريحة Sim</h5>
                    <p className="flex-1">مزدوج الشريحة</p>
                  </div>

                  <div className="w-full bg-[#F0F4FE] p-2 flex items-center rounded-2xl">
                    <h5 className="text-main flex-1">دقة الكاميرا الثانوية</h5>
                    <p className="flex-1">12 - 15.9 ميجابكسل</p>
                  </div>

                  <div className="w-full p-2 flex items-center rounded-2xl">
                    <h5 className="text-main flex-1">
                      حجم ذاكرة الوصول العشوائي
                    </h5>
                    <p className="flex-1">8 GB</p>
                  </div>

                  <div className="w-full bg-[#F0F4FE] p-2 flex items-center rounded-2xl">
                    <h5 className="text-main flex-1">حجم البطارية</h5>
                    <p className="flex-1">4676 mAh</p>
                  </div>

                  <div className="w-full p-2 flex items-center rounded-2xl">
                    <h5 className="text-main flex-1">الذاكرة الداخلية</h5>
                    <p className="flex-1">256 GB</p>
                  </div>

                  <div className="w-full bg-[#F0F4FE] p-2 flex items-center rounded-2xl">
                    <h5 className="text-main flex-1">وزن المنتج</h5>
                    <p className="flex-1">227 g</p>
                  </div>

                  <div className="w-full p-2 flex items-center rounded-2xl">
                    <h5 className="text-main flex-1">حجم الشاشة</h5>
                    <p className="flex-1">6.9 in</p>
                  </div>

                  <div className="w-full bg-[#F0F4FE] p-2 flex items-center rounded-2xl">
                    <h5 className="text-main flex-1">الإصدار</h5>
                    <p className="flex-1">نسخة الشرق الأوسط</p>
                  </div>

                  <div className="w-full p-2 flex items-center rounded-2xl">
                    <h5 className="text-main flex-1">نوع الشريحة</h5>
                    <p className="flex-1">شريحة نانو + شريحة إلكترونية</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default MoreDetails;
