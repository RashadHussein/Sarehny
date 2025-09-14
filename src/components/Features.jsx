import { FaBolt, FaShareAlt, FaUserPlus } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { IoIosSettings, IoMdMail } from "react-icons/io";
import { IoLinkSharp, IoShield } from "react-icons/io5";

const Features = () => {

    const features = [
        {
            "title": "حماية وخصوصية",
            "description": "سياسة خصوصية واضحة وخيارات حظر وإخفاء المتابعين.",
            "icon": <IoShield />
        },
        {
            "title": "استقبل رسائل مجهولة",
            "description": "واجهة قراءة آمنة ومريحة، مع فلترة للرسائل المسيئة.",
            "icon": <IoMdMail />
        },
        {
            "title": "شارك الرابط",
            "description": "انسخ رابط ملفك أو شاركه مباشرة عبر التطبيقات.",
            "icon": <IoLinkSharp />
        },
        {
            "title": "أنشئ ملفك",
            "description": "حساب سريع وبسيط مع إعدادات خصوصية متقدمة.",
            "icon": <FaUserPlus />
        },
        {
            "title": "تحكم كامل",
            "description": "إعدادات مرنة: من يكتب لك، من يرى ملفك، ومتى يكون رابطك نشطًا.",
            "icon": <IoIosSettings />
        },
        {
            "title": "نشر آمن",
            "description": "خيارات مشاركة مضمنة ونصائح لكتابة روابط ذكية.",
            "icon": <FaShareAlt />
        },
        {
            "title": "تصفيه ذكية",
            "description": "خوارزمية تصنع الكلمات المسيئة وتوفر تجربة آمنة.",
            "icon": <FiFilter />
        },
        {
            "title": "تحليلات سريعة",
            "description": "مقاييس بسيطة لقياس تفاعل الأصدقاء والرسائل الأكثر شيوعًا.",
            "icon": <FaBolt />
        }
    ];

  return (
    <div
      dir="rtl"
      className="font-cairo bg-gray-50 text-slate-900 antialiased px-4 py-8 my-4"
    >
        <div className="max-w-[1100px] mx-auto">
            <section id="features" className="max-w-[980px] mx-auto mb-6">
                <h2 className="text-center font-semibold text-2xl mb-4">
                    مزايا Unseen
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                    {features.map((f, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-100 grid gap-2 rounded-lg shadow-sm p-6 hover:shadow-md transition"
                    >
                        <p className="text-blue-500 text-xl place-self-end">{f.icon}</p>
                        <h3 className="font-semibold mb-2 text-right">{f.title}</h3>
                        <p className="text-sm text-gray-600 text-right">{f.description}</p>
                    </div>
                    ))}
                </div>
            </section>
        </div>
    </div>
  )
}

export default Features