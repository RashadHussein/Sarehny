import { useState } from "react";

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const ourEmail = 'example@gmail.com';
    const ourPhone = '01012345678';
  
    const ourPages = [
        {title: 'فيسبوك', path: '#'},
        {title: 'تويتر', path: '#'},
        {title: 'انستجرام', path: '#'},
    ];  

    
    return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto border rounded-2xl shadow-lg p-8">
            <div className="text-center gap-4 flex flex-col">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-cairo leading-tight text-blue-600">
                    تواصل معنا
                </h1>
                <p>
                    نحن هنا لنستقبل استفساراتكم وملاحظاتكم. تواصلوا معنا عبر النموذج التالي وسنرد في اقرب وقت ممكن
                </p>

                <form className="grid gap-8">
                    <div className="w-full flex flex-col gap-4 text-start">
                        <label htmlFor="name" className="font-semibold">الاسم:</label>
                        <input 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text" 
                        form="name" 
                        placeholder="اكتب اسمك الكامل" 
                        className="rounded-lg p-2 w-full bg-slate-200 outline-none"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-4 text-start">
                        <label htmlFor="email" className="font-semibold">البريد الإلكتروني:</label>
                        <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" 
                        form="email" 
                        placeholder="name@example.com" 
                        className="rounded-lg p-2 w-full bg-slate-200 outline-none"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-4 text-start">
                        <label htmlFor="message" className="font-semibold">الرسالة:</label>
                        <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        form="message" 
                        placeholder="اكتب رسالتك هنا..." 
                        className="rounded-lg p-2 w-full tracking-widest bg-slate-200 outline-none"
                        />
                    </div>
                    <div className="w-full flex justify-center">
                        <button
                        dir="ltr"
                        className="bg-gradient-to-br px-28 py-3 sm:px-32 text-sm sm:text-base h-full w-fit from-indigo-600 to-indigo-900 text-white rounded-3xl items-center flex gap-2 hover:opacity-90 transition-all duration-200">
                            إرسال                                           
                        </button>
                    </div>
                </form>

                {/* CONTACT INFO */}
                <div className="grid gap-2">
                    <p className="font-semibold sm:font-bold sm:text-lg">معلومات الاتصال:</p>
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