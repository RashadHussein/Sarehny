import { FaCopy, FaExclamationCircle, FaInstagram, FaLink, FaShareAlt, FaTelegramPlane } from "react-icons/fa"
import { IoIosAddCircle } from "react-icons/io";
import { MdContentCopy } from "react-icons/md"


const StartNow = () => {

    const shareLinkData = [
        {num: 1, title: 'افتح إنستغرام', paragraph: 'افتح تطبيق إنستغرام على هاتفك', icon: <FaInstagram />},
        {num: 2, title: 'أنشئ قصة جديدة', paragraph: 'انقر على "+" أو صورتك لإنشاء قصة جديدة', icon: <IoIosAddCircle />},
        {num: 3, title: 'أضف ملصق الرابط', paragraph: 'انقر على ملصق الرابط وألصق رابطك', icon: <FaLink />},
        {num: 4, title: 'شارك قصتك', paragraph: 'انشر قصتك مع الرابط ليراها أصدقائك', icon: <FaTelegramPlane />},
    ];

    const addLinkData = [
        {title: 'انقر على ملصق الرابط', paragraph: 'بعد إنشاء قصتك, انقر على أيقونة الملصقات في الأعلي, ثم اختر "رابط" من القائمة.', icon: <FaInstagram />},
        {title: 'الصق رابطك', paragraph: 'في الحقل المخصص الصق الرابط الذي نسخته مسبقاٌ. يمكنك أيضاٌ تخصيص نص الملصق إذا أردت', icon: <IoIosAddCircle />},
        {title: 'انشر قصتك', paragraph: 'اضبط موقع الملصق كما تريد, ثم انشر قصتك. يمكن لأصدقائك الآن النقر على الرابط لإرسال رسائل مجهولة!', icon: <FaLink />},
    ];

    return (
    <section className="font-cairo w-full flex flex-col gap-10">
        <div className="text-center bg-gradient-to-br from-indigo-600 to-purple-500 text-white p-8 md:p-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-cairo mb-4 md:mb-6 mt-4 leading-tight">
                Unseen
            </h1>
            <p>احصل على رسائل مجهولةمن أصدقائك - ممتعة, حقيفية, وخاصة دائماَ</p>
        </div>

        <div className="sm:px-4 md:px-8 lg:px-12 flex flex-col gap-10">
            {/* STEP ONE */}
            <div className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl rounded-xl gap-4 bg-white/80">
                <p className="text-indigo-800 font-semibold sm:text-lg md:text-xl lg:text-2xl flex items-center gap-2">
                    <FaCopy className="text-indigo-700 text-xl" /> 
                    الخطوة 1: انسخ رابطك الشخصي   
                </p>
                <p className="font-semibold text-sm">انسخ الرابط الخاص بك من أجل مشاركته على وسائل التواصل الاجتماعي.</p>
                
                <div className="flex items-stretch justify-center mx-auto w-full text-center">
                    <p
                        dir="ltr"
                        className="text-sm md:text-base px-4 py-3 text-gray-700 rounded-r-xl bg-slate-200 select-all flex-1 tracking-widest"
                    >
                        unseen.app/u/yourname
                    </p>
                    <button
                    dir="ltr"
                    className="bg-gradient-to-br text-sm sm:text-base h-full w-fit from-indigo-600 to-indigo-900 text-white px-4 py-3 rounded-l-xl items-center flex gap-2 hover:opacity-90 transition-all duration-200"
                    >
                        انسخ الرابط
                        <MdContentCopy />
                    </button>
                </div>
            </div>

            {/* STEP TWO */}
            <div className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl rounded-xl gap-4 bg-white/80">
                <p className="text-indigo-800 font-semibold sm:text-lg md:text-xl lg:text-2xl flex items-center gap-2">
                    <FaShareAlt className="text-indigo-700 text-xl" /> 
                    الخطوة 2: شارك الرابط على إنستغرام
                </p>
                <p className="font-semibold text-sm">اتبع الخطوات البسيطة لمشاركةالرابط في قصص إنستغرام:</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full mt-4">
                    {shareLinkData.map((card, index) => (
                        <div key={index} className="p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl rounded-xl border-t-2 border-indigo-700 flex flex-col gap-3 text-center items-center">
                            <p className="bg-gradient-to-br from-indigo-600 to-indigo-900 w-fit px-3 py-1 text-white rounded-full">{card.num}</p>
                            <p className="text-indigo-800 text-sm sm:text-base font-semibold sm:font-bold">{card.title}</p>
                            <p className="text-sm">{card.paragraph}</p>
                            <div className="text-indigo-700 text-3xl mt-4 bg-slate-200 rounded-xl w-full py-10 flex justify-center border border-dashed border-indigo-200 transition-transform duration-300">
                                {card.icon}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full flex justify-center">
                    <button
                    dir="ltr"
                    className="bg-gradient-to-br text-sm sm:text-base h-full w-fit from-indigo-600 to-indigo-900 text-white px-4 py-3 rounded-xl items-center flex gap-2 hover:opacity-90 transition-all duration-200">
                        !شارك الآن
                        <FaTelegramPlane className="mr-2" />
                    </button>
                </div>
            </div>

            {/* EXPLAINE HOW TO ADD LINK FOR USER */}
            <div className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl rounded-xl gap-4 bg-white/80">
                <p className="text-indigo-800 font-semibold sm:text-lg md:text-xl lg:text-2xl flex items-center gap-2">
                    <FaExclamationCircle className="text-indigo-700 text-xl" /> 
                    شرح مفصل لإضافة الرابط إلى قصتك
                </p>
                <div className="grid gap-10">
                    {addLinkData.map((card, index) => (                        
                        <div key={index} className="p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-xl grid grid-cols-12 items-center gap-4">
                            <div 
                            className={`col-span-12 sm:col-span-4 text-indigo-700 text-3xl mt-4 bg-slate-200 rounded-xl w-full py-16 flex justify-center border border-dashed border-indigo-200 transition-transform duration-300
                            ${index % 2 !== 0 ? "sm:order-2" : "sm:order-1"}`}
                            >
                                {card.icon}
                            </div>
                            <div
                                className={`col-span-12 sm:col-span-8 ${
                                index % 2 !== 0 ? "sm:order-1 text-right sm:text-left" : "sm:order-2"
                                }`}
                            >
                                <p className="text-indigo-800 text-sm sm:text-base font-semibold sm:font-bold">{card.title}</p>
                                <p className="text-sm">{card.paragraph}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default StartNow