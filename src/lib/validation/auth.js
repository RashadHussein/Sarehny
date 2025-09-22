import { z } from 'zod'

export const signInSchema = z.object({
  email: z
    .string()
    .email('البريد الإلكتروني غير صحيح')
    .min(1, 'البريد الإلكتروني مطلوب'),

  password: z.string().min(1, 'كلمة المرور مطلوبة'),
})

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(2, 'الاسم يجب أن يكون أكثر من حرفين')
      .max(50, 'الاسم يجب أن يكون أقل من 50 حرف'),

    email: z
      .string()
      .email('البريد الإلكتروني غير صحيح')
      .min(1, 'البريد الإلكتروني مطلوب'),

    password: z
      .string()
      .min(8, 'كلمة المرور يجب أن تكون 8 أحرف على الأقل')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        'كلمة المرور يجب أن تحتوي على حرف كبير وصغير ورقم'
      ),

    cPassword: z.string().min(1, 'تأكيد كلمة المرور مطلوب'),

    age: z
      .string()
      .transform((val) => parseInt(val))
      .refine(
        (val) => val >= 13 && val <= 120,
        'العمر يجب أن يكون بين 13 و 120 سنة'
      ),

    phone: z
      .string()
      .min(11, 'رقم الهاتف يجب أن يكون 11 رقم على الأقل')
      .regex(/^01[0-2,5]{1}[0-9]{8}$/, 'رقم الهاتف غير صحيح'),

    gender: z.enum(['male', 'female'], {
      required_error: 'الجنس مطلوب',
      invalid_type_error: 'اختر الجنس',
    }),

    image: z
      .any()
      .optional()
      .refine((file) => {
        if (!file) return true
        const validTypes = [
          'image/jpeg',
          'image/jpg',
          'image/png',
          'image/webp',
        ]
        return validTypes.includes(file.type)
      }, 'نوع الصورة غير صحيح (jpeg, jpg, png, webp فقط)')
      .refine((file) => {
        if (!file) return true
        return file.size <= 5 * 1024 * 1024 // 5MB
      }, 'حجم الصورة يجب أن يكون أقل من 5 ميجابايت'),
  })
  .refine((data) => data.password === data.cPassword, {
    message: 'كلمات المرور غير متطابقة',
    path: ['cPassword'],
  })
