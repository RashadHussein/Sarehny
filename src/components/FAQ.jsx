import { faqItems } from '../constants'

const FAQ = () => {
  return (
    <section id="faq" className="max-w-[900px] mx-auto mb-8 px-2">
      <h2 className="text-center font-extrabold text-2xl mb-4">
        الأسئلة الشائعة
      </h2>

      <div className="space-y-2">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg p-3 shadow-sm">
            <details>
              <summary className="font-semibold cursor-pointer hover:text-indigo-600 transition">
                {item.question}
              </summary>
              <div className="text-sm text-slate-500 mt-2 leading-relaxed">
                {item.answer}
              </div>
            </details>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
