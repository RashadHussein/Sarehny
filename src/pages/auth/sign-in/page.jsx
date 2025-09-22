import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInSchema } from '@/lib/validation/auth'
import { authAPI, userAPI } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'

const SignIn = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data) => {
    setIsLoading(true)
    setSubmitMessage('')

    try {
      const response = await authAPI.signIn(data)

      setSubmitMessage('تم تسجيل الدخول بنجاح!')

      const { user } = await userAPI.getData(response.access_token)

      login(user, response.access_token)

      navigate('/')

      form.reset()
    } catch (error) {
      setSubmitMessage(
        error.message || 'خطأ في تسجيل الدخول. يرجى التحقق من بياناتك.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-white">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
        <h2 className="text-3xl font-bold text-purple-700 text-center mb-6">
          تسجيل الدخول
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

            {/* Forgot Password Link */}
            <div className="text-right">
              <Link
                to="/forget-password"
                className="text-sm text-purple-600 hover:underline font-medium"
              >
                نسيت كلمة المرور؟
              </Link>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-medium text-lg rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
            </Button>
          </form>
        </Form>

        <p className="text-center text-sm text-gray-500 mt-6">
          ليس لديك حساب؟{' '}
          <a
            href="/register"
            className="text-purple-600 hover:underline font-medium"
          >
            سجل الآن
          </a>
        </p>
      </div>
    </div>
  )
}
export default SignIn
