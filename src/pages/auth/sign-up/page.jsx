import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpSchema } from '@/lib/validation/auth'
import { authAPI } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import ImageUpload from '@/components/ui/image-upload'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      cPassword: '',
      age: '',
      phone: '',
      gender: '',
      image: undefined,
    },
  })

  const onSubmit = async (data) => {
    setIsLoading(true)
    setSubmitMessage('')

    try {
      const submitData = {
        name: data.name,
        email: data.email,
        password: data.password,
        cPassword: data.cPassword,
        age: data.age.toString(),
        phone: data.phone,
        gender: data.gender,
      }

      if (data.image) {
        submitData.image = data.image
      }

      const response = await authAPI.signUp(submitData)

      navigate(
        `/confirm-email?email=${encodeURIComponent(response.user.email)}`
      )
      setSubmitMessage(
        'تم إنشاء الحساب بنجاح! يرجى التحقق من بريدك الإلكتروني.'
      )

      form.reset()
    } catch (error) {
      console.error('Signup error:', error)
      setSubmitMessage(
        error.message || 'حدث خطأ أثناء إنشاء الحساب. يرجى المحاولة مرة أخرى.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-white py-8">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
        <h2 className="text-3xl font-bold text-purple-700 text-center mb-6">
          إنشاء حساب جديد
        </h2>

        {/* Success/Error Message */}
        {submitMessage && (
          <div
            className={`mb-6 p-4 rounded-lg text-center text-sm font-medium ${
              submitMessage.includes('بنجاح')
                ? 'bg-green-100 text-green-700 border border-green-300'
                : 'bg-red-100 text-red-700 border border-red-300'
            }`}
          >
            {submitMessage}
          </div>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">
                      الاسم
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="أدخل اسمك الكامل"
                        className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">
                      البريد الإلكتروني
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="example@email.com"
                        className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">
                      كلمة المرور
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Confirm Password */}
              <FormField
                control={form.control}
                name="cPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">
                      تأكيد كلمة المرور
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Age */}
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">
                      العمر
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="أدخل عمرك"
                        className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">
                      رقم الهاتف
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="01012345678"
                        className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Gender */}
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">
                    الجنس
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500">
                        <SelectValue placeholder="اختر الجنس" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">ذكر</SelectItem>
                      <SelectItem value="female">أنثى</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Image */}
            <FormField
              control={form.control}
              name="image"
              render={({ field: { onChange, value } }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">
                    الصورة الشخصية (اختياري)
                  </FormLabel>
                  <FormControl>
                    <ImageUpload
                      value={value}
                      onChange={onChange}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-medium text-lg rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'جاري إنشاء الحساب...' : 'إنشاء الحساب'}
            </Button>
          </form>
        </Form>

        <p className="text-center text-sm text-gray-500 mt-6">
          لديك حساب بالفعل؟{' '}
          <a
            href="/login"
            className="text-purple-600 hover:underline font-medium"
          >
            تسجيل الدخول
          </a>
        </p>
      </div>
    </div>
  )
}

export default SignUp
