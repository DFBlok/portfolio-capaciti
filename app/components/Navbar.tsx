"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react" // optional for hamburger icon

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/pages/about" },
  { name: "Projects", href: "/pages/projects" },
  { name: "Contact", href: "/pages/contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-b from-[#0f172a]/90 to-[#1e293b]/90 backdrop-blur-md shadow-lg transition-all duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 font-bold text-xl cursor-pointer">
          Duwayne Blok
        </span>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <Link key={link.name} href={link.href}>
              <span className={`relative px-3 py-1 cursor-pointer transition-all duration-200
                ${pathname === link.href ? "text-accent font-semibold" : "text-white hover:text-accent"}
              `}>
                {link.name}
                {/* Active/hover underline */}
                <span className={`absolute left-0 -bottom-1 h-1 bg-accent rounded-full transition-all duration-300
                  ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}
                `}></span>
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-accent focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a]/95 backdrop-blur-md flex flex-col gap-4 px-6 py-4 animate-slide-down">
          {links.map((link) => (
            <Link key={link.name} href={link.href}>
              <span
                onClick={() => setIsOpen(false)} // close menu on click
                className={`block px-3 py-2 cursor-pointer rounded transition-all duration-200
                  ${pathname === link.href ? "text-accent font-semibold bg-white/10" : "text-white hover:text-accent hover:bg-white/10"}
                `}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
