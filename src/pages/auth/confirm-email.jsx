import { useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { authAPI } from '@/lib/api'
import { CheckCircle, AlertCircle, Loader2, KeyRound } from 'lucide-react'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'

const ConfirmEmail = () => {
  const [searchParams] = useSearchParams()
  const [status, setStatus] = useState('waiting')
  const [message, setMessage] = useState('')
  const [otpValue, setOtpValue] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)
  const email = searchParams.get('email')

  // useEffect(() => {
  //   if (token) {
  //     verifyEmail(token)
  //   }
  // }, [token])

  // const verifyEmail = async (verificationToken) => {
  //   setStatus('verifying')
  //   try {
  //     await authAPI.verifyEmail(verificationToken)
  //     setStatus('success')
  //     setMessage('تم التحقق من بريدك الالكتروني بنجاح!')
  //   } catch (error) {
  //     setStatus('error')
  //     setMessage(error.message || 'فشل في التحقق من البريد الالكتروني')
  //   }
  // }

  const verifyOtpCode = async (otp) => {
    if (!otp || otp.length !== 4) {
      setMessage('يرجى ادخال رمز التحقق المكون من 4 ارقام')
      return
    }

    setIsVerifying(true)
    try {
      await authAPI.verifyEmail(email, otp)
      setStatus('success')
      setMessage('تم التحقق من بريدك الالكتروني بنجاح!')
    } catch (error) {
      setMessage(error.message || 'رمز التحقق غير صحيح')
      setOtpValue('') // Clear OTP on error
    } finally {
      setIsVerifying(false)
    }
  }

  const resendEmail = async () => {
    setMessage('تم اعادة ارسال رمز التحقق الى بريدك الالكتروني')
    console.log('Resend verification email')
  }

  const handleOtpComplete = (value) => {
    setOtpValue(value)
    if (value.length === 4) {
      verifyOtpCode(value)
    }
  }

  const renderContent = () => {
    switch (status) {
      case 'verifying':
        return (
          <div className="text-center">
            <Loader2 className="h-16 w-16 text-purple-600 mx-auto mb-4 animate-spin" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              جاري التحقق...
            </h2>
            <p className="text-gray-600">
              يرجى الانتظار بينما نتحقق من بريدك الالكتروني
            </p>
          </div>
        )

      case 'success':
        return (
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              تم التحقق بنجاح!
            </h2>
            <p className="text-gray-600 mb-6">{message}</p>
            <Link to="/login">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
                تسجيل الدخول
              </Button>
            </Link>
          </div>
        )

      case 'error':
        return (
          <div className="text-center">
            <AlertCircle className="h-16 w-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              خطأ في التحقق
            </h2>
            <p className="text-gray-600 mb-6">{message}</p>
            <div className="space-y-3">
              <Button
                onClick={resendEmail}
                variant="outline"
                className="w-full border-purple-300 text-purple-600 hover:bg-purple-50"
              >
                اعادة ارسال رابط التحقق
              </Button>
              <Link to="/register" className="block">
                <Button variant="outline" className="w-full">
                  العودة للتسجيل
                </Button>
              </Link>
            </div>
          </div>
        )

      default:
        return (
          <div className="text-center">
            <KeyRound className="h-16 w-16 text-purple-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              ادخل رمز التحقق
            </h2>
            <p className="text-gray-600 mb-6">
              تم ارسال رمز التحقق المكون من 4 ارقام الى بريدك الالكتروني
            </p>

            {/* OTP Input */}
            <div className="mb-6 mx-auto" dir="ltr">
              <InputOTP
                maxLength={4}
                value={otpValue}
                onChange={setOtpValue}
                onComplete={handleOtpComplete}
                disabled={isVerifying}
              >
                <InputOTPGroup className="gap-2 mx-auto">
                  <InputOTPSlot
                    index={0}
                    className="w-12 h-12 text-lg font-semibold border-2 border-gray-300 focus:border-purple-500"
                  />
                  <InputOTPSlot
                    index={1}
                    className="w-12 h-12 text-lg font-semibold border-2 border-gray-300 focus:border-purple-500"
                  />
                  <InputOTPSlot
                    index={2}
                    className="w-12 h-12 text-lg font-semibold border-2 border-gray-300 focus:border-purple-500"
                  />
                  <InputOTPSlot
                    index={3}
                    className="w-12 h-12 text-lg font-semibold border-2 border-gray-300 focus:border-purple-500"
                  />
                </InputOTPGroup>
              </InputOTP>
            </div>

            {/* Loading or Error Message */}
            {message && (
              <div
                className={`mb-4 p-3 rounded-lg text-sm font-medium ${
                  message.includes('بنجاح') || message.includes('اعادة')
                    ? 'bg-green-100 text-green-700 border border-green-300'
                    : 'bg-red-100 text-red-700 border border-red-300'
                }`}
              >
                {message}
              </div>
            )}

            {/* Manual Verify Button */}
            {otpValue.length === 4 && !isVerifying && (
              <Button
                onClick={() => verifyOtpCode(otpValue)}
                className="w-full mb-4 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
              >
                {isVerifying ? 'جاري التحقق...' : 'تحقق من الرمز'}
              </Button>
            )}

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-yellow-800">
                اذا لم تجد الرسالة في صندوق الوارد، تحقق من مجلد الرسائل المزعجة
              </p>
            </div>

            <div className="space-y-3">
              <Button
                onClick={resendEmail}
                variant="outline"
                className="w-full border-purple-300 text-purple-600 hover:bg-purple-50"
              >
                اعادة ارسال رمز التحقق
              </Button>
              <Link to="/login" className="block">
                <Button variant="outline" className="w-full">
                  لديك حساب؟ تسجيل الدخول
                </Button>
              </Link>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-white">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
        {renderContent()}
      </div>
    </div>
  )
}

export default ConfirmEmail
