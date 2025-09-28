import { useAuth } from '@/contexts/AuthContext'
import { navIcons, navigation } from '../constants'
import MobileNavigation from './MobileNavigatin'
import { Button } from './ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const Navigation = () => {
  const { user, logout } = useAuth()
  console.log(user)
  const navigate = useNavigate()

  return (
    <nav className="p-8 bg-white container mx-auto flex justify-between items-center">
      {/* Logo */}

      <div className="block">
        {user ? (
          <div className="flex gap-1 items-center  cursor-pointer">
            <Avatar>
              <AvatarImage src={user.profileImage.secure_url} />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
            <p className="font-semibold text-lg">{user.name}</p>
          </div>
        ) : (
          <div className="flex items-center gap-2 ">
            <Button
              onClick={() => navigate('/login')}
              variant="outline"
              className="text-sm"
            >
              تسجيل الدخول{' '}
            </Button>
            <Button
              onClick={() => navigate('/register')}
              className="text-sm bg-gradient-to-br from-indigo-600 to-purple-500"
            >
              انشاء حساب{' '}
            </Button>
          </div>
        )}
      </div>

      {/* Desktop Navigation - Navigation Links */}
      <div className="hidden md:flex">
        <ul className="flex gap-8 items-center">
          {navigation.map(({ section, name }) => (
            <li key={section}>
              <a
                href={section}
                className="text-lg font-semibold cursor-pointer hover:text-blue-700 transition-colors duration-200"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Navigation - Action Icons */}
      <div className="hidden md:flex">
        <ul className="flex gap-6 items-center">
          {navIcons.map(({ name, icon, path }) => (
            <li key={name}>
              <Link to={path}>
                <button
                  className="text-xl font-semibold cursor-pointer hover:text-blue-700 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100"
                  aria-label={name}
                >
                  {icon}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation user={user} logOut={logout} />
    </nav>
  )
}

export default Navigation
