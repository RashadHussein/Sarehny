import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/auth/sign-in/page'
import SignUp from './pages/auth/sign-up/page'
import ConfirmEmail from './pages/auth/confirm-email'
import ContactUs from './pages/ContactUs'
import StartNow from './pages/StartNow'
import Navigation from './components/Navigation'
import Features from './components/Features'
import FAQ from './components/FAQ'
import Testimonials from './components/Testimonials'

const AppContent = () => {
  const location = useLocation()

  const authRoutes = ['/login', '/register', '/confirm-email']
  const shouldShowNavigation = !authRoutes.includes(location.pathname)

  return (
    <div className="min-h-screen bg-gray-100">
      {shouldShowNavigation && <Navigation />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/confirm-email" element={<ConfirmEmail />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/start-now" element={<StartNow />} />
        <Route path="/features" element={<Features />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/testemonials" element={<Testimonials />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  )
}

export default App
