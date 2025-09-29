import { Button } from './ui/button'
import { IoSend } from 'react-icons/io5'
import { RiContactsFill } from 'react-icons/ri'
import { MdContentCopy } from 'react-icons/md'

import { heroContent } from '@/constants'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { IsCopiedContext } from '@/contexts/handleUniqueCode'

const Hero = () => {
  const { copiedText, handleCopy, userUniqueCode } = useContext(IsCopiedContext)
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header Content */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block text-purple-500 bg-purple-100 font-semibold px-3 py-1 rounded-xl text-sm md:text-base">
            جديد
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-cairo mb-4 md:mb-6 mt-4 leading-tight">
            قلها. وانت غير مرئي
          </h1>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            احصل علي رسائل مجهولة من أصدقائك -- ممتعة, حقيفية و خاصة دائما
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-16">
          <Link to='/start-now'>          
            <Button className="w-full sm:w-auto text-white py-3 md:py-6 px-6 md:px-8 bg-gradient-to-br from-indigo-600 to-purple-500 text-sm md:text-base">
              <IoSend className="mr-2" /> ابدأ الان
            </Button>
          </Link>
          <Link to='/contact-us'>
            <Button className="w-full  sm:w-auto bg-transparent text-black py-3 md:py-6 px-6 md:px-8 hover:text-white text-sm md:text-base">
              <RiContactsFill className="mr-2" /> تواصل معنا
            </Button>
          </Link>
        </div>

        {/* URL Copy Section */}
        <div className="flex justify-center mb-8 md:mb-16">
          <div className="bg-slate-200 p-3 md:p-4 flex gap-3 md:gap-4 rounded-2xl items-center w-full max-w-sm md:max-w-md">
            <p
              dir="ltr"
              className="text-sm md:text-base text-gray-700 truncate flex-1"
            >
              {userUniqueCode}
            </p>
            <MdContentCopy onClick={handleCopy} className="cursor-pointer text-gray-600 hover:text-gray-800 transition-colors flex-shrink-0" />
            {copiedText}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {heroContent.map(({ name, number, icon }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 md:gap-3 text-center"
            >
              <p className="font-semibold text-sm md:text-base lg:text-lg text-slate-500">
                {name}
              </p>
              <p
                className={`${icon && 'flex items-center gap-1'} font-bold text-xl md:text-2xl lg:text-3xl text-gray-800`}
              >
                {number}{' '}
                {icon && <span className="text-yellow-500">{icon}</span>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
