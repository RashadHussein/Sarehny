import { navIcons, navigation } from '../constants'
import MobileNavigation from './MobileNavigatin'

const Navigation = () => {
  return (
    <nav className="p-8 container mx-auto flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-2xl font-bold text-gray-800">LOGO</span>
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
          {navIcons.map(({ name, icon }) => (
            <li key={name}>
              <button
                className="text-xl font-semibold cursor-pointer hover:text-blue-700 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100"
                aria-label={name}
              >
                {icon}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation />
    </nav>
  )
}

export default Navigation
