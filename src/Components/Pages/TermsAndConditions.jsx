import { Helmet } from "react-helmet-async";

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>الشروط والأحكام | المجرة</title>
        <meta
          name="description"
          content="اطّلع على الشروط والأحكام الخاصة باستخدام موقع المجرة دوت كوم، وسياسات الطلب، الدفع، الشحن، والاسترجاع."
        />
      </Helmet>
      <section className="px-8 container mx-auto min-h-screen w-full font-cairo">
        <div className="w-full h-full flex items-center justify-center mt-10 mb-20">
          <div className="bg-white rounded-2xl shadow-2xl w-[1200px]  p-8">
            <h1 className="font-cairo text-2xl text-main">
              الشروط والأحكام – المجرة دوت كوم
            </h1>

            <hr className="text-gray-300 my-5" />

            <p className="">
              مرحبًا بك في مجره دوت كوم! باستخدامك هذا الموقع، فإنك توافق على
              الشروط والأحكام التالية. يُرجى قراءتها بعناية قبل استخدام الموقع
              أو إجراء أي عملية شراء
            </p>

            <div className="my-5">
              <h3 className="text-main text-xl">الاستخدام المقبول للموقع</h3>

              <ul className="list-disc list-inside space-y-2 my-5">
                <li>
                  يُمنع استخدام مجره دوت كوم لأي نشاط غير قانوني أو مسيء أو
                  يتعارض مع سياساتنا
                </li>
                <li>
                  لا يجوز التلاعب بمحتوى الموقع أو محاولة اختراقه أو تعطيله.
                </li>

                <li>
                  يلتزم المستخدم بكافة القوانين المحلية والدولية أثناء استخدام
                  المنصة.
                </li>
              </ul>
            </div>

            <div className="my-5">
              <h3 className="text-main text-xl">المعلومات الشخصية والحسابات</h3>

              <ul className="list-disc list-inside space-y-2 my-5">
                <li>
                  عند إنشاء حساب على مجره دوت كوم، يجب تقديم بيانات صحيحة
                  ومحدثة.
                </li>
                <li>
                  يحق لنا تعليق أو حذف أي حساب يحتوي على معلومات زائفة أو نشاط
                  مريب.
                </li>
              </ul>
            </div>

            <div className="my-5">
              <h3 className="text-main text-xl"> المنتجات والأسعار</h3>

              <ul className="list-disc list-inside space-y-2 my-5">
                <li>
                  جميع الأسعار على مجره دوت كوم شاملة ضريبة القيمة المضافة (إن
                  وجدت).
                </li>
                <li>
                  المنتجات المعروضة قابلة للتغيير في المواصفات أو السعر دون
                  إشعار مسبق
                </li>

                <li>
                  قد تختلف صور المنتجات عن الواقع بنسبة بسيطة لأسباب تقنية أو
                  عرضية.
                </li>
              </ul>
            </div>

            <div className="my-5">
              <h3 className="text-main text-xl"> الطلبات والدفع</h3>

              <ul className="list-disc list-inside space-y-2 my-5">
                <li>
                  يتم تأكيد الطلب عبر رسالة إلكترونية تُرسل بعد إتمام عملية
                  الشراء.
                </li>
                <li>
                  طرق الدفع المتاحة تشمل: بطاقات الائتمان، التحويل البنكي،
                  والدفع عند الاستلام (في بعض المناطق).
                </li>

                <li>نحتفظ بحق إلغاء أو تعديل أي طلب لأسباب أمنية أو تقنية.</li>
              </ul>
            </div>

            <div className="my-5">
              <h3 className="text-main text-xl"> الشحن والتوصيل</h3>

              <ul className="list-disc list-inside space-y-2 my-5">
                <li>يتم تجهيز الطلبات خلال 1-3 أيام عمل من تأكيد الطلب</li>
                <li>تختلف مدة التوصيل حسب المنطقة الجغرافية</li>

                <li>رسوم الشحن تُحسب وتُعرض قبل إتمام الطلب.</li>
              </ul>
            </div>

            <div className="my-5">
              <h3 className="text-main text-xl"> الاسترجاع والاستبدال</h3>

              <ul className="list-disc list-inside space-y-2 my-5">
                <li>
                  يحق للعميل طلب استرجاع أو استبدال خلال 7 أيام من استلام الطلب.
                </li>
                <li>يشترط أن يكون المنتج بحالته الأصلية وغير مستخدم.</li>

                <li>
                  لا يتم استرجاع المنتجات التي تم فتحها أو استخدامها، إلا في حال
                  وجود عيب مصنعي.
                </li>
              </ul>
            </div>

            <div className="my-5">
              <h3 className="text-main text-xl"> الضمان والمسؤولية</h3>

              <ul className="list-disc list-inside space-y-2 my-5">
                <li>
                  لا نتحمل مسؤولية أي استخدام غير صحيح للمنتجات بعد الاستلام.
                </li>

                <li>
                  في حال وجود عيب في التصنيع، يحق للعميل المطالبة باستبدال أو
                  استرجاع.
                </li>
              </ul>
            </div>

            <div className="my-5">
              <h3 className="text-main text-xl">حقوق الملكية الفكرية</h3>

              <ul className="list-disc list-inside space-y-2 my-5">
                <li>
                  لا نتحمل مسؤولية أي استخدام غير صحيح للمنتجات بعد الاستلام.
                </li>

                <li>
                  في حال وجود عيب في التصنيع، يحق للعميل المطالبة باستبدال أو
                  استرجاع.
                </li>
              </ul>
            </div>

            <div className="my-5">
              <h3 className="text-main text-xl"> التعديلات على الشروط</h3>

              <ul className="list-disc list-inside space-y-2 my-5">
                <li>يحتفظ مجره دوت كوم بالحق في تعديل هذه الشروط في أي وقت.</li>

                <li>
                  استمرار استخدامك للموقع بعد التعديل يعني موافقتك على الشروط
                  الجديدة.
                </li>
              </ul>
            </div>

            <div className="my-5">
              <h3 className="text-main text-xl"> التواصل معنا</h3>

              <p>
                لأي استفسار أو دعم فني، يمكنك التواصل معنا عبر البريد
                الإلكتروني:
              </p>
              <p>support@majara.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;
