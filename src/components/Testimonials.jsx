import { useEffect, useRef, useState } from 'react'
import { testimonials } from '../constants'

const Testimonials = () => {
  const [index, setIndex] = useState(0)
  const listRef = useRef(null)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, 3500)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (!listRef.current) return
    listRef.current.style.transform = `translateX(-${index * 100}%)`
  }, [index])

  const goToPrevious = () => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIndex((i) => (i + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" className="max-w-[980px] mx-auto mb-6">
      <h2 className="text-center font-extrabold text-2xl mb-4">
        آراء المستخدمين
      </h2>

      <div className="relative overflow-hidden rounded-xl bg-transparent">
        <div
          ref={listRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ width: `${testimonials.length * 100}%` }}
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="min-w-full p-6 bg-white/90 rounded-xl flex gap-4 items-start"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-600 to-teal-400 text-white grid place-items-center font-bold">
                {testimonial.avatar}
              </div>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <p className="text-sm text-slate-500 mt-1">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-3" aria-hidden>
        <button
          onClick={goToPrevious}
          className="px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm shadow-sm hover:bg-slate-50 transition"
          aria-label="السابق"
        >
          السابق
        </button>
        <button
          onClick={goToNext}
          className="px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm shadow-sm hover:bg-slate-50 transition"
          aria-label="التالي"
        >
          التالي
        </button>
      </div>
    </section>
  )
}

export default Testimonials
