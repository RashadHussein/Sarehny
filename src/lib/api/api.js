import apiClient from './client'

export const authAPI = {
  // Sign up user
  signUp: async (userData) => {
    try {
      const formData = new FormData()

      // Append all form fields to FormData
      Object.keys(userData).forEach((key) => {
        if (key === 'image' && userData[key]) {
          // Handle file upload
          formData.append(key, userData[key])
        } else if (
          key !== 'image' &&
          userData[key] !== undefined &&
          userData[key] !== ''
        ) {
          formData.append(key, userData[key])
        }
      })

      const response = await apiClient.post('/users/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      return response.data
    } catch (error) {
      throw new Error(error.response?.data?.message || 'خطأ في إنشاء الحساب')
    }
  },

  // Sign in user
  signIn: async (credentials) => {
    try {
      const response = await apiClient.post('/users/signin', credentials)
      return response.data
    } catch (error) {
      throw new Error(error.response?.data?.message || 'خطأ في تسجيل الدخول')
    }
  },

  // Forgot password
  forgotPassword: async (email) => {
    try {
      const response = await apiClient.post('/users/forgot-password', { email })
      return response.data
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 'خطأ في إرسال رابط استعادة كلمة المرور'
      )
    }
  },

  // Reset password
  resetPassword: async (token, newPassword) => {
    try {
      const response = await apiClient.post('/users/reset-password', {
        token,
        newPassword,
      })
      return response.data
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 'خطأ في إعادة تعيين كلمة المرور'
      )
    }
  },

  // Verify email with OTP
  verifyEmail: async (email, otp) => {
    try {
      const response = await apiClient.patch('/users/confirm-email', {
        email,
        otp,
      })
      return response.data
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 'خطأ في التحقق من البريد الإلكتروني'
      )
    }
  },
}

export const userAPI = {
  getData: async (token) => {
    try {
      const response = await apiClient.get('/users/getUserData', {
        headers: token
          ? {
              Authorization: `bearer ${token}`,
            }
          : undefined,
      })
      return response.data
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 'خطأ في جلب بيانات المستخدم'
      )
    }
  },
}
