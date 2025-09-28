const ContactUs = () => {
  const ourEmail = 'example@gmail.com'
  const ourPhone = '01012345678'

  //!important https://ui.shadcn.com/docs/components/form
  /*
   * ===========================================
   * SHADCN UI IMPLEMENTATION GUIDE FOR DEVELOPERS
   * ===========================================
   *
   * This contact form can be enhanced using shadcn/ui components for better UX and validation.
   * Follow these steps to implement a professional contact form:
   *
   * 1. INSTALL REQUIRED DEPENDENCIES:
   *    -  npx shadcn@latest add form
   * 2. ADD SHADCN COMPONENTS:
   *    - Form component for form structure and validation
   *    - Input component to replace basic input elements
   *    - Textarea component for the message field
   *    - Button component with loading states
   *    - Label component for proper form labels
   *    - Card component for better container styling
   *    - Alert component for success/error messages
   *
   * 3. SETUP VALIDATION:
   *    - Create a zod schema with validation rules for name, email, and message
   *    - Use Arabic error messages to match the current UI language
   *    - Configure react-hook-form with zod resolver
   *
   * 4. IMPLEMENT FORM STRUCTURE:
   *    - Replace current form elements with shadcn Form components
   *    - Use FormField, FormItem, FormLabel, FormControl, and FormMessage
   *    - Wrap the form in a Card component for better visual hierarchy
   *
   * 5. ADD FORM FUNCTIONALITY:
   *    - Implement form submission handler
   *    - Add loading states during submission
   *    - Show success/error messages using Alert component
   *    - Reset form after successful submission
   *
   * 6. ENHANCE USER EXPERIENCE:
   *    - Add proper error handling for API calls
   *    - Implement toast notifications for better feedback
   *    - Add form validation on blur and submit
   *    - Ensure proper focus management
   *
   * 7. ACCESSIBILITY IMPROVEMENTS:
   *    - All shadcn components include proper ARIA attributes
   *    - Form validation messages are announced to screen readers
   *    - Proper keyboard navigation support
   *
   * 8. USE FORMSUBMITION NO NEED FOR BACKEND
   *    -From submit: https://formsubmit.co/
   *
   * DOCUMENTATION LINKS:
   * - Forms: https://ui.shadcn.com/docs/components/form
   * - Input: https://ui.shadcn.com/docs/components/input
   * - Button: https://ui.shadcn.com/docs/components/button
   * - Card: https://ui.shadcn.com/docs/components/card
   * - Alert: https://ui.shadcn.com/docs/components/alert
   * - React Hook Form: https://react-hook-form.com/
   * - Zod Validation: https://zod.dev/
   */

  const ourPages = [
    { title: 'فيسبوك', path: '#' },
    { title: 'تويتر', path: '#' },
    { title: 'انستجرام', path: '#' },
  ]

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto border rounded-2xl shadow-lg p-8">
        <div className="text-center gap-4 flex flex-col">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-cairo leading-tight text-blue-600">
            تواصل معنا
          </h1>
          <p>
            نحن هنا لنستقبل استفساراتكم وملاحظاتكم. تواصلوا معنا عبر النموذج
            التالي وسنرد في اقرب وقت ممكن
          </p>

          <form className="grid gap-8">
            <div className="w-full flex flex-col gap-4 text-start">
              <label htmlFor="name" className="font-semibold">
                الاسم:
              </label>
              <input
                type="text"
                form="name"
                placeholder="اكتب اسمك الكامل"
                className="rounded-lg p-2 w-full bg-slate-200 outline-none"
              />
            </div>
            <div className="w-full flex flex-col gap-4 text-start">
              <label htmlFor="email" className="font-semibold">
                البريد الإلكتروني:
              </label>
              <input
                type="email"
                form="email"
                placeholder="name@example.com"
                className="rounded-lg p-2 w-full bg-slate-200 outline-none"
              />
            </div>
            <div className="w-full flex flex-col gap-4 text-start">
              <label htmlFor="message" className="font-semibold">
                الرسالة:
              </label>
              <textarea
                form="message"
                placeholder="اكتب رسالتك هنا..."
                className="rounded-lg p-2 w-full tracking-widest bg-slate-200 outline-none"
              />
            </div>
            <div className="w-full flex justify-center">
              <button
                dir="ltr"
                className="bg-gradient-to-br px-28 py-3 sm:px-32 text-sm sm:text-base h-full w-fit from-indigo-600 to-indigo-900 text-white rounded-3xl items-center flex gap-2 hover:opacity-90 transition-all duration-200"
              >
                إرسال
              </button>
            </div>
          </form>

          {/* CONTACT INFO */}
          <div className="grid gap-2">
            <p className="font-semibold sm:font-bold sm:text-lg">
              معلومات الاتصال:
            </p>
            <p className="opacity-80">البريدالإلكتروني: {ourEmail}</p>
            <p className="opacity-80">الهاتف: {ourPhone}</p>
            <p className="font-semibold text-sm sm:text-base">تابعنا علي:</p>
            <div className="flex mx-auto gap-4">
              {ourPages.map((page, index) => (
                <ul key={index}>
                  <li className="text-indigo-800 font-semibold ">
                    <a href={page.path}>{page.title}</a>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
