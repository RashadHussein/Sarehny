import { FaBolt, FaShareAlt, FaUserPlus } from 'react-icons/fa'
import { FiFilter } from 'react-icons/fi'
import { IoIosSettings, IoMdMail } from 'react-icons/io'
import { IoLinkSharp, IoShield } from 'react-icons/io5'
import { IoLanguage } from 'react-icons/io5'
import { IoMdMoon } from 'react-icons/io'
import { IoLink } from 'react-icons/io5'
import { IoPersonSharp } from 'react-icons/io5'

export const navigation = [
  {
    section: '#features',
    name: 'المزايا',
  },
  {
    section: '#testemonials',
    name: 'اراء',
  },
  {
    section: '#faq',
    name: 'الأسئلة',
  },
  {
    section: '#contact',
    name: 'تواصل',
  },
]

export const navIcons = [
  {
    name: 'lang',
    icon: <IoLanguage />,
  },
  {
    name: 'theme',
    icon: <IoMdMoon />,
  },
  {
    name: 'link',
    icon: <IoLink />,
  },
  {
    name: 'profile',
    icon: <IoPersonSharp />,
  },
]

export const features = [
  {
    title: 'حماية وخصوصية',
    description: 'سياسة خصوصية واضحة وخيارات حظر وإخفاء المتابعين.',
    icon: <IoShield />,
  },
  {
    title: 'استقبل رسائل مجهولة',
    description: 'واجهة قراءة آمنة ومريحة، مع فلترة للرسائل المسيئة.',
    icon: <IoMdMail />,
  },
  {
    title: 'شارك الرابط',
    description: 'انسخ رابط ملفك أو شاركه مباشرة عبر التطبيقات.',
    icon: <IoLinkSharp />,
  },
  {
    title: 'أنشئ ملفك',
    description: 'حساب سريع وبسيط مع إعدادات خصوصية متقدمة.',
    icon: <FaUserPlus />,
  },
  {
    title: 'تحكم كامل',
    description:
      'إعدادات مرنة: من يكتب لك، من يرى ملفك، ومتى يكون رابطك نشطًا.',
    icon: <IoIosSettings />,
  },
  {
    title: 'نشر آمن',
    description: 'خيارات مشاركة مضمنة ونصائح لكتابة روابط ذكية.',
    icon: <FaShareAlt />,
  },
  {
    title: 'تصفيه ذكية',
    description: 'خوارزمية تصنع الكلمات المسيئة وتوفر تجربة آمنة.',
    icon: <FiFilter />,
  },
  {
    title: 'تحليلات سريعة',
    description: 'مقاييس بسيطة لقياس تفاعل الأصدقاء والرسائل الأكثر شيوعًا.',
    icon: <FaBolt />,
  },
]

export const testimonials = [
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

export const faqItems = [
  {
    question: 'هل الرسائل فعلاً مجهولة؟',
    answer:
      'نعم — نحن لا نشارك الهوية إلا بموافقتك، ويمكن للمستخدم حظر الرسائل المسيئة.',
  },
  {
    question: 'كيف أحذف حسابي نهائيًا؟',
    answer: 'من إعدادات الملف اضغط "حذف الحساب"، ستُحذف البيانات بعد تأكيدك.',
  },
  {
    question: 'هل يمكنني استرجاع رسالة محذوفة؟',
    answer: 'لا — عند الحذف يتم إزالتها نهائيًا لأسباب تتعلق بالخصوصية.',
  },
]

export const socialLinks = [
  {
    name: 'تويتر',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
        <path
          d="M20 7.5c-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.4-1.8-.6.3-1.3.6-2 .8-.6-.6-1.5-1-2.4-1-1.8 0-3.2 1.7-2.8 3.4-2.3-.1-4.4-1.2-5.8-2.9-.8 1.4-.4 3.4 1 4.4-.5 0-1-.1-1.4-.4v.1c0 1.7 1.2 3.2 2.9 3.5-.4.1-.8.1-1.2.1-.3 0-.6 0-.9-.1.6 1.8 2.4 3.1 4.4 3.2-1.6 1.3-3.5 2-5.5 2-.4 0-.9 0-1.3-.1C6.7 21.4 8.6 22 10.7 22c6.4 0 9.9-5.4 9.9-10.1v-.5c.7-.5 1.3-1.1 1.7-1.8-.7.3-1.5.5-2.3.6z"
          fill="#1DA1F2"
        />
      </svg>
    ),
  },
  {
    name: 'إنستاجرام',
    href: '#',
    icon: (
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
    ),
  },
  {
    name: 'ايميل',
    href: '#',
    icon: (
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
    ),
  },
]

export const footerLinks = [
  { name: 'سياسة الخصوصية', href: '#' },
  { name: 'الشروط', href: '#' },
  { name: 'اتصل بنا', href: '#' },
]
