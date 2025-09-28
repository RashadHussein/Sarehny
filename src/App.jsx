import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/auth/sign-in/page'
import SignUp from './pages/auth/sign-up/page'
import ConfirmEmail from './pages/auth/confirm-email'
import ContactUs from './pages/ContactUs'
import StartNow from './pages/StartNow'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/confirm-email" element={<ConfirmEmail />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/start-now" element={<StartNow />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
