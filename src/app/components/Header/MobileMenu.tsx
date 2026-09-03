'use client'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { LightbulbIcon, LightbulbOffIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useTheme } from '../../context/ThemeContext'

const MobileMenu = () => {
  // Controls whether the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false)

  // Access the current theme and the toggle function from context
  const { theme, toggleTheme } = useTheme()

  // Toggles the menu open/closed
  const toggle = () => setIsOpen((prev) => !prev)

  // Navigation items displayed inside the mobile menu
  const menuItems = [
    { label: 'Welcome', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Posts', href: '/posts' },
    { label: 'Connect', href: '/connect' },
    { label: 'Profile', href: '/profile' },
  ]

  return (
    <div className="relative md:hidden">
      {/* Menu toggle button (hamburger or close icon) */}
      <button
        className="cursor-pointer rounded-lg p-2 transition-colors hover:bg-gray-100 hover:text-cyan-500 dark:hover:bg-gray-800"
        onClick={toggle}
        aria-label="Toggle mobile menu"
      >
        {isOpen ? (
          <XMarkIcon className="h-8 w-7" /> // Close icon when menu is open
        ) : (
          <Bars3Icon className="h-8 w-7" /> // Hamburger icon when menu is closed
        )}
      </button>

      {/* Mobile menu container */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900">
          <div className="flex flex-col items-start space-y-1 p-4">
            {/* Navigation links */}
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={toggle} // Close menu after clicking a link
                className="w-full px-4 py-2 text-left text-lg font-bold transition-colors hover:text-cyan-500"
                style={{
                  // Add subtle text shadow in dark mode for readability
                  textShadow: theme === 'dark' ? '2px 2px 0 black' : 'none',
                }}
              >
                {item.label}
              </Link>
            ))}

            {/* Divider before theme switch */}
            <hr className="border-0.1 w-full text-gray-400 dark:text-gray-500" />

            {/* Theme toggle button */}
            <button
              className="flex w-full cursor-pointer items-center px-4 py-2 text-lg font-bold transition-colors hover:text-cyan-500"
              style={{
                textShadow: theme === 'dark' ? '2px 2px 0 black' : 'none',
              }}
              onClick={toggleTheme}
            >
              {theme === 'dark' ? (
                <>
                  Light
                  <LightbulbIcon className="ml-2 h-5 w-5" />
                </>
              ) : (
                <>
                  Dark
                  <LightbulbOffIcon className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileMenu
