import { socialLinks, footerLinks } from '../constants'

const Footer = () => {
  return (
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
            لأي استفسار يمكنك مراسلتنا أو متابعتنا علي وسائل التواصل الاجتماعي.
          </p>
          <div className="flex gap-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                title={link.name}
                aria-label={link.name}
                className="w-10 h-10 rounded-lg grid place-items-center border border-slate-200 bg-white hover:bg-slate-50 transition"
              >
                {link.icon}
              </a>
            ))}
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
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-slate-700 transition"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div>© 2025 Unseen</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
