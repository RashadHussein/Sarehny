import { useState } from "react"
import { Button } from "./ui/button"

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Email:", email, "Password:", password)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-white">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
        {/* Title */}
        <h2 className="text-3xl font-bold text-purple-700 text-center mb-6">
          تسجيل الدخول
        </h2>

        {/* Hidden fake inputs to trick browser autofill */}
        <input
          type="text"
          name="fakeuser"
          autoComplete="username"
          style={{ display: "none" }}
        />
        <input
          type="password"
          name="fakepass"
          autoComplete="new-password"
          style={{ display: "none" }}
        />

        {/* Form */}
        <form autoComplete="off" onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="userEmail"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              البريد الإلكتروني
            </label>
            <input
              id="userEmail"
              name="userEmail"
              type="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none text-gray-700"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="userPass"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              كلمة المرور
            </label>
            <input
              id="userPass"
              name="userPass"
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none text-gray-700"
              required
            />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-medium py-2 rounded-lg transition"
          >
            تسجيل الدخول
          </Button>
        </form>

        {/* Extra Links */}
        <p className="text-center text-sm text-gray-500 mt-6">
          ليس لديك حساب؟{" "}
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

export default LoginForm
