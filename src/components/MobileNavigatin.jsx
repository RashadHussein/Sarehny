import { useState } from 'react'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { navigation, navIcons } from '../constants'

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-gray-700 ">
            <Menu style={{ width: '25px', height: '25px' }} />
            <span className="sr-only">Toggle mobile menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px] sm:w-[350px]">
          <SheetHeader>
            <SheetTitle className="text-right hidden">mobile nav</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col space-y-6 mt-10">
            {/* Navigation Links */}
            <div className="space-y-6">
              {navigation.map(({ section, name }) => (
                <a
                  key={section}
                  href={section}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg p-3 font-semibold text-gray-800 hover:text-blue-700 transition-colors duration-200 text-right"
                >
                  {name}
                </a>
              ))}
            </div>

            {/* Divider */}
            <hr className="border-gray-200" />

            {/* Navigation Icons */}
            <div className="grid grid-cols-2 gap-4">
              {navIcons.map(({ name, icon }) => (
                <Button
                  key={name}
                  variant="outline"
                  className="flex items-center justify-center gap-2 h-12"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-lg">{icon}</span>
                </Button>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNavigation
