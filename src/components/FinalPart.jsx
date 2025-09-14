import { useEffect, useRef, useState } from 'react'

export default function TestimonialsFaqFooter() {
  const [index, setIndex] = useState(0)
  const listRef = useRef(null)
  const items = [
    {
      avatar: 'A',
      name: 'أحمد',
      text: '"منصة بسيطة وممتعة — حبيت الخصوصية وسهولة المشاركة."',
    },
    {
      avatar: 'L',
      name: 'ليلى',
      text: '"الفلترة ممتازة، وصلتني رسائل جيدة بدون إساءة."',
    },
    {
      avatar: 'M',
      name: 'محمد',
      text: '"التصميم عملي وسهل الاستخدام على الموبايل."',
    },
  ]

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length)
    }, 3500)
    return () => clearInterval(id)
  }, [items.length])

  useEffect(() => {
    if (!listRef.current) return
    listRef.current.style.transform = `translateX(-${index * 100}%)`
  }, [index])

  return (
    <div
      dir="rtl"
      className="font-cairo bg-gray-50 text-slate-900 antialiased px-4 py-8"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Testimonials */}
        <section id="testimonials" className="max-w-[980px] mx-auto mb-6">
          <h2 className="text-center font-extrabold text-2xl mb-4">
            آراء المستخدمين
          </h2>

          <div className="relative overflow-hidden rounded-xl bg-transparent">
            <div
              ref={listRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ width: `${items.length * 100}%` }}
            >
              {items.map((t, i) => (
                <div
                  key={i}
                  className="min-w-full p-6 bg-white/90 rounded-xl flex gap-4 items-start"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-600 to-teal-400 text-white grid place-items-center font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <p className="text-sm text-slate-500 mt-1">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-3" aria-hidden>
            <button
              onClick={() =>
                setIndex((i) => (i - 1 + items.length) % items.length)
              }
              className="px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm shadow-sm"
            >
              السابق
            </button>
            <button
              onClick={() => setIndex((i) => (i + 1) % items.length)}
              className="px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm shadow-sm"
            >
              التالي
            </button>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="max-w-[900px] mx-auto mb-8 px-2">
          <h2 className="text-center font-extrabold text-2xl mb-4">
            الأسئلة الشائعة
          </h2>

          <div className="space-y-2">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <details>
                <summary className="font-semibold cursor-pointer">
                  هل الرسائل فعلاً مجهولة؟
                </summary>
                <div className="text-sm text-slate-500 mt-2">
                  نعم — نحن لا نشارك الهوية إلا بموافقتك، ويمكن للمستخدم حظر
                  الرسائل المسيئة.
                </div>
              </details>
            </div>

            <div className="bg-white rounded-lg p-3 shadow-sm">
              <details>
                <summary className="font-semibold cursor-pointer">
                  كيف أحذف حسابي نهائيًا؟
                </summary>
                <div className="text-sm text-slate-500 mt-2">
                  من إعدادات الملف اضغط "حذف الحساب"، ستُحذف البيانات بعد
                  تأكيدك.
                </div>
              </details>
            </div>

            <div className="bg-white rounded-lg p-3 shadow-sm">
              <details>
                <summary className="font-semibold cursor-pointer">
                  هل يمكنني استرجاع رسالة محذوفة؟
                </summary>
                <div className="text-sm text-slate-500 mt-2">
                  لا — عند الحذف يتم إزالتها نهائيًا لأسباب تتعلق بالخصوصية.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 rounded-2xl bg-gradient-to-b from-white to-gray-50 shadow-md p-6">
          <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-8">
            {/* Logo + About */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-500 grid place-items-center text-white font-extrabold text-lg shadow-md">
                  U
                </div>
                <div>
                  <h3 className="m-0 font-extrabold text-lg">Unseen</h3>
                  <p className="text-sm text-slate-500 max-w-[360px] leading-relaxed">
                    منصة لمشاركة الرسائل بشكل مجهول وآمن، تهدف لحماية الخصوصية
                    وتسهيل التفاعل.
                  </p>
                </div>
              </div>
              <span className="self-start inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-100 to-teal-50 text-indigo-600 font-semibold text-sm">
                جديد
              </span>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-start md:items-end gap-3">
              <h4 className="font-semibold">تواصل معنا</h4>
              <p className="text-sm text-slate-500 text-right leading-relaxed max-w-[280px]">
                لأي استفسار يمكنك مراسلتنا أو متابعتنا علي وسائل التواصل
                الاجتماعي.
              </p>
              <div className="flex gap-3">
                {/* Twitter */}
                <a
                  href="#"
                  title="تويتر"
                  aria-label="تويتر"
                  className="w-10 h-10 rounded-lg grid place-items-center border border-slate-200 bg-white hover:bg-slate-50"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                    <path
                      d="M20 7.5c-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.4-1.8-.6.3-1.3.6-2 .8-.6-.6-1.5-1-2.4-1-1.8 0-3.2 1.7-2.8 3.4-2.3-.1-4.4-1.2-5.8-2.9-.8 1.4-.4 3.4 1 4.4-.5 0-1-.1-1.4-.4v.1c0 1.7 1.2 3.2 2.9 3.5-.4.1-.8.1-1.2.1-.3 0-.6 0-.9-.1.6 1.8 2.4 3.1 4.4 3.2-1.6 1.3-3.5 2-5.5 2-.4 0-.9 0-1.3-.1C6.7 21.4 8.6 22 10.7 22c6.4 0 9.9-5.4 9.9-10.1v-.5c.7-.5 1.3-1.1 1.7-1.8-.7.3-1.5.5-2.3.6z"
                      fill="#1DA1F2"
                    />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="#"
                  title="إنستاجرام"
                  aria-label="إنستاجرام"
                  className="w-10 h-10 rounded-lg grid place-items-center border border-slate-200 bg-white hover:bg-slate-50"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                    <path
                      d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z"
                      stroke="#C13584"
                      strokeWidth="1.2"
                      fill="none"
                    />
                    <path
                      d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6z"
                      stroke="#C13584"
                      strokeWidth="1.2"
                      fill="none"
                    />
                    <circle cx="17.7" cy="6.3" r="0.6" fill="#C13584" />
                  </svg>
                </a>
                {/* Email */}
                <a
                  href="#"
                  title="ايميل"
                  aria-label="ايميل"
                  className="w-10 h-10 rounded-lg grid place-items-center border border-slate-200 bg-white hover:bg-slate-50"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                    <path
                      d="M3 6.5h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                      stroke="#64748B"
                      strokeWidth="1.2"
                      fill="none"
                    />
                    <path
                      d="M21 6.5l-9 7-9-7"
                      stroke="#64748B"
                      strokeWidth="1.2"
                      fill="none"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-4 border-t border-slate-200 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 2v20M2 12h20"
                  stroke="#CBD5E1"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
              <span>تواصل آمن · خصوصيتك محفوظة</span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <nav className="flex gap-3" aria-label="روابط فرعية">
                <a href="#" className="hover:text-slate-700">
                  سياسة الخصوصية
                </a>
                <a href="#" className="hover:text-slate-700">
                  الشروط
                </a>
                <a href="#" className="hover:text-slate-700">
                  اتصل بنا
                </a>
              </nav>
              <div>© 2025 Unseen</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
